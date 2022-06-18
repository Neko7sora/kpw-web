const { src, dest } = require('gulp');
const htmlMinify = require('html-minifier');

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
    .on('data', function (file) {
      console.log(file.path);
      const buferFile = Buffer.from(
        htmlMinify.minify(file.contents.toString(), options)
      );
      return (file.contents = buferFile);
    })
    .pipe(dest('public'));
}
html();
