module.exports = function() {
    const conf = JSON.parse($.fs.readFileSync('./data/conf.json', 'utf8'))
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(conf.libsJs)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./public/static/js/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(conf.libsJs)
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
