"use strict";

const gulp = require('gulp')
    , connect = require('gulp-connect');

gulp.task('server', () => {
  connect.server({
    root: './',
    fallback: './index.html',
    port: 3000
  });
});

gulp.task('default', ['server']);
