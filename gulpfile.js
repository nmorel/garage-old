const gulp = require('gulp');
const gutil = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const del = require('del');
const webpack = require('webpack');

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('clean', () => del(['./dist']));

gulp.task('build', ['webpack'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl: 'https://${GH_TOKEN}@github.com/nmorel/test-react',
    }));
});

gulp.task('webpack', (callback) => {
  const options = require('./webpack')({
    publicPath: '/test-react/',
  });
  options.plugins.push(new webpack.optimize.UglifyJsPlugin());

  // run webpack
  webpack(options, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      // output options
    }));
    callback();
  });
});
