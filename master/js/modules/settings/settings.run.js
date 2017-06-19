(function () {
    'use strict';

    angular
        .module('app.settings')
        //.controller('trackCustomersCtrl',trackCustomersCtrl)
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$timeout', 'ngDialog', 'Utils', '$interval', '$location', '$window'];

    function settingsRun($rootScope, $timeout, ngDialog, Utils, $interval, $location, $window) {

        // Global Settings
        // -----------------------------------
        $rootScope.app = {
            name: 'Quantum',
            description: 'Quantum',
            year: ((new Date()).getFullYear()),
            layout: {
                isFixed: true,
                isCollapsed: false,
                isBoxed: false,
                isRTL: false,
                horizontal: false,
                isFloat: false,
                asideHover: false,
                theme: 'app/css/theme-me.css',
                asideScrollbar: false
            },
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };
        var count = 0;
        $rootScope.isLoading = false;
        $rootScope.load = function (isLoading) {
            if (isLoading) {
                count++;
                $timeout(function () {
                    if (count > 0) {
                        $rootScope.isLoading = true;
                    }
                }, 500);
            } else {
                count--;
                if (count <= 0) {
                    count = 0;
                    $rootScope.isLoading = false;
                }
            }
        };


        // Setup the layout mode
        $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h');

        // Restore layout settings [*** UNCOMMENT TO ENABLE ***]
        // if( angular.isDefined($localStorage.layout) )
        //   $rootScope.app.layout = $localStorage.layout;
        // else
        //   $localStorage.layout = $rootScope.app.layout;
        //
        // $rootScope.$watch('app.layout', function () {
        //   $localStorage.layout = $rootScope.app.layout;
        // }, true);

        // Close submenu when sidebar change from collapsed to normal
        $rootScope.$watch('app.layout.isCollapsed', function (newValue) {
            if (newValue === false)
                $rootScope.$broadcast('closeSidebarMenu');
        });
        //呼叫中心是否显示状态按钮 ( 通过此字段来判断呼叫中心是否登入成功)
        $rootScope.isShowCCbtn = false;

        $rootScope.app.offsidebarOpen = false;
        $rootScope.app.customerStatus = false;
        $rootScope.callCustomer = true;
        //callCustomer

        $rootScope.showAppointment = function () {
            //if (!$rootScope.isShowCCbtn) { return }

            ngDialog.open({
                template: 'app/views/test.html',
                className: 'ngdialog-theme-default',
                controller: ['$scope', '$rootScope', '$http', 'ngDialog', 'SweetAlert', 'Utils', function ($scope, $rootScope, $http, ngDialog, SweetAlert, Utils) {
                    $scope.getSimpleCustomerCar = {};

                    //是否创建预约事件，默认值
                    $scope.isAddAppointment = "1";
                    //意向
                    $scope.intentionGradeSelected = DICTIONARY.intentionGrade;
                    //$scope.getSimpleCustomerCar.intentionGrade = $scope.intentionGradeSelected[0].id;//默认值

                    //跟踪状态
                    $scope.trackStatusSelected = DICTIONARY.trackStatus;
                    var child;
                    var getSimpleCustomerCar = SelfConfig.domain.apiCrm + '/customer/getSimpleCustomerCar.html';
                    Utils.getApiInfo(getSimpleCustomerCar, {
                        carId: $location.search()['carId'],
                        carType: $location.search()['carType']
                    }, function (data) {
                        $scope.getSimpleCustomerCar = data;
                        $scope.getSimpleCustomerCar.currentTime = new Date();
                        for (var i = 0; i < DICTIONARY.trackStatus.length; i++) {
                            if (DICTIONARY.trackStatus[i].id == $scope.getSimpleCustomerCar.status) {
                                $scope.second = DICTIONARY.trackStatus[i].child;
                                $scope.getSimpleCustomerCar.second = $scope.second[0].id;//默认值
                                child = DICTIONARY.trackStatus[i].child;
                                for (var j = 0; j < child.length; j++) {
                                    if (child[j].id == status) {
                                        $scope.third = child[j].child;
                                        $scope.getSimpleCustomerCar.third = $scope.third[0].id;//默认值
                                    }
                                }
                            }

                        }
                    });

                    $scope.c2 = function (status) {
                        for (var i = 0; i < child.length; i++) {
                            if (child[i].id == status) {
                                $scope.third = child[i].child;
                            }
                        }
                        $scope.subscribe = !!status;
                    };

                    //保存
                    $scope.orderBtn = function (orderForm, closeThisDialog) {
                        if (!orderForm.$valid) {
                            orderForm.third.$dirty = true;
                            orderForm.appointmentTime.$dirty = true;
                            orderForm.ddtimes.$dirty = true;
                            orderForm.intentionGrade.$dirty = true;
                            return;
                        }
                        var addTrackLogApi = SelfConfig.domain.apiCrm + '/customer/addTrackLog.html';
                        var appointmentTime = new Date($scope.getSimpleCustomerCar.appointmentTime);
                        if ($scope.getSimpleCustomerCar.times) {
                            var st = $scope.getSimpleCustomerCar.times.replace(/-/g, 0).split(":");
                            if (0 < st[0] < 24) {
                                appointmentTime.setHours(st[0]);
                            }
                            if (0 < st[1] < 59) {
                                appointmentTime.setMinutes(st[1]);
                            }
                        }

                        var data = {
                            cid: $scope.getSimpleCustomerCar.cid,
                            //carId: $rootScope.app.carId,
                            //carType: $rootScope.app.carType,
                            carId: $location.search()['carId'],
                            carType: $location.search()['carType'],
                            carStatus: $scope.getSimpleCustomerCar.status,
                            trackStatus: $scope.getSimpleCustomerCar.third,
                            intentionGrade: $scope.getSimpleCustomerCar.intentionGrade
                        };
                        if (!$scope.getSimpleCustomerCar.second) {
                            data.eventTitle = $scope.getSimpleCustomerCar.eventTitle;
                            data.eventType = 40;
                            data.eventDescription = $scope.getSimpleCustomerCar.eventDescription;
                            data.appointmentTime = appointmentTime;
                            data.isAddAppointment = 1;
                        } else {
                            data.isAddAppointment = 0;
                        }

                        Utils.postApiInfo(addTrackLogApi, data, function () {
                            SweetAlert.success("保存成功！");
                            closeThisDialog('Cancel');
                            $rootScope.showNextBtn();
                        })
                    };
                }]
            });
        };


        $rootScope.showNextBtn = function () {
            if (!$rootScope.isShowCCbtn) {
                return
            }

            $rootScope.app.offsidebarOpen = true; //侧边栏展示
            $rootScope.callCustomer = true; //拨打电话隐藏
            $rootScope.customerStatus = true; //展示下一条
        };

        $rootScope.showHangupBtn = function () {
            if (!$rootScope.isShowCCbtn) {
                return
            }

            $rootScope.app.offsidebarOpen = true; //侧边栏展示
            $rootScope.callCustomer = false; //拨打电话隐藏
            $rootScope.customerStatus = false; //展示下一条
        };

        $rootScope.hideSide = function () {
            if (!$rootScope.isShowCCbtn) {
                return
            }

            $rootScope.app.offsidebarOpen = false; //侧边栏展示
            $rootScope.callCustomer = false;
        };

        var module = {
            updateCarStatusApi: SelfConfig.domain.apiCrm + '/customer/updateCarStatus.html',
            finishAllAppointmentApi: SelfConfig.domain.apiCrm + '/customer/finishAllAppointment.html'
        };

        var version = SelfConfig.domain.version;
        var c = 0;
        if (SelfConfig.domain.mode !== 'dev') {
            $rootScope.version = $interval(function () {
                Utils.getApiPromise('/app/js/version.json?c=' + version + c++).then(function (data) {
                    if (version !== data.version) {
                        $window.location.reload();
                    }
                });
            }, 1000 * 60 * 60);
        }


        $rootScope.$on('$destroy', function () {
            $rootScope.version && $interval.cancel($rootScope.version);
            $rootScope.timer && $interval.cancel($rootScope.timer);
        });

        $rootScope.showSideLeft = function (getCustomerCarInfo) {
            if (!$rootScope.isShowCCbtn) {
                return
            }

            $rootScope.showHangupBtn();
            $rootScope.app.customerMobile = getCustomerCarInfo.customerMobile ? getCustomerCarInfo.customerMobile : getCustomerCarInfo.mobile;
            $rootScope.app.carId = getCustomerCarInfo.carId;
            $rootScope.app.carType = getCustomerCarInfo.carType;
            $rootScope.app.carOwner = getCustomerCarInfo.carOwner ? getCustomerCarInfo.carOwner : '';
            $rootScope.app.plateNumber = getCustomerCarInfo.plateNumber;
            var i = 0;
            $rootScope.timer = $interval(function () {
                i++;
                $rootScope.app.getTimer = Utils.getTimer(i);
            }, 1000);

            var identity = $window.sessionStorage['identity'];

            if (identity == DICTIONARY['IDENTITY']['客服']) {

            } else {

                if ($rootScope.app.carId > 0) {
                    Utils.getApiInfo(module.finishAllAppointmentApi, {
                        carId: $rootScope.app.carId,
                        carType: $rootScope.app.carType
                    }, function (data) {
                    });
                }
                Utils.postApiInfo(module.updateCarStatusApi,
                    {
                        carId: $rootScope.app.carId,
                        carType: $rootScope.app.carType,
                        status: 1
                    }, function () {
                        console.log('更改状态成功!')
                    });
            }

            /*executeAction('doPreviewOutCall', {
             tel: $rootScope.app.customerMobile,
             callType: 3
             });*/
        };


    }
})();
