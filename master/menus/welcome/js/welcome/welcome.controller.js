/**=========================================================
 * Module: welcome.js
 * Handle welcome collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.welcome')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$rootScope', '$scope', '$stateParams','ngDialog'];
    function WelcomeController($rootScope, $scope, $stateParams, ngDialog) {
            //console.log($stateParams.token)
            //ngDialog.open({
            //    template: 'homePageTemplate',
            //    className: 'ngdialog-theme-default'
            //});


    }

})();