var gulp = require('gulp')
, concat = require('gulp-concat')
, uglify = require('gulp-uglify')
, sass = require('gulp-sass')
, image = require('gulp-image')
, rename = require('gulp-rename')
, jsArray = [
      'js/io/jquery-3.1.1.js'
    , 'js/io/default.js'
    , 'js/io/vue.min.js'
    , 'js/out/*.js'
    , 'js/themes/*.js'
]
, imgArray = [
      'img/*'
    , 'img/**/*'
    , 'img/**/**/*'
    , 'img/**/**/**/*'
]
;
gulp.task('css', ['cssdev'], function () {
    return gulp.src(['scss/*.scss', 'scss/**/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('../assets/css'));
})
gulp.task('cssdev', function () {
    return gulp.src(['scss/*.scss', 'scss/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('../assets/css'));
})
.task('jsdev', function(){
    return gulp.src(jsArray)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('../assets/js'))
})
.task('js', ['jsdev'], function(){
    return gulp.src(jsArray)
        .pipe(concat('all.min.js'))
        .pipe(uglify({
            preserveComments: false
        }))
        .pipe(gulp.dest('../assets/js'))
})
.task('img', function () {
    gulp.src(imgArray)
    .pipe(image({
        pngquant: true,
        optipng: true,
        zopflipng: false,
        jpegRecompress: true,
        jpegoptim: true,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 7
    }))
    .pipe(gulp.dest('../assets/img'));
})
.task('imgdev', function () {
    gulp.src(imgArray)
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: false,
        jpegRecompress: true,
        jpegoptim: false,
        mozjpeg: false,
        gifsicle: false,
        svgo: false,
        concurrent: 0
    }))
    .pipe(gulp.dest('../assets/img'));
})
.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch(jsArray, ['jsdev']);
    gulp.watch(imgArray, ['imgdev']);
})
.task('default', ['watch']);