/**
 * Created by liuzifeng on 2016/4/18.
 */
(function () {
    'use strict';
    //angular.baseUrl = "http://sso.dev.api.1234ye.com:8082/api-sso";
    angular.module('login', []);
})();

(function () {
    'use strict';

    angular.module('login').service('LoginService', LoginService);

    LoginService.$inject = ['$http', '$q'];
    function LoginService($http, $q) {
        function login(username, password, captcha, callbacks) {

            $q.defer();
            //var url = SelfConfig.domain.sso + '/sso/login.json',
            var url = SelfConfig.domain.localAPI + '/login.json',
                data = {
                    username: username,
                    password: password,
                    captcha: captcha
                },
                transFn = function (data) {
                    return $.param(data);
                },
                postCfg = {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                    transformRequest: transFn,
                    withCredentials: true
                };

            $http.get(url, data, postCfg, callbacks).then(callbacks, function () {
                console.log('服务器异常!');
            });
        }

        return {login: login};
    }
})();
(function () {
    'use strict';

    angular.module('login').controller('LoginController', LoginController);
    LoginController.$inject = ['$scope', 'LoginService', '$timeout', '$window'];
    function LoginController($scope, LoginService, $timeout, $window) {
        $scope.login = {
            name: '量子',
            description: '',
            year: ((new Date()).getFullYear()),
            layout: {
                isFixed: true,
                isCollapsed: false,
                isBoxed: false,
                isRTL: false,
                horizontal: false,
                isFloat: false,
                asideHover: false,
                theme: 'app/css/theme-me.css',
                asideScrollbar: false
            },
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };

        var captchatpUrl = SelfConfig.domain.sso + '/sso/captcha.html';
        $scope.loginForm = {
            username: "", password: "", captcha: ""
        };
        $scope.authMsg = null;
        $scope.login = login;
        $scope.captchatp = captchatpUrl;
        $scope.v = 0;
        $scope.refreshCaptcha = refreshCaptcha;
        $scope.remember = !!$window.localStorage['remember'];
        if ($scope.remember) {
            $scope.username = $window.localStorage['username'];
            $scope.password = $window.localStorage['password'];
        }

        function login() {
            if (!$scope.loginForm.$valid) {
                $scope.loginForm.username.$dirty = true;
                $scope.loginForm.password.$dirty = true;
                $scope.loginForm.captcha.$dirty = true;
                return;
            }
            if ($scope.loginForm.remember.$viewValue) {
                $window.localStorage['remember'] = true;
                $window.localStorage['username'] = $scope.username;
                $window.localStorage['password'] = $scope.password;
            } else {
                $window.localStorage['remember'] = "";
                $window.localStorage['username'] = "";
                $window.localStorage['password'] = "";
            }
            var username = $scope.loginForm.username.$modelValue;
            var password = $scope.loginForm.password.$modelValue;
            var captcha = $scope.loginForm.captcha.$modelValue;
            LoginService.login(username, password, captcha, function (res) {
                var code;
                var msg;
                if (res && res.data) {
                    code = res.data.code;
                    msg = res.data.msg;
                }
                docCookies.resolveCode(code, '/sso/login.json');
                if (code == 0 || code == 5003) {
                    console.log("login success");
                    if (res.data.data != 0 && res.data.data != '') {
                        window.location.href = 'http://' + window.location.host + "/index.html?page=" + res.data.data;
                    } else {
                        window.location.href = 'http://' + window.location.host + "/index.html";
                    }
                } else {
                    $scope.authMsg = msg;
                    $timeout(function () {
                        $scope.authMsg = null;
                    }, 1000);
                }
            });
        }

        function refreshCaptcha() {
            $scope.v++;
            $scope.captchatp = captchatpUrl + "?v=" + $scope.v;
        }
    }
})();

