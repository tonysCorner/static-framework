(function () {
    'use strict';
    angular.module('app.plugins')
        .directive('treeView', treeView)
        .controller('treeViewCtr', treeViewCtr);

    /**
     * 树结构treeView使用说明:
     * 指令属性  treeData     json      树形结构json
     * 指令属性  canChecked   Boolean   是否允许checkbox
     * 指令属性  saveChecked  Function  保存页面选中的checkbox值，方法需要接收一个数组
     * 指令属性  textField    String    显示的属性
     * 指令属性  valueField   String    取值的属性，会赋值到checkbox，点击保存按钮后会去页面选中的checkbox，回调saveChecked
     * 指令属性  parentId     String    父节点Id的属性，用于选中父节点的checkbox
     * 指令属性  treeId       String    整个树的id，用于取值
     * 指令属性  title        String    标题
     * */
    function treeView() {
        return {
            restrict: 'E',
            templateUrl: '/app/views/treeView.html',
            scope: {
                treeData: '=',
                canChecked: '=',
                saveChecked: '=',
                textField: '@',
                valueField: '@',
                parentId: '@',
                treeId: '@',
                itemClicked: '&',
                itemCheckedChanged: '&',
                itemTemplateUrl: '@',
                title: '@'
            },
            controller: treeViewCtr
        }
    }

    treeViewCtr.$inject = ["$scope"];
    function treeViewCtr($scope) {
        $scope.currentItem = null;
        console.log($scope.treeId);

        $scope.itemExpended = function (item, $event) {
            $scope.currentItem = item;
            item.$$isExpend = !item.$$isExpend;
            $event.stopPropagation();
        };

        $scope.getItemIcon = function (item) {
            var isLeaf = $scope.isLeaf(item);

            if (isLeaf) {
                return 'fa fa-leaf';
            }

            return item.$$isExpend ? 'fa fa-minus' : 'fa fa-plus';
        };

        $scope.isLeaf = function (item) {
            return !item.descendants || !item.descendants.length;
        };

        $scope.warpCallback = function (item) {
            $scope.selectChildren(item, item.checked);
            $scope.selectParent(item);
        };


        $scope.selectChildren = function (item, checked) {
            item.checked = checked;
            item.$$isExpend = true;
            if (!$scope.isLeaf(item)) {
                item.descendants.forEach(function (i) {
                    $scope.selectChildren(i, checked);
                });
            }
        };

        $scope.selectParent = function (item) {
            if (item[$scope.parentId]) {
                var parent = SelfUtil.getTreeNode($scope.treeData, $scope.valueField, item[$scope.parentId]);
                parent.checked = parent.descendants.some(function (i) {
                    return i.checked;
                });
                if (parent[$scope.parentId]) {
                    $scope.selectParent(parent);
                }
            }
        };


        $scope.getSelect = function (treeView) {
            var nodeArray = [];
            treeView.find(":checked").each(function (i, v) {
                nodeArray.push(v.id);
            });
            return nodeArray;
        };

        $scope.save = function ($event) {
            var treeView = $("#" + $scope.treeId);
            if (!treeView) {
                treeView = $($event.target).closest("tree-view");
            }
            $scope.saveChecked($scope.getSelect(treeView));
            $scope.$parent.closeThisDialog('Cancel');
        };


        // $scope.$parent.addMenu = function () {
        //     $scope.dialogTitle = '新增菜单';
        //     ngDialog.open({
        //         template: 'addMenu',
        //         className: 'ngdialog-theme-default',
        //         controller: 'treeViewInfoCtr',
        //         scope: $scope
        //     });
        // };
        //
        // /**
        //  * 若当前节点不为根节点，从父节点的子数组里删除当前节点;
        //  * 若当前节点为根节点，直接置为空.
        //  * **/
        // $scope.$parent.deleteMenu = function () {
        //     var parentMenu;
        //     if ($scope.currentItem.parentNodeId) {
        //         parentMenu = SelfUtil.getTreeNode($scope.treeData, 'nodeId', $scope.currentItem.parentNodeId).descendants;
        //     } else {
        //         parentMenu = $scope.treeData;
        //     }
        //     var index = parentMenu.indexOf($scope.currentItem);
        //     parentMenu.splice(index, 1);
        // };
    }
})();