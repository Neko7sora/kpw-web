const { src, dest } = require("gulp");
const { minify } = require("html-minifier-terser");
const yargs = require("yargs");

const argv = yargs
  .option("src", {
    alias: "s",
    describe: "HTML file path to be compressed",
    type: "string",
    demandOption: true,
  })
  .option("dest", {
    alias: "d",
    describe: "Output directory for the compressed HTML file",
    type: "string",
    demandOption: true,
  }).argv;

const options = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

function html(srcGlob, destPath) {
  return src(srcGlob)
    .on("data", async function (file) {
      console.log(file.path);
      const buferFile = Buffer.from(
        await minify(await file.contents.toString(), options)
      );
      return (file.contents = buferFile);
    })
    .pipe(dest(destPath));
}

html(argv.src, argv.dest);
