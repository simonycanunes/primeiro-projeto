        const gulp = require('gulp');
        const gulpimagemin = require('gulp-imagemin');
        const clean = require('gulp-clean');
        const concat = require('gulp-concat');


    gulp.task('default', function() {
       gulp.task('copy', function() {
        gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/images/**/*')
        .pipe(gulp.dest('dist') );
        });

        gulp.task('clean', function() {
        return gulp.src('dist')
        . pipe(clean() );
        });

        gulp.task( 'build-img' , function() { gulp.src('C:/Users/SimonyNunes/Desktop/HIPERMIDIA/primeiro-projeto/images/**/*')
        .pipe(gulpimagemin() )
        .pipe(gulp.dest('dist/imagens') );
        });

        gulp.task('merge-css', function() {
        gulp.src('dist/css/**/*.css')
        .pipe(concat('formulario.css') )
        .pipe(gulp.dest('dist/css') );
        });
        
        gulp.task( 'html-replace' , function () {
            gulp.src( 'dist/**/*.html' )
                .pipe( htmlReplace({css: 'css/formulario.css' }) )
                .pipe(gulp.dest( 'dist' ) );
});

    
});


   