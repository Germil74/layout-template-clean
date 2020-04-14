module.exports = function () {
    $.gulp.task('watch', function () {
        // $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
       /* $.gulp.watch([
            './src/template/!**!/!*.{hbs,js}',
            './src/static/scss/!**!/!*.scss',
            './src/static/img/svg/!*.svg',
            './src/static/js/!**!/!*.js',
            './src/static/img/general/!**!/!*.{png,jpg,gif}',
            './src/static/img/content/!**!/!*.{png,jpg,gif}'
        ],
            $.gulp.series(
                'clean',
                $.gulp.parallel(
                    'hbs', 'scss:dev', 'svg', 'libsJS:dev', 'js:copy','img:dev'
                )
            )

        )*/

        $.gulp.watch('./src/template/**/*.{hbs,js}', $.gulp.series('hbs'));
        $.gulp.watch('./src/static/scss/**/*.scss', $.gulp.series('scss:dev'));
        $.gulp.watch('./src/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./src/static/img/general/**/*.{png,jpg,gif}',
            './src/static/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });

};
