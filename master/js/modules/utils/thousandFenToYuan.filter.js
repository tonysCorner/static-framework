/**
 * Created by zhangyishao on 2016/11/9.
 */
(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('thousandFenToYuan', thousandFenToYuan);
    function thousandFenToYuan() {
        return function (num) {
            if(isNaN(num)){
                return num;
            }
            var re = '';
            var number=0;
            var numToYuan = (num*1/100).toFixed(2);
            var numToYuanArray = numToYuan.split('.');

            for(var i=numToYuanArray[0].toString().length;i--;){
                number +=1;
                if(!(number%3) && i!==0){
                    re += numToYuanArray[0].toString()[i]+',';
                }else{
                    re += numToYuanArray[0].toString()[i];
                }
            }
            return numToYuanArray.length>1?re.split('').reverse().join('')+'.'+numToYuanArray[1]:re.split('').reverse().join('');
        }
    }
})();