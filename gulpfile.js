'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

var paths = {
    sass: ['./app/styles/custom-checkbox.scss']
};


gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(livereload());
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);