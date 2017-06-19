/**=========================================================
 * Module: telephone.js
 * Handle telephone collapsible elements
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.telephone')
        .controller('TelephoneController', TelephoneController);

    TelephoneController.$inject = ['$rootScope', '$scope', '$state', '$location', '$interval', '$window'];
    function TelephoneController($rootScope, $scope, $state, $location, $interval, $window) {
        $scope.hangUp = function () {
            var identity = $window.sessionStorage['identity'];
            $scope.subscribe = false;
            $interval.cancel($rootScope.timer);
            if ( identity == DICTIONARY.IDENTITY.客服) { //客服不需要预约时间弹窗
                console.log('不展示预约事件')
            } else {
                $rootScope.showAppointment();
            }

            window.frames["callCenterIframe"].phone.hangup();
            //executeAction('doPreviewOutcallCancel');
            $rootScope.callCustomer = true;
            $rootScope.app.offsidebarOpen = false;
        };

        //下一条
        $scope.nextPageBtn = function () {
            $rootScope.hideSide();
            $rootScope.seatShow = false;
            $state.go('app.customer_getOneCustomerCar', {carId: 0, carType: 0, isNext: 1});
        };
    }
})();