var gulp = require('gulp'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
header = require('gulp-header'),
uglify = require('gulp-uglify'),
plumber = require('gulp-plumber'),
clean = require('gulp-clean'),
rename = require('gulp-rename'),
runSequence = require('run-sequence'),
package = require('./package.json');

var paths = {
	output:'dist',
	scripts:[
		'src/lazy.js'	
	]
}

var banner = [
	'/*!',
	'<%= package.name %> ',
	'v<%= package.version %> | ',
	'(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
	' <%= package.homepage %>',
	 ' */',
	   '\n'
].join('');

gulp.task('scripts',['clean'],function(){
	return gulp.src(paths.scripts)
				.pipe(header(banner, { package : package }))
				.pipe(gulp.dest('dist/'))
				.pipe(rename({ suffix: '.min' }))
				.pipe(uglify())
				.pipe(header(banner, { package : package }))
				.pipe(gulp.dest('dist/'));
});

gulp.task('clean',function(){
	return gulp.src(paths.output,{read:false})
			.pipe(clean());
});

gulp.task('lint',function(){
	return gulp.src(paths.scripts)
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default',function(cb){
	runSequence('clean', ['lint','scripts'], cb);

});

