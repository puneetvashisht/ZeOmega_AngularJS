var gulp = require('gulp');
var concat = require('gulp-concat')

gulp.task('firstTask', function(){
    console.log('running first task...');
})

gulp.task('copyHtml', function(){
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
  });

gulp.task('default', ['firstTask', 'scripts', 'copyHtml'], function(){
    console.log('Default task running...')
})