/**=========================================================
 * Module: telephone.js
 * Handle telephone collapsible elements
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.telephone')
        .controller('TelephoneBtnController', TelephoneBtnController);

    TelephoneBtnController.$inject = ['$rootScope', '$scope', 'TelephoneService', 'SweetAlert', 'toaster', 'Utils','$sce','$state', '$window'];
    function TelephoneBtnController($rootScope, $scope, phoneSrv, SweetAlert, toaster ,Utils, $sce, $state, $window) {
        $scope.apiUrl = SelfConfig.domain.cc;
        //默认签入
        //$rootScope.isShowCCbtn = true; //显示电话操作按钮btn
        /*$rootScope.isBusy = false;
        phoneSrv.login(function() {
            $rootScope.isShowCCbtn = true; //显示电话操作按钮btn
            $rootScope.isLogin = true; //显示电话操作按钮btn
        });
        //签入
        $scope.evLogin = function() {
            phoneSrv.login(function() {
                $rootScope.isShowCCbtn = true; //显示电话操作按钮btn
                $rootScope.isLogin = true;
            });
        };
        //签出
        $scope.evLogout = function() {
            phoneSrv.logout(function() {
                $rootScope.isLogin = false;
            })
        };
        //挂断
        $scope.evUnlink = function() {
            phoneSrv.unLink(function() {
            })
        };
        //置忙
        $scope.evPause = function(isBusy) {
            if (!isBusy) {
                phoneSrv.pause(function() {
                    $rootScope.isBusy = true;
                })
            } else {
                toaster.error('呼叫中心', '已经置忙')
            }
        };
        //置闲
        $scope.evOnline = function(isBusy) {
            if(isBusy) {
                phoneSrv.online(function() {
                    $rootScope.isBusy = false;
                })
            } else {
                toaster.error('呼叫中心', '已经置闲')
            }
        };*/



        ///////////////////////////////////////
        //是否登录
        var loginApi = SelfConfig.domain.cc + '/7moor/login.html',
            callInApi = SelfConfig.domain.cc + '/7moor/callIn.html',
            callOutApi = SelfConfig.domain.cc + '/7moor/callOut.html';
        var CallCenterName = '',CallCenterPwd='';

        Utils.getApiInfo(loginApi, {}, function (data) {
            if(data.seatNo){//返回值 有账号
                CallCenterName = data.seatNo;
                CallCenterPwd = data.pwd;
                $scope.loginSucc = true;
                $rootScope.isShowCCbtn = true;
                $scope.trustSrc = $sce.trustAs($sce.RESOURCE_URL,"app/edb_bar/phoneBar/phonebar.html?loginName="+data.seatNo+"&password="+data.pwd+"&loginType=gateway");//gateway//Local
            }
        });



        $scope.callIn = function(p,m){
            $state.go('app.customer_listCustomerCar', {mobile : m});
            Utils.getApiInfo(callInApi,p,function(res){
                console.log(res)
            });
        };

        $scope.callOut = function(p){
            Utils.getApiInfo(callOutApi,p,function(res){
                console.log(res)
            });
        };

        $scope.loginStatus = '签出';
        $scope.changeLoginStatus = function(){
            if($scope.loginStatus=='签出'){
                $scope.loginStatus = '签入';
                window.frames["callCenterIframe"].icallcenter.logon.logout();
                toaster.success('呼叫中心','签出成功');
            }else{
                $scope.loginStatus = '签出';
                window.frames["callCenterIframe"].login(CallCenterName,CallCenterPwd);
                toaster.success('呼叫中心','签入成功');
            }
        };

        $scope.showErrorMsg = function(message){
            SweetAlert.error(message);
        };

        $scope.showStatusMsg = function(message,type,c){
            if(type){
                if(c=="apply"){
                    $scope.$apply(function () {
                        toaster.error("呼叫中心",message);
                    })
                }else{
                    toaster.error("呼叫中心",message);
                }
            }else{
                if(c=="apply"){
                    $scope.$apply(function () {
                        toaster.success("呼叫中心",message);
                    })
                }else{
                    toaster.success("呼叫中心",message);
                }
            }
        };

        $scope.callOutSucc = function(){
            var updateCarStatusApi = SelfConfig.domain.apiCrm + '/customer/updateCarStatus.html';
            var identity = $window.sessionStorage['identity'];
            if (identity == DICTIONARY.IDENTITY.客服) {
                console.info("客服");
            } else {
                console.info("坐席");
                Utils.postApiInfo(updateCarStatusApi,
                    {
                        carId: $rootScope.app.carId,
                        carType: $rootScope.app.carType,
                        status: 2
                    }, function (data) {
                        console.log('更改状态成功!')
                    });
            }
        };
    }
})();