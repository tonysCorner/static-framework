'use strict';
var args = require('yargs').argv;
var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var del = require('del');
var replace = require('gulp-replace');
var fs = require('fs');
var connect = require('gulp-connect');
var openResource = require('open');
var version = require('./version.js');

var gulpsync = $.sync(gulp);
var reload = browserSync.reload;
var config = ['dev', 'production', 'test'];
var mode = config.indexOf(args.mode) >= 0 && args.mode || config[0];
var isProduction = config.indexOf(mode) === 1;
var isCompression = config.indexOf(mode) !== 0;
var useCache = args.useCache;
var useSourceMaps = args.useSourceMaps;
var currentVersion = null;

function getVersion() {
    if (currentVersion) {
        return currentVersion;
    }
    return currentVersion = isProduction && version || new Date().getTime();
}

var paths = {
    app: '../app/',
    login: '../login/',
    vendor: '../vendor',
    templates: 'jade/',
    menus: 'menus/',
    views: 'views/',
    styles: 'css/',
    scripts: 'js/',
    themes: 'less/',
    clean: ['../app/{js,css,views,pages}/*', '../{index,login}.html', '!../app/*/*.png']
};

var project = {
    login: {src: paths.login + 'login.js', dest: paths.app + paths.scripts},
    index: {src: paths.templates + '*.jade', dest: '../'},
    base: {
        src: require('./vendor.base.json'),
        scripts: {file: 'base.js', dest: paths.app + paths.scripts},
        styles: {file: 'base.css', dest: paths.app + paths.styles}
    },
    app: {
        scripts: {
            src: [paths.scripts + 'app.module.js',
                paths.scripts + 'modules/**/*.module.js',
                paths.scripts + 'modules/**/*.js',
                'menus/**/js/**/*.module.js',
                'menus/**/js/**/*.js'
            ],
            file: 'app.js',
            dest: paths.app + paths.scripts
        },
        views: {src: getViewsSrc(), dest: paths.app, cache: paths.app + paths.scripts},
        styles: {
            src: [paths.themes + '*.*', paths.themes + 'themes/*'],
            dest: paths.app + paths.styles,
            rtl: paths.themes + '*.*'
        }
    },
    vendor: {src: require('./vendor.json'), dest: paths.vendor}
};

var prettifyOpts = {
    indent_char: ' ',
    indent_size: 3,
    unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'pre', 'code']
};

var vendorUglifyOpts = {
    mangle: {
        except: ['$super'] // rickshaw requires this
    }
};

var tplCacheOptions = {
    root: 'app',
    filename: 'templates.js',
    //standalone: true,
    module: 'app.core',
    base: function (file) {
        return file.path.split('jade')[1];
    }
};

var injectOptions = {
    name: 'templates',
    transform: function (filepath) {
        return 'script(src=\'' +
            filepath.substr(filepath.indexOf('app')) +
            '\')';
    }
};

var tplscript = function () {
    return gulp.src(project.app.views.cache + tplCacheOptions.filename, {
        read: false
    });
};

var cssnanoOpts = {
    safe: true,
    discardUnused: false, // no remove @font-face
    reduceIdents: false // no change on @keyframes names
};

function done() {
    writeVersion();
    log('************');
    log('Build success!');
    log('************');
}

// Error handler
function handleError(err) {
    log(err.toString());
    this.emit('end');
}

// log to console using
function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

function getViewsSrc() {
    var src = [paths.templates + '**/*.jade', '!' + paths.templates + '*.jade'];
    var files = fs.readdirSync(paths.menus, 'utf-8');
    log(files);
    if (files && files.length) {
        files.forEach(function (e) {
            src.push(paths.menus + e + '/jade/**/*.jade');
        });
    }
    return src;
}

function clean() {
    log('Cleaning: ' + paths.clean);
    return del(paths.clean, {
        force: true
    });
}

function scriptsApp() {
    log('build app.js');
    return gulp.src(project.app.scripts.src)
        .pipe($.concat(project.app.scripts.file))
        .pipe($.if(isCompression, uglify()))
        .pipe(gulp.dest(project.app.scripts.dest));
}

function buildLogin() {
    log('build login.js');
    return gulp.src(project.login.src)
        .pipe($.concat("login.js"))
        .pipe($.if(isCompression, uglify()))
        .pipe(gulp.dest(project.login.dest));
}

function buildVendor() {
    log('build vendor ');
    var jsFilter = $.filter('**/*.js', {
        restore: true
    });
    var cssFilter = $.filter('**/*.css', {
        restore: true
    });
    return gulp.src(project.vendor.src, {
        base: 'bower_components'
    })
        .pipe($.expectFile(project.vendor.src))
        .pipe(jsFilter)
        .pipe($.if(isCompression, $.uglify(vendorUglifyOpts)))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.if(isCompression, $.cssnano(cssnanoOpts)))
        .pipe(cssFilter.restore)
        .pipe(gulp.dest(project.vendor.dest));
}

