const { src, dest } = require('gulp');
const { minify } = require('html-minifier-terser');

const options = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

function html() {
  return src('public/**/**.html')
    .on('data', async function (file) {
      console.log(file.path);
      const buferFile = Buffer.from(
        await minify(await file.contents.toString(), options)
      );
      return (file.contents = buferFile);
    })
    .pipe(dest('public'));
}
html();
