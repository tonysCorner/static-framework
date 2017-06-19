(function () {
    'use strict';

    angular
        .module('app.plugins')
        .directive('tableSort', tableSort)
        .controller('tableSortController', tableSortController);

    function tableSort() {
        return {
            template: '<th ng-click="sort()" class="{{sortClass}}">{{title}}</th>',
            replace: true,
            restrict: 'A',
            scope: {
                sortCode: "@",
                title: "@",
                localSort: "="
            },
            controller: tableSortController
        };
    }

    /**
     * 排序指令
     * 接收三个参数
     * sortCode:排序字段
     * sortOrd:排序方式
     * localSort:本地排序
     * */

    tableSortController.$inject = ['$scope'];
    function tableSortController($scope) {
        $scope.sortOrd = null;
        $scope.sortClass = "sorting";
        $scope.sort = function () {
            if ($scope.sortOrd === "ASC") {
                $scope.sortOrd = "DESC";
                $scope.sortClass = "sorting_desc";
            } else if ($scope.sortOrd === "DESC") {
                $scope.sortOrd = "ASC";
                $scope.sortClass = "sorting_asc";
            } else {
                $scope.sortOrd = "ASC";
                $scope.sortClass = "sorting_asc";
            }
            $scope.$parent.sortParam = {
                sortCode: $scope.sortCode,
                sortOrd: $scope.sortOrd,
                localSort: $scope.localSort
            };
        };
    }
})();


