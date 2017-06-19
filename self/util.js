var SelfUtil = (function () {
    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace(".", ""));
        return arr.join("&");
    }

    var NativeAjax = function (options) {
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        var params = formatParams(options.data);
        //保存参数
        options.params = params;
        //创建 - ?非IE6 : IE6及其以下版本浏览器
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        xhr.withCredentials = true;
        //接收 - 第三步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML);
                } else {
                    options.fail && options.fail(status);
                }
            }
        };

        //连接 和 发送 - 第二步
        if (options.type == "GET") {
            xhr.open("GET", options.url + "?" + params, true);
            xhr.send(null);
        } else if (options.type == "POST") {
            xhr.open("POST", options.url, true);
            //设置表单提交时的内容类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
    };

    function clearMenu(menu) {
        if (!menu && menu.length == 0) {
            return null;
        }
        var menuTmp = {};
        return menu.filter(function (e) {
            if (e.parentMenuId == 0) {
                return true;
            }
            if (menuTmp[e.menuValue]) {
                console.error("重复菜单：" + JSON.stringify(e));
                return false;
            }
            menuTmp[e.menuValue] = e;
            return true;
        });
    }

    function TranslateServerMenu(menu) {
        //排序
        //整理出来后台菜单数组父子关系(后台返回给前端是一级结构)
        //设置父级菜单满足angular route结构
        // 校验数组
        var menus = [];
        if (!menu || !menu.length) {
            return menus;
        }
        clearMenu(menu);
        //排序
        menu.sort(function (a, b) {
            if (a.parentMenuId != b.parentMenuId) {
                return a.parentMenuId > b.parentMenuId ? 1 : -1;
            }
            if (a.parentMenuId == b.parentMenuId) {
                if (!a.position) {
                    return 1;
                }
                if (!b.position) {
                    return -1;
                }
                return a.position > b.position ? 1 : -1;
            }
        });

        menu.forEach(function (e) {
            if (e.parentMenuId == 0) {
                e.submenu = [];
                e.text = e.menuName;
                e.sref = '#';
                var index = e.position && e.position - 1 || SelfConfig.menuIcon.length - 1;
                if (index >= SelfConfig.menuIcon.length || index < 0) {
                    index = SelfConfig.menuIcon.length - 1;
                }
                e.icon = SelfConfig.menuIcon[index];
                menus.push(e);
            } else {
                var parentMenu = menus.find(function (f) {
                    return f.menuId == e.parentMenuId;
                });
                if (parentMenu) {
                    var appModule = "app." + e.menuValue.replace(/^http:\/\/(.*)\/(.*)\/(.*)\.html$/ig, '$2_$3');
                    if (project.modules.indexOf(appModule) < 0) {
                        menus.splice(menus.indexOf(parentMenu), 1);
                        console.log(appModule + '模块不存在');
                    } else {
                        e.text = e.menuName;
                        e.sref = appModule;
                        e.icon = "";
                        parentMenu.submenu.push(e);
                    }
                }
            }
        });
        menus.unshift(SelfConfig.homePage);
        return menus;
    }

    /**
     *把数组转为树
     * @param list 需要转化的数组
     * @param nodeId 节点的id属性
     * @param parentNodeId 节点的父id属性
     * @return Array tree
     **/
    function getTree(list, nodeId, parentNodeId) {
        var treeData = [];
        var map = {};
        list.forEach(function (node) {
            var id = node[nodeId];
            var pId = node[parentNodeId];
            var pNode = map[pId];
            if (pNode) {
                if (!pNode.descendants) {
                    pNode.descendants = [];
                }
                pNode.descendants.push(node);
            } else {
                treeData.push(node);
            }
            map[id] = node;
        });
        console.log(map);
        return treeData;
    }

    function getTreeNode(data, attr, value) {
        var node = null;

        function exist(data, attr, value) {
            return data.some(function (x) {
                if (x[attr] == value) {
                    node = x;
                    return true;
                } else if (x.descendants && x.descendants.length) {
                    return exist(x.descendants, attr, value);
                }
                return false;
            });
        }

        exist(data, attr, value);
        return node;
    }

    function errCodeHandle(code, txt) {
        if (txt) {
            console.error(txt)
        } else {
            if (MSG[code]) {
                console.error(MSG[code])
            } else {
                console.error(MSG.未知错误)
            }
        }
    }

    function apiExceptionHandle() {
        console.error(MSG.请求超时);
    }

    function isMobilePhone(phone) {
        return /^1[3|4|5|7|8]\d{9}$/.test(phone);
    }

    function getQuerySting() {
        var h = (location.search.length) ? location.search.substring(1) : "";
        var d = {};
        var b = h.split("&");
        var f = null,
            c = null,
            g = null;
        if (b) {
            for (var e = 0,
                     a = b.length; e < a; e++) {
                f = b[e].split("=");
                c = decodeURIComponent(f[0]);
                g = decodeURIComponent(f[1]);
                d[c] = g;
            }
        } else {
        }
        return d;
    }

    function getFirstPage(url) {
        var obj = {module: '', menu: {}};
        if (url) {
            var temp = "app." + url.replace(/^\/(.*)\/(.*)\.html$/ig, '$1_$2');
            obj.module = temp;
            obj.menu.text = '首页';
            obj.menu.sref = temp;
            obj.menu.icon = "icon-tag";
        }
        return obj;
    }

    /**
     * 数组去重
     * @param arr
     * @param property
     * @returns {Array}
     */
    function unique(arr, property) {
        if (!arr || !arr.length) {
            return [];
        }
        var result = [], hash = {};

        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (property && !hash[elem[property]]) {
                result.push(elem);
                hash[elem[property]] = true;
            } else if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    }

    /**
     * 属性去空
     * @param obj
     * @return Object
     */
    function uniqueProperty(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i) && (obj[i] === null || obj[i] === undefined)) {
                delete obj[i];
            }
        }
        return obj;
    }

    function insertVdsJs(_vds, id) {
        if (!_vds || !id) {
            return;
        }
        _vds = _vds || [];
        window._vds = _vds;
        _vds.push(['setAccountId', id]);
        _vds.push(['enableHT', true]);
        var vd = document.getElementById('vds');
        if (vd) {
            document.body.removeChild(vd);
        }
        var vds = document.createElement('script');
        vds.id = "vds";
        vds.type = 'text/javascript';
        vds.async = true;
        vds.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
        document.body.appendChild(vds);
    }

    function insertCarVds(carId) {
        return;
        var _vds = [];
        _vds.push(['setCS1', 'carId', carId]);
        _vds.push(['setCS2', 'opId', opId]);
        insertVdsJs(_vds, 'afb6153dc1ad327b');
    }

    function insertReportVds() {
        if (opId) {
            var _vds = [];
            _vds.push(['setCS1', 'opId', opId]);
            insertVdsJs(_vds, '8ca0ae17c80cbb65');
        } else {
            getOpId(insertReportVds);
        }
    }

    return {
        NativeAjax: NativeAjax,
        TranslateServerMenu: TranslateServerMenu,
        getTree: getTree,
        getTreeNode: getTreeNode,
        errCodeHandle: errCodeHandle,
        apiExceptionHandle: apiExceptionHandle,
        isMobilePhone: isMobilePhone,
        getQuerySting: getQuerySting,
        getFirstPage: getFirstPage,
        unique: unique,
        uniqueProperty: uniqueProperty,
        insertCarVds: insertCarVds,
        insertReportVds: insertReportVds
    }
})();


