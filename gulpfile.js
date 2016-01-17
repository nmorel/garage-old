const gulp = require('gulp');
const gutil = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const del = require('del');
const webpack = require('webpack');
const minimist = require('minimist');

const buildOptions = minimist(process.argv.slice(2), {
  default: {
    publicPath: '/'
  }
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('clean', () => del(['./dist']));

gulp.task('build', ['webpack', 'static', 'staticData']);

gulp.task('publish', ['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl: 'https://${GH_TOKEN}@github.com/nmorel/garage',
    }));
});

gulp.task('webpack', (callback) => {
  console.log(buildOptions.publicPath);
  const options = require('./webpack')({
    publicPath: buildOptions.publicPath,
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

gulp.task('static', () => {
  return gulp.src(['./CNAME', './google*.html'])
  .pipe(gulp.dest('./dist/'));
});

gulp.task('staticData', () => {
  return gulp.src(['./src/data/**/*.jpg','./src/data/**/*.png'])
  .pipe(gulp.dest('./dist/data/'));
});
