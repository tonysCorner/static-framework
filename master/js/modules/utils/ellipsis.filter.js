/**
 * Created by liuzifeng on 2016/6/28.
 */
(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('ellipsis', ellipsis);
    function ellipsis() {
        return function (str, count) {
            if (!str || str.length < 2) {
                return str;
            }
            count = count || 4;
            var e = '*';
            var chars = str.split('');
            var charCount = chars.length;
            if (charCount < count * 2) {
                count = 1;
            }
            for (var i = count; i < charCount - count; i++) {
                chars[i] = e;
            }
            return chars.join('');
        }
    }
})();