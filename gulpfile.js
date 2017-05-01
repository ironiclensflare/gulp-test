"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function(){
    gulp.src('dist', {read:false})
        .pipe(clean());
});

gulp.task('copy', function(){
    return gulp.src('src/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy']);

gulp.task('default', ['build']);