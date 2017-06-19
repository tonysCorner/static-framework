(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$rootScope', '$scope', 'Utils', 'SweetAlert', 'TelephoneService', 'ngDialog', '$window'];
    function UserBlockController($rootScope, $scope, Utils, SweetAlert, phoneSrv, ngDialog, $window) {

        activate();

        ////////////////

        function activate() {
            var restUrl = SelfConfig.domain.sso + "/operator/resetSelfPwd.html";
            /*var logoutUrl = SelfConfig.domain.sso + "/sso/logout.json";
            var sysUrl = SelfConfig.domain.sso + "/system/listOpSystem.json";
            var userUrl = SelfConfig.domain.sso + "/operator/getSimpleOperator.json";*/

            var logoutUrl = SelfConfig.domain.localAPI + "/logout.json";
            var sysUrl = SelfConfig.domain.localAPI + "/listOpSystem.json";
            var userUrl = SelfConfig.domain.localAPI + "/getSimpleOperator.json";

            Utils.getApiPromise(sysUrl).then(function (data) {
                $rootScope.sys = data.filter(function (e) {
                    return e.staticDomain;
                });
            });

            Utils.getApiPromise(userUrl).then(function (data) {
                $rootScope.user.name = data.username;
            });

            $rootScope.user = {
                job: '鸛狸猿',
                picture: 'app/img/user/09.jpg'
            };


            // Hides/show user avatar on sidebar
            $rootScope.toggleUserBlock = function () {
                $rootScope.$broadcast('toggleUserBlock');
            };

            // Hides/show user avatar on sidebar
            $rootScope.openPwd = function () {
                ngDialog.open({
                    template: 'resetPwdDialog',
                    className: 'ngdialog-theme-default',
                    scope: $rootScope
                });
            };

            // Hides/show user avatar on sidebar
            $rootScope.resetSelfPwd = function (resetPwdForm, closeThisDialog, pwd) {
                if (!resetPwdForm.$valid || resetPwdForm.resetPwd1.$modelValue != resetPwdForm.resetPwd2.$modelValue) {
                    resetPwdForm.resetPwd1.$dirty = true;
                    resetPwdForm.resetPwd2.$dirty = true;
                    return;
                }
                closeThisDialog();
                Utils.postApiPromise(restUrl, {passwordNew: pwd}).then(function () {
                    SweetAlert.success("修改密码成功，请重新登录！");
                    $rootScope.logout(true);
                });
            };

            $rootScope.logout = function (isEdit) {
                //如果callcenter登入,退出callcenter
                if ($rootScope.isShowCCbtn) {
                    phoneSrv.logout(function () {
                        console.log('呼叫中心退出成功!');
                    });
                }

                //清除sessionStorage和localstorage
                clearStorage();

                Utils.getApiPromise(logoutUrl).then(function () {
                        !isEdit && SweetAlert.success("退出登录成功！");
                        setTimeout("window.location.href = 'http://' + window.location.host + '/login.html'", 1000);
                    }
                );
            };

            $rootScope.userBlockVisible = true;

            var detach = $rootScope.$on('toggleUserBlock', function (/*event, args*/) {

                $rootScope.userBlockVisible = !$rootScope.userBlockVisible;

            });

            $scope.$on('$destroy', detach);

            //callCenter
            $rootScope.btn = {
                isBusy: false,
                isFree: true
            };

            $rootScope.evIsBusy = function (isTrue) {
                if (!isTrue) {
                    $rootScope.btn = {
                        isBusy: true,
                        isFree: false
                    };
                } else {
                    $rootScope.btn = {
                        isBusy: false,
                        isFree: true
                    };
                }
            };

        }

        function clearStorage() {
            $window.sessionStorage.clear();
        }
    }
})();
