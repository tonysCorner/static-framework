/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.plugins')
        .directive('masked', masked);
    function masked() {
        return {
            link: link,
            restrict: 'A',
            scope: {
                masked: '@'
            }
        };

        function link(scope, element) {
            var $elem = $(element);
            if ($.fn.inputmask) {
                if (scope.masked === 'hm') {
                    $elem.inputmask('hh:mm', {placeholder: '--:--'});
                } else if (scope.masked === 'yhm') {
                    $elem.inputmask('y年m月d日 h:s', {placeholder: 'yyyy年mm月dd日 --:--'});
                } else {
                    $elem.inputmask();
                }
            }

            scope.$watch("masked", function () {
                if ($.fn.inputmask) {
                    if (scope.masked === 'hm') {
                        $elem.inputmask('hh:mm', {placeholder: '--:--'});
                    } else if (scope.masked === 'yhm') {
                        $elem.inputmask('y年m月d日 h:s', {placeholder: 'yyyy年mm月dd日 --:--'});
                    } else if (scope.masked) {
                        $elem.inputmask(scope.masked);
                    } else {
                        $elem.inputmask("remove");
                    }
                }
            });
        }
    }
})();
