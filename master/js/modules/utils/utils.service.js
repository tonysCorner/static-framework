/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY', '$http', '$q', '$rootScope'];
    function Utils($window, APP_MEDIAQUERY, $http, $q, $rootScope) {

        var $html = angular.element('html'),
            $win = angular.element($window),
            $body = angular.element('body');

        var support = {
            transition: (function () {
                var transitionEnd = (function () {

                    var element = document.body || document.documentElement,
                        transEndEventNames = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        }, name;

                    for (name in transEndEventNames) {
                        if (element.style[name] !== undefined) return transEndEventNames[name];
                    }
                }());

                return transitionEnd && {end: transitionEnd};
            })(),
            animation: (function () {

                var animationEnd = (function () {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && {end: animationEnd};
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
        };
        var isInView = function (element, options) {
            /*jshint -W106*/
            var $element = $(element);

            if (!$element.is(':visible')) {
                return false;
            }

            var window_left = $win.scrollLeft(),
                window_top = $win.scrollTop(),
                offset = $element.offset(),
                left = offset.left,
                top = offset.top;

            options = $.extend({topoffset: 0, leftoffset: 0}, options);

            if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
            } else {
                return false;
            }
        };
        var langdirection = $html.attr('dir') === 'rtl' ? 'right' : 'left';
        var isTouch = function () {
            return $html.hasClass('touch');
        };
        var isSidebarCollapsed = function () {
            return $body.hasClass('aside-collapsed');
        };
        var isSidebarToggled = function () {
            return $body.hasClass('aside-toggled');
        };
        var isMobile = function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
        };

        /**
         * 公用get请求
         * @param  api      请求地址
         * @param  params   请求参数，加在地址上
         * @param  success  成功回调方法
         * */
        var getApiInfo = function (api, params, success) {
            $rootScope.load && $rootScope.load(true);
            $http.get(api, {
                params: params
            }).success(function (res) {
                $rootScope.load && $rootScope.load(false);
                if (res && res.code == 0) {
                    success && success(res.data);
                }
            }).error(function () {
                $rootScope.load && $rootScope.load(false);
            });
        };

        /**
         * 公用post请求
         * @param  api      请求地址
         * @param  data     请求参数
         * @param  callback 回调方法
         * */
        var postApiInfo = function (api, data, callback) {
            $rootScope.load && $rootScope.load(true);
            $http.post(api, data).success(function (res) {
                $rootScope.load && $rootScope.load(false);
                if (res && res.code == 0) {
                    callback && callback(res.data);
                }
            }).error(function () {
                $rootScope.load && $rootScope.load(false);
            });
        };

        /**
         *
         * @param api   请求地址
         * @param data  请求参数
         * @returns {Promise}
         */
        var postApiPromise = function (api, data) {
            var defer = $q.defer();
            $rootScope.load && $rootScope.load(true);
            $http.post(api, data).then(function (res) {
                $rootScope.load && $rootScope.load(false);
                if (res && res.data && res.data.code == 0) {
                    defer.resolve(res.data.data);
                } else {
                    defer.reject(res && res.data || res);
                }
            }, function (res) {
                $rootScope.load && $rootScope.load(false);
                defer.reject(res);
            });
            return defer.promise;
        };

        /**
         *
         * @param api   请求地址
         * @param data  请求参数
         * @returns {Promise}
         */
        var getApiPromise = function (api, params) {
            var defer = $q.defer();
            $rootScope.load && $rootScope.load(true);
            $http.get(api, {
                params: params
            }).then(function (res) {
                $rootScope.load && $rootScope.load(false);
                if (res && res.data && res.data.code == 0) {
                    defer.resolve(res.data.data);
                } else {
                    defer.reject(res && res.data || res);
                }
            }, function (res) {
                $rootScope.load && $rootScope.load(false);
                defer.reject(res);
            });
            return defer.promise;
        };


        var getTimer = function (countTimer) {
            countTimer = parseInt(countTimer) + 1;
            var hour = parseInt(countTimer / 3600);
            var minute = parseInt((countTimer % 3600) / 60);
            var second = (countTimer % 3600) % 60;

            var mtime = (hour < 10) ? "0" + hour : "" + hour;
            mtime += ":";
            mtime += (minute < 10) ? "0" + minute : "" + minute;
            mtime += ":";
            mtime += (second < 10) ? "0" + second : "" + second;
            return mtime;
        };

        var dataObjDeepCopy = function (p, c) {
            var c = c || {};
            for (var i in p) {
                if (!p.hasOwnProperty(i)) {
                    continue;
                }

                if (p[i] && typeof p[i] === 'object') {
                    c[i] = (p[i].constructor === Array) ? [] : {};
                    dataObjDeepCopy(p[i], c[i]);
                } else {
                    c[i] = p[i];
                }
            }
            return c;
        };
        var dataArraySum = function (array) {
            var re = 0;
            for (var i = array.length; i--;) {
                if (!isNaN(array[i])) {
                    re += array[i];
                }
            }
            return re;
        };
        var dataFilterCityInsurance = function (arr, str) {
            var re = '';
            for (var i = arr.length; i--;) {
                if (arr[i].status && arr[i][str]) {
                    re += arr[i][str] + ',';
                }
            }
            return re.substr(0, re.length - 1);
        };
        var addNewObj = function (array, obj) {
            var flag = true;
            for (var i = array.length; i--;) {
                if (array[i].option.title.text === obj.option.title.text) {
                    array[i] = obj;
                    flag = false;
                    break;
                }
            }
            if (flag) {
                array.push(obj);
            }
        };

        return {
            // DETECTION
            support: support,
            // UTILITIES
            isInView: isInView,
            langdirection: langdirection,
            isTouch: isTouch,
            isSidebarCollapsed: isSidebarCollapsed,
            isSidebarToggled: isSidebarToggled,
            isMobile: isMobile,
            getApiInfo: getApiInfo,
            postApiInfo: postApiInfo,
            postApiPromise: postApiPromise,
            getApiPromise: getApiPromise,
            getTimer: getTimer,
            dataObjDeepCopy: dataObjDeepCopy,
            dataArraySum: dataArraySum,
            dataFilterCityInsurance: dataFilterCityInsurance,
            addNewObj: addNewObj
        };
    }
})();
