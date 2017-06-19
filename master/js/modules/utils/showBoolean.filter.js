(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('showBoolean', showBoolean);
    function showBoolean() {
        var show = ['否', '是'];
        return function (value) {
            if (value == false) {
                value = false;
            } else {
                value = true;
            }
            return show[+value];
        }
    }
})();