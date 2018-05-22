        const gulp = require('gulp');
        const gulpimagemin = require('gulp-imagemin');
        const clean = require('gulp-clean');
        const concat = require('gulp-concat');
        const cleanCSS = require('gulp-clean-css');
        const htmlReplace = require('gulp-html-replace');
        const prettify = require('gulp-jsbeautifier');

        gulp.task('default', ['copy'], function() {
            gulp.start('prettify', 'build-img', 'merge-css', 'html-replace');

        });

        gulp.task('prettify', function() {
            gulp.src(['./*.css', './*.html', './*.js'])
                .pipe(prettify())
                .pipe(gulp.dest('dist'));
        });

        gulp.task('copy', function() {
            gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/images/**/*')
                .pipe(gulp.dest('dist'));
        });

        gulp.task('clean', function() {
            return gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto')
                .pipe(clean());
        });

        gulp.task('build-img', function() {
            gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/images/**/*')
                .pipe(gulpimagemin())
                .pipe(gulp.dest('dist'));
        });

        gulp.task('merge-css', function() {
            gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/css/**/*.css')
                .pipe(concat('formulario.css'))
                .pipe(gulp.dest('dist'));
        });

        gulp.task('html-replace', function() {
            gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/**/*.html')
                .pipe(htmlReplace({
                    css: 'css/formulario.css'
                }))
                .pipe(gulp.dest('dist'));
        });

        gulp.task('merge-css', function() {
            gulp.src(['C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/css/formulario.css'])
                .pipe(concat('formulario.css'))
                .pipe(cleanCSS())
                .pipe(gulp.dest('dist'));
        });