function getOs() {
    var OsObject = "";
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        return "Firefox";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
        return "Safari";
    }
    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
        return "Camino";
    }
    if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
        return "Gecko";
    }
}

/*
 * @param {Function} fn 进行迭代判定的函数
 * @param more ... 零个或多个可选的用户自定义参数
 * @returns {Array} 结果集，如果没有结果，返回空集
 */
Array.prototype.each = function (fn) {
    fn = fn || Function.K;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < this.length; i++) {
        var res = fn.apply(this, [this[i], i].concat(args));
        if (res != null) a.push(res);
    }
    return a;
};

/**
 * 数组去重
 * @param arr
 * @returns {Array}
 */
Array.prototype.unique = function (property) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = this[i]) != null; i++) {
        if (property && !hash[elem[property]]) {
            result.push(elem);
            hash[elem[property]] = true;
        } else if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
};

/*
 * @param {Array} a 集合A
 * @param {Array} b 集合B
 * @returns {Array} 两个集合的差集
 */
Array.prototype.minus = function (arr) {
    return this.unique().filter(function (o) {
        return arr.indexOf(o) < 0;
    });
};
/*
 * @param {Array} a 集合A
 * @param {Array} b 集合B
 * @returns {Array} 两个集合的交集
 */
Array.prototype.intersect = function (arr) {
    return this.unique().filter(function (o) {
        return arr.indexOf(o) >= 0;
    });
};
/*
 * @param {Array} a 集合A
 * @param {Array} b 集合B
 * @returns {Array} 两个集合的并集
 */
Array.prototype.union = function (arr) {
    return this.concat(arr).unique();
};
/*
 * @param {Array} a 集合A
 * @param {Array} b 集合B
 * @returns {Array} 两个集合的补集
 */
Array.prototype.complement = function (arr) {
    return this.union(arr).minus(this.intersect(arr));
};

/** 对Date的扩展，将 Date 转化为指定格式的String
 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 例子：
 (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 **/
Date.prototype.Format = function (fmt) {
    fmt = fmt || "yyyy-MM-dd hh:mm:ss";
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

Date.prototype.add = function (long, type) {
    var y = this.getFullYear();
    var M = this.getMonth();
    var d = this.getDate();
    var h = this.getHours();
    var m = this.getMinutes();
    var s = this.getSeconds();
    var S = this.getMilliseconds();
    if (!type) {
        type = 'd';
    }
    switch (type) {
        case 'y':
            y += long;
            break;
        case 'M':
            M += long;
            break;
        case 'd':
            d += long;
            break;
        case 'h':
            h += long;
            break;
        case 'm':
            m += long;
            break;
        case 's':
            s += long;
            break;
        case 'S':
            S += long;
            break;
    }
    return new Date(y, M, d, h, m, s, S);
};

/**
 * 代替js的浮点数乘法；
 * 如果乘数不存在，返回乘数；
 * 如果乘数、被乘数为0或不为数字返回0；
 * @param m 乘数
 * @param n 被乘数
 * @param c 结果保留的小数点位数
 * @return Number 乘法结果
 */
Math.multiply = function (m, n, c) {
    if (m == undefined || m == null) {
        return 0;
    }
    if (isNaN(m) || isNaN(n) || m == 0 || n == 0) {
        return 0;
    }

    c = !isNaN(c) && c || 0;

    return +(m * n).toFixed(c);
};

/**
 * 代替js的除法；
 * 如果除数不存在，返回除数；
 * 如果除数、被除数为0或不为数字返回0；
 * @param m 除数
 * @param n 被除数
 * @param c 结果保留的小数点位数
 * @return Number 除法结果
 */
Math.division = function (m, n, c) {
    if (m == undefined || m == null) {
        return 0;
    }

    if (isNaN(m) || isNaN(n) || m == 0 || n == 0) {
        return 0;
    }

    c = !isNaN(c) && c || 2;

    return +(m / n).toFixed(c);
};
