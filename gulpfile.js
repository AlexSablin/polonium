var gulp           = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		jade         = require('gulp-jade'),
	 	del          = require('del'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs');

gulp.task('browser-sync', ['styles', 'scripts', 'jade'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
		
});

gulp.task('styles', function () {
	return gulp.src('sass/**/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions', '>1%'], cascade: false}))
	//.pipe(minifycss())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('clean', function(){
    return del.sync('dist');
});

gulp.task('jade', function() {
	return gulp.src('jade/**/*.jade')
	.pipe(jade({pretty:true}))
	.pipe(gulp.dest('app'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/plugins-scroll/plugins-scroll.js',
		'./app/libs/tcons/tcons.min.js',
		'./app/libs/slick-carousel/slick/slick.min.js',
		'./app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'./app/libs/bgparallax/jquery.parallax.js',
		])
		.pipe(concat('libs.js'))
		//.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['styles']);
	gulp.watch('sass/**/*.css', ['styles']);
	gulp.watch('app/libs/**/*.scss', ['styles']);
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('jade/**/*.jade', ['jade']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/**/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('build', ['clean','jade', 'styles', 'scripts'], function(){
    
   var buildCss = gulp.src('app/css/**/*')
   .pipe(gulp.dest('dist/css'));
    
   var buildFonts = gulp.src('app/fonts/**/*')
   .pipe(gulp.dest('dist/fonts'));
	
	var buildImgs = gulp.src('app/img/**/*')
   .pipe(gulp.dest('dist/img'));
    
   var buildJs = gulp.src('app/Js/**/*')
   .pipe(gulp.dest('dist/Js'));
	
	var buildLibs = gulp.src('app/libs/**/*')
   .pipe(gulp.dest('dist/libs'));
    
   var buildHtml = gulp.src('app/*.html')
   .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browser-sync', 'watch']);
