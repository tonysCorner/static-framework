(function () {
    'use strict';

    var interceptor = angular
        .module('app.interceptor', []);
    interceptor.factory('requestInterceptor', ['$rootScope', function ($rootScope) {
        /**
         * 公用api日志
         * @param  api      请求地址
         * @param  data     请求api返回参数
         * @param  status   0: error, 1: success
         * @param  msg      错误信息,可选
         * */
        function apiLog(api, data, status, msg) {
            if (SelfConfig.domain.mode === 'production') {
                return;
            }
            if (status === 0) {
                console.error('调用API: ' + api);
                data ? console.error(data) : '';
                msg ? console.error(msg) : '';
                console.error('调用API结束--');
            } else {
                console.log('调用API: ' + api);
                console.log(data);
                console.log('调用API结束--');
            }
        }

        var reg = new RegExp('^(<script).*>', 'i');
        return {
            request: function (config) {
                config.withCredentials = true;
                config.timeout = SelfConfig.domain.timeout;
                if (SelfConfig.domain.version && /app.views/.test(config.url)) {
                    if (/\?/.test(config.url)) {
                        config.url += '&v=' + SelfConfig.domain.version;
                    } else {
                        config.url += '?v=' + SelfConfig.domain.version;
                    }
                }
                return config;
            },
            response: function (response) {
                if (response && response.data) {
                    reg.test(response.data) && (response.data = JSON.parse(response.data.replace(reg, '')));
                    docCookies.resolveCode(response.data.code, response.config.url, response.data.msg);
                    if (response.data.code === 0 || response.data.code === 3207) {
                        apiLog(response.config.url, response.data.data, 1, '');
                    } else if (response.data.code) {
                        apiLog(response.config.url, response.data.data, 0, response.data.msg || '');
                    }
                }
                return response;
            }, responseError: function (res) {
                swal('错误', '服务器异常!', "error");
                apiLog(res.config && res.config.url || '', res, 0, '服务器异常!');
                console.error(res);
                $rootScope.load && $rootScope.load(false);
            }
        };
    }]);

    interceptor.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('requestInterceptor');
        $httpProvider.defaults.transformRequest = function (data) {
            if (data) {
                return $.param(data);
            }
        };
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }]);
})();
