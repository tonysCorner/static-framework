/**
 * Created by liushihong on 2016/5/11.
 */
(function () {
    'use strict';
    angular.module("app.plugins")
        .directive("flow", flow)
        .controller("flowController", flowController);
    function flow() {
        return {
            restrict: "E",
            templateUrl: "/app/views/flow.html",
            controller: flowController,
            scope: {
                processInstanceId: '@'
            }
        }
    }

    flowController.$inject = ['$scope', '$location'];
    function flowController($scope, $location) {
        //流程事件
        $scope.policyStatus = DICTIONARY.policyStatusKv;
        var processInstanceId = $location.search()['processInstanceId'];
        if (!processInstanceId) {
            processInstanceId = $scope.processInstanceId;
        }
        var module = {
            activities: SelfConfig.domain.workFlow + '/task/activities.html'
        };

        $scope.searchUrl = module.activities;
        $scope.$on('dataList', function (event, data) {
            $scope.names = data;
        });
        $scope.searchParams = {processInstanceId: processInstanceId}
    }
})();
