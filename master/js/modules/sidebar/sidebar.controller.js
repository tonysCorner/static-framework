/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils', 'RouteHelpers'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader, Utils, RouteHelpers) {
        activate();

        function activate() {
            var collapseList = [];
            // demo: when switch from collapse to hover, close all items
            $rootScope.$watch('app.layout.asideHover', function (oldVal, newVal) {
                if (newVal === false && oldVal === true) {
                    closeAllBut(-1);
                }
            });

            $scope.menuItems = angular.Init.menu;
            console.log('------菜单-----');
            console.log(angular.Init.menu);
            console.log('------菜单-----');


            $scope.getMenuItemPropClasses = function (heading, sref, submenu) {
                return (heading ? 'nav-heading' : '') +
                    (isActive(sref, submenu) ? ' active' : '');
            };

            $scope.addCollapse = function ($index, sref, submenu) {
                collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(sref, submenu);
            };

            $scope.isCollapse = function ($index) {
                return (collapseList[$index]);
            };

            $scope.toggleCollapse = function ($index, isParentItem) {

                // collapsed sidebar doesn't toggle drodopwn
                if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) return true;

                // make sure the item index exists
                if (angular.isDefined(collapseList[$index])) {
                    if (!$scope.lastEventFromChild) {
                        collapseList[$index] = !collapseList[$index];
                        closeAllBut($index);
                    }
                }
                else if (isParentItem) {
                    closeAllBut(-1);
                }

                $scope.lastEventFromChild = isChild($index);

                return true;

            };

            // Controller helpers
            // -----------------------------------

            // Check item and children active state
            function isActive(sref, submenu) {

                //if(!item) return;

                if (!sref || sref === '#') {
                    var foundActive = false;
                    angular.forEach(submenu, function (value) {
                        if (isActive(value.sref, value.submenu)) foundActive = true;
                    });
                    return foundActive;
                }
                else
                    return $state.is(sref) || $state.includes(sref);
            }

            function closeAllBut(index) {
                index += '';
                for (var i in collapseList) {
                    if (index < 0 || index.indexOf(i) < 0)
                        collapseList[i] = true;
                }
            }

            function isChild($index) {
                /*jshint -W018*/
                return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }


        } // activate
    }

})();
