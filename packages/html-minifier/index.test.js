import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import test from "node:test";

const run = promisify(execFile);
const cli = fileURLToPath(new URL("./index.js", import.meta.url));

test("minifies nested HTML before writing, preserving UTF-8 text", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "kpw-minifier-"));
  try {
    const source = path.join(directory, "source");
    const destination = path.join(directory, "output");
    await mkdir(path.join(source, "nested"), { recursive: true });
    const html =
      "<!-- remove -->\n<html><body>\n  <p>かめぱわぁ～るど</p>\n</body></html>";
    await writeFile(path.join(source, "index.html"), html);
    await writeFile(path.join(source, "nested", "page.html"), html);
    await run(process.execPath, [
      cli,
      "--src",
      `${source.replaceAll("\\", "/")}/**/*.html`,
      "--dest",
      destination,
    ]);
    for (const file of ["index.html", "nested/page.html"]) {
      assert.equal(
        await readFile(path.join(destination, file), "utf8"),
        "<html><body><p>かめぱわぁ～るど</p></body></html>",
      );
    }
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("reports invalid input as a failed process", async () => {
  await assert.rejects(run(process.execPath, [cli]), /src/);
});
