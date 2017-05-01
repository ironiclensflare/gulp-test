"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var condense = require('gulp-css-condense');

var scriptSources = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/*.js'
];

var cssSources = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'src/css/*.css'
];

gulp.task('clean', function () {
    gulp.src('dist')
        .pipe(clean());
});

gulp.task('js', function () {
    gulp.src(scriptSources)
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
    gulp.src(cssSources)
        .pipe(concat('style.css'))
        .pipe(condense())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['js', 'css']);
