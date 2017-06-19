/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state'];
    function LoginFormController($http, $state) {
        var vm = this;
        activate();

        ////////////////

        function activate() {
            // bind here all data from the form
            vm.account = {};
            // place the message if something goes wrong
            vm.authMsg = '';

            vm.login = function() {
                vm.authMsg = '';

                if(vm.loginForm.$valid) {
                    var url = '/api/login.xhtml',
                    data = {
                        email: vm.account.email,
                        password: vm.account.password
                    },
                    transFn = function(data) {
                        return $.param(data);
                    },
                    postCfg = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                        transformRequest: transFn
                    };

                    $http
                        .post(url, data, postCfg)
                        .then(function(response) {
                    // assumes if ok, response is an object with some data, if not, a string with error
                    // customize according to your api
                    var res = response.data;
                    if ( res.ret.code != 0 ) {
                        vm.authMsg = '用户名或密码不正确!';
                    } else {
                        var token = res.data;
                        $state.go('app.welcome',{'token': token});
                    }
                    }, function() {
                        vm.authMsg = '服务器异常!';
                    });
                } else {
                    // set as dirty if the user click directly to login so we show the validation messages
                    /*jshint -W106*/
                    vm.loginForm.account_email.$dirty = true;
                    vm.loginForm.account_password.$dirty = true;
                }
            };
        }
    }
})();
