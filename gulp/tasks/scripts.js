module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./public/static/js/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./public/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./src/static/js/*.js',
                           '!./src/static/js/libs.min.js'])
            .pipe($.gulp.dest('./public/static/js/'))
            .on('end', $.browserSync.reload);
    });
};
