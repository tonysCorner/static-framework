var project = {
    modules: ["app.home", "app.welcome"], routes: [{
        title: '首页',
        name: 'app',
        url: '/app',
        abstract: true,
        templateUrl: 'app.html',
        resolve: ['modernizr', 'icons']
    }, {
        title: '首页',
        name: 'app.welcome',
        url: '/welcome',
        templateUrl: 'welcome.html'
    }]
};