function viewsApp() {
    log('build views');
    project.app.views.src = getViewsSrc();
    if (useCache) {
        return gulp.src(project.app.views.src)
            .pipe($.jade())
            .on('error', handleError)
            .pipe($.angularTemplatecache(tplCacheOptions))
            .pipe($.if(isCompression, $.uglify({
                preserveComments: 'some'
            })))
            .pipe(gulp.dest(project.app.views.cache))
            .pipe(reload({
                stream: true
            }));
    } else {
        return gulp.src(project.app.views.src)
            .pipe($.if(!isCompression, $.changed(project.app.views.dest, {
                extension: '.html'
            })))
            .pipe($.jade())
            .on('error', handleError)
            .pipe($.htmlPrettify(prettifyOpts))
            .pipe(gulp.dest(project.app.views.dest))
            .pipe(reload({
                stream: true
            }));
    }
}

function stylesApp() {
    log('build app styles..');
    return gulp.src(project.app.styles.src)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe($.less())
        .on('error', handleError)
        .pipe($.if(isCompression, $.cssnano(cssnanoOpts)))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(project.app.styles.dest))
        .pipe(reload({
            stream: true
        }));
}

function stylesRtl() {
    log('build app-rtl styles..');
    return gulp.src(project.app.styles.rtl)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe($.less())
        .on('error', handleError)
        .pipe($.rtlcss()) /* RTL Magic ! */
        .pipe($.if(isCompression, $.cssnano(cssnanoOpts)))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe($.rename(function (path) {
            path.basename += "-rtl";
            return path;
        }))
        .pipe(gulp.dest(project.app.styles.dest))
        .pipe(reload({
            stream: true
        }));
}

function buildIndex() {
    log('build index..');
    return gulp.src(project.index.src)
        .pipe($.if(useCache, $.inject(tplscript(), injectOptions)))// inject the templates.js into index
        .pipe(replace(/--version/g, getVersion()))
        .pipe(replace(/--mode/g, mode))
        .pipe($.jade())
        .on('error', handleError)
        .pipe($.htmlPrettify(prettifyOpts))
        .pipe(gulp.dest(project.index.dest))
        .pipe(reload({
            stream: true
        }));
}

function buildBase() {
    log('build base ');
    var jsFilter = $.filter(['**/*.js', '../*/*.js'], {
        restore: true
    });
    var cssFilter = $.filter('**/*.css', {
        restore: true
    });

    return gulp.src(project.base.src)
        .pipe($.expectFile(project.base.src))
        .pipe(jsFilter)
        .pipe(replace(/--version/g, getVersion()))
        .pipe(replace(/--mode/g, mode))
        .pipe($.concat(project.base.scripts.file))
        .pipe($.if(isCompression, $.uglify()))
        .pipe(gulp.dest(project.base.scripts.dest))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.concat(project.base.styles.file))
        .pipe($.if(isCompression, $.cssnano(cssnanoOpts)))
        .pipe(gulp.dest(project.base.styles.dest))
        .pipe(cssFilter.restore)
        .pipe(reload({
            stream: true
        }));
}

function writeVersion() {
    var version = {code: 0, data: {version: getVersion()}};
    fs.writeFileSync(paths.app + paths.scripts + 'version.json', JSON.stringify(version));
}

function watch() {
    log('Watching source files..');

    gulp.watch(project.app.scripts.src, ['scripts:app', 'build:index']);
    gulp.watch(project.login.src, ['build:login', 'build:index']);
    gulp.watch(project.app.views.src, ['views:app', 'build:base']);
    gulp.watch(project.app.styles.src, ['styles:app', 'styles:rtl', 'build:index']);
    gulp.watch(project.base.src, ['build:base', 'build:index']);
    gulp.watch(project.index.src, ['build:index']);
}

function start() {
    log('open explore....');
    connect.server({
        root: '../',
        port: 9000,
        host: 'lxj.api.dev.1234ye.com',
        livereload: false
    });
    openResource('http://lxj.api.dev.1234ye.com:9000');
}

gulp.task('clean', clean);
gulp.task('watch', watch);

gulp.task('scripts:app', scriptsApp);
gulp.task('build:login', buildLogin);
gulp.task('views:app', viewsApp);
gulp.task('styles:app', stylesApp);
gulp.task('styles:rtl', stylesRtl);
gulp.task('build:index', buildIndex);
gulp.task('build:base', buildBase);
gulp.task('build:vendor', buildVendor);
gulp.task('compile', [
    'build:vendor',
    'build:login',
    'scripts:app',
    'styles:app',
    'styles:rtl',
    'views:app',
    'build:index',
    'build:base'
]);

gulp.task('build', gulpsync.sync(['clean', 'compile']), done);
gulp.task('default', gulpsync.sync(['clean', 'compile', 'watch']), start);