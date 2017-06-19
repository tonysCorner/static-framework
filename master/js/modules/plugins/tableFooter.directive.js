(function () {
    'use strict';

    angular
        .module('app.plugins')
        .directive('pagination', pagination)
        .controller('tableFooterController', tableFooterController);

    function pagination() {
        return {
            templateUrl: 'app/views/table_footer.html',
            restrict: 'EA',
            replace: true,
            controller: tableFooterController
        };
    }

    /**
     * 使用分页指令，必须在父controller，定义并初始化三个变量 $scope.searchUrl、$scope.searchParams、$scope.dataList
     * $scope.searchUrl为uri，如果是http请求，默认使用post方法，需要全路径，如果是本地json，写相对路径；
     * $scope.searchParams为查询参数，参数不需要加入分页信息；
     * $scope.dataList为后台response返回的list。
     * $scope.refresh 监控refresh变量，为true自动刷新页面
     * 指令监控$scope.searchParams.pageNum参数做查询
     * */

    tableFooterController.$inject = ['$scope', 'Utils'];
    function tableFooterController($scope, Utils) {
        $scope.page = {};
        var sortParam = {};
        var beanList = [];

        function getPageList() {
            if (!$scope.page.pageNum || !$scope.page.totalSize) {
                return null;
            }
            var pList = [];
            //从当前页-2开始，当前页+2结束
            var start = $scope.page.pageNum - 2;
            var end = $scope.page.pageNum + 2;
            start <= 0 && (start = 1);
            //一共需要五个页码，从第一页开始，结束减去开始再加一就是已经有的页码
            end += 5 - (end - start + 1);
            end > $scope.page.totalPageCount && (end = $scope.page.totalPageCount);
            //一共需要五个页码，从第一页开始，结束减去开始再加一就是已经有的页码
            start -= 5 - (end - start + 1);
            start <= 0 && (start = 1);

            for (var i = start; i <= end; i++) {
                pList.push({i: i, isCurrentPage: i === $scope.page.pageNum});
            }
            return pList;
        }

        //查询数据
        $scope.search = function (url, params) {
            $scope.url = url;
            $scope.params = params;
            $scope.load(1);
        };

        $scope.$watch("searchParams", function () {
            if (!$scope.searchParams || !$scope.searchUrl) {
                return;
            }
            $scope.search($scope.searchUrl, $scope.searchParams);
        });

        $scope.$watch("refresh", function () {
            if ($scope.refresh) {
                $scope.load();
                recursiveProperty($scope);
            }
        });

        $scope.$watch("sortParam", function () {
            if ($scope.sortParam) {
                sortParam = $scope.sortParam;
                if (sortParam.localSort) {
                    sortData();
                } else {
                    $scope.load();
                }
            }
        });


        function sortData() {
            if (beanList.length) {
                beanList.sort(function (a, b) {
                    if (a[sortParam.sortCode] === b[sortParam.sortCode]) {
                        return 0;
                    } else if (sortParam.sortOrd === "ASC" && a[sortParam.sortCode] > b[sortParam.sortCode]) {
                        return 1;
                    } else if (sortParam.sortOrd === "DESC" && a[sortParam.sortCode] < b[sortParam.sortCode]) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            }
        }

        function recursiveProperty(sc) {
            if (!sc) {
                return;
            }
            sc.hasOwnProperty('refresh') && (sc.refresh = false);
            return sc.hasOwnProperty('$parent') ? recursiveProperty(sc.$parent) : false;
        }

        //分页加载数据数据
        $scope.load = function (pageNum) {
            console.log(pageNum);
            $scope.page.pageNum = Number(pageNum) || $scope.page.pageNum;
            var url = $scope.url;
            $scope.params.pageNum = $scope.page.pageNum;
            if (sortParam.localSort) {
                $scope.params.sortCode = undefined;
                $scope.params.sortOrd = undefined;
            } else {
                $scope.params.sortCode = sortParam.sortCode;
                $scope.params.sortOrd = sortParam.sortOrd;
            }
            //$http.post(url, data).success(success).error(error);
            Utils.getApiPromise(url, $scope.params).then(function (response) {
                if (response) {
                    if (response.beanList) {
                        beanList = response.beanList;
                        sortParam.localSort && sortData();
                        $scope.$emit('dataList', beanList);
                    }
                    if (response.pageBean) {
                        $scope.page = response.pageBean;
                        $scope.pageList = getPageList();
                        $scope.isFirst = $scope.page.pageNum > 1;
                        $scope.isLast = $scope.page.pageNum < $scope.page.totalPageCount;
                    }
                }
            });
        };
    }
})();


