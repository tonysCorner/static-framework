/**
 * Created by zhangyishao on 2016/11/4.
 */
(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('trustHtml', trustHtml);
    function trustHtml($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    }
})();