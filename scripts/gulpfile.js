const del = require('del');
const gulp = require('gulp');
const path = require('path');
const ts = require('gulp-typescript');

const tsConfig = require('../tsconfig.json');

const paths = {
  lib: path.resolve(__dirname, '..', 'lib'),
  src: path.resolve(__dirname, '..', 'src'),
};

gulp.task('clean', () => {
  // buildLog('clean', 'target: %s', paths.lib);

  return del([
    `${paths.lib}/**/*`,
  ]);
});

gulp.task('tsc', () => {
  // buildLog('tsc', 'config: %j, src: %s', tsConfig.compilerOptions, paths.src);

  return gulp.src([`${paths.src}/**/*.{ts,tsx}`])
    .pipe(ts(tsConfig.compilerOptions))
    .pipe(gulp.dest(paths.lib));
});

gulp.task('build', gulp.series('clean', 'tsc'));

module.exports = gulp;
