(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('fenToYuan', fenToYuan);
    function fenToYuan() {
        return function (fen, d) {
            if (fen == 0) {
                return 0;
            }
            var yuan = Math.round(fen);
            if (!yuan) {
                return "";
            }
            var dividend = 100;
            if (d && Math.round(d)) {
                dividend = Math.round(d);
            }
            yuan = (fen / dividend).toFixed(2);
            var re = /(-?\d+)(\d{3})/;
            while (re.test(yuan)) {
                yuan = yuan.replace(re, "$1,$2")
            }
            return yuan.replace(/0$|.00$/, '');
        }
    }
})();