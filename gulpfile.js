var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
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
