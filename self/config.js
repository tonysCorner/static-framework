var SelfConfig = {
    //注册模块配置
    'module': {
        'basic': [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.utils',
            'app.material',
            'app.interceptor',
            'oitozero.ngSweetAlert',
            'app.panels',
            'app.plugins',
            'app.telephone',
            'localytics.directives',
            'ngDialog',
            'ui.select',
            'toaster',
            'ngFileUpload',
            'ngLocale'
        ]
    },
    //默认首页
    'homePage': {
        "text": "首页",
        "sref": "app.home",
        "icon": "icon-tag"
    },
    //对接不同服务的域名配置df
    'domain': function () {
        var dev = {
            mode: 'dev',
            localAPI: "http://lxj.api.dev.1234ye.com:9000/mock",
            workFlow: 'http://workflow.api.dev.1234ye.com/api-workflow',
            sso: 'http://sso.api.dev.1234ye.com/api-sso',
            apiCrm: 'http://crm.api.dev.1234ye.com/api-crm',
            coupon: 'http://coupon.api.dev.1234ye.com/api-coupon',
            cc: 'http://cc.api.dev.1234ye.com/api-cc',
            report: 'http://report.api.dev.1234ye.com/api-report',
            activity: '//activity.api.dev.1234ye.com:8080/api-activity-admin',
            third: '//cus.third.admin.api.dev.1234ye.com:8082/api-cus-third-admin',
            config: 'http://config.api.dev.1234ye.com/api-config',
            beeAdmin: 'http://admin.bee.api.dev.1234ye.com/api-bee-admin',
            calc: 'http://calc.api.dev.1234ye.com:8096/api-calc-admin',
            process: 'http://process.api.dev.1234ye.com/api-process',
            topicUrl: '//lxj.dev.api.1234ye.com:9001/sale/index.html',
            cookieDomain: '.1234ye.com',
            timeout: 1000 * 60 * 5,
            version: '--version'
        };

        var production = {
            mode: 'production',
            workFlow: 'http://api.workflow.1234ye.com',
            sso: 'http://api.sso.1234ye.com',
            apiCrm: 'http://api.crm.1234ye.com',
            coupon: 'http://api.coupon.1234ye.com',
            cc: 'http://api.cc.1234ye.com',
            report: 'http://api.report.1234ye.com',
            activity: '//api.activity.admin.1234ye.com',
            config: 'http://api.config.1234ye.com',
            beeAdmin: 'http://api.bee.admin.1234ye.com',
            third: '//api.third.admin.1234ye.com',
            calc: 'http://api.calc.1234ye.com',
            process: 'http://api.process.1234ye.com',
            topicUrl: '//static.1234ye.com/sale/app/index.html',
            cookieDomain: '.1234ye.com',
            timeout: 1000 * 60 * 5,
            version: '--version'
        };

        var test = {
            mode: 'test',
            workFlow: 'http://workflow.api.test.1234ye.com/api-workflow',
            sso: 'http://sso.api.test.1234ye.com/api-sso',
            apiCrm: 'http://crm.api.test.1234ye.com/api-crm',
            coupon: 'http://coupon.api.test.1234ye.com/api-coupon',
            cc: 'http://cc.api.test.1234ye.com/api-cc',
            report: 'http://report.api.test.1234ye.com/api-report',
            activity: '//activity.admin.api.test.1234ye.com/api-activity-admin',
            third: '//cus.third.admin.api.test.1234ye.com/api-cus-third-admin',
            config: 'http://config.api.test.1234ye.com/api-config',
            beeAdmin: 'http://admin.bee.api.test.1234ye.com/api-bee-admin',
            calc: 'http://calc.api.test.1234ye.com/api-calc-admin',
            process: 'http://process.api.test.1234ye.com/api-process',
            topicUrl: '//static.test.1234ye.com/sale/index.html',
            cookieDomain: '.1234ye.com',
            timeout: 1000 * 60 * 5,
            version: '--version'
        };
        return --mode;
    }(),
    menuIcon: ["icon-user", "icon-people", "icon-emotsmile",
        "icon-printer", "icon-printer", "icon-earphones", "icon-phone",
        "icon-settings", "icon-key", "icon-key", "icon-calculator"
    ]
};




