'use strict';

var gulp = require('gulp'),
  gulpUtil = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),
  del = require('del'),
  webpack = require('webpack'),
  webpackConfig = require("./webpack.config.js"),
  webpackDevServer = require("webpack-dev-server"),
  swPrecache = require('sw-precache');

/**
 * Webpack for production bundle
 **/
gulp.task("webpack:build", function(callback) {
	var myConfig = Object.create(webpackConfig);

  webpack(myConfig, function(err, stats) {
		if(err) throw new gulpUtil.PluginError("webpack:build", err);
		gulpUtil.log("[webpack:build]", stats.toString({
			colors: true
		}));

    var rootDir = './dist/';

    swPrecache.write(`${rootDir}/service-worker.js`, {
      staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
      stripPrefix: rootDir
    }, callback);
	});
});

/**
 * Basic file copy
 **/
gulp.task('copy:basic', function () {
    return gulp.src(['./lib/**']).pipe(gulp.dest('dist/js/'));
});
gulp.task('copy:img', function () {
    return gulp.src(['./img/**']).pipe(gulp.dest('dist/img/'));
});
gulp.task('copy:html', function () {
    return gulp.src(['./*.html']).pipe(gulp.dest('dist/'));
});
gulp.task('copy', ['copy:basic', 'copy:img', 'copy:html']);

/**
 * Clean directory
 **/
gulp.task('clean', function() {
  return del('dist');
});

/**
 * Build scripts
 **/
gulp.task('build-swprecache', gulpSequence('clean', 'copy', 'webpack:build'));
gulp.task('default', ['build-swprecache']);
