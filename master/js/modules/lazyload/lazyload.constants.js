(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'modernizr': ['vendor/modernizr/modernizr.custom.js'],
                'icons': ['vendor/fontawesome/css/font-awesome.min.css',
                    'vendor/simple-line-icons/css/simple-line-icons.css'],
                'weather-icons': ['vendor/weather-icons/css/weather-icons.min.css',
                    'vendor/weather-icons/css/weather-icons-wind.min.css'],
                'loadGoogleMapsJS': ['vendor/load-google-maps/load-google-maps.js'],
                'whirl': ['vendor/whirl/dist/whirl.css']
            },
            // Angular based script (use the right module name)
            modules: []
        })
    ;

})();
