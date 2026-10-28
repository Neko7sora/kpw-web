import gulp from "gulp";
import { minify } from "html-minifier-terser";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const argv = yargs(hideBin(process.argv))
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
  })
  .parseSync();

const options = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

await pipeline(
  gulp.src(argv.src, { encoding: false }),
  new Transform({
    objectMode: true,
    transform(file, encoding, callback) {
      minify(file.contents.toString(), options).then((result) => {
        file.contents = Buffer.from(result);
        callback(null, file);
      }, callback);
    },
  }),
  gulp.dest(argv.dest),
);
