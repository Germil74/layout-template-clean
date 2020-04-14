module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/static/fonts/**/*.*')
            .pipe($.gulp.dest('./public/static/fonts/'));
    });
};
