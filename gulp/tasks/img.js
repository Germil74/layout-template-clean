module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./public/static/img/'))
         //   .on('end', $.browserSync.reload);
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest('./public/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./src/static/img/general/*.svg')
            .pipe($.gulp.dest('./public/static/img/general/'))
          //  .on('end', $.browserSync.reload);
    });
};
