(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        $scope.page = "/app/views/welcome.html";
        if (angular.firstPage) {
            var route = project.routes.find(function (e) {
                return e.name == angular.firstPage.module;
            });
            var menu = angular.Init.menu.find(function (e) {
                return e.sref == angular.firstPage.module;
            });
            if (route) {
                $scope.page = route.templateUrl;
            }
            if (menu) {
                $scope.page = "/app/views/" + menu.sref.split(".")[1] + ".html";
            }
        }
    }
})();