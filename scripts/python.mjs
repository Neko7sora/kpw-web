import { existsSync } from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const environment = path.join(root, ".venv");
const executable = path.join(
  environment,
  process.platform === "win32" ? "Scripts/python.exe" : "bin/python",
);
const args = process.argv.slice(2);
const setup = args[0] === "--setup";
if (setup) args.shift();

if (!existsSync(executable) && setup) {
  const candidates =
    process.platform === "win32"
      ? [["py", "-3"], ["python"], ["python3"]]
      : [["python3"], ["python"]];
  const python = candidates.find(([command, ...prefix]) => {
    const result = spawnSync(
      command,
      [...prefix, "-c", "import sys; sys.exit(sys.version_info < (3, 12))"],
      { stdio: "ignore", timeout: 10_000 },
    );
    return result.status === 0;
  });
  if (!python) {
    console.error("Python 3.12 or newer is required to create .venv.");
    process.exit(1);
  }
  const [command, ...prefix] = python;
  const result = spawnSync(command, [...prefix, "-m", "venv", environment], {
    stdio: "inherit",
  });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (!existsSync(executable)) {
  console.error(
    "Python environment is missing. Run npm run install:next first.",
  );
  process.exit(1);
}

// Invoke the interpreter directly so activation and PATH changes are unnecessary.
const child = spawn(executable, args, { stdio: "inherit" });
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 130 : 1);
});
