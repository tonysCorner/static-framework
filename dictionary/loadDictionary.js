var CHANNEL = {
    channelType: [],
    channelTypeKV: {},
    channel: [],
    channelKV: {},
    sourceBatch: [],
    sourceBatchKV: {},
    channelTypeSelect: [],
    sourceBatchSelect: [10, 13, 37, 39, 41, 47, 50, 53, 54, 55, 62, 64, 65, 66, 96, 97]
};
/**
 * suppliers:保险公司
 * sourceBatch:来源批次
 * banks:银行
 * credentialTypes:证件类型
 * sycCity:已开城市及对应的保险公司
 * expressCompanies:快递公司
 * plateNumberType:号牌类型
 */
var dictKeys = ["suppliers", "sourceBatch", "banks", "credentialTypes", "sycCity", 'expressCompanies', 'plateNumberType', 'reviewFeedback', 'orderSource', 'oemTaxType'];
function loadDictionary() {
    SelfUtil.NativeAjax({
        type: "GET",
        url: SelfConfig.domain.apiCrm + '/dict/getUnitedDict.html',
        data: {keys: dictKeys.join()},
        success: initDict,
        fail: initDict
    });
}
var opId = '';
function getOpId(callBack) {
    SelfUtil.NativeAjax({
        type: "GET",
        url: SelfConfig.domain.report + '/report/getEncodeOpId.html',
        data: {},
        success: function (data) {
            data && (data = JSON.parse(data));
            if (data && data.code === 0 && data.data) {
                opId = data.data;
                callBack && callBack();
            }
        }
    });
}

function initDict(data) {
    data && (data = JSON.parse(data));
    var dicData = null;
    if (data && data.code === 0) {
        dicData = data.data;
    }

    dictKeys.forEach(function (e) {
        var dictJson = dicData && dicData[e];

        if (window.localStorage) {
            if (!dictJson) {
                dictJson = localStorage[e];
            } else {
                localStorage[e] = dictJson;
            }
        }
        dictJson = dictJson || "[]";
        dictJson = JSON.parse(dictJson);

        var initFun = initDictFun[e];
        initFun ? initFun(dictJson) : initDictFun.defaultFun(e, dictJson);
    });

}

var initDictFun = function () {
    function defaultFun(key, data) {
        DICTIONARY[key] = data.map(function (e) {
            return {id: isNaN(e.code) ? e.code : +e.code, name: e.name};
        });
        DICTIONARY[key + 'KV'] = getKV(DICTIONARY[key]);
    }

    function expressCompanies(data) {
        DICTIONARY.expressCompanies = data;
        DICTIONARY.expressCompaniesKV = getKV(DICTIONARY.expressCompanies);
    }

    function suppliers(data) {
        DICTIONARY.supplier = data.map(function (e) {
            return {id: +e.supplierId, name: e.supplierName};
        });
        DICTIONARY.supplierKV = getKV(DICTIONARY.supplier);
    }

    function sourceBatch(data) {
        CHANNEL.sourceBatch = data;
        CHANNEL.sourceBatchKV = getKV(CHANNEL.sourceBatch);
        CHANNEL.sourceBatch.forEach(function (e) {
            var g = CHANNEL.channel.find(function (f) {
                return f.id === e.channelId;
            });
            if (!g) {
                g = {
                    id: +e.channelId,
                    name: e.channelName,
                    channelTypeId: +e.channelTypeId,
                    channelTypeName: e.channelTypeName,
                    sourceBatch: []
                };
                CHANNEL.channel.push(g);
            }
            g.sourceBatch.push(e);
        });

        CHANNEL.channel.sort(compare);
        CHANNEL.channelKV = getKV(CHANNEL.channel);

        CHANNEL.channel.forEach(function (e) {
            var g = CHANNEL.channelType.find(function (f) {
                return f.id === e.channelTypeId;
            });
            if (!g) {
                g = {id: +e.channelTypeId, name: e.channelTypeName, channel: []};
                CHANNEL.channelType.push(g);
            }
            g.channel.push(e);
        });
        CHANNEL.channelType.sort(compare);
        CHANNEL.channelTypeKV = getKV(CHANNEL.channelType);
        var tmp = {};
        CHANNEL.sourceBatch.forEach(function (e) {
            if (CHANNEL.sourceBatchSelect.indexOf(e.id) < 0) {
                return;
            }
            if (!tmp[e.channelTypeId]) {
                tmp[e.channelTypeId] = {id: +e.channelTypeId, name: e.channelTypeName, channel: []};
                CHANNEL.channelTypeSelect.push(tmp[e.channelTypeId]);
            }
            tmp[e.channelTypeId].channel.push({
                id: +e.channelId,
                name: e.channelName,
                sourceBatchId: +e.id,
                sourceBatchName: e.name
            });
        });
    }

    function sycCity(data) {
        DICTIONARY.sycCity = data;
        DICTIONARY.sycCityKV = {};
        data.forEach(function (e) {
            DICTIONARY.sycCityKV[e.cityId] = e.suppliers;
        });
        AREA.currentCity = DICTIONARY.sycCity.map(function (e) {
            return {id: e.cityId, name: e.name, provinceId: e.provinceId, provinceName: AREA.provinceKV[e.provinceId]};
        });
    }

    function reviewFeedback(data) {
        DICTIONARY.reviewFeedback = data;
    }

    function compare(a, b) {
        return a.id - b.id;
    }


    return {
        defaultFun: defaultFun,
        suppliers: suppliers,
        sourceBatch: sourceBatch,
        sycCity: sycCity,
        expressCompanies: expressCompanies,
        reviewFeedback: reviewFeedback
    };
}();

function getKV(list) {
    var kv = {};
    list.forEach(function (e) {
        kv[e.id] = e.name;
    });
    return kv;
}

function getObject(kv) {
    var list = [];
    for (var i in kv) {
        if (kv.hasOwnProperty(i)) {
            list.push({id: isNaN(i) ? i : +i, name: kv[i]});
        }
    }
    return list;
}
