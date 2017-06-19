
/**=========================================================
 * Module: telephone.js
 * Wraps the telephone and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.telephone')
        .directive('telephone', telephone);

    telephone.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function telephone ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            restrict: 'EA',
            template: 'app/views/phone.html',
            replace: true,
            controller: PhoneController
        };
        return directive;

        //function link(scope, element, attrs) {
        //    var number = [];
        //    element.find('ul').on('click', function(e){
        //        e.preventDefault();
        //        if ($(e.target).hasClass('delNum') && number.length != 0) {
        //            number.pop();
        //        } else if ($(e.target).hasClass('calls')) {
        //            //to do
        //        } else {
        //            number.push($(e.target).html())
        //        }
        //        $('.number').html(number.join(''))
        //
        //    })
        //}

    }

    PhoneController.$inject = ['$scope', '$http'];
    function PhoneController($scope, $http) {

    }


})();

