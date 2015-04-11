var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');
var plumber   = require('gulp-plumber');
var pleeease  = require('gulp-pleeease');
var jade      = require('gulp-jade');

// sass
gulp.task('sass', function () {
  return sass('src/sass/')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(plumber())
    .pipe(pleeease({
      autoprefixer: { browsers: ['last 2 versions'] }
    }))
    .pipe(gulp.dest('public/assets/css'));
});

// jade
gulp.task('jade', function () {
  gulp.src('src/jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('public/'));
});

// watch
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/jade/**/*.jade', ['jade']);
});