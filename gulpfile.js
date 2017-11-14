var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  gulp.src('template/assets/scss/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('template/assets/css'));
});

gulp.task('default', function() {
  gulp.watch( 'template/assets/scss/**/*.scss', ['sass'] );
});
