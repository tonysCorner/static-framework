/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise('/app/home');

        project.routes.forEach(function (e) {
            if (e.resolve) {
                e.resolve = helper.resolveFor.apply(undefined, e.resolve);
            }

            if (e.templateUrl) {
                e.templateUrl = helper.basepath(e.templateUrl)
            }
            $stateProvider.state(e.name, e);
        });


        //设置菜单路由
        helper.setMenuRoutes($stateProvider);
    } // routesConfig


})();

