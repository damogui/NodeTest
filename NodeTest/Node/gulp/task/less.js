//var gulp=require('gulp');
//var less=require('gulp-less');
//var cssmin = require('gulp-minify-css');
//var rev = require('gulp-rev');
//var revFormat = require('gulp-rev-format');
//var handleErrors = require('../util/handleErrors');
//var LessAutoprefix = require('less-plugin-autoprefix');
//var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
//var config=require('../config').less;
//gulp.task('less',function(){
//	return gulp.src(config.src)
//	.pipe(less({ plugins: [autoprefix] }))
//	.on('error', handleErrors)
//	.pipe(gulp.dest(config.dest))
//});
//gulp.task('minless',function(){
//	return gulp.src(config.src)
//	.pipe(less({ plugins: [autoprefix] })).pipe(cssmin())
//	.on('error', handleErrors)
//	.pipe(gulp.dest(config.dest))
//        .pipe(rev())
//         //.pipe(revFormat({
//         //    prefix: '.',
//         //    suffix: '.cache',
//         //    lastExt: false
//         //}))
//		.pipe(gulp.dest(config.dest))
//		.pipe(rev.manifest('css-rev.json'))
//		.pipe(gulp.dest(config.rev));
//});