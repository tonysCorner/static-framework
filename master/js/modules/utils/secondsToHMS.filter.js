/**
 * Created by zhangyishao on 2016/9/30.
 */
(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('secondsToHMS', secondsToHMS);
    function secondsToHMS() {
        return function (second) {
            var re = '';
            if(second*1===0){
                re = '00:00:00';
            }else{
                var hourStr = parseInt(second*1/3600);
                if(hourStr<10){
                    hourStr = '0'+hourStr;
                }
                var miniteStr = parseInt((second*1%3600)/60);
                if(miniteStr<10){
                    miniteStr = '0'+miniteStr;
                }
                var secondStr = (second*1%3600)%60;
                if(secondStr<10){
                    secondStr = '0'+secondStr;
                }
                re = hourStr +':'+ miniteStr +':'+ secondStr;
            }
            return re;
        }
    }
})();