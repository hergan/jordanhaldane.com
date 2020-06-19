"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var cssnano = require("cssnano");
var sassGlob = require("gulp-sass-glob");
var del = require("del");
var browserSync = require("browser-sync");

sass.compiler = require("node-sass");

const server = browserSync.create();

var paths = {
    app: {
        src: "./",
        dest: "./"
    },
    appIndex: {
        src: "./*.html",
        watch: "./*/*.html",
        dest: "./index.html"
    },
    styles: {
        src: "./scss/**/style.scss",
        watch: "./scss/**/*.scss",
        dest: "./css/"
    },
    scripts: {
        src: "./src/scripts/**/*.js",
        dest: "./assets/scripts/"
    }
};

const clean = () => del(["paths.app.src" + "assets/"]);

function styles(cb) {
    var plugins = [cssnano()];
    return gulp
        .src(paths.styles.src)
        .pipe(sassGlob())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(paths.styles.dest));
    cb();
}

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: paths.app.src
        }
    });
    done();
}

function build(done) {
    cssnano({ autoprefixer: false });
    done();
}

const cssWatch = () => gulp.watch([paths.styles.watch, paths.appIndex.src, paths.appIndex.watch], gulp.series(styles, reload));

const dev = gulp.series(clean, styles, serve, cssWatch);

exports.styles = styles;
exports.build = build;
exports.reload = reload;
exports.clean = clean;
exports.default = dev;