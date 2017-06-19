/*!
 *
 * Angle - Bootstrap Admin App + AngularJS Material
 *
 * Version: 3.3.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function () {
    'use strict';
    var optionsConfig = {
        type: "GET",
        //url: 'server/listMenu.json',
        //url: SelfConfig.domain.sso + '/operator/listMenu.html',
        url: SelfConfig.domain.localAPI + '/listMenu.json',
        success: function (da) {
            var data = JSON.parse(da);
            //未登录跳转到登录页面
            if (!data || (!data.code && data.code != 0)) {
                docCookies.redirect();
                return;
            }
            docCookies.resolveCode(data.code, '/operator/listMenu.html');
            //解析远程配置菜单并且把远程菜单模块抽出,添加到自定义模块中
            var firstPage = SelfUtil.getFirstPage(SelfUtil.getQuerySting().page);
            if (firstPage.module) {
                angular.firstPage = firstPage;
            }
            angular.Init = {};
            //合并基础模块与自定义模块
            angular.Init.module = SelfConfig.module.basic.concat(project.modules);
            angular.Init.menu = SelfUtil.TranslateServerMenu(data.data);
            angular.bootstrap(document, angular.Init.module.unique());
        }
    };

    SelfUtil.NativeAjax(optionsConfig);
    loadDictionary();
})();

