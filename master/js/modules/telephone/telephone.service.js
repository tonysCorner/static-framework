/**=========================================================
 * Module: telephone.js
 * Handle telephone collapsible elements
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.telephone')
        .service('TelephoneService', TelephoneService);

    TelephoneService.$inject = ['$rootScope','$state', '$http', 'Utils', '$window', 'toaster', '$location'];
    function TelephoneService($rootScope, $state, $http, Utils, $window, toaster, $location) {
        var loginApi = SelfConfig.domain.cc + '/tinet/login.html';
        //var loginApi = 'server/ccGetUserInfo.json';
        var TOKEN = {};

        var CC_TOASTER = {
            'login' : '签入',
            'logout' : '签出',
            'pause' : '置忙',
            'unpause' : '置闲',
            'refuse' : '拒接 ',
            'previewOutCall' : '外呼',
            'previewOutcallCancel' : '取消外呼',
            'unlink' : '挂断',
            'hold' : '保持',
            'unhold' : '保持接回',
            'consultCancel' : '咨询取消',
            'unconsult' : '咨询接回',
            'consultTransfer' : '咨询转接',
            'consultThreeway' : '咨询三方',
            'interact' : '转移IVR',
            'online' : '置闲', //cbThisStatus
            'outRinging' : '外呼座席响铃',
            'outBusy' : '外呼客户接听',
            'comeRinging' : '呼入座席响铃',
            'normalBusy' : '呼入座席接听',
            'waitLink' : '外呼座席接听等待客户接听',
            'neatenStart' : '整理开始',
            'neatenEnd' : '整理结束',
            'unHold' : '保持结束',
            'onlineUnlink' : '挂断后置闲',
            'pauseUnlink' : '挂断后置忙',
            'consultLink' : '咨询成功',
            'consulterOrTransferBusy' : '被咨询转接或转移的通话'
        };
        //用户登入
        var login = function (callback) {
            Utils.getApiInfo(loginApi, {}, function (data) {
                data.cno = data.seatNo;
                data.callbackFunction = function (token) {
                    __callbackSuc(callback, token);
                };
                executeAction('doLogin', data);
            })
        };
        //退出登入
        var logout = function (callback) {
            var data = {
                type: 1, //0：不退出电话只退出座席, 1：退出电话同时退出座席
                removeBinding: 1 //0：不解除绑定电话，1：解除绑定电话
            };
            data.callbackFunction = function (token) {
                __callbackSuc(callback, token);
            };
            executeAction('doLogout', data);
        };
        //外呼
        var callOut = function (params) {

            var _params = {
                tel: 10086,
                callType: '3', //3点击外呼
                callbackFunction: function (token) {
                    if (token.code == "0") {
                        toaster.success('呼叫中心', '外呼成功');
                    } else {
                        toaster.error('呼叫中心', '外呼失败');
                    }
                }
            };

            angular.extend(_params, params);


            executeAction('doPreviewOutCall', _params);
        };
        //外呼取消
        var callCancel = function () {
            executeAction('doPreviewOutcallCancel');
        };
        //拒接
        var refused = function () {
            executeAction('doRefuse');
            toaster.success('呼叫中心', '拒接');
        };
        //挂断
        var unLink = function () {
            var data = {};
            data.callbackFunction = function(token) {
                __callbackSuc(callback, token);
            };
            executeAction('doUnLink', data);
        };
        //保持
        var hold = function () {
            executeAction('doHold');
            toaster.success('呼叫中心', '保持');
        };
        //保持接回
        var unHold = function () {
            executeAction('doUnhold');
            toaster.success('呼叫中心', '保持接回');
        };
        //满意度调查
        var investigation = function () {
            executeAction('doInvestigation');
            toaster.success('呼叫中心', '满意度调查');
        };
        //空闲
        var online = function (callback) {
            var data = {};
            data.callbackFunction = function(token) {
                __callbackSuc(callback, token);
            };
            executeAction('doUnpause', data);
        };
        //置忙
        var pause = function (callback) {
            var data = {};
            data.description = "置忙";
            data.callbackFunction = function(token) {
                __callbackSuc(callback, token);
            };
            executeAction('doPause', data);
        };
        //咨询接回
        var consultBack = function () {
            executeAction('doUnconsult');
        };
        //咨询转接
        var consultTransfer = function () {
            executeAction('doConsultTransfer');
        };
        //咨询三方
        var consultThreeway = function () {
            executeAction('doConsultThreeway');
        };
        //接听 软电话功能
        var softLink = function () {
            executeAction('doLink');
        };

        var __callbackSuc = function (callback, token) {
            if (token.code == "0") {
                toaster.success('呼叫中心', CC_TOASTER[token.reqType] + '成功!');
                callback();
            } else {
                toaster.error('呼叫中心', CC_TOASTER[token.reqType] + '失败!');
            }
        };

        var cbQueueEvent = {
            'outRinging': {
                'name': '外呼座席响铃',
                'callback': function (token) {
                    console.log("外呼座席响铃");
                }
            },
            'outBusy': {
                'name': '外呼客户接听',
                'callback': function (token, Utils) {
                    console.log("外呼客户接听");

                    var updateCarStatusApi = SelfConfig.domain.apiCrm + '/customer/updateCarStatus.html';
                    var identity = $window.sessionStorage['identity'];

                    if (identity == DICTIONARY.IDENTITY.客服) {

                    } else {
                        Utils.postApiInfo(updateCarStatusApi,
                            {
                                carId: $rootScope.app.carId,
                                carType: $rootScope.app.carType,
                                status: 2
                            }, function (data) {
                                console.log('更改状态成功!')
                            });
                    }

                }
            },
            'comeRinging': {
                'name': '呼入座席响铃',
                'callback': function (token) {
                    console.log("呼入座席响铃");
                    //$state.go('app.customer_listCustomer', {mobile : TOKEN.crmCustomerNumber})
                }
            },
            'normalBusy': {
                'name': '呼入座席接听',
                'callback': function (token) {
                    console.log("呼入座席接听");
                    $state.go('app.customer_listCustomer', {mobile : TOKEN.crmCustomerNumber})
                }
            },
            'online': {
                'name': '置闲',
                'callback': function (token) {
                    console.log("置闲");
                    $rootScope.isBusy = false;
                }
            },
            'pause': {
                'name': '置忙',
                'callback': function (token) {
                    console.log("置忙");
                    $rootScope.isBusy = true;
                }
            },
            'waitLink': {
                'name': '外呼座席接听等待客户接听',
                'callback': function (token) {
                    console.log("外呼座席接听等待客户接听");
                }
            },
            'neatenStart': {
                'name': '整理开始（座席挂断）',
                'callback': function (token, Utils) {
                    __callLog();

                }
            },
            'neatenEnd': {
                'name': '整理结束',
                'callback': function (token) {
                    console.log("整理结束");
                }
            },
            'hold': {
                'name': '保持开始',
                'callback': function (token) {
                    console.log("保持开始");
                }
            },
            'unHold': {
                'name': '保持结束',
                'callback': function (token) {
                    console.log("保持结束");
                    console.log(token);
                }
            },
            'onlineUnlink': {
                'name': '挂断后置闲',
                'callback': function (token) {
                    console.log("挂断后置闲");
                    $rootScope.isBusy = false;
                    __callOutLog();
                }
            },
            'pauseUnlink': {
                'name': '挂断后置忙',
                'callback': function (token) {
                    console.log("挂断后置忙");
                    $rootScope.isBusy = true;
                    __callOutLog();
                }
            },
            'consultLink': {
                'name': '咨询成功',
                'callback': function (token) {
                    console.log("咨询成功");
                }
            },
            'consulterOrTransferBusy': {
                'name': '被咨询转接或转移的通话',
                'callback': function (token) {
                    console.log("被咨询转接或转移的通话");
                }
            }
        };

        // 长链接
        window.cbThisStatus = function (token) {
            console.log(token);
            if (token.uniqueId) {
                TOKEN.uniqueId = token.uniqueId;
            }
            if (token.callType) {
                TOKEN.callType = token.callType;
            }
            if (token.cno) {
                TOKEN.extenNo = token.cno;
            }
            //crmCustomerNumber
            if (token.crmCustomerNumber) {
                TOKEN.crmCustomerNumber = token.crmCustomerNumber;
            }

            //找到具体的事件,若存在则执行回调函数
            if (cbQueueEvent[token.eventName]) {
                toaster.success('呼叫中心', CC_TOASTER[token.eventName]);
                cbQueueEvent[token.eventName].callback(token, Utils);
            }
        };

        window.cbKickout = function () {
            toaster.info('呼叫中心', '你已被踢下线');
        };
        var __callLog = function() {
            if (TOKEN.callType == 1) { //1：呼入，2：网上400,3：点击外呼，4：预览外呼，5：IVR外呼，6：直接外呼
                var callInApi = SelfConfig.domain.cc + '/tinet/callIn.html';
                Utils.getApiInfo(callInApi, {
                    uniqueId: TOKEN.uniqueId,
                    extenNo: TOKEN.extenNo
                }, function (data) {
                })
            } else if (TOKEN.callType == 3) {
                __callOutLog();
            }
        };
        var __callOutLog = function() {
            var callOutApi = SelfConfig.domain.cc + '/tinet/callOut.html';
            Utils.getApiInfo(callOutApi, {
                carId: $rootScope.app.carId ? $rootScope.app.carId : '',
                carType: $rootScope.app.carType ? $rootScope.app.carType : '',
                uniqueId: TOKEN.uniqueId,
                extenNo: TOKEN.extenNo,
                carOwner: $rootScope.app.carOwner ? $rootScope.app.carOwner : '',
                plateNumber: $rootScope.app.plateNumber ? $rootScope.app.plateNumber : ''
            }, function (data) {
            })
        };
        this.login = login;
        this.logout = logout;
        this.callOut = callOut;
        this.callCancel = callCancel;
        this.refused = refused;
        this.unLink = unLink;
        this.hold = hold;
        this.unHold = unHold;
        this.investigation = investigation;
        this.online = online;
        this.pause = pause;
        this.consultBack = consultBack;
        this.consultTransfer = consultTransfer;
        this.consultThreeway = consultThreeway;
        this.softLink = softLink;

    }

})();