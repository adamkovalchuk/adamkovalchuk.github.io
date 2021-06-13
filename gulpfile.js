var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat')
var minifyCSS = require('gulp-minify-css');
var path = require('path')
var CWD = process.cwd()

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});
   
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'))