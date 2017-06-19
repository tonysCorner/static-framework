var AREA = function () {
    var provinceKV = {
        "1": "北京市",
        "2": "天津市",
        "3": "上海市",
        "4": "重庆市",
        "5": "河北省",
        "6": "山西省",
        "7": "台湾省",
        "8": "辽宁省",
        "9": "吉林省",
        "10": "黑龙江省",
        "11": "江苏省",
        "12": "浙江省",
        "13": "安徽省",
        "14": "福建省",
        "15": "江西省",
        "16": "山东省",
        "17": "河南省",
        "18": "湖北省",
        "19": "湖南省",
        "20": "广东省",
        "21": "甘肃省",
        "22": "四川省",
        "23": "贵州省",
        "24": "海南省",
        "25": "云南省",
        "26": "青海省",
        "27": "陕西省",
        "28": "广西壮族自治区",
        "29": "西藏自治区",
        "30": "宁夏回族自治区",
        "31": "新疆维吾尔自治区",
        "32": "内蒙古自治区",
        "33": "澳门特别行政区",
        "34": "香港特别行政区"
    };
    var province = [{"name": "北京市", "id": 1}, {"name": "天津市", "id": 2}, {"name": "上海市", "id": 3}, {
        "name": "重庆市",
        "id": 4
    }, {"name": "河北省", "id": 5}, {"name": "山西省", "id": 6}, {"name": "台湾省", "id": 7}, {
        "name": "辽宁省",
        "id": 8
    }, {"name": "吉林省", "id": 9}, {"name": "黑龙江省", "id": 10}, {"name": "江苏省", "id": 11}, {
        "name": "浙江省",
        "id": 12
    }, {"name": "安徽省", "id": 13}, {"name": "福建省", "id": 14}, {"name": "江西省", "id": 15}, {
        "name": "山东省",
        "id": 16
    }, {"name": "河南省", "id": 17}, {"name": "湖北省", "id": 18}, {"name": "湖南省", "id": 19}, {
        "name": "广东省",
        "id": 20
    }, {"name": "甘肃省", "id": 21}, {"name": "四川省", "id": 22}, {"name": "贵州省", "id": 23}, {
        "name": "海南省",
        "id": 24
    }, {"name": "云南省", "id": 25}, {"name": "青海省", "id": 26}, {"name": "陕西省", "id": 27}, {
        "name": "广西壮族自治区",
        "id": 28
    }, {"name": "西藏自治区", "id": 29}, {"name": "宁夏回族自治区", "id": 30}, {"name": "新疆维吾尔自治区", "id": 31}, {
        "name": "内蒙古自治区",
        "id": 32
    }, {"name": "澳门特别行政区", "id": 33}, {"name": "香港特别行政区", "id": 34}];

    var cityKV = {
        "1": "北京市",
        "2": "天津市",
        "3": "上海市",
        "4": "重庆市",
        "5": "石家庄市",
        "6": "唐山市",
        "7": "秦皇岛市",
        "8": "邯郸市",
        "9": "邢台市",
        "10": "保定市",
        "11": "张家口市",
        "12": "承德市",
        "13": "沧州市",
        "14": "廊坊市",
        "15": "衡水市",
        "16": "太原市",
        "17": "大同市",
        "18": "阳泉市",
        "19": "长治市",
        "20": "晋城市",
        "21": "朔州市",
        "22": "晋中市",
        "23": "运城市",
        "24": "忻州市",
        "25": "临汾市",
        "26": "吕梁市",
        "27": "台北市",
        "28": "高雄市",
        "29": "基隆市",
        "30": "台中市",
        "31": "台南市",
        "32": "新竹市",
        "33": "嘉义市",
        "34": "台北县",
        "35": "宜兰县",
        "36": "桃园县",
        "37": "新竹县",
        "38": "苗栗县",
        "39": "台中县",
        "40": "彰化县",
        "41": "南投县",
        "42": "云林县",
        "43": "嘉义县",
        "44": "台南县",
        "45": "高雄县",
        "46": "屏东县",
        "47": "澎湖县",
        "48": "台东县",
        "49": "花莲县",
        "50": "沈阳市",
        "51": "大连市",
        "52": "鞍山市",
        "53": "抚顺市",
        "54": "本溪市",
        "55": "丹东市",
        "56": "锦州市",
        "57": "营口市",
        "58": "阜新市",
        "59": "辽阳市",
        "60": "盘锦市",
        "61": "铁岭市",
        "62": "朝阳市",
        "63": "葫芦岛市",
        "64": "长春市",
        "65": "吉林市",
        "66": "四平市",
        "67": "辽源市",
        "68": "通化市",
        "69": "白山市",
        "70": "松原市",
        "71": "白城市",
        "72": "延边朝鲜族自治州",
        "73": "哈尔滨市",
        "74": "齐齐哈尔市",
        "75": "鹤岗市",
        "76": "双鸭山市",
        "77": "鸡西市",
        "78": "大庆市",
        "79": "伊春市",
        "80": "牡丹江市",
        "81": "佳木斯市",
        "82": "七台河市",
        "83": "黑河市",
        "84": "绥化市",
        "85": "大兴安岭地区",
        "86": "南京市",
        "87": "无锡市",
        "88": "徐州市",
        "89": "常州市",
        "90": "苏州市",
        "91": "南通市",
        "92": "连云港市",
        "93": "淮安市",
        "94": "盐城市",
        "95": "扬州市",
        "96": "镇江市",
        "97": "泰州市",
        "98": "宿迁市",
        "99": "杭州市",
        "100": "宁波市",
        "101": "温州市",
        "102": "嘉兴市",
        "103": "湖州市",
        "104": "绍兴市",
        "105": "金华市",
        "106": "衢州市",
        "107": "舟山市",
        "108": "台州市",
        "109": "丽水市",
        "110": "合肥市",
        "111": "芜湖市",
        "112": "蚌埠市",
        "113": "淮南市",
        "114": "马鞍山市",
        "115": "淮北市",
        "116": "铜陵市",
        "117": "安庆市",
        "118": "黄山市",
        "119": "滁州市",
        "120": "阜阳市",
        "121": "宿州市",
        "122": "巢湖市",
        "123": "六安市",
        "124": "亳州市",
        "125": "池州市",
        "126": "宣城市",
        "127": "福州市",
        "128": "厦门市",
        "129": "莆田市",
        "130": "三明市",
        "131": "泉州市",
        "132": "漳州市",
        "133": "南平市",
        "134": "龙岩市",
        "135": "宁德市",
        "136": "南昌市",
        "137": "景德镇市",
        "138": "萍乡市",
        "139": "九江市",
        "140": "新余市",
        "141": "鹰潭市",
        "142": "赣州市",
        "143": "吉安市",
        "144": "宜春市",
        "145": "抚州市",
        "146": "上饶市",
        "147": "济南市",
        "148": "青岛市",
        "149": "淄博市",
        "150": "枣庄市",
        "151": "东营市",
        "152": "烟台市",
        "153": "潍坊市",
        "154": "济宁市",
        "155": "泰安市",
        "156": "威海市",
        "157": "日照市",
        "158": "莱芜市",
        "159": "临沂市",
        "160": "德州市",
        "161": "聊城市",
        "162": "滨州市",
        "163": "菏泽市",
        "164": "郑州市",
        "165": "开封市",
        "166": "洛阳市",
        "167": "平顶山市",
        "168": "安阳市",
        "169": "鹤壁市",
        "170": "新乡市",
        "171": "焦作市",
        "172": "濮阳市",
        "173": "许昌市",
        "174": "漯河市",
        "175": "三门峡市",
        "176": "南阳市",
        "177": "商丘市",
        "178": "信阳市",
        "179": "周口市",
        "180": "驻马店市",
        "181": "济源市",
        "182": "武汉市",
        "183": "黄石市",
        "184": "十堰市",
        "185": "荆州市",
        "186": "宜昌市",
        "187": "襄樊市",
        "188": "鄂州市",
        "189": "荆门市",
        "190": "孝感市",
        "191": "黄冈市",
        "192": "咸宁市",
        "193": "随州市",
        "194": "仙桃市",
        "195": "天门市",
        "196": "潜江市",
        "197": "神农架林区",
        "198": "恩施土家族苗族自治州",
        "199": "长沙市",
        "200": "株洲市",
        "201": "湘潭市",
        "202": "衡阳市",
        "203": "邵阳市",
        "204": "岳阳市",
        "205": "常德市",
        "206": "张家界市",
        "207": "益阳市",
        "208": "郴州市",
        "209": "永州市",
        "210": "怀化市",
        "211": "娄底市",
        "212": "湘西土家族苗族自治州",
        "213": "广州市",
        "214": "深圳市",
        "215": "珠海市",
        "216": "汕头市",
        "217": "韶关市",
        "218": "佛山市",
        "219": "江门市",
        "220": "湛江市",
        "221": "茂名市",
        "222": "肇庆市",
        "223": "惠州市",
        "224": "梅州市",
        "225": "汕尾市",
        "226": "河源市",
        "227": "阳江市",
        "228": "清远市",
        "229": "东莞市",
        "230": "中山市",
        "231": "潮州市",
        "232": "揭阳市",
        "233": "云浮市",
        "234": "兰州市",
        "235": "金昌市",
        "236": "白银市",
        "237": "天水市",
        "238": "嘉峪关市",
        "239": "武威市",
        "240": "张掖市",
        "241": "平凉市",
        "242": "酒泉市",
        "243": "庆阳市",
        "244": "定西市",
        "245": "陇南市",
        "246": "临夏回族自治州",
        "247": "甘南藏族自治州",
        "248": "成都市",
        "249": "自贡市",
        "250": "攀枝花市",
        "251": "泸州市",
        "252": "德阳市",
        "253": "绵阳市",
        "254": "广元市",
        "255": "遂宁市",
        "256": "内江市",
        "257": "乐山市",
        "258": "南充市",
        "259": "眉山市",
        "260": "宜宾市",
        "261": "广安市",
        "262": "达州市",
        "263": "雅安市",
        "264": "巴中市",
        "265": "资阳市",
        "266": "阿坝藏族羌族自治州",
        "267": "甘孜藏族自治州",
        "268": "凉山彝族自治州",
        "269": "贵阳市",
        "270": "六盘水市",
        "271": "遵义市",
        "272": "安顺市",
        "273": "铜仁地区",
        "274": "毕节地区",
        "275": "黔西南布依族苗族自治州",
        "276": "黔东南苗族侗族自治州",
        "277": "黔南布依族苗族自治州",
        "278": "海口市",
        "279": "三亚市",
        "280": "五指山市",
        "281": "琼海市",
        "282": "儋州市",
        "283": "文昌市",
        "284": "万宁市",
        "285": "东方市",
        "286": "澄迈县",
        "287": "定安县",
        "288": "屯昌县",
        "289": "临高县",
        "290": "白沙黎族自治县",
        "291": "昌江黎族自治县",
        "292": "乐东黎族自治县",
        "293": "陵水黎族自治县",
        "294": "保亭黎族苗族自治县",
        "295": "琼中黎族苗族自治县",
        "296": "昆明市",
        "297": "曲靖市",
        "298": "玉溪市",
        "299": "保山市",
        "300": "昭通市",
        "301": "丽江市",
        "302": "思茅市",
        "303": "临沧市",
        "304": "文山壮族苗族自治州",
        "305": "红河哈尼族彝族自治州",
        "306": "西双版纳傣族自治州",
        "307": "楚雄彝族自治州",
        "308": "大理白族自治州",
        "309": "德宏傣族景颇族自治州",
        "310": "怒江傈傈族自治州",
        "311": "迪庆藏族自治州",
        "312": "西宁市",
        "313": "海东地区",
        "314": "海北藏族自治州",
        "315": "黄南藏族自治州",
        "316": "海南藏族自治州",
        "317": "果洛藏族自治州",
        "318": "玉树藏族自治州",
        "319": "海西蒙古族藏族自治州",
        "320": "西安市",
        "321": "铜川市",
        "322": "宝鸡西市",
        "323": "咸阳市",
        "324": "渭南市",
        "325": "延安市",
        "326": "汉中市",
        "327": "榆林市",
        "328": "安康市",
        "329": "商洛市",
        "330": "南宁市",
        "331": "柳州市",
        "332": "桂林市",
        "333": "梧州市",
        "334": "北海市",
        "335": "防城港市",
        "336": "钦州市",
        "337": "贵港市",
        "338": "玉林市",
        "339": "百色市",
        "340": "贺州市",
        "341": "河池市",
        "342": "来宾市",
        "343": "崇左市",
        "344": "拉萨市",
        "345": "那曲地区",
        "346": "昌都地区",
        "347": "山南地区",
        "348": "日喀则地区",
        "349": "阿里地区",
        "350": "林芝地区",
        "351": "银川市",
        "352": "石嘴山市",
        "353": "吴忠市",
        "354": "固原市",
        "355": "中卫市",
        "356": "乌鲁木齐市",
        "357": "克拉玛依市",
        "358": "石河子市　",
        "359": "阿拉尔市",
        "360": "图木舒克市",
        "361": "五家渠市",
        "362": "吐鲁番市",
        "363": "阿克苏市",
        "364": "喀什市",
        "365": "哈密市",
        "366": "和田市",
        "367": "阿图什市",
        "368": "库尔勒市",
        "369": "昌吉市　",
        "370": "阜康市",
        "371": "米泉市",
        "372": "博乐市",
        "373": "伊宁市",
        "374": "奎屯市",
        "375": "塔城市",
        "376": "乌苏市",
        "377": "阿勒泰市",
        "378": "呼和浩特市",
        "379": "包头市",
        "380": "乌海市",
        "381": "赤峰市",
        "382": "通辽市",
        "383": "鄂尔多斯市",
        "384": "呼伦贝尔市",
        "385": "巴彦淖尔市",
        "386": "乌兰察布市",
        "387": "锡林郭勒盟",
        "388": "兴安盟",
        "389": "阿拉善盟",
        "390": "澳门特别行政区",
        "391": "香港特别行政区"
    };

    var city = [{"id": 1, "name": "北京市", "provinceId": 1, "status": 0, "provinceName": "北京市"}, {
        "id": 2,
        "name": "天津市",
        "provinceId": 2,
        "status": 0,
        "provinceName": "天津市"
    }, {"id": 3, "name": "上海市", "provinceId": 3, "status": 0, "provinceName": "上海市"}, {
        "id": 4,
        "name": "重庆市",
        "provinceId": 4,
        "status": 0,
        "provinceName": "重庆市"
    }, {"id": 5, "name": "石家庄市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 6,
        "name": "唐山市",
        "provinceId": 5,
        "status": 0,
        "provinceName": "河北省"
    }, {"id": 7, "name": "秦皇岛市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 8,
        "name": "邯郸市",
        "provinceId": 5,
        "status": 0,
        "provinceName": "河北省"
    }, {"id": 9, "name": "邢台市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 10,
        "name": "保定市",
        "provinceId": 5,
        "status": 0,
        "provinceName": "河北省"
    }, {"id": 11, "name": "张家口市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 12,
        "name": "承德市",
        "provinceId": 5,
        "status": 0,
        "provinceName": "河北省"
    }, {"id": 13, "name": "沧州市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 14,
        "name": "廊坊市",
        "provinceId": 5,
        "status": 0,
        "provinceName": "河北省"
    }, {"id": 15, "name": "衡水市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
        "id": 16,
        "name": "太原市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 17, "name": "大同市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
        "id": 18,
        "name": "阳泉市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 19, "name": "长治市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
        "id": 20,
        "name": "晋城市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 21, "name": "朔州市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
        "id": 22,
        "name": "晋中市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 23, "name": "运城市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
        "id": 24,
        "name": "忻州市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 25, "name": "临汾市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
        "id": 26,
        "name": "吕梁市",
        "provinceId": 6,
        "status": 0,
        "provinceName": "山西省"
    }, {"id": 27, "name": "台北市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 28,
        "name": "高雄市",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 29, "name": "基隆市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 30,
        "name": "台中市",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 31, "name": "台南市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 32,
        "name": "新竹市",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 33, "name": "嘉义市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 34,
        "name": "台北县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 35, "name": "宜兰县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 36,
        "name": "桃园县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 37, "name": "新竹县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 38,
        "name": "苗栗县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 39, "name": "台中县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 40,
        "name": "彰化县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 41, "name": "南投县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 42,
        "name": "云林县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 43, "name": "嘉义县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 44,
        "name": "台南县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 45, "name": "高雄县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 46,
        "name": "屏东县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 47, "name": "澎湖县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 48,
        "name": "台东县",
        "provinceId": 7,
        "status": 0,
        "provinceName": "台湾省"
    }, {"id": 49, "name": "花莲县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
        "id": 50,
        "name": "沈阳市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 51, "name": "大连市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 52,
        "name": "鞍山市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 53, "name": "抚顺市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 54,
        "name": "本溪市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 55, "name": "丹东市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 56,
        "name": "锦州市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 57, "name": "营口市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 58,
        "name": "阜新市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 59, "name": "辽阳市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 60,
        "name": "盘锦市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 61, "name": "铁岭市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 62,
        "name": "朝阳市",
        "provinceId": 8,
        "status": 0,
        "provinceName": "辽宁省"
    }, {"id": 63, "name": "葫芦岛市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
        "id": 64,
        "name": "长春市",
        "provinceId": 9,
        "status": 0,
        "provinceName": "吉林省"
    }, {"id": 65, "name": "吉林市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
        "id": 66,
        "name": "四平市",
        "provinceId": 9,
        "status": 0,
        "provinceName": "吉林省"
    }, {"id": 67, "name": "辽源市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
        "id": 68,
        "name": "通化市",
        "provinceId": 9,
        "status": 0,
        "provinceName": "吉林省"
    }, {"id": 69, "name": "白山市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
        "id": 70,
        "name": "松原市",
        "provinceId": 9,
        "status": 0,
        "provinceName": "吉林省"
    }, {"id": 71, "name": "白城市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
        "id": 72,
        "name": "延边朝鲜族自治州",
        "provinceId": 9,
        "status": 0,
        "provinceName": "吉林省"
    }, {"id": 73, "name": "哈尔滨市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 74,
        "name": "齐齐哈尔市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 75, "name": "鹤岗市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 76,
        "name": "双鸭山市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 77, "name": "鸡西市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 78,
        "name": "大庆市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 79, "name": "伊春市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 80,
        "name": "牡丹江市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 81, "name": "佳木斯市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 82,
        "name": "七台河市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 83, "name": "黑河市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 84,
        "name": "绥化市",
        "provinceId": 10,
        "status": 0,
        "provinceName": "黑龙江省"
    }, {"id": 85, "name": "大兴安岭地区", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
        "id": 86,
        "name": "南京市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 87, "name": "无锡市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 88,
        "name": "徐州市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 89, "name": "常州市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 90,
        "name": "苏州市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 91, "name": "南通市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 92,
        "name": "连云港市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 93, "name": "淮安市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 94,
        "name": "盐城市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 95, "name": "扬州市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 96,
        "name": "镇江市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 97, "name": "泰州市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
        "id": 98,
        "name": "宿迁市",
        "provinceId": 11,
        "status": 0,
        "provinceName": "江苏省"
    }, {"id": 99, "name": "杭州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 100,
        "name": "宁波市",
        "provinceId": 12,
        "status": 0,
        "provinceName": "浙江省"
    }, {"id": 101, "name": "温州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 102,
        "name": "嘉兴市",
        "provinceId": 12,
        "status": 0,
        "provinceName": "浙江省"
    }, {"id": 103, "name": "湖州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 104,
        "name": "绍兴市",
        "provinceId": 12,
        "status": 0,
        "provinceName": "浙江省"
    }, {"id": 105, "name": "金华市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 106,
        "name": "衢州市",
        "provinceId": 12,
        "status": 0,
        "provinceName": "浙江省"
    }, {"id": 107, "name": "舟山市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 108,
        "name": "台州市",
        "provinceId": 12,
        "status": 0,
        "provinceName": "浙江省"
    }, {"id": 109, "name": "丽水市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
        "id": 110,
        "name": "合肥市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 111, "name": "芜湖市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 112,
        "name": "蚌埠市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 113, "name": "淮南市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 114,
        "name": "马鞍山市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 115, "name": "淮北市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 116,
        "name": "铜陵市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 117, "name": "安庆市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 118,
        "name": "黄山市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 119, "name": "滁州市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 120,
        "name": "阜阳市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 121, "name": "宿州市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 122,
        "name": "巢湖市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 123, "name": "六安市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 124,
        "name": "亳州市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 125, "name": "池州市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
        "id": 126,
        "name": "宣城市",
        "provinceId": 13,
        "status": 0,
        "provinceName": "安徽省"
    }, {"id": 127, "name": "福州市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
        "id": 128,
        "name": "厦门市",
        "provinceId": 14,
        "status": 0,
        "provinceName": "福建省"
    }, {"id": 129, "name": "莆田市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
        "id": 130,
        "name": "三明市",
        "provinceId": 14,
        "status": 0,
        "provinceName": "福建省"
    }, {"id": 131, "name": "泉州市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
        "id": 132,
        "name": "漳州市",
        "provinceId": 14,
        "status": 0,
        "provinceName": "福建省"
    }, {"id": 133, "name": "南平市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
        "id": 134,
        "name": "龙岩市",
        "provinceId": 14,
        "status": 0,
        "provinceName": "福建省"
    }, {"id": 135, "name": "宁德市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
        "id": 136,
        "name": "南昌市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 137, "name": "景德镇市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
        "id": 138,
        "name": "萍乡市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 139, "name": "九江市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
        "id": 140,
        "name": "新余市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 141, "name": "鹰潭市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
        "id": 142,
        "name": "赣州市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 143, "name": "吉安市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
        "id": 144,
        "name": "宜春市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 145, "name": "抚州市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
        "id": 146,
        "name": "上饶市",
        "provinceId": 15,
        "status": 0,
        "provinceName": "江西省"
    }, {"id": 147, "name": "济南市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 148,
        "name": "青岛市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 149, "name": "淄博市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 150,
        "name": "枣庄市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 151, "name": "东营市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 152,
        "name": "烟台市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 153, "name": "潍坊市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 154,
        "name": "济宁市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 155, "name": "泰安市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 156,
        "name": "威海市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 157, "name": "日照市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 158,
        "name": "莱芜市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 159, "name": "临沂市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 160,
        "name": "德州市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 161, "name": "聊城市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 162,
        "name": "滨州市",
        "provinceId": 16,
        "status": 0,
        "provinceName": "山东省"
    }, {"id": 163, "name": "菏泽市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
        "id": 164,
        "name": "郑州市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 165, "name": "开封市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 166,
        "name": "洛阳市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 167, "name": "平顶山市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 168,
        "name": "安阳市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 169, "name": "鹤壁市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 170,
        "name": "新乡市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 171, "name": "焦作市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 172,
        "name": "濮阳市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 173, "name": "许昌市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 174,
        "name": "漯河市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 175, "name": "三门峡市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 176,
        "name": "南阳市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 177, "name": "商丘市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 178,
        "name": "信阳市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 179, "name": "周口市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 180,
        "name": "驻马店市",
        "provinceId": 17,
        "status": 0,
        "provinceName": "河南省"
    }, {"id": 181, "name": "济源市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
        "id": 182,
        "name": "武汉市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 183, "name": "黄石市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 184,
        "name": "十堰市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 185, "name": "荆州市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 186,
        "name": "宜昌市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 187, "name": "襄樊市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 188,
        "name": "鄂州市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 189, "name": "荆门市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 190,
        "name": "孝感市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 191, "name": "黄冈市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 192,
        "name": "咸宁市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 193, "name": "随州市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 194,
        "name": "仙桃市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 195, "name": "天门市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 196,
        "name": "潜江市",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 197, "name": "神农架林区", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
        "id": 198,
        "name": "恩施土家族苗族自治州",
        "provinceId": 18,
        "status": 0,
        "provinceName": "湖北省"
    }, {"id": 199, "name": "长沙市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 200,
        "name": "株洲市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 201, "name": "湘潭市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 202,
        "name": "衡阳市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 203, "name": "邵阳市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 204,
        "name": "岳阳市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 205, "name": "常德市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 206,
        "name": "张家界市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 207, "name": "益阳市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 208,
        "name": "郴州市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 209, "name": "永州市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 210,
        "name": "怀化市",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 211, "name": "娄底市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
        "id": 212,
        "name": "湘西土家族苗族自治州",
        "provinceId": 19,
        "status": 0,
        "provinceName": "湖南省"
    }, {"id": 213, "name": "广州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 214,
        "name": "深圳市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 215, "name": "珠海市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 216,
        "name": "汕头市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 217, "name": "韶关市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 218,
        "name": "佛山市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 219, "name": "江门市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 220,
        "name": "湛江市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 221, "name": "茂名市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 222,
        "name": "肇庆市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 223, "name": "惠州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 224,
        "name": "梅州市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 225, "name": "汕尾市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 226,
        "name": "河源市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 227, "name": "阳江市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 228,
        "name": "清远市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 229, "name": "东莞市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 230,
        "name": "中山市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 231, "name": "潮州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 232,
        "name": "揭阳市",
        "provinceId": 20,
        "status": 0,
        "provinceName": "广东省"
    }, {"id": 233, "name": "云浮市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
        "id": 234,
        "name": "兰州市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 235, "name": "金昌市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 236,
        "name": "白银市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 237, "name": "天水市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 238,
        "name": "嘉峪关市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 239, "name": "武威市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 240,
        "name": "张掖市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 241, "name": "平凉市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 242,
        "name": "酒泉市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 243, "name": "庆阳市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 244,
        "name": "定西市",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 245, "name": "陇南市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 246,
        "name": "临夏回族自治州",
        "provinceId": 21,
        "status": 0,
        "provinceName": "甘肃省"
    }, {"id": 247, "name": "甘南藏族自治州", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
        "id": 248,
        "name": "成都市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 249, "name": "自贡市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 250,
        "name": "攀枝花市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 251, "name": "泸州市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 252,
        "name": "德阳市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 253, "name": "绵阳市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 254,
        "name": "广元市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 255, "name": "遂宁市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 256,
        "name": "内江市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 257, "name": "乐山市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 258,
        "name": "南充市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 259, "name": "眉山市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 260,
        "name": "宜宾市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 261, "name": "广安市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 262,
        "name": "达州市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 263, "name": "雅安市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 264,
        "name": "巴中市",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 265, "name": "资阳市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 266,
        "name": "阿坝藏族羌族自治州",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 267, "name": "甘孜藏族自治州", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
        "id": 268,
        "name": "凉山彝族自治州",
        "provinceId": 22,
        "status": 0,
        "provinceName": "四川省"
    }, {"id": 269, "name": "贵阳市", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
        "id": 270,
        "name": "六盘水市",
        "provinceId": 23,
        "status": 0,
        "provinceName": "贵州省"
    }, {"id": 271, "name": "遵义市", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
        "id": 272,
        "name": "安顺市",
        "provinceId": 23,
        "status": 0,
        "provinceName": "贵州省"
    }, {"id": 273, "name": "铜仁地区", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
        "id": 274,
        "name": "毕节地区",
        "provinceId": 23,
        "status": 0,
        "provinceName": "贵州省"
    }, {"id": 275, "name": "黔西南布依族苗族自治州", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
        "id": 276,
        "name": "黔东南苗族侗族自治州",
        "provinceId": 23,
        "status": 0,
        "provinceName": "贵州省"
    }, {"id": 277, "name": "黔南布依族苗族自治州", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
        "id": 278,
        "name": "海口市",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 279, "name": "三亚市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 280,
        "name": "五指山市",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 281, "name": "琼海市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 282,
        "name": "儋州市",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 283, "name": "文昌市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 284,
        "name": "万宁市",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 285, "name": "东方市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 286,
        "name": "澄迈县",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 287, "name": "定安县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 288,
        "name": "屯昌县",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 289, "name": "临高县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 290,
        "name": "白沙黎族自治县",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 291, "name": "昌江黎族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 292,
        "name": "乐东黎族自治县",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 293, "name": "陵水黎族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 294,
        "name": "保亭黎族苗族自治县",
        "provinceId": 24,
        "status": 0,
        "provinceName": "海南省"
    }, {"id": 295, "name": "琼中黎族苗族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
        "id": 296,
        "name": "昆明市",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 297, "name": "曲靖市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 298,
        "name": "玉溪市",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 299, "name": "保山市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 300,
        "name": "昭通市",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 301, "name": "丽江市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 302,
        "name": "思茅市",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 303, "name": "临沧市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 304,
        "name": "文山壮族苗族自治州",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 305, "name": "红河哈尼族彝族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 306,
        "name": "西双版纳傣族自治州",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 307, "name": "楚雄彝族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 308,
        "name": "大理白族自治州",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 309, "name": "德宏傣族景颇族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 310,
        "name": "怒江傈傈族自治州",
        "provinceId": 25,
        "status": 0,
        "provinceName": "云南省"
    }, {"id": 311, "name": "迪庆藏族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
        "id": 312,
        "name": "西宁市",
        "provinceId": 26,
        "status": 0,
        "provinceName": "青海省"
    }, {"id": 313, "name": "海东地区", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
        "id": 314,
        "name": "海北藏族自治州",
        "provinceId": 26,
        "status": 0,
        "provinceName": "青海省"
    }, {"id": 315, "name": "黄南藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
        "id": 316,
        "name": "海南藏族自治州",
        "provinceId": 26,
        "status": 0,
        "provinceName": "青海省"
    }, {"id": 317, "name": "果洛藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
        "id": 318,
        "name": "玉树藏族自治州",
        "provinceId": 26,
        "status": 0,
        "provinceName": "青海省"
    }, {"id": 319, "name": "海西蒙古族藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
        "id": 320,
        "name": "西安市",
        "provinceId": 27,
        "status": 0,
        "provinceName": "陕西省"
    }, {"id": 321, "name": "铜川市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
        "id": 322,
        "name": "宝鸡西市",
        "provinceId": 27,
        "status": 0,
        "provinceName": "陕西省"
    }, {"id": 323, "name": "咸阳市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
        "id": 324,
        "name": "渭南市",
        "provinceId": 27,
        "status": 0,
        "provinceName": "陕西省"
    }, {"id": 325, "name": "延安市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
        "id": 326,
        "name": "汉中市",
        "provinceId": 27,
        "status": 0,
        "provinceName": "陕西省"
    }, {"id": 327, "name": "榆林市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
        "id": 328,
        "name": "安康市",
        "provinceId": 27,
        "status": 0,
        "provinceName": "陕西省"
    }, {"id": 329, "name": "商洛市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
        "id": 330,
        "name": "南宁市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 331, "name": "柳州市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 332,
        "name": "桂林市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 333, "name": "梧州市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 334,
        "name": "北海市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 335, "name": "防城港市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 336,
        "name": "钦州市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 337, "name": "贵港市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 338,
        "name": "玉林市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 339, "name": "百色市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 340,
        "name": "贺州市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 341, "name": "河池市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 342,
        "name": "来宾市",
        "provinceId": 28,
        "status": 0,
        "provinceName": "广西壮族自治区"
    }, {"id": 343, "name": "崇左市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
        "id": 344,
        "name": "拉萨市",
        "provinceId": 29,
        "status": 0,
        "provinceName": "西藏自治区"
    }, {"id": 345, "name": "那曲地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
        "id": 346,
        "name": "昌都地区",
        "provinceId": 29,
        "status": 0,
        "provinceName": "西藏自治区"
    }, {"id": 347, "name": "山南地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
        "id": 348,
        "name": "日喀则地区",
        "provinceId": 29,
        "status": 0,
        "provinceName": "西藏自治区"
    }, {"id": 349, "name": "阿里地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
        "id": 350,
        "name": "林芝地区",
        "provinceId": 29,
        "status": 0,
        "provinceName": "西藏自治区"
    }, {"id": 351, "name": "银川市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}, {
        "id": 352,
        "name": "石嘴山市",
        "provinceId": 30,
        "status": 0,
        "provinceName": "宁夏回族自治区"
    }, {"id": 353, "name": "吴忠市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}, {
        "id": 354,
        "name": "固原市",
        "provinceId": 30,
        "status": 0,
        "provinceName": "宁夏回族自治区"
    }, {"id": 355, "name": "中卫市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}, {
        "id": 356,
        "name": "乌鲁木齐市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 357, "name": "克拉玛依市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 358,
        "name": "石河子市　",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 359, "name": "阿拉尔市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 360,
        "name": "图木舒克市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 361, "name": "五家渠市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 362,
        "name": "吐鲁番市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 363, "name": "阿克苏市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 364,
        "name": "喀什市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 365, "name": "哈密市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 366,
        "name": "和田市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 367, "name": "阿图什市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 368,
        "name": "库尔勒市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 369, "name": "昌吉市　", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 370,
        "name": "阜康市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 371, "name": "米泉市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 372,
        "name": "博乐市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 373, "name": "伊宁市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 374,
        "name": "奎屯市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 375, "name": "塔城市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 376,
        "name": "乌苏市",
        "provinceId": 31,
        "status": 0,
        "provinceName": "新疆维吾尔自治区"
    }, {"id": 377, "name": "阿勒泰市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
        "id": 378,
        "name": "呼和浩特市",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 379, "name": "包头市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 380,
        "name": "乌海市",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 381, "name": "赤峰市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 382,
        "name": "通辽市",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 383, "name": "鄂尔多斯市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 384,
        "name": "呼伦贝尔市",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 385, "name": "巴彦淖尔市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 386,
        "name": "乌兰察布市",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 387, "name": "锡林郭勒盟", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 388,
        "name": "兴安盟",
        "provinceId": 32,
        "status": 0,
        "provinceName": "内蒙古自治区"
    }, {"id": 389, "name": "阿拉善盟", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
        "id": 390,
        "name": "澳门特别行政区",
        "provinceId": 33,
        "status": 0,
        "provinceName": "澳门特别行政区"
    }, {"id": 391, "name": "香港特别行政区", "provinceId": 34, "status": 0, "provinceName": "香港特别行政区"}];

    var cityGroup = {
        "1": [{"id": 1, "name": "北京市", "provinceId": 1, "status": 0, "provinceName": "北京市"}],
        "2": [{"id": 2, "name": "天津市", "provinceId": 2, "status": 0, "provinceName": "天津市"}],
        "3": [{"id": 3, "name": "上海市", "provinceId": 3, "status": 0, "provinceName": "上海市"}],
        "4": [{"id": 4, "name": "重庆市", "provinceId": 4, "status": 0, "provinceName": "重庆市"}],
        "5": [{"id": 5, "name": "石家庄市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
            "id": 6,
            "name": "唐山市",
            "provinceId": 5,
            "status": 0,
            "provinceName": "河北省"
        }, {"id": 7, "name": "秦皇岛市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
            "id": 8,
            "name": "邯郸市",
            "provinceId": 5,
            "status": 0,
            "provinceName": "河北省"
        }, {"id": 9, "name": "邢台市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
            "id": 10,
            "name": "保定市",
            "provinceId": 5,
            "status": 0,
            "provinceName": "河北省"
        }, {"id": 11, "name": "张家口市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
            "id": 12,
            "name": "承德市",
            "provinceId": 5,
            "status": 0,
            "provinceName": "河北省"
        }, {"id": 13, "name": "沧州市", "provinceId": 5, "status": 0, "provinceName": "河北省"}, {
            "id": 14,
            "name": "廊坊市",
            "provinceId": 5,
            "status": 0,
            "provinceName": "河北省"
        }, {"id": 15, "name": "衡水市", "provinceId": 5, "status": 0, "provinceName": "河北省"}],
        "6": [{"id": 16, "name": "太原市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
            "id": 17,
            "name": "大同市",
            "provinceId": 6,
            "status": 0,
            "provinceName": "山西省"
        }, {"id": 18, "name": "阳泉市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
            "id": 19,
            "name": "长治市",
            "provinceId": 6,
            "status": 0,
            "provinceName": "山西省"
        }, {"id": 20, "name": "晋城市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
            "id": 21,
            "name": "朔州市",
            "provinceId": 6,
            "status": 0,
            "provinceName": "山西省"
        }, {"id": 22, "name": "晋中市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
            "id": 23,
            "name": "运城市",
            "provinceId": 6,
            "status": 0,
            "provinceName": "山西省"
        }, {"id": 24, "name": "忻州市", "provinceId": 6, "status": 0, "provinceName": "山西省"}, {
            "id": 25,
            "name": "临汾市",
            "provinceId": 6,
            "status": 0,
            "provinceName": "山西省"
        }, {"id": 26, "name": "吕梁市", "provinceId": 6, "status": 0, "provinceName": "山西省"}],
        "7": [{"id": 27, "name": "台北市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 28,
            "name": "高雄市",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 29, "name": "基隆市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 30,
            "name": "台中市",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 31, "name": "台南市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 32,
            "name": "新竹市",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 33, "name": "嘉义市", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 34,
            "name": "台北县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 35, "name": "宜兰县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 36,
            "name": "桃园县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 37, "name": "新竹县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 38,
            "name": "苗栗县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 39, "name": "台中县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 40,
            "name": "彰化县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 41, "name": "南投县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 42,
            "name": "云林县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 43, "name": "嘉义县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 44,
            "name": "台南县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 45, "name": "高雄县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 46,
            "name": "屏东县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 47, "name": "澎湖县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}, {
            "id": 48,
            "name": "台东县",
            "provinceId": 7,
            "status": 0,
            "provinceName": "台湾省"
        }, {"id": 49, "name": "花莲县", "provinceId": 7, "status": 0, "provinceName": "台湾省"}],
        "8": [{"id": 50, "name": "沈阳市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 51,
            "name": "大连市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 52, "name": "鞍山市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 53,
            "name": "抚顺市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 54, "name": "本溪市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 55,
            "name": "丹东市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 56, "name": "锦州市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 57,
            "name": "营口市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 58, "name": "阜新市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 59,
            "name": "辽阳市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 60, "name": "盘锦市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 61,
            "name": "铁岭市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }, {"id": 62, "name": "朝阳市", "provinceId": 8, "status": 0, "provinceName": "辽宁省"}, {
            "id": 63,
            "name": "葫芦岛市",
            "provinceId": 8,
            "status": 0,
            "provinceName": "辽宁省"
        }],
        "9": [{"id": 64, "name": "长春市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
            "id": 65,
            "name": "吉林市",
            "provinceId": 9,
            "status": 0,
            "provinceName": "吉林省"
        }, {"id": 66, "name": "四平市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
            "id": 67,
            "name": "辽源市",
            "provinceId": 9,
            "status": 0,
            "provinceName": "吉林省"
        }, {"id": 68, "name": "通化市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
            "id": 69,
            "name": "白山市",
            "provinceId": 9,
            "status": 0,
            "provinceName": "吉林省"
        }, {"id": 70, "name": "松原市", "provinceId": 9, "status": 0, "provinceName": "吉林省"}, {
            "id": 71,
            "name": "白城市",
            "provinceId": 9,
            "status": 0,
            "provinceName": "吉林省"
        }, {"id": 72, "name": "延边朝鲜族自治州", "provinceId": 9, "status": 0, "provinceName": "吉林省"}],
        "10": [{"id": 73, "name": "哈尔滨市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 74,
            "name": "齐齐哈尔市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 75, "name": "鹤岗市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 76,
            "name": "双鸭山市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 77, "name": "鸡西市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 78,
            "name": "大庆市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 79, "name": "伊春市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 80,
            "name": "牡丹江市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 81, "name": "佳木斯市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 82,
            "name": "七台河市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 83, "name": "黑河市", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}, {
            "id": 84,
            "name": "绥化市",
            "provinceId": 10,
            "status": 0,
            "provinceName": "黑龙江省"
        }, {"id": 85, "name": "大兴安岭地区", "provinceId": 10, "status": 0, "provinceName": "黑龙江省"}],
        "11": [{"id": 86, "name": "南京市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 87,
            "name": "无锡市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 88, "name": "徐州市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 89,
            "name": "常州市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 90, "name": "苏州市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 91,
            "name": "南通市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 92, "name": "连云港市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 93,
            "name": "淮安市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 94, "name": "盐城市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 95,
            "name": "扬州市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 96, "name": "镇江市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}, {
            "id": 97,
            "name": "泰州市",
            "provinceId": 11,
            "status": 0,
            "provinceName": "江苏省"
        }, {"id": 98, "name": "宿迁市", "provinceId": 11, "status": 0, "provinceName": "江苏省"}],
        "12": [{"id": 99, "name": "杭州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
            "id": 100,
            "name": "宁波市",
            "provinceId": 12,
            "status": 0,
            "provinceName": "浙江省"
        }, {"id": 101, "name": "温州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
            "id": 102,
            "name": "嘉兴市",
            "provinceId": 12,
            "status": 0,
            "provinceName": "浙江省"
        }, {"id": 103, "name": "湖州市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
            "id": 104,
            "name": "绍兴市",
            "provinceId": 12,
            "status": 0,
            "provinceName": "浙江省"
        }, {"id": 105, "name": "金华市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
            "id": 106,
            "name": "衢州市",
            "provinceId": 12,
            "status": 0,
            "provinceName": "浙江省"
        }, {"id": 107, "name": "舟山市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}, {
            "id": 108,
            "name": "台州市",
            "provinceId": 12,
            "status": 0,
            "provinceName": "浙江省"
        }, {"id": 109, "name": "丽水市", "provinceId": 12, "status": 0, "provinceName": "浙江省"}],
        "13": [{"id": 110, "name": "合肥市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 111,
            "name": "芜湖市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 112, "name": "蚌埠市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 113,
            "name": "淮南市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 114, "name": "马鞍山市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 115,
            "name": "淮北市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 116, "name": "铜陵市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 117,
            "name": "安庆市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 118, "name": "黄山市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 119,
            "name": "滁州市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 120, "name": "阜阳市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 121,
            "name": "宿州市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 122, "name": "巢湖市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 123,
            "name": "六安市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 124, "name": "亳州市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}, {
            "id": 125,
            "name": "池州市",
            "provinceId": 13,
            "status": 0,
            "provinceName": "安徽省"
        }, {"id": 126, "name": "宣城市", "provinceId": 13, "status": 0, "provinceName": "安徽省"}],
        "14": [{"id": 127, "name": "福州市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
            "id": 128,
            "name": "厦门市",
            "provinceId": 14,
            "status": 0,
            "provinceName": "福建省"
        }, {"id": 129, "name": "莆田市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
            "id": 130,
            "name": "三明市",
            "provinceId": 14,
            "status": 0,
            "provinceName": "福建省"
        }, {"id": 131, "name": "泉州市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
            "id": 132,
            "name": "漳州市",
            "provinceId": 14,
            "status": 0,
            "provinceName": "福建省"
        }, {"id": 133, "name": "南平市", "provinceId": 14, "status": 0, "provinceName": "福建省"}, {
            "id": 134,
            "name": "龙岩市",
            "provinceId": 14,
            "status": 0,
            "provinceName": "福建省"
        }, {"id": 135, "name": "宁德市", "provinceId": 14, "status": 0, "provinceName": "福建省"}],
        "15": [{"id": 136, "name": "南昌市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
            "id": 137,
            "name": "景德镇市",
            "provinceId": 15,
            "status": 0,
            "provinceName": "江西省"
        }, {"id": 138, "name": "萍乡市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
            "id": 139,
            "name": "九江市",
            "provinceId": 15,
            "status": 0,
            "provinceName": "江西省"
        }, {"id": 140, "name": "新余市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
            "id": 141,
            "name": "鹰潭市",
            "provinceId": 15,
            "status": 0,
            "provinceName": "江西省"
        }, {"id": 142, "name": "赣州市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
            "id": 143,
            "name": "吉安市",
            "provinceId": 15,
            "status": 0,
            "provinceName": "江西省"
        }, {"id": 144, "name": "宜春市", "provinceId": 15, "status": 0, "provinceName": "江西省"}, {
            "id": 145,
            "name": "抚州市",
            "provinceId": 15,
            "status": 0,
            "provinceName": "江西省"
        }, {"id": 146, "name": "上饶市", "provinceId": 15, "status": 0, "provinceName": "江西省"}],
        "16": [{"id": 147, "name": "济南市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 148,
            "name": "青岛市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 149, "name": "淄博市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 150,
            "name": "枣庄市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 151, "name": "东营市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 152,
            "name": "烟台市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 153, "name": "潍坊市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 154,
            "name": "济宁市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 155, "name": "泰安市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 156,
            "name": "威海市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 157, "name": "日照市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 158,
            "name": "莱芜市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 159, "name": "临沂市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 160,
            "name": "德州市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 161, "name": "聊城市", "provinceId": 16, "status": 0, "provinceName": "山东省"}, {
            "id": 162,
            "name": "滨州市",
            "provinceId": 16,
            "status": 0,
            "provinceName": "山东省"
        }, {"id": 163, "name": "菏泽市", "provinceId": 16, "status": 0, "provinceName": "山东省"}],
        "17": [{"id": 164, "name": "郑州市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 165,
            "name": "开封市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 166, "name": "洛阳市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 167,
            "name": "平顶山市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 168, "name": "安阳市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 169,
            "name": "鹤壁市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 170, "name": "新乡市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 171,
            "name": "焦作市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 172, "name": "濮阳市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 173,
            "name": "许昌市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 174, "name": "漯河市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 175,
            "name": "三门峡市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 176, "name": "南阳市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 177,
            "name": "商丘市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 178, "name": "信阳市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 179,
            "name": "周口市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }, {"id": 180, "name": "驻马店市", "provinceId": 17, "status": 0, "provinceName": "河南省"}, {
            "id": 181,
            "name": "济源市",
            "provinceId": 17,
            "status": 0,
            "provinceName": "河南省"
        }],
        "18": [{"id": 182, "name": "武汉市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 183,
            "name": "黄石市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 184, "name": "十堰市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 185,
            "name": "荆州市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 186, "name": "宜昌市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 187,
            "name": "襄樊市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 188, "name": "鄂州市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 189,
            "name": "荆门市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 190, "name": "孝感市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 191,
            "name": "黄冈市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 192, "name": "咸宁市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 193,
            "name": "随州市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 194, "name": "仙桃市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 195,
            "name": "天门市",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 196, "name": "潜江市", "provinceId": 18, "status": 0, "provinceName": "湖北省"}, {
            "id": 197,
            "name": "神农架林区",
            "provinceId": 18,
            "status": 0,
            "provinceName": "湖北省"
        }, {"id": 198, "name": "恩施土家族苗族自治州", "provinceId": 18, "status": 0, "provinceName": "湖北省"}],
        "19": [{"id": 199, "name": "长沙市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 200,
            "name": "株洲市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 201, "name": "湘潭市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 202,
            "name": "衡阳市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 203, "name": "邵阳市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 204,
            "name": "岳阳市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 205, "name": "常德市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 206,
            "name": "张家界市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 207, "name": "益阳市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 208,
            "name": "郴州市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 209, "name": "永州市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 210,
            "name": "怀化市",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }, {"id": 211, "name": "娄底市", "provinceId": 19, "status": 0, "provinceName": "湖南省"}, {
            "id": 212,
            "name": "湘西土家族苗族自治州",
            "provinceId": 19,
            "status": 0,
            "provinceName": "湖南省"
        }],
        "20": [{"id": 213, "name": "广州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 214,
            "name": "深圳市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 215, "name": "珠海市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 216,
            "name": "汕头市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 217, "name": "韶关市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 218,
            "name": "佛山市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 219, "name": "江门市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 220,
            "name": "湛江市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 221, "name": "茂名市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 222,
            "name": "肇庆市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 223, "name": "惠州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 224,
            "name": "梅州市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 225, "name": "汕尾市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 226,
            "name": "河源市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 227, "name": "阳江市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 228,
            "name": "清远市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 229, "name": "东莞市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 230,
            "name": "中山市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 231, "name": "潮州市", "provinceId": 20, "status": 0, "provinceName": "广东省"}, {
            "id": 232,
            "name": "揭阳市",
            "provinceId": 20,
            "status": 0,
            "provinceName": "广东省"
        }, {"id": 233, "name": "云浮市", "provinceId": 20, "status": 0, "provinceName": "广东省"}],
        "21": [{"id": 234, "name": "兰州市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 235,
            "name": "金昌市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 236, "name": "白银市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 237,
            "name": "天水市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 238, "name": "嘉峪关市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 239,
            "name": "武威市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 240, "name": "张掖市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 241,
            "name": "平凉市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 242, "name": "酒泉市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 243,
            "name": "庆阳市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 244, "name": "定西市", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 245,
            "name": "陇南市",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }, {"id": 246, "name": "临夏回族自治州", "provinceId": 21, "status": 0, "provinceName": "甘肃省"}, {
            "id": 247,
            "name": "甘南藏族自治州",
            "provinceId": 21,
            "status": 0,
            "provinceName": "甘肃省"
        }],
        "22": [{"id": 248, "name": "成都市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 249,
            "name": "自贡市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 250, "name": "攀枝花市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 251,
            "name": "泸州市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 252, "name": "德阳市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 253,
            "name": "绵阳市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 254, "name": "广元市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 255,
            "name": "遂宁市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 256, "name": "内江市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 257,
            "name": "乐山市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 258, "name": "南充市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 259,
            "name": "眉山市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 260, "name": "宜宾市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 261,
            "name": "广安市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 262, "name": "达州市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 263,
            "name": "雅安市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 264, "name": "巴中市", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 265,
            "name": "资阳市",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 266, "name": "阿坝藏族羌族自治州", "provinceId": 22, "status": 0, "provinceName": "四川省"}, {
            "id": 267,
            "name": "甘孜藏族自治州",
            "provinceId": 22,
            "status": 0,
            "provinceName": "四川省"
        }, {"id": 268, "name": "凉山彝族自治州", "provinceId": 22, "status": 0, "provinceName": "四川省"}],
        "23": [{"id": 269, "name": "贵阳市", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
            "id": 270,
            "name": "六盘水市",
            "provinceId": 23,
            "status": 0,
            "provinceName": "贵州省"
        }, {"id": 271, "name": "遵义市", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
            "id": 272,
            "name": "安顺市",
            "provinceId": 23,
            "status": 0,
            "provinceName": "贵州省"
        }, {"id": 273, "name": "铜仁地区", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
            "id": 274,
            "name": "毕节地区",
            "provinceId": 23,
            "status": 0,
            "provinceName": "贵州省"
        }, {"id": 275, "name": "黔西南布依族苗族自治州", "provinceId": 23, "status": 0, "provinceName": "贵州省"}, {
            "id": 276,
            "name": "黔东南苗族侗族自治州",
            "provinceId": 23,
            "status": 0,
            "provinceName": "贵州省"
        }, {"id": 277, "name": "黔南布依族苗族自治州", "provinceId": 23, "status": 0, "provinceName": "贵州省"}],
        "24": [{"id": 278, "name": "海口市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 279,
            "name": "三亚市",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 280, "name": "五指山市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 281,
            "name": "琼海市",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 282, "name": "儋州市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 283,
            "name": "文昌市",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 284, "name": "万宁市", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 285,
            "name": "东方市",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 286, "name": "澄迈县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 287,
            "name": "定安县",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 288, "name": "屯昌县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 289,
            "name": "临高县",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 290, "name": "白沙黎族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 291,
            "name": "昌江黎族自治县",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 292, "name": "乐东黎族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 293,
            "name": "陵水黎族自治县",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }, {"id": 294, "name": "保亭黎族苗族自治县", "provinceId": 24, "status": 0, "provinceName": "海南省"}, {
            "id": 295,
            "name": "琼中黎族苗族自治县",
            "provinceId": 24,
            "status": 0,
            "provinceName": "海南省"
        }],
        "25": [{"id": 296, "name": "昆明市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 297,
            "name": "曲靖市",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 298, "name": "玉溪市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 299,
            "name": "保山市",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 300, "name": "昭通市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 301,
            "name": "丽江市",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 302, "name": "思茅市", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 303,
            "name": "临沧市",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 304, "name": "文山壮族苗族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 305,
            "name": "红河哈尼族彝族自治州",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 306, "name": "西双版纳傣族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 307,
            "name": "楚雄彝族自治州",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 308, "name": "大理白族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 309,
            "name": "德宏傣族景颇族自治州",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }, {"id": 310, "name": "怒江傈傈族自治州", "provinceId": 25, "status": 0, "provinceName": "云南省"}, {
            "id": 311,
            "name": "迪庆藏族自治州",
            "provinceId": 25,
            "status": 0,
            "provinceName": "云南省"
        }],
        "26": [{"id": 312, "name": "西宁市", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
            "id": 313,
            "name": "海东地区",
            "provinceId": 26,
            "status": 0,
            "provinceName": "青海省"
        }, {"id": 314, "name": "海北藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
            "id": 315,
            "name": "黄南藏族自治州",
            "provinceId": 26,
            "status": 0,
            "provinceName": "青海省"
        }, {"id": 316, "name": "海南藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
            "id": 317,
            "name": "果洛藏族自治州",
            "provinceId": 26,
            "status": 0,
            "provinceName": "青海省"
        }, {"id": 318, "name": "玉树藏族自治州", "provinceId": 26, "status": 0, "provinceName": "青海省"}, {
            "id": 319,
            "name": "海西蒙古族藏族自治州",
            "provinceId": 26,
            "status": 0,
            "provinceName": "青海省"
        }],
        "27": [{"id": 320, "name": "西安市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
            "id": 321,
            "name": "铜川市",
            "provinceId": 27,
            "status": 0,
            "provinceName": "陕西省"
        }, {"id": 322, "name": "宝鸡西市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
            "id": 323,
            "name": "咸阳市",
            "provinceId": 27,
            "status": 0,
            "provinceName": "陕西省"
        }, {"id": 324, "name": "渭南市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
            "id": 325,
            "name": "延安市",
            "provinceId": 27,
            "status": 0,
            "provinceName": "陕西省"
        }, {"id": 326, "name": "汉中市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
            "id": 327,
            "name": "榆林市",
            "provinceId": 27,
            "status": 0,
            "provinceName": "陕西省"
        }, {"id": 328, "name": "安康市", "provinceId": 27, "status": 0, "provinceName": "陕西省"}, {
            "id": 329,
            "name": "商洛市",
            "provinceId": 27,
            "status": 0,
            "provinceName": "陕西省"
        }],
        "28": [{"id": 330, "name": "南宁市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 331,
            "name": "柳州市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 332, "name": "桂林市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 333,
            "name": "梧州市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 334, "name": "北海市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 335,
            "name": "防城港市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 336, "name": "钦州市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 337,
            "name": "贵港市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 338, "name": "玉林市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 339,
            "name": "百色市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 340, "name": "贺州市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 341,
            "name": "河池市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }, {"id": 342, "name": "来宾市", "provinceId": 28, "status": 0, "provinceName": "广西壮族自治区"}, {
            "id": 343,
            "name": "崇左市",
            "provinceId": 28,
            "status": 0,
            "provinceName": "广西壮族自治区"
        }],
        "29": [{"id": 344, "name": "拉萨市", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
            "id": 345,
            "name": "那曲地区",
            "provinceId": 29,
            "status": 0,
            "provinceName": "西藏自治区"
        }, {"id": 346, "name": "昌都地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
            "id": 347,
            "name": "山南地区",
            "provinceId": 29,
            "status": 0,
            "provinceName": "西藏自治区"
        }, {"id": 348, "name": "日喀则地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}, {
            "id": 349,
            "name": "阿里地区",
            "provinceId": 29,
            "status": 0,
            "provinceName": "西藏自治区"
        }, {"id": 350, "name": "林芝地区", "provinceId": 29, "status": 0, "provinceName": "西藏自治区"}],
        "30": [{"id": 351, "name": "银川市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}, {
            "id": 352,
            "name": "石嘴山市",
            "provinceId": 30,
            "status": 0,
            "provinceName": "宁夏回族自治区"
        }, {"id": 353, "name": "吴忠市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}, {
            "id": 354,
            "name": "固原市",
            "provinceId": 30,
            "status": 0,
            "provinceName": "宁夏回族自治区"
        }, {"id": 355, "name": "中卫市", "provinceId": 30, "status": 0, "provinceName": "宁夏回族自治区"}],
        "31": [{"id": 356, "name": "乌鲁木齐市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 357,
            "name": "克拉玛依市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 358, "name": "石河子市　", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 359,
            "name": "阿拉尔市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 360, "name": "图木舒克市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 361,
            "name": "五家渠市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 362, "name": "吐鲁番市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 363,
            "name": "阿克苏市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 364, "name": "喀什市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 365,
            "name": "哈密市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 366, "name": "和田市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 367,
            "name": "阿图什市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 368, "name": "库尔勒市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 369,
            "name": "昌吉市　",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 370, "name": "阜康市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 371,
            "name": "米泉市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 372, "name": "博乐市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 373,
            "name": "伊宁市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 374, "name": "奎屯市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 375,
            "name": "塔城市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }, {"id": 376, "name": "乌苏市", "provinceId": 31, "status": 0, "provinceName": "新疆维吾尔自治区"}, {
            "id": 377,
            "name": "阿勒泰市",
            "provinceId": 31,
            "status": 0,
            "provinceName": "新疆维吾尔自治区"
        }],
        "32": [{"id": 378, "name": "呼和浩特市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 379,
            "name": "包头市",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }, {"id": 380, "name": "乌海市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 381,
            "name": "赤峰市",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }, {"id": 382, "name": "通辽市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 383,
            "name": "鄂尔多斯市",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }, {"id": 384, "name": "呼伦贝尔市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 385,
            "name": "巴彦淖尔市",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }, {"id": 386, "name": "乌兰察布市", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 387,
            "name": "锡林郭勒盟",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }, {"id": 388, "name": "兴安盟", "provinceId": 32, "status": 0, "provinceName": "内蒙古自治区"}, {
            "id": 389,
            "name": "阿拉善盟",
            "provinceId": 32,
            "status": 0,
            "provinceName": "内蒙古自治区"
        }],
        "33": [{"id": 390, "name": "澳门特别行政区", "provinceId": 33, "status": 0, "provinceName": "澳门特别行政区"}],
        "34": [{"id": 391, "name": "香港特别行政区", "provinceId": 34, "status": 0, "provinceName": "香港特别行政区"}]
    };

    var currentCity = [];

    var areaKV = {
        "1": "东城区",
        "2": "西城区",
        "3": "崇文区",
        "4": "宣武区",
        "5": "朝阳区",
        "6": "丰台区",
        "7": "石景山区",
        "8": "海淀区",
        "9": "门头沟区",
        "10": "房山区",
        "11": "通州区",
        "12": "顺义区",
        "13": "昌平区",
        "14": "大兴区",
        "15": "怀柔区",
        "16": "平谷区",
        "17": "密云县",
        "18": "延庆县",
        "19": "和平区",
        "20": "河东区",
        "21": "河西区",
        "22": "南开区",
        "23": "河北区",
        "24": "红桥区",
        "25": "塘沽区",
        "26": "汉沽区",
        "27": "大港区",
        "28": "东丽区",
        "29": "西青区",
        "30": "津南区",
        "31": "北辰区",
        "32": "武清区",
        "33": "宝坻区",
        "34": "宁河县",
        "35": "静海县",
        "36": "蓟　县",
        "37": "黄浦区",
        "38": "卢湾区",
        "39": "徐汇区",
        "40": "长宁区",
        "41": "静安区",
        "42": "普陀区",
        "43": "闸北区",
        "44": "虹口区",
        "45": "杨浦区",
        "46": "闵行区",
        "47": "宝山区",
        "48": "嘉定区",
        "49": "浦东新区",
        "50": "金山区",
        "51": "松江区",
        "52": "青浦区",
        "53": "南汇区",
        "54": "奉贤区",
        "55": "崇明县",
        "56": "万州区",
        "57": "涪陵区",
        "58": "渝中区",
        "59": "大渡口区",
        "60": "江北区",
        "61": "沙坪坝区",
        "62": "九龙坡区",
        "63": "南岸区",
        "64": "北碚区",
        "65": "万盛区",
        "66": "双桥区",
        "67": "渝北区",
        "68": "巴南区",
        "69": "黔江区",
        "70": "长寿区",
        "71": "綦江县",
        "72": "潼南县",
        "73": "铜梁县",
        "74": "大足县",
        "75": "荣昌县",
        "76": "璧山县",
        "77": "梁平县",
        "78": "城口县",
        "79": "丰都县",
        "80": "垫江县",
        "81": "武隆县",
        "82": "忠　县",
        "83": "开　县",
        "84": "云阳县",
        "85": "奉节县",
        "86": "巫山县",
        "87": "巫溪县",
        "88": "石柱土家族自治县",
        "89": "秀山土家族苗族自治县",
        "90": "酉阳土家族苗族自治县",
        "91": "彭水苗族土家族自治县",
        "92": "江津市",
        "93": "合川市",
        "94": "永川市",
        "95": "南川市",
        "96": "市辖区",
        "97": "长安区",
        "98": "桥东区",
        "99": "桥西区",
        "100": "新华区",
        "101": "井陉矿区",
        "102": "裕华区",
        "103": "井陉县",
        "104": "正定县",
        "105": "栾城县",
        "106": "行唐县",
        "107": "灵寿县",
        "108": "高邑县",
        "109": "深泽县",
        "110": "赞皇县",
        "111": "无极县",
        "112": "平山县",
        "113": "元氏县",
        "114": "赵　县",
        "115": "辛集市",
        "116": "藁城市",
        "117": "晋州市",
        "118": "新乐市",
        "119": "鹿泉市",
        "120": "市辖区",
        "121": "路南区",
        "122": "路北区",
        "123": "古冶区",
        "124": "开平区",
        "125": "丰南区",
        "126": "丰润区",
        "127": "滦　县",
        "128": "滦南县",
        "129": "乐亭县",
        "130": "迁西县",
        "131": "玉田县",
        "132": "唐海县",
        "133": "遵化市",
        "134": "迁安市",
        "135": "市辖区",
        "136": "海港区",
        "137": "山海关区",
        "138": "北戴河区",
        "139": "青龙满族自治县",
        "140": "昌黎县",
        "141": "抚宁县",
        "142": "卢龙县",
        "143": "市辖区",
        "144": "邯山区",
        "145": "丛台区",
        "146": "复兴区",
        "147": "峰峰矿区",
        "148": "邯郸县",
        "149": "临漳县",
        "150": "成安县",
        "151": "大名县",
        "152": "涉　县",
        "153": "磁　县",
        "154": "肥乡县",
        "155": "永年县",
        "156": "邱　县",
        "157": "鸡泽县",
        "158": "广平县",
        "159": "馆陶县",
        "160": "魏　县",
        "161": "曲周县",
        "162": "武安市",
        "163": "市辖区",
        "164": "桥东区",
        "165": "桥西区",
        "166": "邢台县",
        "167": "临城县",
        "168": "内丘县",
        "169": "柏乡县",
        "170": "隆尧县",
        "171": "任　县",
        "172": "南和县",
        "173": "宁晋县",
        "174": "巨鹿县",
        "175": "新河县",
        "176": "广宗县",
        "177": "平乡县",
        "178": "威　县",
        "179": "清河县",
        "180": "临西县",
        "181": "南宫市",
        "182": "沙河市",
        "183": "市辖区",
        "184": "新市区",
        "185": "北市区",
        "186": "南市区",
        "187": "满城县",
        "188": "清苑县",
        "189": "涞水县",
        "190": "阜平县",
        "191": "徐水县",
        "192": "定兴县",
        "193": "唐　县",
        "194": "高阳县",
        "195": "容城县",
        "196": "涞源县",
        "197": "望都县",
        "198": "安新县",
        "199": "易　县",
        "200": "曲阳县",
        "201": "蠡　县",
        "202": "顺平县",
        "203": "博野县",
        "204": "雄　县",
        "205": "涿州市",
        "206": "定州市",
        "207": "安国市",
        "208": "高碑店市",
        "209": "市辖区",
        "210": "桥东区",
        "211": "桥西区",
        "212": "宣化区",
        "213": "下花园区",
        "214": "宣化县",
        "215": "张北县",
        "216": "康保县",
        "217": "沽源县",
        "218": "尚义县",
        "219": "蔚　县",
        "220": "阳原县",
        "221": "怀安县",
        "222": "万全县",
        "223": "怀来县",
        "224": "涿鹿县",
        "225": "赤城县",
        "226": "崇礼县",
        "227": "市辖区",
        "228": "双桥区",
        "229": "双滦区",
        "230": "鹰手营子矿区",
        "231": "承德县",
        "232": "兴隆县",
        "233": "平泉县",
        "234": "滦平县",
        "235": "隆化县",
        "236": "丰宁满族自治县",
        "237": "宽城满族自治县",
        "238": "围场满族蒙古族自治县",
        "239": "市辖区",
        "240": "新华区",
        "241": "运河区",
        "242": "沧　县",
        "243": "青　县",
        "244": "东光县",
        "245": "海兴县",
        "246": "盐山县",
        "247": "肃宁县",
        "248": "南皮县",
        "249": "吴桥县",
        "250": "献　县",
        "251": "孟村回族自治县",
        "252": "泊头市",
        "253": "任丘市",
        "254": "黄骅市",
        "255": "河间市",
        "256": "市辖区",
        "257": "安次区",
        "258": "广阳区",
        "259": "固安县",
        "260": "永清县",
        "261": "香河县",
        "262": "大城县",
        "263": "文安县",
        "264": "大厂回族自治县",
        "265": "霸州市",
        "266": "三河市",
        "267": "市辖区",
        "268": "桃城区",
        "269": "枣强县",
        "270": "武邑县",
        "271": "武强县",
        "272": "饶阳县",
        "273": "安平县",
        "274": "故城县",
        "275": "景　县",
        "276": "阜城县",
        "277": "冀州市",
        "278": "深州市",
        "279": "市辖区",
        "280": "小店区",
        "281": "迎泽区",
        "282": "杏花岭区",
        "283": "尖草坪区",
        "284": "万柏林区",
        "285": "晋源区",
        "286": "清徐县",
        "287": "阳曲县",
        "288": "娄烦县",
        "289": "古交市",
        "290": "市辖区",
        "291": "城　区",
        "292": "矿　区",
        "293": "南郊区",
        "294": "新荣区",
        "295": "阳高县",
        "296": "天镇县",
        "297": "广灵县",
        "298": "灵丘县",
        "299": "浑源县",
        "300": "左云县",
        "301": "大同县",
        "302": "市辖区",
        "303": "城　区",
        "304": "矿　区",
        "305": "郊　区",
        "306": "平定县",
        "307": "盂　县",
        "308": "市辖区",
        "309": "城　区",
        "310": "郊　区",
        "311": "长治县",
        "312": "襄垣县",
        "313": "屯留县",
        "314": "平顺县",
        "315": "黎城县",
        "316": "壶关县",
        "317": "长子县",
        "318": "武乡县",
        "319": "沁　县",
        "320": "沁源县",
        "321": "潞城市",
        "322": "市辖区",
        "323": "城　区",
        "324": "沁水县",
        "325": "阳城县",
        "326": "陵川县",
        "327": "泽州县",
        "328": "高平市",
        "329": "市辖区",
        "330": "朔城区",
        "331": "平鲁区",
        "332": "山阴县",
        "333": "应　县",
        "334": "右玉县",
        "335": "怀仁县",
        "336": "市辖区",
        "337": "榆次区",
        "338": "榆社县",
        "339": "左权县",
        "340": "和顺县",
        "341": "昔阳县",
        "342": "寿阳县",
        "343": "太谷县",
        "344": "祁　县",
        "345": "平遥县",
        "346": "灵石县",
        "347": "介休市",
        "348": "市辖区",
        "349": "盐湖区",
        "350": "临猗县",
        "351": "万荣县",
        "352": "闻喜县",
        "353": "稷山县",
        "354": "新绛县",
        "355": "绛　县",
        "356": "垣曲县",
        "357": "夏　县",
        "358": "平陆县",
        "359": "芮城县",
        "360": "永济市",
        "361": "河津市",
        "362": "市辖区",
        "363": "忻府区",
        "364": "定襄县",
        "365": "五台县",
        "366": "代　县",
        "367": "繁峙县",
        "368": "宁武县",
        "369": "静乐县",
        "370": "神池县",
        "371": "五寨县",
        "372": "岢岚县",
        "373": "河曲县",
        "374": "保德县",
        "375": "偏关县",
        "376": "原平市",
        "377": "市辖区",
        "378": "尧都区",
        "379": "曲沃县",
        "380": "翼城县",
        "381": "襄汾县",
        "382": "洪洞县",
        "383": "古　县",
        "384": "安泽县",
        "385": "浮山县",
        "386": "吉　县",
        "387": "乡宁县",
        "388": "大宁县",
        "389": "隰　县",
        "390": "永和县",
        "391": "蒲　县",
        "392": "汾西县",
        "393": "侯马市",
        "394": "霍州市",
        "395": "市辖区",
        "396": "离石区",
        "397": "文水县",
        "398": "交城县",
        "399": "兴　县",
        "400": "临　县",
        "401": "柳林县",
        "402": "石楼县",
        "403": "岚　县",
        "404": "方山县",
        "405": "中阳县",
        "406": "交口县",
        "407": "孝义市",
        "408": "汾阳市",
        "409": "市辖区",
        "410": "和平区",
        "411": "沈河区",
        "412": "大东区",
        "413": "皇姑区",
        "414": "铁西区",
        "415": "苏家屯区",
        "416": "东陵区",
        "417": "新城子区",
        "418": "于洪区",
        "419": "辽中县",
        "420": "康平县",
        "421": "法库县",
        "422": "新民市",
        "423": "市辖区",
        "424": "中山区",
        "425": "西岗区",
        "426": "沙河口区",
        "427": "甘井子区",
        "428": "旅顺口区",
        "429": "金州区",
        "430": "长海县",
        "431": "瓦房店市",
        "432": "普兰店市",
        "433": "庄河市",
        "434": "市辖区",
        "435": "铁东区",
        "436": "铁西区",
        "437": "立山区",
        "438": "千山区",
        "439": "台安县",
        "440": "岫岩满族自治县",
        "441": "海城市",
        "442": "市辖区",
        "443": "新抚区",
        "444": "东洲区",
        "445": "望花区",
        "446": "顺城区",
        "447": "抚顺县",
        "448": "新宾满族自治县",
        "449": "清原满族自治县",
        "450": "市辖区",
        "451": "平山区",
        "452": "溪湖区",
        "453": "明山区",
        "454": "南芬区",
        "455": "本溪满族自治县",
        "456": "桓仁满族自治县",
        "457": "市辖区",
        "458": "元宝区",
        "459": "振兴区",
        "460": "振安区",
        "461": "宽甸满族自治县",
        "462": "东港市",
        "463": "凤城市",
        "464": "市辖区",
        "465": "古塔区",
        "466": "凌河区",
        "467": "太和区",
        "468": "黑山县",
        "469": "义　县",
        "470": "凌海市",
        "471": "北宁市",
        "472": "市辖区",
        "473": "站前区",
        "474": "西市区",
        "475": "鲅鱼圈区",
        "476": "老边区",
        "477": "盖州市",
        "478": "大石桥市",
        "479": "市辖区",
        "480": "海州区",
        "481": "新邱区",
        "482": "太平区",
        "483": "清河门区",
        "484": "细河区",
        "485": "阜新蒙古族自治县",
        "486": "彰武县",
        "487": "市辖区",
        "488": "白塔区",
        "489": "文圣区",
        "490": "宏伟区",
        "491": "弓长岭区",
        "492": "太子河区",
        "493": "辽阳县",
        "494": "灯塔市",
        "495": "市辖区",
        "496": "双台子区",
        "497": "兴隆台区",
        "498": "大洼县",
        "499": "盘山县",
        "500": "市辖区",
        "501": "银州区",
        "502": "清河区",
        "503": "铁岭县",
        "504": "西丰县",
        "505": "昌图县",
        "506": "调兵山市",
        "507": "开原市",
        "508": "市辖区",
        "509": "双塔区",
        "510": "龙城区",
        "511": "朝阳县",
        "512": "建平县",
        "513": "喀喇沁左翼蒙古族自治县",
        "514": "北票市",
        "515": "凌源市",
        "516": "市辖区",
        "517": "连山区",
        "518": "龙港区",
        "519": "南票区",
        "520": "绥中县",
        "521": "建昌县",
        "522": "兴城市",
        "523": "市辖区",
        "524": "南关区",
        "525": "宽城区",
        "526": "朝阳区",
        "527": "二道区",
        "528": "绿园区",
        "529": "双阳区",
        "530": "农安县",
        "531": "九台市",
        "532": "榆树市",
        "533": "德惠市",
        "534": "市辖区",
        "535": "昌邑区",
        "536": "龙潭区",
        "537": "船营区",
        "538": "丰满区",
        "539": "永吉县",
        "540": "蛟河市",
        "541": "桦甸市",
        "542": "舒兰市",
        "543": "磐石市",
        "544": "市辖区",
        "545": "铁西区",
        "546": "铁东区",
        "547": "梨树县",
        "548": "伊通满族自治县",
        "549": "公主岭市",
        "550": "双辽市",
        "551": "市辖区",
        "552": "龙山区",
        "553": "西安区",
        "554": "东丰县",
        "555": "东辽县",
        "556": "市辖区",
        "557": "东昌区",
        "558": "二道江区",
        "559": "通化县",
        "560": "辉南县",
        "561": "柳河县",
        "562": "梅河口市",
        "563": "集安市",
        "564": "市辖区",
        "565": "八道江区",
        "566": "抚松县",
        "567": "靖宇县",
        "568": "长白朝鲜族自治县",
        "569": "江源县",
        "570": "临江市",
        "571": "市辖区",
        "572": "宁江区",
        "573": "前郭尔罗斯蒙古族自治县",
        "574": "长岭县",
        "575": "乾安县",
        "576": "扶余县",
        "577": "市辖区",
        "578": "洮北区",
        "579": "镇赉县",
        "580": "通榆县",
        "581": "洮南市",
        "582": "大安市",
        "583": "延吉市",
        "584": "图们市",
        "585": "敦化市",
        "586": "珲春市",
        "587": "龙井市",
        "588": "和龙市",
        "589": "汪清县",
        "590": "安图县",
        "591": "市辖区",
        "592": "道里区",
        "593": "南岗区",
        "594": "道外区",
        "595": "香坊区",
        "596": "动力区",
        "597": "平房区",
        "598": "松北区",
        "599": "呼兰区",
        "600": "依兰县",
        "601": "方正县",
        "602": "宾　县",
        "603": "巴彦县",
        "604": "木兰县",
        "605": "通河县",
        "606": "延寿县",
        "607": "阿城市",
        "608": "双城市",
        "609": "尚志市",
        "610": "五常市",
        "611": "市辖区",
        "612": "龙沙区",
        "613": "建华区",
        "614": "铁锋区",
        "615": "昂昂溪区",
        "616": "富拉尔基区",
        "617": "碾子山区",
        "618": "梅里斯达斡尔族区",
        "619": "龙江县",
        "620": "依安县",
        "621": "泰来县",
        "622": "甘南县",
        "623": "富裕县",
        "624": "克山县",
        "625": "克东县",
        "626": "拜泉县",
        "627": "讷河市",
        "628": "市辖区",
        "629": "向阳区",
        "630": "工农区",
        "631": "南山区",
        "632": "兴安区",
        "633": "东山区",
        "634": "兴山区",
        "635": "萝北县",
        "636": "绥滨县",
        "637": "市辖区",
        "638": "尖山区",
        "639": "岭东区",
        "640": "四方台区",
        "641": "宝山区",
        "642": "集贤县",
        "643": "友谊县",
        "644": "宝清县",
        "645": "饶河县",
        "646": "市辖区",
        "647": "鸡冠区",
        "648": "恒山区",
        "649": "滴道区",
        "650": "梨树区",
        "651": "城子河区",
        "652": "麻山区",
        "653": "鸡东县",
        "654": "虎林市",
        "655": "密山市",
        "656": "市辖区",
        "657": "萨尔图区",
        "658": "龙凤区",
        "659": "让胡路区",
        "660": "红岗区",
        "661": "大同区",
        "662": "肇州县",
        "663": "肇源县",
        "664": "林甸县",
        "665": "杜尔伯特蒙古族自治县",
        "666": "市辖区",
        "667": "伊春区",
        "668": "南岔区",
        "669": "友好区",
        "670": "西林区",
        "671": "翠峦区",
        "672": "新青区",
        "673": "美溪区",
        "674": "金山屯区",
        "675": "五营区",
        "676": "乌马河区",
        "677": "汤旺河区",
        "678": "带岭区",
        "679": "乌伊岭区",
        "680": "红星区",
        "681": "上甘岭区",
        "682": "嘉荫县",
        "683": "铁力市",
        "684": "市辖区",
        "685": "东安区",
        "686": "阳明区",
        "687": "爱民区",
        "688": "西安区",
        "689": "东宁县",
        "690": "林口县",
        "691": "绥芬河市",
        "692": "海林市",
        "693": "宁安市",
        "694": "穆棱市",
        "695": "市辖区",
        "696": "永红区",
        "697": "向阳区",
        "698": "前进区",
        "699": "东风区",
        "700": "郊　区",
        "701": "桦南县",
        "702": "桦川县",
        "703": "汤原县",
        "704": "抚远县",
        "705": "同江市",
        "706": "富锦市",
        "707": "市辖区",
        "708": "新兴区",
        "709": "桃山区",
        "710": "茄子河区",
        "711": "勃利县",
        "712": "市辖区",
        "713": "爱辉区",
        "714": "嫩江县",
        "715": "逊克县",
        "716": "孙吴县",
        "717": "北安市",
        "718": "五大连池市",
        "719": "市辖区",
        "720": "北林区",
        "721": "望奎县",
        "722": "兰西县",
        "723": "青冈县",
        "724": "庆安县",
        "725": "明水县",
        "726": "绥棱县",
        "727": "安达市",
        "728": "肇东市",
        "729": "海伦市",
        "730": "呼玛县",
        "731": "塔河县",
        "732": "漠河县",
        "733": "市辖区",
        "734": "玄武区",
        "735": "白下区",
        "736": "秦淮区",
        "737": "建邺区",
        "738": "鼓楼区",
        "739": "下关区",
        "740": "浦口区",
        "741": "栖霞区",
        "742": "雨花台区",
        "743": "江宁区",
        "744": "六合区",
        "745": "溧水县",
        "746": "高淳县",
        "747": "市辖区",
        "748": "崇安区",
        "749": "南长区",
        "750": "北塘区",
        "751": "锡山区",
        "752": "惠山区",
        "753": "滨湖区",
        "754": "江阴市",
        "755": "宜兴市",
        "756": "市辖区",
        "757": "鼓楼区",
        "758": "云龙区",
        "759": "九里区",
        "760": "贾汪区",
        "761": "泉山区",
        "762": "丰　县",
        "763": "沛　县",
        "764": "铜山县",
        "765": "睢宁县",
        "766": "新沂市",
        "767": "邳州市",
        "768": "市辖区",
        "769": "天宁区",
        "770": "钟楼区",
        "771": "戚墅堰区",
        "772": "新北区",
        "773": "武进区",
        "774": "溧阳市",
        "775": "金坛市",
        "776": "市辖区",
        "777": "沧浪区",
        "778": "平江区",
        "779": "金阊区",
        "780": "虎丘区",
        "781": "吴中区",
        "782": "相城区",
        "783": "常熟市",
        "784": "张家港市",
        "785": "昆山市",
        "786": "吴江市",
        "787": "太仓市",
        "788": "市辖区",
        "789": "崇川区",
        "790": "港闸区",
        "791": "海安县",
        "792": "如东县",
        "793": "启东市",
        "794": "如皋市",
        "795": "通州市",
        "796": "海门市",
        "797": "市辖区",
        "798": "连云区",
        "799": "新浦区",
        "800": "海州区",
        "801": "赣榆县",
        "802": "东海县",
        "803": "灌云县",
        "804": "灌南县",
        "805": "市辖区",
        "806": "清河区",
        "807": "楚州区",
        "808": "淮阴区",
        "809": "清浦区",
        "810": "涟水县",
        "811": "洪泽县",
        "812": "盱眙县",
        "813": "金湖县",
        "814": "市辖区",
        "815": "亭湖区",
        "816": "盐都区",
        "817": "响水县",
        "818": "滨海县",
        "819": "阜宁县",
        "820": "射阳县",
        "821": "建湖县",
        "822": "东台市",
        "823": "大丰市",
        "824": "市辖区",
        "825": "广陵区",
        "826": "邗江区",
        "827": "郊　区",
        "828": "宝应县",
        "829": "仪征市",
        "830": "高邮市",
        "831": "江都市",
        "832": "市辖区",
        "833": "京口区",
        "834": "润州区",
        "835": "丹徒区",
        "836": "丹阳市",
        "837": "扬中市",
        "838": "句容市",
        "839": "市辖区",
        "840": "海陵区",
        "841": "高港区",
        "842": "兴化市",
        "843": "靖江市",
        "844": "泰兴市",
        "845": "姜堰市",
        "846": "市辖区",
        "847": "宿城区",
        "848": "宿豫区",
        "849": "沭阳县",
        "850": "泗阳县",
        "851": "泗洪县",
        "852": "市辖区",
        "853": "上城区",
        "854": "下城区",
        "855": "江干区",
        "856": "拱墅区",
        "857": "西湖区",
        "858": "滨江区",
        "859": "萧山区",
        "860": "余杭区",
        "861": "桐庐县",
        "862": "淳安县",
        "863": "建德市",
        "864": "富阳市",
        "865": "临安市",
        "866": "市辖区",
        "867": "海曙区",
        "868": "江东区",
        "869": "江北区",
        "870": "北仑区",
        "871": "镇海区",
        "872": "鄞州区",
        "873": "象山县",
        "874": "宁海县",
        "875": "余姚市",
        "876": "慈溪市",
        "877": "奉化市",
        "878": "市辖区",
        "879": "鹿城区",
        "880": "龙湾区",
        "881": "瓯海区",
        "882": "洞头县",
        "883": "永嘉县",
        "884": "平阳县",
        "885": "苍南县",
        "886": "文成县",
        "887": "泰顺县",
        "888": "瑞安市",
        "889": "乐清市",
        "890": "市辖区",
        "891": "秀城区",
        "892": "秀洲区",
        "893": "嘉善县",
        "894": "海盐县",
        "895": "海宁市",
        "896": "平湖市",
        "897": "桐乡市",
        "898": "市辖区",
        "899": "吴兴区",
        "900": "南浔区",
        "901": "德清县",
        "902": "长兴县",
        "903": "安吉县",
        "904": "市辖区",
        "905": "越城区",
        "906": "绍兴县",
        "907": "新昌县",
        "908": "诸暨市",
        "909": "上虞市",
        "910": "嵊州市",
        "911": "市辖区",
        "912": "婺城区",
        "913": "金东区",
        "914": "武义县",
        "915": "浦江县",
        "916": "磐安县",
        "917": "兰溪市",
        "918": "义乌市",
        "919": "东阳市",
        "920": "永康市",
        "921": "市辖区",
        "922": "柯城区",
        "923": "衢江区",
        "924": "常山县",
        "925": "开化县",
        "926": "龙游县",
        "927": "江山市",
        "928": "市辖区",
        "929": "定海区",
        "930": "普陀区",
        "931": "岱山县",
        "932": "嵊泗县",
        "933": "市辖区",
        "934": "椒江区",
        "935": "黄岩区",
        "936": "路桥区",
        "937": "玉环县",
        "938": "三门县",
        "939": "天台县",
        "940": "仙居县",
        "941": "温岭市",
        "942": "临海市",
        "943": "市辖区",
        "944": "莲都区",
        "945": "青田县",
        "946": "缙云县",
        "947": "遂昌县",
        "948": "松阳县",
        "949": "云和县",
        "950": "庆元县",
        "951": "景宁畲族自治县",
        "952": "龙泉市",
        "953": "市辖区",
        "954": "瑶海区",
        "955": "庐阳区",
        "956": "蜀山区",
        "957": "包河区",
        "958": "长丰县",
        "959": "肥东县",
        "960": "肥西县",
        "961": "市辖区",
        "962": "镜湖区",
        "963": "马塘区",
        "964": "新芜区",
        "965": "鸠江区",
        "966": "芜湖县",
        "967": "繁昌县",
        "968": "南陵县",
        "969": "市辖区",
        "970": "龙子湖区",
        "971": "蚌山区",
        "972": "禹会区",
        "973": "淮上区",
        "974": "怀远县",
        "975": "五河县",
        "976": "固镇县",
        "977": "市辖区",
        "978": "大通区",
        "979": "田家庵区",
        "980": "谢家集区",
        "981": "八公山区",
        "982": "潘集区",
        "983": "凤台县",
        "984": "市辖区",
        "985": "金家庄区",
        "986": "花山区",
        "987": "雨山区",
        "988": "当涂县",
        "989": "市辖区",
        "990": "杜集区",
        "991": "相山区",
        "992": "烈山区",
        "993": "濉溪县",
        "994": "市辖区",
        "995": "铜官山区",
        "996": "狮子山区",
        "997": "郊　区",
        "998": "铜陵县",
        "999": "市辖区",
        "1000": "迎江区",
        "1001": "大观区",
        "1002": "郊　区",
        "1003": "怀宁县",
        "1004": "枞阳县",
        "1005": "潜山县",
        "1006": "太湖县",
        "1007": "宿松县",
        "1008": "望江县",
        "1009": "岳西县",
        "1010": "桐城市",
        "1011": "市辖区",
        "1012": "屯溪区",
        "1013": "黄山区",
        "1014": "徽州区",
        "1015": "歙　县",
        "1016": "休宁县",
        "1017": "黟　县",
        "1018": "祁门县",
        "1019": "市辖区",
        "1020": "琅琊区",
        "1021": "南谯区",
        "1022": "来安县",
        "1023": "全椒县",
        "1024": "定远县",
        "1025": "凤阳县",
        "1026": "天长市",
        "1027": "明光市",
        "1028": "市辖区",
        "1029": "颍州区",
        "1030": "颍东区",
        "1031": "颍泉区",
        "1032": "临泉县",
        "1033": "太和县",
        "1034": "阜南县",
        "1035": "颍上县",
        "1036": "界首市",
        "1037": "市辖区",
        "1038": "墉桥区",
        "1039": "砀山县",
        "1040": "萧　县",
        "1041": "灵璧县",
        "1042": "泗　县",
        "1043": "市辖区",
        "1044": "居巢区",
        "1045": "庐江县",
        "1046": "无为县",
        "1047": "含山县",
        "1048": "和　县",
        "1049": "市辖区",
        "1050": "金安区",
        "1051": "裕安区",
        "1052": "寿　县",
        "1053": "霍邱县",
        "1054": "舒城县",
        "1055": "金寨县",
        "1056": "霍山县",
        "1057": "市辖区",
        "1058": "谯城区",
        "1059": "涡阳县",
        "1060": "蒙城县",
        "1061": "利辛县",
        "1062": "市辖区",
        "1063": "贵池区",
        "1064": "东至县",
        "1065": "石台县",
        "1066": "青阳县",
        "1067": "市辖区",
        "1068": "宣州区",
        "1069": "郎溪县",
        "1070": "广德县",
        "1071": "泾　县",
        "1072": "绩溪县",
        "1073": "旌德县",
        "1074": "宁国市",
        "1075": "市辖区",
        "1076": "鼓楼区",
        "1077": "台江区",
        "1078": "仓山区",
        "1079": "马尾区",
        "1080": "晋安区",
        "1081": "闽侯县",
        "1082": "连江县",
        "1083": "罗源县",
        "1084": "闽清县",
        "1085": "永泰县",
        "1086": "平潭县",
        "1087": "福清市",
        "1088": "长乐市",
        "1089": "市辖区",
        "1090": "思明区",
        "1091": "海沧区",
        "1092": "湖里区",
        "1093": "集美区",
        "1094": "同安区",
        "1095": "翔安区",
        "1096": "市辖区",
        "1097": "城厢区",
        "1098": "涵江区",
        "1099": "荔城区",
        "1100": "秀屿区",
        "1101": "仙游县",
        "1102": "市辖区",
        "1103": "梅列区",
        "1104": "三元区",
        "1105": "明溪县",
        "1106": "清流县",
        "1107": "宁化县",
        "1108": "大田县",
        "1109": "尤溪县",
        "1110": "沙　县",
        "1111": "将乐县",
        "1112": "泰宁县",
        "1113": "建宁县",
        "1114": "永安市",
        "1115": "市辖区",
        "1116": "鲤城区",
        "1117": "丰泽区",
        "1118": "洛江区",
        "1119": "泉港区",
        "1120": "惠安县",
        "1121": "安溪县",
        "1122": "永春县",
        "1123": "德化县",
        "1124": "金门县",
        "1125": "石狮市",
        "1126": "晋江市",
        "1127": "南安市",
        "1128": "市辖区",
        "1129": "芗城区",
        "1130": "龙文区",
        "1131": "云霄县",
        "1132": "漳浦县",
        "1133": "诏安县",
        "1134": "长泰县",
        "1135": "东山县",
        "1136": "南靖县",
        "1137": "平和县",
        "1138": "华安县",
        "1139": "龙海市",
        "1140": "市辖区",
        "1141": "延平区",
        "1142": "顺昌县",
        "1143": "浦城县",
        "1144": "光泽县",
        "1145": "松溪县",
        "1146": "政和县",
        "1147": "邵武市",
        "1148": "武夷山市",
        "1149": "建瓯市",
        "1150": "建阳市",
        "1151": "市辖区",
        "1152": "新罗区",
        "1153": "长汀县",
        "1154": "永定县",
        "1155": "上杭县",
        "1156": "武平县",
        "1157": "连城县",
        "1158": "漳平市",
        "1159": "市辖区",
        "1160": "蕉城区",
        "1161": "霞浦县",
        "1162": "古田县",
        "1163": "屏南县",
        "1164": "寿宁县",
        "1165": "周宁县",
        "1166": "柘荣县",
        "1167": "福安市",
        "1168": "福鼎市",
        "1169": "市辖区",
        "1170": "东湖区",
        "1171": "西湖区",
        "1172": "青云谱区",
        "1173": "湾里区",
        "1174": "青山湖区",
        "1175": "南昌县",
        "1176": "新建县",
        "1177": "安义县",
        "1178": "进贤县",
        "1179": "市辖区",
        "1180": "昌江区",
        "1181": "珠山区",
        "1182": "浮梁县",
        "1183": "乐平市",
        "1184": "市辖区",
        "1185": "安源区",
        "1186": "湘东区",
        "1187": "莲花县",
        "1188": "上栗县",
        "1189": "芦溪县",
        "1190": "市辖区",
        "1191": "庐山区",
        "1192": "浔阳区",
        "1193": "九江县",
        "1194": "武宁县",
        "1195": "修水县",
        "1196": "永修县",
        "1197": "德安县",
        "1198": "星子县",
        "1199": "都昌县",
        "1200": "湖口县",
        "1201": "彭泽县",
        "1202": "瑞昌市",
        "1203": "市辖区",
        "1204": "渝水区",
        "1205": "分宜县",
        "1206": "市辖区",
        "1207": "月湖区",
        "1208": "余江县",
        "1209": "贵溪市",
        "1210": "市辖区",
        "1211": "章贡区",
        "1212": "赣　县",
        "1213": "信丰县",
        "1214": "大余县",
        "1215": "上犹县",
        "1216": "崇义县",
        "1217": "安远县",
        "1218": "龙南县",
        "1219": "定南县",
        "1220": "全南县",
        "1221": "宁都县",
        "1222": "于都县",
        "1223": "兴国县",
        "1224": "会昌县",
        "1225": "寻乌县",
        "1226": "石城县",
        "1227": "瑞金市",
        "1228": "南康市",
        "1229": "市辖区",
        "1230": "吉州区",
        "1231": "青原区",
        "1232": "吉安县",
        "1233": "吉水县",
        "1234": "峡江县",
        "1235": "新干县",
        "1236": "永丰县",
        "1237": "泰和县",
        "1238": "遂川县",
        "1239": "万安县",
        "1240": "安福县",
        "1241": "永新县",
        "1242": "井冈山市",
        "1243": "市辖区",
        "1244": "袁州区",
        "1245": "奉新县",
        "1246": "万载县",
        "1247": "上高县",
        "1248": "宜丰县",
        "1249": "靖安县",
        "1250": "铜鼓县",
        "1251": "丰城市",
        "1252": "樟树市",
        "1253": "高安市",
        "1254": "市辖区",
        "1255": "临川区",
        "1256": "南城县",
        "1257": "黎川县",
        "1258": "南丰县",
        "1259": "崇仁县",
        "1260": "乐安县",
        "1261": "宜黄县",
        "1262": "金溪县",
        "1263": "资溪县",
        "1264": "东乡县",
        "1265": "广昌县",
        "1266": "市辖区",
        "1267": "信州区",
        "1268": "上饶县",
        "1269": "广丰县",
        "1270": "玉山县",
        "1271": "铅山县",
        "1272": "横峰县",
        "1273": "弋阳县",
        "1274": "余干县",
        "1275": "鄱阳县",
        "1276": "万年县",
        "1277": "婺源县",
        "1278": "德兴市",
        "1279": "市辖区",
        "1280": "历下区",
        "1281": "市中区",
        "1282": "槐荫区",
        "1283": "天桥区",
        "1284": "历城区",
        "1285": "长清区",
        "1286": "平阴县",
        "1287": "济阳县",
        "1288": "商河县",
        "1289": "章丘市",
        "1290": "市辖区",
        "1291": "市南区",
        "1292": "市北区",
        "1293": "四方区",
        "1294": "黄岛区",
        "1295": "崂山区",
        "1296": "李沧区",
        "1297": "城阳区",
        "1298": "胶州市",
        "1299": "即墨市",
        "1300": "平度市",
        "1301": "胶南市",
        "1302": "莱西市",
        "1303": "市辖区",
        "1304": "淄川区",
        "1305": "张店区",
        "1306": "博山区",
        "1307": "临淄区",
        "1308": "周村区",
        "1309": "桓台县",
        "1310": "高青县",
        "1311": "沂源县",
        "1312": "市辖区",
        "1313": "市中区",
        "1314": "薛城区",
        "1315": "峄城区",
        "1316": "台儿庄区",
        "1317": "山亭区",
        "1318": "滕州市",
        "1319": "市辖区",
        "1320": "东营区",
        "1321": "河口区",
        "1322": "垦利县",
        "1323": "利津县",
        "1324": "广饶县",
        "1325": "市辖区",
        "1326": "芝罘区",
        "1327": "福山区",
        "1328": "牟平区",
        "1329": "莱山区",
        "1330": "长岛县",
        "1331": "龙口市",
        "1332": "莱阳市",
        "1333": "莱州市",
        "1334": "蓬莱市",
        "1335": "招远市",
        "1336": "栖霞市",
        "1337": "海阳市",
        "1338": "市辖区",
        "1339": "潍城区",
        "1340": "寒亭区",
        "1341": "坊子区",
        "1342": "奎文区",
        "1343": "临朐县",
        "1344": "昌乐县",
        "1345": "青州市",
        "1346": "诸城市",
        "1347": "寿光市",
        "1348": "安丘市",
        "1349": "高密市",
        "1350": "昌邑市",
        "1351": "市辖区",
        "1352": "市中区",
        "1353": "任城区",
        "1354": "微山县",
        "1355": "鱼台县",
        "1356": "金乡县",
        "1357": "嘉祥县",
        "1358": "汶上县",
        "1359": "泗水县",
        "1360": "梁山县",
        "1361": "曲阜市",
        "1362": "兖州市",
        "1363": "邹城市",
        "1364": "市辖区",
        "1365": "泰山区",
        "1366": "岱岳区",
        "1367": "宁阳县",
        "1368": "东平县",
        "1369": "新泰市",
        "1370": "肥城市",
        "1371": "市辖区",
        "1372": "环翠区",
        "1373": "文登市",
        "1374": "荣成市",
        "1375": "乳山市",
        "1376": "市辖区",
        "1377": "东港区",
        "1378": "岚山区",
        "1379": "五莲县",
        "1380": "莒　县",
        "1381": "市辖区",
        "1382": "莱城区",
        "1383": "钢城区",
        "1384": "市辖区",
        "1385": "兰山区",
        "1386": "罗庄区",
        "1387": "河东区",
        "1388": "沂南县",
        "1389": "郯城县",
        "1390": "沂水县",
        "1391": "苍山县",
        "1392": "费　县",
        "1393": "平邑县",
        "1394": "莒南县",
        "1395": "蒙阴县",
        "1396": "临沭县",
        "1397": "市辖区",
        "1398": "德城区",
        "1399": "陵　县",
        "1400": "宁津县",
        "1401": "庆云县",
        "1402": "临邑县",
        "1403": "齐河县",
        "1404": "平原县",
        "1405": "夏津县",
        "1406": "武城县",
        "1407": "乐陵市",
        "1408": "禹城市",
        "1409": "市辖区",
        "1410": "东昌府区",
        "1411": "阳谷县",
        "1412": "莘　县",
        "1413": "茌平县",
        "1414": "东阿县",
        "1415": "冠　县",
        "1416": "高唐县",
        "1417": "临清市",
        "1418": "市辖区",
        "1419": "滨城区",
        "1420": "惠民县",
        "1421": "阳信县",
        "1422": "无棣县",
        "1423": "沾化县",
        "1424": "博兴县",
        "1425": "邹平县",
        "1426": "市辖区",
        "1427": "牡丹区",
        "1428": "曹　县",
        "1429": "单　县",
        "1430": "成武县",
        "1431": "巨野县",
        "1432": "郓城县",
        "1433": "鄄城县",
        "1434": "定陶县",
        "1435": "东明县",
        "1436": "市辖区",
        "1437": "中原区",
        "1438": "二七区",
        "1439": "管城回族区",
        "1440": "金水区",
        "1441": "上街区",
        "1442": "邙山区",
        "1443": "中牟县",
        "1444": "巩义市",
        "1445": "荥阳市",
        "1446": "新密市",
        "1447": "新郑市",
        "1448": "登封市",
        "1449": "市辖区",
        "1450": "龙亭区",
        "1451": "顺河回族区",
        "1452": "鼓楼区",
        "1453": "南关区",
        "1454": "郊　区",
        "1455": "杞　县",
        "1456": "通许县",
        "1457": "尉氏县",
        "1458": "开封县",
        "1459": "兰考县",
        "1460": "市辖区",
        "1461": "老城区",
        "1462": "西工区",
        "1463": "廛河回族区",
        "1464": "涧西区",
        "1465": "吉利区",
        "1466": "洛龙区",
        "1467": "孟津县",
        "1468": "新安县",
        "1469": "栾川县",
        "1470": "嵩　县",
        "1471": "汝阳县",
        "1472": "宜阳县",
        "1473": "洛宁县",
        "1474": "伊川县",
        "1475": "偃师市",
        "1476": "市辖区",
        "1477": "新华区",
        "1478": "卫东区",
        "1479": "石龙区",
        "1480": "湛河区",
        "1481": "宝丰县",
        "1482": "叶　县",
        "1483": "鲁山县",
        "1484": "郏　县",
        "1485": "舞钢市",
        "1486": "汝州市",
        "1487": "市辖区",
        "1488": "文峰区",
        "1489": "北关区",
        "1490": "殷都区",
        "1491": "龙安区",
        "1492": "安阳县",
        "1493": "汤阴县",
        "1494": "滑　县",
        "1495": "内黄县",
        "1496": "林州市",
        "1497": "市辖区",
        "1498": "鹤山区",
        "1499": "山城区",
        "1500": "淇滨区",
        "1501": "浚　县",
        "1502": "淇　县",
        "1503": "市辖区",
        "1504": "红旗区",
        "1505": "卫滨区",
        "1506": "凤泉区",
        "1507": "牧野区",
        "1508": "新乡县",
        "1509": "获嘉县",
        "1510": "原阳县",
        "1511": "延津县",
        "1512": "封丘县",
        "1513": "长垣县",
        "1514": "卫辉市",
        "1515": "辉县市",
        "1516": "市辖区",
        "1517": "解放区",
        "1518": "中站区",
        "1519": "马村区",
        "1520": "山阳区",
        "1521": "修武县",
        "1522": "博爱县",
        "1523": "武陟县",
        "1524": "温　县",
        "1525": "济源市",
        "1526": "沁阳市",
        "1527": "孟州市",
        "1528": "市辖区",
        "1529": "华龙区",
        "1530": "清丰县",
        "1531": "南乐县",
        "1532": "范　县",
        "1533": "台前县",
        "1534": "濮阳县",
        "1535": "市辖区",
        "1536": "魏都区",
        "1537": "许昌县",
        "1538": "鄢陵县",
        "1539": "襄城县",
        "1540": "禹州市",
        "1541": "长葛市",
        "1542": "市辖区",
        "1543": "源汇区",
        "1544": "郾城区",
        "1545": "召陵区",
        "1546": "舞阳县",
        "1547": "临颍县",
        "1548": "市辖区",
        "1549": "湖滨区",
        "1550": "渑池县",
        "1551": "陕　县",
        "1552": "卢氏县",
        "1553": "义马市",
        "1554": "灵宝市",
        "1555": "市辖区",
        "1556": "宛城区",
        "1557": "卧龙区",
        "1558": "南召县",
        "1559": "方城县",
        "1560": "西峡县",
        "1561": "镇平县",
        "1562": "内乡县",
        "1563": "淅川县",
        "1564": "社旗县",
        "1565": "唐河县",
        "1566": "新野县",
        "1567": "桐柏县",
        "1568": "邓州市",
        "1569": "市辖区",
        "1570": "梁园区",
        "1571": "睢阳区",
        "1572": "民权县",
        "1573": "睢　县",
        "1574": "宁陵县",
        "1575": "柘城县",
        "1576": "虞城县",
        "1577": "夏邑县",
        "1578": "永城市",
        "1579": "市辖区",
        "1580": "师河区",
        "1581": "平桥区",
        "1582": "罗山县",
        "1583": "光山县",
        "1584": "新　县",
        "1585": "商城县",
        "1586": "固始县",
        "1587": "潢川县",
        "1588": "淮滨县",
        "1589": "息　县",
        "1590": "市辖区",
        "1591": "川汇区",
        "1592": "扶沟县",
        "1593": "西华县",
        "1594": "商水县",
        "1595": "沈丘县",
        "1596": "郸城县",
        "1597": "淮阳县",
        "1598": "太康县",
        "1599": "鹿邑县",
        "1600": "项城市",
        "1601": "市辖区",
        "1602": "驿城区",
        "1603": "西平县",
        "1604": "上蔡县",
        "1605": "平舆县",
        "1606": "正阳县",
        "1607": "确山县",
        "1608": "泌阳县",
        "1609": "汝南县",
        "1610": "遂平县",
        "1611": "新蔡县",
        "1612": "市辖区",
        "1613": "江岸区",
        "1614": "江汉区",
        "1615": "乔口区",
        "1616": "汉阳区",
        "1617": "武昌区",
        "1618": "青山区",
        "1619": "洪山区",
        "1620": "东西湖区",
        "1621": "汉南区",
        "1622": "蔡甸区",
        "1623": "江夏区",
        "1624": "黄陂区",
        "1625": "新洲区",
        "1626": "市辖区",
        "1627": "黄石港区",
        "1628": "西塞山区",
        "1629": "下陆区",
        "1630": "铁山区",
        "1631": "阳新县",
        "1632": "大冶市",
        "1633": "市辖区",
        "1634": "茅箭区",
        "1635": "张湾区",
        "1636": "郧　县",
        "1637": "郧西县",
        "1638": "竹山县",
        "1639": "竹溪县",
        "1640": "房　县",
        "1641": "丹江口市",
        "1642": "市辖区",
        "1643": "沙市区",
        "1644": "荆州区",
        "1645": "公安县",
        "1646": "监利县",
        "1647": "江陵县",
        "1648": "石首市",
        "1649": "洪湖市",
        "1650": "松滋市",
        "1651": "市辖区",
        "1652": "西陵区",
        "1653": "伍家岗区",
        "1654": "点军区",
        "1655": "猇亭区",
        "1656": "夷陵区",
        "1657": "远安县",
        "1658": "兴山县",
        "1659": "秭归县",
        "1660": "长阳土家族自治县",
        "1661": "五峰土家族自治县",
        "1662": "宜都市",
        "1663": "当阳市",
        "1664": "枝江市",
        "1665": "市辖区",
        "1666": "襄城区",
        "1667": "樊城区",
        "1668": "襄阳区",
        "1669": "南漳县",
        "1670": "谷城县",
        "1671": "保康县",
        "1672": "老河口市",
        "1673": "枣阳市",
        "1674": "宜城市",
        "1675": "市辖区",
        "1676": "梁子湖区",
        "1677": "华容区",
        "1678": "鄂城区",
        "1679": "市辖区",
        "1680": "东宝区",
        "1681": "掇刀区",
        "1682": "京山县",
        "1683": "沙洋县",
        "1684": "钟祥市",
        "1685": "市辖区",
        "1686": "孝南区",
        "1687": "孝昌县",
        "1688": "大悟县",
        "1689": "云梦县",
        "1690": "应城市",
        "1691": "安陆市",
        "1692": "汉川市",
        "1693": "市辖区",
        "1694": "黄州区",
        "1695": "团风县",
        "1696": "红安县",
        "1697": "罗田县",
        "1698": "英山县",
        "1699": "浠水县",
        "1700": "蕲春县",
        "1701": "黄梅县",
        "1702": "麻城市",
        "1703": "武穴市",
        "1704": "市辖区",
        "1705": "咸安区",
        "1706": "嘉鱼县",
        "1707": "通城县",
        "1708": "崇阳县",
        "1709": "通山县",
        "1710": "赤壁市",
        "1711": "市辖区",
        "1712": "曾都区",
        "1713": "广水市",
        "1714": "仙桃市",
        "1715": "天门市",
        "1716": "潜江市",
        "1717": "神农架林区",
        "1718": "恩施市",
        "1719": "利川市",
        "1720": "建始县",
        "1721": "巴东县",
        "1722": "宣恩县",
        "1723": "咸丰县",
        "1724": "来凤县",
        "1725": "鹤峰县",
        "1726": "市辖区",
        "1727": "芙蓉区",
        "1728": "天心区",
        "1729": "岳麓区",
        "1730": "开福区",
        "1731": "雨花区",
        "1732": "长沙县",
        "1733": "望城县",
        "1734": "宁乡县",
        "1735": "浏阳市",
        "1736": "市辖区",
        "1737": "荷塘区",
        "1738": "芦淞区",
        "1739": "石峰区",
        "1740": "天元区",
        "1741": "株洲县",
        "1742": "攸　县",
        "1743": "茶陵县",
        "1744": "炎陵县",
        "1745": "醴陵市",
        "1746": "市辖区",
        "1747": "雨湖区",
        "1748": "岳塘区",
        "1749": "湘潭县",
        "1750": "湘乡市",
        "1751": "韶山市",
        "1752": "市辖区",
        "1753": "珠晖区",
        "1754": "雁峰区",
        "1755": "石鼓区",
        "1756": "蒸湘区",
        "1757": "南岳区",
        "1758": "衡阳县",
        "1759": "衡南县",
        "1760": "衡山县",
        "1761": "衡东县",
        "1762": "祁东县",
        "1763": "耒阳市",
        "1764": "常宁市",
        "1765": "市辖区",
        "1766": "双清区",
        "1767": "大祥区",
        "1768": "北塔区",
        "1769": "邵东县",
        "1770": "新邵县",
        "1771": "邵阳县",
        "1772": "隆回县",
        "1773": "洞口县",
        "1774": "绥宁县",
        "1775": "新宁县",
        "1776": "城步苗族自治县",
        "1777": "武冈市",
        "1778": "市辖区",
        "1779": "岳阳楼区",
        "1780": "云溪区",
        "1781": "君山区",
        "1782": "岳阳县",
        "1783": "华容县",
        "1784": "湘阴县",
        "1785": "平江县",
        "1786": "汨罗市",
        "1787": "临湘市",
        "1788": "市辖区",
        "1789": "武陵区",
        "1790": "鼎城区",
        "1791": "安乡县",
        "1792": "汉寿县",
        "1793": "澧　县",
        "1794": "临澧县",
        "1795": "桃源县",
        "1796": "石门县",
        "1797": "津市市",
        "1798": "市辖区",
        "1799": "永定区",
        "1800": "武陵源区",
        "1801": "慈利县",
        "1802": "桑植县",
        "1803": "市辖区",
        "1804": "资阳区",
        "1805": "赫山区",
        "1806": "南　县",
        "1807": "桃江县",
        "1808": "安化县",
        "1809": "沅江市",
        "1810": "市辖区",
        "1811": "北湖区",
        "1812": "苏仙区",
        "1813": "桂阳县",
        "1814": "宜章县",
        "1815": "永兴县",
        "1816": "嘉禾县",
        "1817": "临武县",
        "1818": "汝城县",
        "1819": "桂东县",
        "1820": "安仁县",
        "1821": "资兴市",
        "1822": "市辖区",
        "1823": "芝山区",
        "1824": "冷水滩区",
        "1825": "祁阳县",
        "1826": "东安县",
        "1827": "双牌县",
        "1828": "道　县",
        "1829": "江永县",
        "1830": "宁远县",
        "1831": "蓝山县",
        "1832": "新田县",
        "1833": "江华瑶族自治县",
        "1834": "市辖区",
        "1835": "鹤城区",
        "1836": "中方县",
        "1837": "沅陵县",
        "1838": "辰溪县",
        "1839": "溆浦县",
        "1840": "会同县",
        "1841": "麻阳苗族自治县",
        "1842": "新晃侗族自治县",
        "1843": "芷江侗族自治县",
        "1844": "靖州苗族侗族自治县",
        "1845": "通道侗族自治县",
        "1846": "洪江市",
        "1847": "市辖区",
        "1848": "娄星区",
        "1849": "双峰县",
        "1850": "新化县",
        "1851": "冷水江市",
        "1852": "涟源市",
        "1853": "吉首市",
        "1854": "泸溪县",
        "1855": "凤凰县",
        "1856": "花垣县",
        "1857": "保靖县",
        "1858": "古丈县",
        "1859": "永顺县",
        "1860": "龙山县",
        "1861": "市辖区",
        //"1862": "东山区",
        "1863": "荔湾区",
        "1864": "越秀区",
        "1865": "海珠区",
        "1866": "天河区",
        "1867": "芳村区",
        "1868": "白云区",
        "1869": "黄埔区",
        "1870": "番禺区",
        "1871": "花都区",
        "1872": "增城市",
        "1873": "从化市",
        "1874": "市辖区",
        "1875": "罗湖区",
        "1876": "福田区",
        "1877": "南山区",
        "1878": "宝安区",
        "1879": "龙岗区",
        "1880": "盐田区",
        "1881": "市辖区",
        "1882": "香洲区",
        "1883": "斗门区",
        "1884": "金湾区",
        "1885": "市辖区",
        "1886": "龙湖区",
        "1887": "金平区",
        "1888": "濠江区",
        "1889": "潮阳区",
        "1890": "潮南区",
        "1891": "澄海区",
        "1892": "南澳县",
        "1893": "市辖区",
        "1894": "武江区",
        "1895": "浈江区",
        "1896": "曲江区",
        "1897": "始兴县",
        "1898": "仁化县",
        "1899": "翁源县",
        "1900": "乳源瑶族自治县",
        "1901": "新丰县",
        "1902": "乐昌市",
        "1903": "南雄市",
        "1904": "市辖区",
        "1905": "禅城区",
        "1906": "南海区",
        "1907": "顺德区",
        "1908": "三水区",
        "1909": "高明区",
        "1910": "市辖区",
        "1911": "蓬江区",
        "1912": "江海区",
        "1913": "新会区",
        "1914": "台山市",
        "1915": "开平市",
        "1916": "鹤山市",
        "1917": "恩平市",
        "1918": "市辖区",
        "1919": "赤坎区",
        "1920": "霞山区",
        "1921": "坡头区",
        "1922": "麻章区",
        "1923": "遂溪县",
        "1924": "徐闻县",
        "1925": "廉江市",
        "1926": "雷州市",
        "1927": "吴川市",
        "1928": "市辖区",
        "1929": "茂南区",
        "1930": "茂港区",
        "1931": "电白县",
        "1932": "高州市",
        "1933": "化州市",
        "1934": "信宜市",
        "1935": "市辖区",
        "1936": "端州区",
        "1937": "鼎湖区",
        "1938": "广宁县",
        "1939": "怀集县",
        "1940": "封开县",
        "1941": "德庆县",
        "1942": "高要市",
        "1943": "四会市",
        "1944": "市辖区",
        "1945": "惠城区",
        "1946": "惠阳区",
        "1947": "博罗县",
        "1948": "惠东县",
        "1949": "龙门县",
        "1950": "市辖区",
        "1951": "梅江区",
        "1952": "梅　县",
        "1953": "大埔县",
        "1954": "丰顺县",
        "1955": "五华县",
        "1956": "平远县",
        "1957": "蕉岭县",
        "1958": "兴宁市",
        "1959": "市辖区",
        "1960": "城　区",
        "1961": "海丰县",
        "1962": "陆河县",
        "1963": "陆丰市",
        "1964": "市辖区",
        "1965": "源城区",
        "1966": "紫金县",
        "1967": "龙川县",
        "1968": "连平县",
        "1969": "和平县",
        "1970": "东源县",
        "1971": "市辖区",
        "1972": "江城区",
        "1973": "阳西县",
        "1974": "阳东县",
        "1975": "阳春市",
        "1976": "市辖区",
        "1977": "清城区",
        "1978": "佛冈县",
        "1979": "阳山县",
        "1980": "连山壮族瑶族自治县",
        "1981": "连南瑶族自治县",
        "1982": "清新县",
        "1983": "英德市",
        "1984": "连州市",
        "1985": "市辖区",
        "1986": "湘桥区",
        "1987": "潮安县",
        "1988": "饶平县",
        "1989": "市辖区",
        "1990": "榕城区",
        "1991": "揭东县",
        "1992": "揭西县",
        "1993": "惠来县",
        "1994": "普宁市",
        "1995": "市辖区",
        "1996": "云城区",
        "1997": "新兴县",
        "1998": "郁南县",
        "1999": "云安县",
        "2000": "罗定市",
        "2001": "市辖区",
        "2002": "城关区",
        "2003": "七里河区",
        "2004": "西固区",
        "2005": "安宁区",
        "2006": "红古区",
        "2007": "永登县",
        "2008": "皋兰县",
        "2009": "榆中县",
        "2010": "市辖区",
        "2011": "金川区",
        "2012": "永昌县",
        "2013": "市辖区",
        "2014": "白银区",
        "2015": "平川区",
        "2016": "靖远县",
        "2017": "会宁县",
        "2018": "景泰县",
        "2019": "市辖区",
        "2020": "秦城区",
        "2021": "北道区",
        "2022": "清水县",
        "2023": "秦安县",
        "2024": "甘谷县",
        "2025": "武山县",
        "2026": "张家川回族自治县",
        "2027": "市辖区",
        "2028": "市辖区",
        "2029": "凉州区",
        "2030": "民勤县",
        "2031": "古浪县",
        "2032": "天祝藏族自治县",
        "2033": "市辖区",
        "2034": "甘州区",
        "2035": "肃南裕固族自治县",
        "2036": "民乐县",
        "2037": "临泽县",
        "2038": "高台县",
        "2039": "山丹县",
        "2040": "市辖区",
        "2041": "崆峒区",
        "2042": "泾川县",
        "2043": "灵台县",
        "2044": "崇信县",
        "2045": "华亭县",
        "2046": "庄浪县",
        "2047": "静宁县",
        "2048": "市辖区",
        "2049": "肃州区",
        "2050": "金塔县",
        "2051": "安西县",
        "2052": "肃北蒙古族自治县",
        "2053": "阿克塞哈萨克族自治县",
        "2054": "玉门市",
        "2055": "敦煌市",
        "2056": "市辖区",
        "2057": "西峰区",
        "2058": "庆城县",
        "2059": "环　县",
        "2060": "华池县",
        "2061": "合水县",
        "2062": "正宁县",
        "2063": "宁　县",
        "2064": "镇原县",
        "2065": "市辖区",
        "2066": "安定区",
        "2067": "通渭县",
        "2068": "陇西县",
        "2069": "渭源县",
        "2070": "临洮县",
        "2071": "漳　县",
        "2072": "岷　县",
        "2073": "市辖区",
        "2074": "武都区",
        "2075": "成　县",
        "2076": "文　县",
        "2077": "宕昌县",
        "2078": "康　县",
        "2079": "西和县",
        "2080": "礼　县",
        "2081": "徽　县",
        "2082": "两当县",
        "2083": "临夏市",
        "2084": "临夏县",
        "2085": "康乐县",
        "2086": "永靖县",
        "2087": "广河县",
        "2088": "和政县",
        "2089": "东乡族自治县",
        "2090": "积石山保安族东乡族撒拉族自治县",
        "2091": "合作市",
        "2092": "临潭县",
        "2093": "卓尼县",
        "2094": "舟曲县",
        "2095": "迭部县",
        "2096": "玛曲县",
        "2097": "碌曲县",
        "2098": "夏河县",
        "2099": "市辖区",
        "2100": "锦江区",
        "2101": "青羊区",
        "2102": "金牛区",
        "2103": "武侯区",
        "2104": "成华区",
        "2105": "龙泉驿区",
        "2106": "青白江区",
        "2107": "新都区",
        "2108": "温江县",
        "2109": "金堂县",
        "2110": "双流县",
        "2111": "郫　县",
        "2112": "大邑县",
        "2113": "蒲江县",
        "2114": "新津县",
        "2115": "都江堰市",
        "2116": "彭州市",
        "2117": "邛崃市",
        "2118": "崇州市",
        "2119": "市辖区",
        "2120": "自流井区",
        "2121": "贡井区",
        "2122": "大安区",
        "2123": "沿滩区",
        "2124": "荣　县",
        "2125": "富顺县",
        "2126": "市辖区",
        "2127": "东　区",
        "2128": "西　区",
        "2129": "仁和区",
        "2130": "米易县",
        "2131": "盐边县",
        "2132": "市辖区",
        "2133": "江阳区",
        "2134": "纳溪区",
        "2135": "龙马潭区",
        "2136": "泸　县",
        "2137": "合江县",
        "2138": "叙永县",
        "2139": "古蔺县",
        "2140": "市辖区",
        "2141": "旌阳区",
        "2142": "中江县",
        "2143": "罗江县",
        "2144": "广汉市",
        "2145": "什邡市",
        "2146": "绵竹市",
        "2147": "市辖区",
        "2148": "涪城区",
        "2149": "游仙区",
        "2150": "三台县",
        "2151": "盐亭县",
        "2152": "安　县",
        "2153": "梓潼县",
        "2154": "北川羌族自治县",
        "2155": "平武县",
        "2156": "江油市",
        "2157": "市辖区",
        "2158": "市中区",
        "2159": "元坝区",
        "2160": "朝天区",
        "2161": "旺苍县",
        "2162": "青川县",
        "2163": "剑阁县",
        "2164": "苍溪县",
        "2165": "市辖区",
        "2166": "船山区",
        "2167": "安居区",
        "2168": "蓬溪县",
        "2169": "射洪县",
        "2170": "大英县",
        "2171": "市辖区",
        "2172": "市中区",
        "2173": "东兴区",
        "2174": "威远县",
        "2175": "资中县",
        "2176": "隆昌县",
        "2177": "市辖区",
        "2178": "市中区",
        "2179": "沙湾区",
        "2180": "五通桥区",
        "2181": "金口河区",
        "2182": "犍为县",
        "2183": "井研县",
        "2184": "夹江县",
        "2185": "沐川县",
        "2186": "峨边彝族自治县",
        "2187": "马边彝族自治县",
        "2188": "峨眉山市",
        "2189": "市辖区",
        "2190": "顺庆区",
        "2191": "高坪区",
        "2192": "嘉陵区",
        "2193": "南部县",
        "2194": "营山县",
        "2195": "蓬安县",
        "2196": "仪陇县",
        "2197": "西充县",
        "2198": "阆中市",
        "2199": "市辖区",
        "2200": "东坡区",
        "2201": "仁寿县",
        "2202": "彭山县",
        "2203": "洪雅县",
        "2204": "丹棱县",
        "2205": "青神县",
        "2206": "市辖区",
        "2207": "翠屏区",
        "2208": "宜宾县",
        "2209": "南溪县",
        "2210": "江安县",
        "2211": "长宁县",
        "2212": "高　县",
        "2213": "珙　县",
        "2214": "筠连县",
        "2215": "兴文县",
        "2216": "屏山县",
        "2217": "市辖区",
        "2218": "广安区",
        "2219": "岳池县",
        "2220": "武胜县",
        "2221": "邻水县",
        "2222": "华莹市",
        "2223": "市辖区",
        "2224": "通川区",
        "2225": "达　县",
        "2226": "宣汉县",
        "2227": "开江县",
        "2228": "大竹县",
        "2229": "渠　县",
        "2230": "万源市",
        "2231": "市辖区",
        "2232": "雨城区",
        "2233": "名山县",
        "2234": "荥经县",
        "2235": "汉源县",
        "2236": "石棉县",
        "2237": "天全县",
        "2238": "芦山县",
        "2239": "宝兴县",
        "2240": "市辖区",
        "2241": "巴州区",
        "2242": "通江县",
        "2243": "南江县",
        "2244": "平昌县",
        "2245": "市辖区",
        "2246": "雁江区",
        "2247": "安岳县",
        "2248": "乐至县",
        "2249": "简阳市",
        "2250": "汶川县",
        "2251": "理　县",
        "2252": "茂　县",
        "2253": "松潘县",
        "2254": "九寨沟县",
        "2255": "金川县",
        "2256": "小金县",
        "2257": "黑水县",
        "2258": "马尔康县",
        "2259": "壤塘县",
        "2260": "阿坝县",
        "2261": "若尔盖县",
        "2262": "红原县",
        "2263": "康定县",
        "2264": "泸定县",
        "2265": "丹巴县",
        "2266": "九龙县",
        "2267": "雅江县",
        "2268": "道孚县",
        "2269": "炉霍县",
        "2270": "甘孜县",
        "2271": "新龙县",
        "2272": "德格县",
        "2273": "白玉县",
        "2274": "石渠县",
        "2275": "色达县",
        "2276": "理塘县",
        "2277": "巴塘县",
        "2278": "乡城县",
        "2279": "稻城县",
        "2280": "得荣县",
        "2281": "西昌市",
        "2282": "木里藏族自治县",
        "2283": "盐源县",
        "2284": "德昌县",
        "2285": "会理县",
        "2286": "会东县",
        "2287": "宁南县",
        "2288": "普格县",
        "2289": "布拖县",
        "2290": "金阳县",
        "2291": "昭觉县",
        "2292": "喜德县",
        "2293": "冕宁县",
        "2294": "越西县",
        "2295": "甘洛县",
        "2296": "美姑县",
        "2297": "雷波县",
        "2298": "市辖区",
        "2299": "南明区",
        "2300": "云岩区",
        "2301": "花溪区",
        "2302": "乌当区",
        "2303": "白云区",
        "2304": "小河区",
        "2305": "开阳县",
        "2306": "息烽县",
        "2307": "修文县",
        "2308": "清镇市",
        "2309": "钟山区",
        "2310": "六枝特区",
        "2311": "水城县",
        "2312": "盘　县",
        "2313": "市辖区",
        "2314": "红花岗区",
        "2315": "汇川区",
        "2316": "遵义县",
        "2317": "桐梓县",
        "2318": "绥阳县",
        "2319": "正安县",
        "2320": "道真仡佬族苗族自治县",
        "2321": "务川仡佬族苗族自治县",
        "2322": "凤冈县",
        "2323": "湄潭县",
        "2324": "余庆县",
        "2325": "习水县",
        "2326": "赤水市",
        "2327": "仁怀市",
        "2328": "市辖区",
        "2329": "西秀区",
        "2330": "平坝县",
        "2331": "普定县",
        "2332": "镇宁布依族苗族自治县",
        "2333": "关岭布依族苗族自治县",
        "2334": "紫云苗族布依族自治县",
        "2335": "铜仁市",
        "2336": "江口县",
        "2337": "玉屏侗族自治县",
        "2338": "石阡县",
        "2339": "思南县",
        "2340": "印江土家族苗族自治县",
        "2341": "德江县",
        "2342": "沿河土家族自治县",
        "2343": "松桃苗族自治县",
        "2344": "万山特区",
        "2345": "毕节市",
        "2346": "大方县",
        "2347": "黔西县",
        "2348": "金沙县",
        "2349": "织金县",
        "2350": "纳雍县",
        "2351": "威宁彝族回族苗族自治县",
        "2352": "赫章县",
        "2353": "兴义市",
        "2354": "兴仁县",
        "2355": "普安县",
        "2356": "晴隆县",
        "2357": "贞丰县",
        "2358": "望谟县",
        "2359": "册亨县",
        "2360": "安龙县",
        "2361": "凯里市",
        "2362": "黄平县",
        "2363": "施秉县",
        "2364": "三穗县",
        "2365": "镇远县",
        "2366": "岑巩县",
        "2367": "天柱县",
        "2368": "锦屏县",
        "2369": "剑河县",
        "2370": "台江县",
        "2371": "黎平县",
        "2372": "榕江县",
        "2373": "从江县",
        "2374": "雷山县",
        "2375": "麻江县",
        "2376": "丹寨县",
        "2377": "都匀市",
        "2378": "福泉市",
        "2379": "荔波县",
        "2380": "贵定县",
        "2381": "瓮安县",
        "2382": "独山县",
        "2383": "平塘县",
        "2384": "罗甸县",
        "2385": "长顺县",
        "2386": "龙里县",
        "2387": "惠水县",
        "2388": "三都水族自治县",
        "2389": "市辖区",
        "2390": "秀英区",
        "2391": "龙华区",
        "2392": "琼山区",
        "2393": "美兰区",
        "2394": "市辖区",
        "2395": "五指山市",
        "2396": "琼海市",
        "2397": "儋州市",
        "2398": "文昌市",
        "2399": "万宁市",
        "2400": "东方市",
        "2401": "澄迈县",
        "2402": "定安县",
        "2403": "屯昌县",
        "2404": "临高县",
        "2405": "白沙黎族自治县",
        "2406": "昌江黎族自治县",
        "2407": "乐东黎族自治县",
        "2408": "陵水黎族自治县",
        "2409": "保亭黎族苗族自治县",
        "2410": "琼中黎族苗族自治县",
        "2411": "市辖区",
        "2412": "五华区",
        "2413": "盘龙区",
        "2414": "官渡区",
        "2415": "西山区",
        "2416": "东川区",
        "2417": "呈贡县",
        "2418": "晋宁县",
        "2419": "富民县",
        "2420": "宜良县",
        "2421": "石林彝族自治县",
        "2422": "嵩明县",
        "2423": "禄劝彝族苗族自治县",
        "2424": "寻甸回族彝族自治县",
        "2425": "安宁市",
        "2426": "市辖区",
        "2427": "麒麟区",
        "2428": "马龙县",
        "2429": "陆良县",
        "2430": "师宗县",
        "2431": "罗平县",
        "2432": "富源县",
        "2433": "会泽县",
        "2434": "沾益县",
        "2435": "宣威市",
        "2436": "市辖区",
        "2437": "红塔区",
        "2438": "江川县",
        "2439": "澄江县",
        "2440": "通海县",
        "2441": "华宁县",
        "2442": "易门县",
        "2443": "峨山彝族自治县",
        "2444": "新平彝族傣族自治县",
        "2445": "元江哈尼族彝族傣族自治县",
        "2446": "市辖区",
        "2447": "隆阳区",
        "2448": "施甸县",
        "2449": "腾冲县",
        "2450": "龙陵县",
        "2451": "昌宁县",
        "2452": "市辖区",
        "2453": "昭阳区",
        "2454": "鲁甸县",
        "2455": "巧家县",
        "2456": "盐津县",
        "2457": "大关县",
        "2458": "永善县",
        "2459": "绥江县",
        "2460": "镇雄县",
        "2461": "彝良县",
        "2462": "威信县",
        "2463": "水富县",
        "2464": "市辖区",
        "2465": "古城区",
        "2466": "玉龙纳西族自治县",
        "2467": "永胜县",
        "2468": "华坪县",
        "2469": "宁蒗彝族自治县",
        "2470": "市辖区",
        "2471": "翠云区",
        "2472": "普洱哈尼族彝族自治县",
        "2473": "墨江哈尼族自治县",
        "2474": "景东彝族自治县",
        "2475": "景谷傣族彝族自治县",
        "2476": "镇沅彝族哈尼族拉祜族自治县",
        "2477": "江城哈尼族彝族自治县",
        "2478": "孟连傣族拉祜族佤族自治县",
        "2479": "澜沧拉祜族自治县",
        "2480": "西盟佤族自治县",
        "2481": "市辖区",
        "2482": "临翔区",
        "2483": "凤庆县",
        "2484": "云　县",
        "2485": "永德县",
        "2486": "镇康县",
        "2487": "双江拉祜族佤族布朗族傣族自治县",
        "2488": "耿马傣族佤族自治县",
        "2489": "沧源佤族自治县",
        "2490": "文山县",
        "2491": "砚山县",
        "2492": "西畴县",
        "2493": "麻栗坡县",
        "2494": "马关县",
        "2495": "丘北县",
        "2496": "广南县",
        "2497": "富宁县",
        "2498": "个旧市",
        "2499": "开远市",
        "2500": "蒙自县",
        "2501": "屏边苗族自治县",
        "2502": "建水县",
        "2503": "石屏县",
        "2504": "弥勒县",
        "2505": "泸西县",
        "2506": "元阳县",
        "2507": "红河县",
        "2508": "金平苗族瑶族傣族自治县",
        "2509": "绿春县",
        "2510": "河口瑶族自治县",
        "2511": "景洪市",
        "2512": "勐海县",
        "2513": "勐腊县",
        "2514": "楚雄市",
        "2515": "双柏县",
        "2516": "牟定县",
        "2517": "南华县",
        "2518": "姚安县",
        "2519": "大姚县",
        "2520": "永仁县",
        "2521": "元谋县",
        "2522": "武定县",
        "2523": "禄丰县",
        "2524": "大理市",
        "2525": "漾濞彝族自治县",
        "2526": "祥云县",
        "2527": "宾川县",
        "2528": "弥渡县",
        "2529": "南涧彝族自治县",
        "2530": "巍山彝族回族自治县",
        "2531": "永平县",
        "2532": "云龙县",
        "2533": "洱源县",
        "2534": "剑川县",
        "2535": "鹤庆县",
        "2536": "瑞丽市",
        "2537": "潞西市",
        "2538": "梁河县",
        "2539": "盈江县",
        "2540": "陇川县",
        "2541": "泸水县",
        "2542": "福贡县",
        "2543": "贡山独龙族怒族自治县",
        "2544": "兰坪白族普米族自治县",
        "2545": "香格里拉县",
        "2546": "德钦县",
        "2547": "维西傈僳族自治县",
        "2548": "市辖区",
        "2549": "城东区",
        "2550": "城中区",
        "2551": "城西区",
        "2552": "城北区",
        "2553": "大通回族土族自治县",
        "2554": "湟中县",
        "2555": "湟源县",
        "2556": "平安县",
        "2557": "民和回族土族自治县",
        "2558": "乐都县",
        "2559": "互助土族自治县",
        "2560": "化隆回族自治县",
        "2561": "循化撒拉族自治县",
        "2562": "门源回族自治县",
        "2563": "祁连县",
        "2564": "海晏县",
        "2565": "刚察县",
        "2566": "同仁县",
        "2567": "尖扎县",
        "2568": "泽库县",
        "2569": "河南蒙古族自治县",
        "2570": "共和县",
        "2571": "同德县",
        "2572": "贵德县",
        "2573": "兴海县",
        "2574": "贵南县",
        "2575": "玛沁县",
        "2576": "班玛县",
        "2577": "甘德县",
        "2578": "达日县",
        "2579": "久治县",
        "2580": "玛多县",
        "2581": "玉树县",
        "2582": "杂多县",
        "2583": "称多县",
        "2584": "治多县",
        "2585": "囊谦县",
        "2586": "曲麻莱县",
        "2587": "格尔木市",
        "2588": "德令哈市",
        "2589": "乌兰县",
        "2590": "都兰县",
        "2591": "天峻县",
        "2592": "市辖区",
        "2593": "新城区",
        "2594": "碑林区",
        "2595": "莲湖区",
        "2596": "灞桥区",
        "2597": "未央区",
        "2598": "雁塔区",
        "2599": "阎良区",
        "2600": "临潼区",
        "2601": "长安区",
        "2602": "蓝田县",
        "2603": "周至县",
        "2604": "户　县",
        "2605": "高陵县",
        "2606": "市辖区",
        "2607": "王益区",
        "2608": "印台区",
        "2609": "耀州区",
        "2610": "宜君县",
        "2611": "市辖区",
        "2612": "渭滨区",
        "2613": "金台区",
        "2614": "陈仓区",
        "2615": "凤翔县",
        "2616": "岐山县",
        "2617": "扶风县",
        "2618": "眉　县",
        "2619": "陇　县",
        "2620": "千阳县",
        "2621": "麟游县",
        "2622": "凤　县",
        "2623": "太白县",
        "2624": "市辖区",
        "2625": "秦都区",
        "2626": "杨凌区",
        "2627": "渭城区",
        "2628": "三原县",
        "2629": "泾阳县",
        "2630": "乾　县",
        "2631": "礼泉县",
        "2632": "永寿县",
        "2633": "彬　县",
        "2634": "长武县",
        "2635": "旬邑县",
        "2636": "淳化县",
        "2637": "武功县",
        "2638": "兴平市",
        "2639": "市辖区",
        "2640": "临渭区",
        "2641": "华　县",
        "2642": "潼关县",
        "2643": "大荔县",
        "2644": "合阳县",
        "2645": "澄城县",
        "2646": "蒲城县",
        "2647": "白水县",
        "2648": "富平县",
        "2649": "韩城市",
        "2650": "华阴市",
        "2651": "市辖区",
        "2652": "宝塔区",
        "2653": "延长县",
        "2654": "延川县",
        "2655": "子长县",
        "2656": "安塞县",
        "2657": "志丹县",
        "2658": "吴旗县",
        "2659": "甘泉县",
        "2660": "富　县",
        "2661": "洛川县",
        "2662": "宜川县",
        "2663": "黄龙县",
        "2664": "黄陵县",
        "2665": "市辖区",
        "2666": "汉台区",
        "2667": "南郑县",
        "2668": "城固县",
        "2669": "洋　县",
        "2670": "西乡县",
        "2671": "勉　县",
        "2672": "宁强县",
        "2673": "略阳县",
        "2674": "镇巴县",
        "2675": "留坝县",
        "2676": "佛坪县",
        "2677": "市辖区",
        "2678": "榆阳区",
        "2679": "神木县",
        "2680": "府谷县",
        "2681": "横山县",
        "2682": "靖边县",
        "2683": "定边县",
        "2684": "绥德县",
        "2685": "米脂县",
        "2686": "佳　县",
        "2687": "吴堡县",
        "2688": "清涧县",
        "2689": "子洲县",
        "2690": "市辖区",
        "2691": "汉滨区",
        "2692": "汉阴县",
        "2693": "石泉县",
        "2694": "宁陕县",
        "2695": "紫阳县",
        "2696": "岚皋县",
        "2697": "平利县",
        "2698": "镇坪县",
        "2699": "旬阳县",
        "2700": "白河县",
        "2701": "市辖区",
        "2702": "商州区",
        "2703": "洛南县",
        "2704": "丹凤县",
        "2705": "商南县",
        "2706": "山阳县",
        "2707": "镇安县",
        "2708": "柞水县",
        "2709": "市辖区",
        "2710": "兴宁区",
        "2711": "青秀区",
        "2712": "江南区",
        "2713": "西乡塘区",
        "2714": "良庆区",
        "2715": "邕宁区",
        "2716": "武鸣县",
        "2717": "隆安县",
        "2718": "马山县",
        "2719": "上林县",
        "2720": "宾阳县",
        "2721": "横　县",
        "2722": "市辖区",
        "2723": "城中区",
        "2724": "鱼峰区",
        "2725": "柳南区",
        "2726": "柳北区",
        "2727": "柳江县",
        "2728": "柳城县",
        "2729": "鹿寨县",
        "2730": "融安县",
        "2731": "融水苗族自治县",
        "2732": "三江侗族自治县",
        "2733": "市辖区",
        "2734": "秀峰区",
        "2735": "叠彩区",
        "2736": "象山区",
        "2737": "七星区",
        "2738": "雁山区",
        "2739": "阳朔县",
        "2740": "临桂县",
        "2741": "灵川县",
        "2742": "全州县",
        "2743": "兴安县",
        "2744": "永福县",
        "2745": "灌阳县",
        "2746": "龙胜各族自治县",
        "2747": "资源县",
        "2748": "平乐县",
        "2749": "荔蒲县",
        "2750": "恭城瑶族自治县",
        "2751": "市辖区",
        "2752": "万秀区",
        "2753": "蝶山区",
        "2754": "长洲区",
        "2755": "苍梧县",
        "2756": "藤　县",
        "2757": "蒙山县",
        "2758": "岑溪市",
        "2759": "市辖区",
        "2760": "海城区",
        "2761": "银海区",
        "2762": "铁山港区",
        "2763": "合浦县",
        "2764": "市辖区",
        "2765": "港口区",
        "2766": "防城区",
        "2767": "上思县",
        "2768": "东兴市",
        "2769": "市辖区",
        "2770": "钦南区",
        "2771": "钦北区",
        "2772": "灵山县",
        "2773": "浦北县",
        "2774": "市辖区",
        "2775": "港北区",
        "2776": "港南区",
        "2777": "覃塘区",
        "2778": "平南县",
        "2779": "桂平市",
        "2780": "市辖区",
        "2781": "玉州区",
        "2782": "容　县",
        "2783": "陆川县",
        "2784": "博白县",
        "2785": "兴业县",
        "2786": "北流市",
        "2787": "市辖区",
        "2788": "右江区",
        "2789": "田阳县",
        "2790": "田东县",
        "2791": "平果县",
        "2792": "德保县",
        "2793": "靖西县",
        "2794": "那坡县",
        "2795": "凌云县",
        "2796": "乐业县",
        "2797": "田林县",
        "2798": "西林县",
        "2799": "隆林各族自治县",
        "2800": "市辖区",
        "2801": "八步区",
        "2802": "昭平县",
        "2803": "钟山县",
        "2804": "富川瑶族自治县",
        "2805": "市辖区",
        "2806": "金城江区",
        "2807": "南丹县",
        "2808": "天峨县",
        "2809": "凤山县",
        "2810": "东兰县",
        "2811": "罗城仫佬族自治县",
        "2812": "环江毛南族自治县",
        "2813": "巴马瑶族自治县",
        "2814": "都安瑶族自治县",
        "2815": "大化瑶族自治县",
        "2816": "宜州市",
        "2817": "市辖区",
        "2818": "兴宾区",
        "2819": "忻城县",
        "2820": "象州县",
        "2821": "武宣县",
        "2822": "金秀瑶族自治县",
        "2823": "合山市",
        "2824": "市辖区",
        "2825": "江洲区",
        "2826": "扶绥县",
        "2827": "宁明县",
        "2828": "龙州县",
        "2829": "大新县",
        "2830": "天等县",
        "2831": "凭祥市",
        "2832": "市辖区",
        "2833": "城关区",
        "2834": "林周县",
        "2835": "当雄县",
        "2836": "尼木县",
        "2837": "曲水县",
        "2838": "堆龙德庆县",
        "2839": "达孜县",
        "2840": "墨竹工卡县",
        "2841": "那曲县",
        "2842": "嘉黎县",
        "2843": "比如县",
        "2844": "聂荣县",
        "2845": "安多县",
        "2846": "申扎县",
        "2847": "索　县",
        "2848": "班戈县",
        "2849": "巴青县",
        "2850": "尼玛县",
        "2851": "昌都县",
        "2852": "江达县",
        "2853": "贡觉县",
        "2854": "类乌齐县",
        "2855": "丁青县",
        "2856": "察雅县",
        "2857": "八宿县",
        "2858": "左贡县",
        "2859": "芒康县",
        "2860": "洛隆县",
        "2861": "边坝县",
        "2862": "乃东县",
        "2863": "扎囊县",
        "2864": "贡嘎县",
        "2865": "桑日县",
        "2866": "琼结县",
        "2867": "曲松县",
        "2868": "措美县",
        "2869": "洛扎县",
        "2870": "加查县",
        "2871": "隆子县",
        "2872": "错那县",
        "2873": "浪卡子县",
        "2874": "日喀则市",
        "2875": "南木林县",
        "2876": "江孜县",
        "2877": "定日县",
        "2878": "萨迦县",
        "2879": "拉孜县",
        "2880": "昂仁县",
        "2881": "谢通门县",
        "2882": "白朗县",
        "2883": "仁布县",
        "2884": "康马县",
        "2885": "定结县",
        "2886": "仲巴县",
        "2887": "亚东县",
        "2888": "吉隆县",
        "2889": "聂拉木县",
        "2890": "萨嘎县",
        "2891": "岗巴县",
        "2892": "普兰县",
        "2893": "札达县",
        "2894": "噶尔县",
        "2895": "日土县",
        "2896": "革吉县",
        "2897": "改则县",
        "2898": "措勤县",
        "2899": "林芝县",
        "2900": "工布江达县",
        "2901": "米林县",
        "2902": "墨脱县",
        "2903": "波密县",
        "2904": "察隅县",
        "2905": "朗　县",
        "2906": "市辖区",
        "2907": "兴庆区",
        "2908": "西夏区",
        "2909": "金凤区",
        "2910": "永宁县",
        "2911": "贺兰县",
        "2912": "灵武市",
        "2913": "市辖区",
        "2914": "大武口区",
        "2915": "惠农区",
        "2916": "平罗县",
        "2917": "市辖区",
        "2918": "利通区",
        "2919": "盐池县",
        "2920": "同心县",
        "2921": "青铜峡市",
        "2922": "市辖区",
        "2923": "原州区",
        "2924": "西吉县",
        "2925": "隆德县",
        "2926": "泾源县",
        "2927": "彭阳县",
        "2928": "海原县",
        "2929": "市辖区",
        "2930": "沙坡头区",
        "2931": "中宁县",
        "2932": "市辖区",
        "2933": "天山区",
        "2934": "沙依巴克区",
        "2935": "新市区",
        "2936": "水磨沟区",
        "2937": "头屯河区",
        "2938": "达坂城区",
        "2939": "东山区",
        "2940": "乌鲁木齐县",
        "2941": "市辖区",
        "2942": "独山子区",
        "2943": "克拉玛依区",
        "2944": "白碱滩区",
        "2945": "乌尔禾区",
        "2946": "吐鲁番市",
        "2947": "鄯善县",
        "2948": "托克逊县",
        "2949": "阿克苏市",
        "2950": "温宿县",
        "2951": "库车县",
        "2952": "沙雅县",
        "2953": "新和县",
        "2954": "拜城县",
        "2955": "乌什县",
        "2956": "阿瓦提县",
        "2957": "柯坪县",
        "2958": "莎车县",
        "2959": "叶城县",
        "2960": "麦盖提县",
        "2961": "岳普湖县",
        "2962": "伽师县",
        "2963": "巴楚县",
        "2964": "塔什库尔干塔吉克自治县",
        "2965": "泽普县",
        "2966": "疏勒县",
        "2967": "疏附县",
        "2968": "喀什市",
        "2969": "英吉沙县",
        "2970": "哈密市",
        "2971": "巴里坤哈萨克自治县",
        "2972": "伊吾县",
        "2973": "洛浦县",
        "2974": "皮山县",
        "2975": "民丰县",
        "2976": "于田县",
        "2977": "策勒县",
        "2978": "墨玉县",
        "2979": "和田县",
        "2980": "和田市",
        "2981": "阿图什市",
        "2982": "阿合奇县",
        "2983": "乌恰县",
        "2984": "阿克陶县",
        "2985": "库尔勒市",
        "2986": "轮台县",
        "2987": "尉犁县",
        "2988": "若羌县",
        "2989": "且末县",
        "2990": "焉耆回族自治县",
        "2991": "和静县",
        "2992": "和硕县",
        "2993": "博湖县",
        "2994": "昌吉市",
        "2995": "阜康市",
        "2996": "米泉市",
        "2997": "呼图壁县",
        "2998": "玛纳斯县",
        "2999": "奇台县",
        "3000": "吉木萨尔县",
        "3001": "木垒哈萨克自治县",
        "3002": "博乐市",
        "3003": "精河县",
        "3004": "温泉县",
        "3005": "尼勒克县",
        "3006": "特克斯县",
        "3007": "昭苏县",
        "3008": "新源县",
        "3009": "巩留县",
        "3010": "霍城县",
        "3011": "察布查尔锡伯自治县",
        "3012": "伊宁县",
        "3013": "奎屯市",
        "3014": "伊宁市",
        "3015": "和布克赛尔蒙古自治县",
        "3016": "裕民县",
        "3017": "托里县",
        "3018": "沙湾县",
        "3019": "额敏县",
        "3020": "乌苏市",
        "3021": "塔城市",
        "3022": "青河县",
        "3023": "哈巴河县",
        "3024": "福海县",
        "3025": "富蕴县",
        "3026": "布尔津县",
        "3027": "阿勒泰市",
        "3028": "吉木乃县",
        "3029": "市辖区",
        "3030": "新城区",
        "3031": "回民区",
        "3032": "玉泉区",
        "3033": "赛罕区",
        "3034": "土默特左旗",
        "3035": "托克托县",
        "3036": "和林格尔县",
        "3037": "清水河县",
        "3038": "武川县",
        "3039": "市辖区",
        "3040": "东河区",
        "3041": "昆都仑区",
        "3042": "青山区",
        "3043": "石拐区",
        "3044": "白云矿区",
        "3045": "九原区",
        "3046": "土默特右旗",
        "3047": "固阳县",
        "3048": "达尔罕茂明安联合旗",
        "3049": "市辖区",
        "3050": "海勃湾区",
        "3051": "海南区",
        "3052": "乌达区",
        "3053": "市辖区",
        "3054": "红山区",
        "3055": "元宝山区",
        "3056": "松山区",
        "3057": "阿鲁科尔沁旗",
        "3058": "巴林左旗",
        "3059": "巴林右旗",
        "3060": "林西县",
        "3061": "克什克腾旗",
        "3062": "翁牛特旗",
        "3063": "喀喇沁旗",
        "3064": "宁城县",
        "3065": "敖汉旗",
        "3066": "市辖区",
        "3067": "科尔沁区",
        "3068": "科尔沁左翼中旗",
        "3069": "科尔沁左翼后旗",
        "3070": "开鲁县",
        "3071": "库伦旗",
        "3072": "奈曼旗",
        "3073": "扎鲁特旗",
        "3074": "霍林郭勒市",
        "3075": "东胜区",
        "3076": "达拉特旗",
        "3077": "准格尔旗",
        "3078": "鄂托克前旗",
        "3079": "鄂托克旗",
        "3080": "杭锦旗",
        "3081": "乌审旗",
        "3082": "伊金霍洛旗",
        "3083": "市辖区",
        "3084": "海拉尔区",
        "3085": "阿荣旗",
        "3086": "莫力达瓦达斡尔族自治旗",
        "3087": "鄂伦春自治旗",
        "3088": "鄂温克族自治旗",
        "3089": "陈巴尔虎旗",
        "3090": "新巴尔虎左旗",
        "3091": "新巴尔虎右旗",
        "3092": "满洲里市",
        "3093": "牙克石市",
        "3094": "扎兰屯市",
        "3095": "额尔古纳市",
        "3096": "根河市",
        "3097": "市辖区",
        "3098": "临河区",
        "3099": "五原县",
        "3100": "磴口县",
        "3101": "乌拉特前旗",
        "3102": "乌拉特中旗",
        "3103": "乌拉特后旗",
        "3104": "杭锦后旗",
        "3105": "市辖区",
        "3106": "集宁区",
        "3107": "卓资县",
        "3108": "化德县",
        "3109": "商都县",
        "3110": "兴和县",
        "3111": "凉城县",
        "3112": "察哈尔右翼前旗",
        "3113": "察哈尔右翼中旗",
        "3114": "察哈尔右翼后旗",
        "3115": "四子王旗",
        "3116": "丰镇市",
        "3117": "二连浩特市",
        "3118": "锡林浩特市",
        "3119": "阿巴嘎旗",
        "3120": "苏尼特左旗",
        "3121": "苏尼特右旗",
        "3122": "东乌珠穆沁旗",
        "3123": "西乌珠穆沁旗",
        "3124": "太仆寺旗",
        "3125": "镶黄旗",
        "3126": "正镶白旗",
        "3127": "正蓝旗",
        "3128": "多伦县",
        "3129": "乌兰浩特市",
        "3130": "阿尔山市",
        "3131": "科尔沁右翼前旗",
        "3132": "科尔沁右翼中旗",
        "3133": "扎赉特旗",
        "3134": "突泉县",
        "3135": "阿拉善左旗",
        "3136": "阿拉善右旗",
        "3137": "额济纳旗",
        "3138": "萝岗区",
        "3139": "南沙区"
    };

    var areaGroup = {
        "1": [{"id": 1, "name": "东城区"}, {"id": 2, "name": "西城区"}, {"id": 3, "name": "崇文区"}, {
            "id": 4,
            "name": "宣武区"
        }, {"id": 5, "name": "朝阳区"}, {"id": 6, "name": "丰台区"}, {"id": 7, "name": "石景山区"}, {
            "id": 8,
            "name": "海淀区"
        }, {"id": 9, "name": "门头沟区"}, {"id": 10, "name": "房山区"}, {"id": 11, "name": "通州区"}, {
            "id": 12,
            "name": "顺义区"
        }, {"id": 13, "name": "昌平区"}, {"id": 14, "name": "大兴区"}, {"id": 15, "name": "怀柔区"}, {
            "id": 16,
            "name": "平谷区"
        }, {"id": 17, "name": "密云县"}, {"id": 18, "name": "延庆县"}],
        "2": [{"id": 19, "name": "和平区"}, {"id": 20, "name": "河东区"}, {"id": 21, "name": "河西区"}, {
            "id": 22,
            "name": "南开区"
        }, {"id": 23, "name": "河北区"}, {"id": 24, "name": "红桥区"}, {"id": 25, "name": "塘沽区"}, {
            "id": 26,
            "name": "汉沽区"
        }, {"id": 27, "name": "大港区"}, {"id": 28, "name": "东丽区"}, {"id": 29, "name": "西青区"}, {
            "id": 30,
            "name": "津南区"
        }, {"id": 31, "name": "北辰区"}, {"id": 32, "name": "武清区"}, {"id": 33, "name": "宝坻区"}, {
            "id": 34,
            "name": "宁河县"
        }, {"id": 35, "name": "静海县"}, {"id": 36, "name": "蓟　县"}],
        "3": [{"id": 37, "name": "黄浦区"}, {"id": 38, "name": "卢湾区"}, {"id": 39, "name": "徐汇区"}, {
            "id": 40,
            "name": "长宁区"
        }, {"id": 41, "name": "静安区"}, {"id": 42, "name": "普陀区"}, {"id": 43, "name": "闸北区"}, {
            "id": 44,
            "name": "虹口区"
        }, {"id": 45, "name": "杨浦区"}, {"id": 46, "name": "闵行区"}, {"id": 47, "name": "宝山区"}, {
            "id": 48,
            "name": "嘉定区"
        }, {"id": 49, "name": "浦东新区"}, {"id": 50, "name": "金山区"}, {"id": 51, "name": "松江区"}, {
            "id": 52,
            "name": "青浦区"
        }, {"id": 53, "name": "南汇区"}, {"id": 54, "name": "奉贤区"}, {"id": 55, "name": "崇明县"}],
        "4": [{"id": 56, "name": "万州区"}, {"id": 57, "name": "涪陵区"}, {"id": 58, "name": "渝中区"}, {
            "id": 59,
            "name": "大渡口区"
        }, {"id": 60, "name": "江北区"}, {"id": 61, "name": "沙坪坝区"}, {"id": 62, "name": "九龙坡区"}, {
            "id": 63,
            "name": "南岸区"
        }, {"id": 64, "name": "北碚区"}, {"id": 65, "name": "万盛区"}, {"id": 66, "name": "双桥区"}, {
            "id": 67,
            "name": "渝北区"
        }, {"id": 68, "name": "巴南区"}, {"id": 69, "name": "黔江区"}, {"id": 70, "name": "长寿区"}, {
            "id": 71,
            "name": "綦江县"
        }, {"id": 72, "name": "潼南县"}, {"id": 73, "name": "铜梁县"}, {"id": 74, "name": "大足县"}, {
            "id": 75,
            "name": "荣昌县"
        }, {"id": 76, "name": "璧山县"}, {"id": 77, "name": "梁平县"}, {"id": 78, "name": "城口县"}, {
            "id": 79,
            "name": "丰都县"
        }, {"id": 80, "name": "垫江县"}, {"id": 81, "name": "武隆县"}, {"id": 82, "name": "忠　县"}, {
            "id": 83,
            "name": "开　县"
        }, {"id": 84, "name": "云阳县"}, {"id": 85, "name": "奉节县"}, {"id": 86, "name": "巫山县"}, {
            "id": 87,
            "name": "巫溪县"
        }, {"id": 88, "name": "石柱土家族自治县"}, {"id": 89, "name": "秀山土家族苗族自治县"}, {
            "id": 90,
            "name": "酉阳土家族苗族自治县"
        }, {"id": 91, "name": "彭水苗族土家族自治县"}, {"id": 92, "name": "江津市"}, {"id": 93, "name": "合川市"}, {
            "id": 94,
            "name": "永川市"
        }, {"id": 95, "name": "南川市"}],
        "5": [{"id": 96, "name": "市辖区"}, {"id": 97, "name": "长安区"}, {"id": 98, "name": "桥东区"}, {
            "id": 99,
            "name": "桥西区"
        }, {"id": 100, "name": "新华区"}, {"id": 101, "name": "井陉矿区"}, {"id": 102, "name": "裕华区"}, {
            "id": 103,
            "name": "井陉县"
        }, {"id": 104, "name": "正定县"}, {"id": 105, "name": "栾城县"}, {"id": 106, "name": "行唐县"}, {
            "id": 107,
            "name": "灵寿县"
        }, {"id": 108, "name": "高邑县"}, {"id": 109, "name": "深泽县"}, {"id": 110, "name": "赞皇县"}, {
            "id": 111,
            "name": "无极县"
        }, {"id": 112, "name": "平山县"}, {"id": 113, "name": "元氏县"}, {"id": 114, "name": "赵　县"}, {
            "id": 115,
            "name": "辛集市"
        }, {"id": 116, "name": "藁城市"}, {"id": 117, "name": "晋州市"}, {"id": 118, "name": "新乐市"}, {
            "id": 119,
            "name": "鹿泉市"
        }],
        "6": [{"id": 120, "name": "市辖区"}, {"id": 121, "name": "路南区"}, {"id": 122, "name": "路北区"}, {
            "id": 123,
            "name": "古冶区"
        }, {"id": 124, "name": "开平区"}, {"id": 125, "name": "丰南区"}, {"id": 126, "name": "丰润区"}, {
            "id": 127,
            "name": "滦　县"
        }, {"id": 128, "name": "滦南县"}, {"id": 129, "name": "乐亭县"}, {"id": 130, "name": "迁西县"}, {
            "id": 131,
            "name": "玉田县"
        }, {"id": 132, "name": "唐海县"}, {"id": 133, "name": "遵化市"}, {"id": 134, "name": "迁安市"}],
        "7": [{"id": 135, "name": "市辖区"}, {"id": 136, "name": "海港区"}, {"id": 137, "name": "山海关区"}, {
            "id": 138,
            "name": "北戴河区"
        }, {"id": 139, "name": "青龙满族自治县"}, {"id": 140, "name": "昌黎县"}, {"id": 141, "name": "抚宁县"}, {
            "id": 142,
            "name": "卢龙县"
        }],
        "8": [{"id": 143, "name": "市辖区"}, {"id": 144, "name": "邯山区"}, {"id": 145, "name": "丛台区"}, {
            "id": 146,
            "name": "复兴区"
        }, {"id": 147, "name": "峰峰矿区"}, {"id": 148, "name": "邯郸县"}, {"id": 149, "name": "临漳县"}, {
            "id": 150,
            "name": "成安县"
        }, {"id": 151, "name": "大名县"}, {"id": 152, "name": "涉　县"}, {"id": 153, "name": "磁　县"}, {
            "id": 154,
            "name": "肥乡县"
        }, {"id": 155, "name": "永年县"}, {"id": 156, "name": "邱　县"}, {"id": 157, "name": "鸡泽县"}, {
            "id": 158,
            "name": "广平县"
        }, {"id": 159, "name": "馆陶县"}, {"id": 160, "name": "魏　县"}, {"id": 161, "name": "曲周县"}, {
            "id": 162,
            "name": "武安市"
        }],
        "9": [{"id": 163, "name": "市辖区"}, {"id": 164, "name": "桥东区"}, {"id": 165, "name": "桥西区"}, {
            "id": 166,
            "name": "邢台县"
        }, {"id": 167, "name": "临城县"}, {"id": 168, "name": "内丘县"}, {"id": 169, "name": "柏乡县"}, {
            "id": 170,
            "name": "隆尧县"
        }, {"id": 171, "name": "任　县"}, {"id": 172, "name": "南和县"}, {"id": 173, "name": "宁晋县"}, {
            "id": 174,
            "name": "巨鹿县"
        }, {"id": 175, "name": "新河县"}, {"id": 176, "name": "广宗县"}, {"id": 177, "name": "平乡县"}, {
            "id": 178,
            "name": "威　县"
        }, {"id": 179, "name": "清河县"}, {"id": 180, "name": "临西县"}, {"id": 181, "name": "南宫市"}, {
            "id": 182,
            "name": "沙河市"
        }],
        "10": [{"id": 183, "name": "市辖区"}, {"id": 184, "name": "新市区"}, {"id": 185, "name": "北市区"}, {
            "id": 186,
            "name": "南市区"
        }, {"id": 187, "name": "满城县"}, {"id": 188, "name": "清苑县"}, {"id": 189, "name": "涞水县"}, {
            "id": 190,
            "name": "阜平县"
        }, {"id": 191, "name": "徐水县"}, {"id": 192, "name": "定兴县"}, {"id": 193, "name": "唐　县"}, {
            "id": 194,
            "name": "高阳县"
        }, {"id": 195, "name": "容城县"}, {"id": 196, "name": "涞源县"}, {"id": 197, "name": "望都县"}, {
            "id": 198,
            "name": "安新县"
        }, {"id": 199, "name": "易　县"}, {"id": 200, "name": "曲阳县"}, {"id": 201, "name": "蠡　县"}, {
            "id": 202,
            "name": "顺平县"
        }, {"id": 203, "name": "博野县"}, {"id": 204, "name": "雄　县"}, {"id": 205, "name": "涿州市"}, {
            "id": 206,
            "name": "定州市"
        }, {"id": 207, "name": "安国市"}, {"id": 208, "name": "高碑店市"}],
        "11": [{"id": 209, "name": "市辖区"}, {"id": 210, "name": "桥东区"}, {"id": 211, "name": "桥西区"}, {
            "id": 212,
            "name": "宣化区"
        }, {"id": 213, "name": "下花园区"}, {"id": 214, "name": "宣化县"}, {"id": 215, "name": "张北县"}, {
            "id": 216,
            "name": "康保县"
        }, {"id": 217, "name": "沽源县"}, {"id": 218, "name": "尚义县"}, {"id": 219, "name": "蔚　县"}, {
            "id": 220,
            "name": "阳原县"
        }, {"id": 221, "name": "怀安县"}, {"id": 222, "name": "万全县"}, {"id": 223, "name": "怀来县"}, {
            "id": 224,
            "name": "涿鹿县"
        }, {"id": 225, "name": "赤城县"}, {"id": 226, "name": "崇礼县"}],
        "12": [{"id": 227, "name": "市辖区"}, {"id": 228, "name": "双桥区"}, {"id": 229, "name": "双滦区"}, {
            "id": 230,
            "name": "鹰手营子矿区"
        }, {"id": 231, "name": "承德县"}, {"id": 232, "name": "兴隆县"}, {"id": 233, "name": "平泉县"}, {
            "id": 234,
            "name": "滦平县"
        }, {"id": 235, "name": "隆化县"}, {"id": 236, "name": "丰宁满族自治县"}, {"id": 237, "name": "宽城满族自治县"}, {
            "id": 238,
            "name": "围场满族蒙古族自治县"
        }],
        "13": [{"id": 239, "name": "市辖区"}, {"id": 240, "name": "新华区"}, {"id": 241, "name": "运河区"}, {
            "id": 242,
            "name": "沧　县"
        }, {"id": 243, "name": "青　县"}, {"id": 244, "name": "东光县"}, {"id": 245, "name": "海兴县"}, {
            "id": 246,
            "name": "盐山县"
        }, {"id": 247, "name": "肃宁县"}, {"id": 248, "name": "南皮县"}, {"id": 249, "name": "吴桥县"}, {
            "id": 250,
            "name": "献　县"
        }, {"id": 251, "name": "孟村回族自治县"}, {"id": 252, "name": "泊头市"}, {"id": 253, "name": "任丘市"}, {
            "id": 254,
            "name": "黄骅市"
        }, {"id": 255, "name": "河间市"}],
        "14": [{"id": 256, "name": "市辖区"}, {"id": 257, "name": "安次区"}, {"id": 258, "name": "广阳区"}, {
            "id": 259,
            "name": "固安县"
        }, {"id": 260, "name": "永清县"}, {"id": 261, "name": "香河县"}, {"id": 262, "name": "大城县"}, {
            "id": 263,
            "name": "文安县"
        }, {"id": 264, "name": "大厂回族自治县"}, {"id": 265, "name": "霸州市"}, {"id": 266, "name": "三河市"}],
        "15": [{"id": 267, "name": "市辖区"}, {"id": 268, "name": "桃城区"}, {"id": 269, "name": "枣强县"}, {
            "id": 270,
            "name": "武邑县"
        }, {"id": 271, "name": "武强县"}, {"id": 272, "name": "饶阳县"}, {"id": 273, "name": "安平县"}, {
            "id": 274,
            "name": "故城县"
        }, {"id": 275, "name": "景　县"}, {"id": 276, "name": "阜城县"}, {"id": 277, "name": "冀州市"}, {
            "id": 278,
            "name": "深州市"
        }],
        "16": [{"id": 279, "name": "市辖区"}, {"id": 280, "name": "小店区"}, {"id": 281, "name": "迎泽区"}, {
            "id": 282,
            "name": "杏花岭区"
        }, {"id": 283, "name": "尖草坪区"}, {"id": 284, "name": "万柏林区"}, {"id": 285, "name": "晋源区"}, {
            "id": 286,
            "name": "清徐县"
        }, {"id": 287, "name": "阳曲县"}, {"id": 288, "name": "娄烦县"}, {"id": 289, "name": "古交市"}],
        "17": [{"id": 290, "name": "市辖区"}, {"id": 291, "name": "城　区"}, {"id": 292, "name": "矿　区"}, {
            "id": 293,
            "name": "南郊区"
        }, {"id": 294, "name": "新荣区"}, {"id": 295, "name": "阳高县"}, {"id": 296, "name": "天镇县"}, {
            "id": 297,
            "name": "广灵县"
        }, {"id": 298, "name": "灵丘县"}, {"id": 299, "name": "浑源县"}, {"id": 300, "name": "左云县"}, {
            "id": 301,
            "name": "大同县"
        }],
        "18": [{"id": 302, "name": "市辖区"}, {"id": 303, "name": "城　区"}, {"id": 304, "name": "矿　区"}, {
            "id": 305,
            "name": "郊　区"
        }, {"id": 306, "name": "平定县"}, {"id": 307, "name": "盂　县"}],
        "19": [{"id": 308, "name": "市辖区"}, {"id": 309, "name": "城　区"}, {"id": 310, "name": "郊　区"}, {
            "id": 311,
            "name": "长治县"
        }, {"id": 312, "name": "襄垣县"}, {"id": 313, "name": "屯留县"}, {"id": 314, "name": "平顺县"}, {
            "id": 315,
            "name": "黎城县"
        }, {"id": 316, "name": "壶关县"}, {"id": 317, "name": "长子县"}, {"id": 318, "name": "武乡县"}, {
            "id": 319,
            "name": "沁　县"
        }, {"id": 320, "name": "沁源县"}, {"id": 321, "name": "潞城市"}],
        "20": [{"id": 322, "name": "市辖区"}, {"id": 323, "name": "城　区"}, {"id": 324, "name": "沁水县"}, {
            "id": 325,
            "name": "阳城县"
        }, {"id": 326, "name": "陵川县"}, {"id": 327, "name": "泽州县"}, {"id": 328, "name": "高平市"}],
        "21": [{"id": 329, "name": "市辖区"}, {"id": 330, "name": "朔城区"}, {"id": 331, "name": "平鲁区"}, {
            "id": 332,
            "name": "山阴县"
        }, {"id": 333, "name": "应　县"}, {"id": 334, "name": "右玉县"}, {"id": 335, "name": "怀仁县"}],
        "22": [{"id": 336, "name": "市辖区"}, {"id": 337, "name": "榆次区"}, {"id": 338, "name": "榆社县"}, {
            "id": 339,
            "name": "左权县"
        }, {"id": 340, "name": "和顺县"}, {"id": 341, "name": "昔阳县"}, {"id": 342, "name": "寿阳县"}, {
            "id": 343,
            "name": "太谷县"
        }, {"id": 344, "name": "祁　县"}, {"id": 345, "name": "平遥县"}, {"id": 346, "name": "灵石县"}, {
            "id": 347,
            "name": "介休市"
        }],
        "23": [{"id": 348, "name": "市辖区"}, {"id": 349, "name": "盐湖区"}, {"id": 350, "name": "临猗县"}, {
            "id": 351,
            "name": "万荣县"
        }, {"id": 352, "name": "闻喜县"}, {"id": 353, "name": "稷山县"}, {"id": 354, "name": "新绛县"}, {
            "id": 355,
            "name": "绛　县"
        }, {"id": 356, "name": "垣曲县"}, {"id": 357, "name": "夏　县"}, {"id": 358, "name": "平陆县"}, {
            "id": 359,
            "name": "芮城县"
        }, {"id": 360, "name": "永济市"}, {"id": 361, "name": "河津市"}],
        "24": [{"id": 362, "name": "市辖区"}, {"id": 363, "name": "忻府区"}, {"id": 364, "name": "定襄县"}, {
            "id": 365,
            "name": "五台县"
        }, {"id": 366, "name": "代　县"}, {"id": 367, "name": "繁峙县"}, {"id": 368, "name": "宁武县"}, {
            "id": 369,
            "name": "静乐县"
        }, {"id": 370, "name": "神池县"}, {"id": 371, "name": "五寨县"}, {"id": 372, "name": "岢岚县"}, {
            "id": 373,
            "name": "河曲县"
        }, {"id": 374, "name": "保德县"}, {"id": 375, "name": "偏关县"}, {"id": 376, "name": "原平市"}],
        "25": [{"id": 377, "name": "市辖区"}, {"id": 378, "name": "尧都区"}, {"id": 379, "name": "曲沃县"}, {
            "id": 380,
            "name": "翼城县"
        }, {"id": 381, "name": "襄汾县"}, {"id": 382, "name": "洪洞县"}, {"id": 383, "name": "古　县"}, {
            "id": 384,
            "name": "安泽县"
        }, {"id": 385, "name": "浮山县"}, {"id": 386, "name": "吉　县"}, {"id": 387, "name": "乡宁县"}, {
            "id": 388,
            "name": "大宁县"
        }, {"id": 389, "name": "隰　县"}, {"id": 390, "name": "永和县"}, {"id": 391, "name": "蒲　县"}, {
            "id": 392,
            "name": "汾西县"
        }, {"id": 393, "name": "侯马市"}, {"id": 394, "name": "霍州市"}],
        "26": [{"id": 395, "name": "市辖区"}, {"id": 396, "name": "离石区"}, {"id": 397, "name": "文水县"}, {
            "id": 398,
            "name": "交城县"
        }, {"id": 399, "name": "兴　县"}, {"id": 400, "name": "临　县"}, {"id": 401, "name": "柳林县"}, {
            "id": 402,
            "name": "石楼县"
        }, {"id": 403, "name": "岚　县"}, {"id": 404, "name": "方山县"}, {"id": 405, "name": "中阳县"}, {
            "id": 406,
            "name": "交口县"
        }, {"id": 407, "name": "孝义市"}, {"id": 408, "name": "汾阳市"}],
        "50": [{"id": 409, "name": "市辖区"}, {"id": 410, "name": "和平区"}, {"id": 411, "name": "沈河区"}, {
            "id": 412,
            "name": "大东区"
        }, {"id": 413, "name": "皇姑区"}, {"id": 414, "name": "铁西区"}, {"id": 415, "name": "苏家屯区"}, {
            "id": 416,
            "name": "东陵区"
        }, {"id": 417, "name": "新城子区"}, {"id": 418, "name": "于洪区"}, {"id": 419, "name": "辽中县"}, {
            "id": 420,
            "name": "康平县"
        }, {"id": 421, "name": "法库县"}, {"id": 422, "name": "新民市"}],
        "51": [{"id": 423, "name": "市辖区"}, {"id": 424, "name": "中山区"}, {"id": 425, "name": "西岗区"}, {
            "id": 426,
            "name": "沙河口区"
        }, {"id": 427, "name": "甘井子区"}, {"id": 428, "name": "旅顺口区"}, {"id": 429, "name": "金州区"}, {
            "id": 430,
            "name": "长海县"
        }, {"id": 431, "name": "瓦房店市"}, {"id": 432, "name": "普兰店市"}, {"id": 433, "name": "庄河市"}],
        "52": [{"id": 434, "name": "市辖区"}, {"id": 435, "name": "铁东区"}, {"id": 436, "name": "铁西区"}, {
            "id": 437,
            "name": "立山区"
        }, {"id": 438, "name": "千山区"}, {"id": 439, "name": "台安县"}, {"id": 440, "name": "岫岩满族自治县"}, {
            "id": 441,
            "name": "海城市"
        }],
        "53": [{"id": 442, "name": "市辖区"}, {"id": 443, "name": "新抚区"}, {"id": 444, "name": "东洲区"}, {
            "id": 445,
            "name": "望花区"
        }, {"id": 446, "name": "顺城区"}, {"id": 447, "name": "抚顺县"}, {"id": 448, "name": "新宾满族自治县"}, {
            "id": 449,
            "name": "清原满族自治县"
        }],
        "54": [{"id": 450, "name": "市辖区"}, {"id": 451, "name": "平山区"}, {"id": 452, "name": "溪湖区"}, {
            "id": 453,
            "name": "明山区"
        }, {"id": 454, "name": "南芬区"}, {"id": 455, "name": "本溪满族自治县"}, {"id": 456, "name": "桓仁满族自治县"}],
        "55": [{"id": 457, "name": "市辖区"}, {"id": 458, "name": "元宝区"}, {"id": 459, "name": "振兴区"}, {
            "id": 460,
            "name": "振安区"
        }, {"id": 461, "name": "宽甸满族自治县"}, {"id": 462, "name": "东港市"}, {"id": 463, "name": "凤城市"}],
        "56": [{"id": 464, "name": "市辖区"}, {"id": 465, "name": "古塔区"}, {"id": 466, "name": "凌河区"}, {
            "id": 467,
            "name": "太和区"
        }, {"id": 468, "name": "黑山县"}, {"id": 469, "name": "义　县"}, {"id": 470, "name": "凌海市"}, {
            "id": 471,
            "name": "北宁市"
        }],
        "57": [{"id": 472, "name": "市辖区"}, {"id": 473, "name": "站前区"}, {"id": 474, "name": "西市区"}, {
            "id": 475,
            "name": "鲅鱼圈区"
        }, {"id": 476, "name": "老边区"}, {"id": 477, "name": "盖州市"}, {"id": 478, "name": "大石桥市"}],
        "58": [{"id": 479, "name": "市辖区"}, {"id": 480, "name": "海州区"}, {"id": 481, "name": "新邱区"}, {
            "id": 482,
            "name": "太平区"
        }, {"id": 483, "name": "清河门区"}, {"id": 484, "name": "细河区"}, {"id": 485, "name": "阜新蒙古族自治县"}, {
            "id": 486,
            "name": "彰武县"
        }],
        "59": [{"id": 487, "name": "市辖区"}, {"id": 488, "name": "白塔区"}, {"id": 489, "name": "文圣区"}, {
            "id": 490,
            "name": "宏伟区"
        }, {"id": 491, "name": "弓长岭区"}, {"id": 492, "name": "太子河区"}, {"id": 493, "name": "辽阳县"}, {
            "id": 494,
            "name": "灯塔市"
        }],
        "60": [{"id": 495, "name": "市辖区"}, {"id": 496, "name": "双台子区"}, {"id": 497, "name": "兴隆台区"}, {
            "id": 498,
            "name": "大洼县"
        }, {"id": 499, "name": "盘山县"}],
        "61": [{"id": 500, "name": "市辖区"}, {"id": 501, "name": "银州区"}, {"id": 502, "name": "清河区"}, {
            "id": 503,
            "name": "铁岭县"
        }, {"id": 504, "name": "西丰县"}, {"id": 505, "name": "昌图县"}, {"id": 506, "name": "调兵山市"}, {
            "id": 507,
            "name": "开原市"
        }],
        "62": [{"id": 508, "name": "市辖区"}, {"id": 509, "name": "双塔区"}, {"id": 510, "name": "龙城区"}, {
            "id": 511,
            "name": "朝阳县"
        }, {"id": 512, "name": "建平县"}, {"id": 513, "name": "喀喇沁左翼蒙古族自治县"}, {"id": 514, "name": "北票市"}, {
            "id": 515,
            "name": "凌源市"
        }],
        "63": [{"id": 516, "name": "市辖区"}, {"id": 517, "name": "连山区"}, {"id": 518, "name": "龙港区"}, {
            "id": 519,
            "name": "南票区"
        }, {"id": 520, "name": "绥中县"}, {"id": 521, "name": "建昌县"}, {"id": 522, "name": "兴城市"}],
        "64": [{"id": 523, "name": "市辖区"}, {"id": 524, "name": "南关区"}, {"id": 525, "name": "宽城区"}, {
            "id": 526,
            "name": "朝阳区"
        }, {"id": 527, "name": "二道区"}, {"id": 528, "name": "绿园区"}, {"id": 529, "name": "双阳区"}, {
            "id": 530,
            "name": "农安县"
        }, {"id": 531, "name": "九台市"}, {"id": 532, "name": "榆树市"}, {"id": 533, "name": "德惠市"}],
        "65": [{"id": 534, "name": "市辖区"}, {"id": 535, "name": "昌邑区"}, {"id": 536, "name": "龙潭区"}, {
            "id": 537,
            "name": "船营区"
        }, {"id": 538, "name": "丰满区"}, {"id": 539, "name": "永吉县"}, {"id": 540, "name": "蛟河市"}, {
            "id": 541,
            "name": "桦甸市"
        }, {"id": 542, "name": "舒兰市"}, {"id": 543, "name": "磐石市"}],
        "66": [{"id": 544, "name": "市辖区"}, {"id": 545, "name": "铁西区"}, {"id": 546, "name": "铁东区"}, {
            "id": 547,
            "name": "梨树县"
        }, {"id": 548, "name": "伊通满族自治县"}, {"id": 549, "name": "公主岭市"}, {"id": 550, "name": "双辽市"}],
        "67": [{"id": 551, "name": "市辖区"}, {"id": 552, "name": "龙山区"}, {"id": 553, "name": "西安区"}, {
            "id": 554,
            "name": "东丰县"
        }, {"id": 555, "name": "东辽县"}],
        "68": [{"id": 556, "name": "市辖区"}, {"id": 557, "name": "东昌区"}, {"id": 558, "name": "二道江区"}, {
            "id": 559,
            "name": "通化县"
        }, {"id": 560, "name": "辉南县"}, {"id": 561, "name": "柳河县"}, {"id": 562, "name": "梅河口市"}, {
            "id": 563,
            "name": "集安市"
        }],
        "69": [{"id": 564, "name": "市辖区"}, {"id": 565, "name": "八道江区"}, {"id": 566, "name": "抚松县"}, {
            "id": 567,
            "name": "靖宇县"
        }, {"id": 568, "name": "长白朝鲜族自治县"}, {"id": 569, "name": "江源县"}, {"id": 570, "name": "临江市"}],
        "70": [{"id": 571, "name": "市辖区"}, {"id": 572, "name": "宁江区"}, {"id": 573, "name": "前郭尔罗斯蒙古族自治县"}, {
            "id": 574,
            "name": "长岭县"
        }, {"id": 575, "name": "乾安县"}, {"id": 576, "name": "扶余县"}],
        "71": [{"id": 577, "name": "市辖区"}, {"id": 578, "name": "洮北区"}, {"id": 579, "name": "镇赉县"}, {
            "id": 580,
            "name": "通榆县"
        }, {"id": 581, "name": "洮南市"}, {"id": 582, "name": "大安市"}],
        "72": [{"id": 583, "name": "延吉市"}, {"id": 584, "name": "图们市"}, {"id": 585, "name": "敦化市"}, {
            "id": 586,
            "name": "珲春市"
        }, {"id": 587, "name": "龙井市"}, {"id": 588, "name": "和龙市"}, {"id": 589, "name": "汪清县"}, {
            "id": 590,
            "name": "安图县"
        }],
        "73": [{"id": 591, "name": "市辖区"}, {"id": 592, "name": "道里区"}, {"id": 593, "name": "南岗区"}, {
            "id": 594,
            "name": "道外区"
        }, {"id": 595, "name": "香坊区"}, {"id": 596, "name": "动力区"}, {"id": 597, "name": "平房区"}, {
            "id": 598,
            "name": "松北区"
        }, {"id": 599, "name": "呼兰区"}, {"id": 600, "name": "依兰县"}, {"id": 601, "name": "方正县"}, {
            "id": 602,
            "name": "宾　县"
        }, {"id": 603, "name": "巴彦县"}, {"id": 604, "name": "木兰县"}, {"id": 605, "name": "通河县"}, {
            "id": 606,
            "name": "延寿县"
        }, {"id": 607, "name": "阿城市"}, {"id": 608, "name": "双城市"}, {"id": 609, "name": "尚志市"}, {
            "id": 610,
            "name": "五常市"
        }],
        "74": [{"id": 611, "name": "市辖区"}, {"id": 612, "name": "龙沙区"}, {"id": 613, "name": "建华区"}, {
            "id": 614,
            "name": "铁锋区"
        }, {"id": 615, "name": "昂昂溪区"}, {"id": 616, "name": "富拉尔基区"}, {"id": 617, "name": "碾子山区"}, {
            "id": 618,
            "name": "梅里斯达斡尔族区"
        }, {"id": 619, "name": "龙江县"}, {"id": 620, "name": "依安县"}, {"id": 621, "name": "泰来县"}, {
            "id": 622,
            "name": "甘南县"
        }, {"id": 623, "name": "富裕县"}, {"id": 624, "name": "克山县"}, {"id": 625, "name": "克东县"}, {
            "id": 626,
            "name": "拜泉县"
        }, {"id": 627, "name": "讷河市"}],
        "75": [{"id": 628, "name": "市辖区"}, {"id": 629, "name": "向阳区"}, {"id": 630, "name": "工农区"}, {
            "id": 631,
            "name": "南山区"
        }, {"id": 632, "name": "兴安区"}, {"id": 633, "name": "东山区"}, {"id": 634, "name": "兴山区"}, {
            "id": 635,
            "name": "萝北县"
        }, {"id": 636, "name": "绥滨县"}],
        "76": [{"id": 637, "name": "市辖区"}, {"id": 638, "name": "尖山区"}, {"id": 639, "name": "岭东区"}, {
            "id": 640,
            "name": "四方台区"
        }, {"id": 641, "name": "宝山区"}, {"id": 642, "name": "集贤县"}, {"id": 643, "name": "友谊县"}, {
            "id": 644,
            "name": "宝清县"
        }, {"id": 645, "name": "饶河县"}],
        "77": [{"id": 646, "name": "市辖区"}, {"id": 647, "name": "鸡冠区"}, {"id": 648, "name": "恒山区"}, {
            "id": 649,
            "name": "滴道区"
        }, {"id": 650, "name": "梨树区"}, {"id": 651, "name": "城子河区"}, {"id": 652, "name": "麻山区"}, {
            "id": 653,
            "name": "鸡东县"
        }, {"id": 654, "name": "虎林市"}, {"id": 655, "name": "密山市"}],
        "78": [{"id": 656, "name": "市辖区"}, {"id": 657, "name": "萨尔图区"}, {"id": 658, "name": "龙凤区"}, {
            "id": 659,
            "name": "让胡路区"
        }, {"id": 660, "name": "红岗区"}, {"id": 661, "name": "大同区"}, {"id": 662, "name": "肇州县"}, {
            "id": 663,
            "name": "肇源县"
        }, {"id": 664, "name": "林甸县"}, {"id": 665, "name": "杜尔伯特蒙古族自治县"}],
        "79": [{"id": 666, "name": "市辖区"}, {"id": 667, "name": "伊春区"}, {"id": 668, "name": "南岔区"}, {
            "id": 669,
            "name": "友好区"
        }, {"id": 670, "name": "西林区"}, {"id": 671, "name": "翠峦区"}, {"id": 672, "name": "新青区"}, {
            "id": 673,
            "name": "美溪区"
        }, {"id": 674, "name": "金山屯区"}, {"id": 675, "name": "五营区"}, {"id": 676, "name": "乌马河区"}, {
            "id": 677,
            "name": "汤旺河区"
        }, {"id": 678, "name": "带岭区"}, {"id": 679, "name": "乌伊岭区"}, {"id": 680, "name": "红星区"}, {
            "id": 681,
            "name": "上甘岭区"
        }, {"id": 682, "name": "嘉荫县"}, {"id": 683, "name": "铁力市"}],
        "80": [{"id": 684, "name": "市辖区"}, {"id": 685, "name": "东安区"}, {"id": 686, "name": "阳明区"}, {
            "id": 687,
            "name": "爱民区"
        }, {"id": 688, "name": "西安区"}, {"id": 689, "name": "东宁县"}, {"id": 690, "name": "林口县"}, {
            "id": 691,
            "name": "绥芬河市"
        }, {"id": 692, "name": "海林市"}, {"id": 693, "name": "宁安市"}, {"id": 694, "name": "穆棱市"}],
        "81": [{"id": 695, "name": "市辖区"}, {"id": 696, "name": "永红区"}, {"id": 697, "name": "向阳区"}, {
            "id": 698,
            "name": "前进区"
        }, {"id": 699, "name": "东风区"}, {"id": 700, "name": "郊　区"}, {"id": 701, "name": "桦南县"}, {
            "id": 702,
            "name": "桦川县"
        }, {"id": 703, "name": "汤原县"}, {"id": 704, "name": "抚远县"}, {"id": 705, "name": "同江市"}, {
            "id": 706,
            "name": "富锦市"
        }],
        "82": [{"id": 707, "name": "市辖区"}, {"id": 708, "name": "新兴区"}, {"id": 709, "name": "桃山区"}, {
            "id": 710,
            "name": "茄子河区"
        }, {"id": 711, "name": "勃利县"}],
        "83": [{"id": 712, "name": "市辖区"}, {"id": 713, "name": "爱辉区"}, {"id": 714, "name": "嫩江县"}, {
            "id": 715,
            "name": "逊克县"
        }, {"id": 716, "name": "孙吴县"}, {"id": 717, "name": "北安市"}, {"id": 718, "name": "五大连池市"}],
        "84": [{"id": 719, "name": "市辖区"}, {"id": 720, "name": "北林区"}, {"id": 721, "name": "望奎县"}, {
            "id": 722,
            "name": "兰西县"
        }, {"id": 723, "name": "青冈县"}, {"id": 724, "name": "庆安县"}, {"id": 725, "name": "明水县"}, {
            "id": 726,
            "name": "绥棱县"
        }, {"id": 727, "name": "安达市"}, {"id": 728, "name": "肇东市"}, {"id": 729, "name": "海伦市"}],
        "85": [{"id": 730, "name": "呼玛县"}, {"id": 731, "name": "塔河县"}, {"id": 732, "name": "漠河县"}],
        "86": [{"id": 733, "name": "市辖区"}, {"id": 734, "name": "玄武区"}, {"id": 735, "name": "白下区"}, {
            "id": 736,
            "name": "秦淮区"
        }, {"id": 737, "name": "建邺区"}, {"id": 738, "name": "鼓楼区"}, {"id": 739, "name": "下关区"}, {
            "id": 740,
            "name": "浦口区"
        }, {"id": 741, "name": "栖霞区"}, {"id": 742, "name": "雨花台区"}, {"id": 743, "name": "江宁区"}, {
            "id": 744,
            "name": "六合区"
        }, {"id": 745, "name": "溧水县"}, {"id": 746, "name": "高淳县"}],
        "87": [{"id": 747, "name": "市辖区"}, {"id": 748, "name": "崇安区"}, {"id": 749, "name": "南长区"}, {
            "id": 750,
            "name": "北塘区"
        }, {"id": 751, "name": "锡山区"}, {"id": 752, "name": "惠山区"}, {"id": 753, "name": "滨湖区"}, {
            "id": 754,
            "name": "江阴市"
        }, {"id": 755, "name": "宜兴市"}],
        "88": [{"id": 756, "name": "市辖区"}, {"id": 757, "name": "鼓楼区"}, {"id": 758, "name": "云龙区"}, {
            "id": 759,
            "name": "九里区"
        }, {"id": 760, "name": "贾汪区"}, {"id": 761, "name": "泉山区"}, {"id": 762, "name": "丰　县"}, {
            "id": 763,
            "name": "沛　县"
        }, {"id": 764, "name": "铜山县"}, {"id": 765, "name": "睢宁县"}, {"id": 766, "name": "新沂市"}, {
            "id": 767,
            "name": "邳州市"
        }],
        "89": [{"id": 768, "name": "市辖区"}, {"id": 769, "name": "天宁区"}, {"id": 770, "name": "钟楼区"}, {
            "id": 771,
            "name": "戚墅堰区"
        }, {"id": 772, "name": "新北区"}, {"id": 773, "name": "武进区"}, {"id": 774, "name": "溧阳市"}, {
            "id": 775,
            "name": "金坛市"
        }],
        "90": [{"id": 776, "name": "市辖区"}, {"id": 777, "name": "沧浪区"}, {"id": 778, "name": "平江区"}, {
            "id": 779,
            "name": "金阊区"
        }, {"id": 780, "name": "虎丘区"}, {"id": 781, "name": "吴中区"}, {"id": 782, "name": "相城区"}, {
            "id": 783,
            "name": "常熟市"
        }, {"id": 784, "name": "张家港市"}, {"id": 785, "name": "昆山市"}, {"id": 786, "name": "吴江市"}, {
            "id": 787,
            "name": "太仓市"
        }],
        "91": [{"id": 788, "name": "市辖区"}, {"id": 789, "name": "崇川区"}, {"id": 790, "name": "港闸区"}, {
            "id": 791,
            "name": "海安县"
        }, {"id": 792, "name": "如东县"}, {"id": 793, "name": "启东市"}, {"id": 794, "name": "如皋市"}, {
            "id": 795,
            "name": "通州市"
        }, {"id": 796, "name": "海门市"}],
        "92": [{"id": 797, "name": "市辖区"}, {"id": 798, "name": "连云区"}, {"id": 799, "name": "新浦区"}, {
            "id": 800,
            "name": "海州区"
        }, {"id": 801, "name": "赣榆县"}, {"id": 802, "name": "东海县"}, {"id": 803, "name": "灌云县"}, {
            "id": 804,
            "name": "灌南县"
        }],
        "93": [{"id": 805, "name": "市辖区"}, {"id": 806, "name": "清河区"}, {"id": 807, "name": "楚州区"}, {
            "id": 808,
            "name": "淮阴区"
        }, {"id": 809, "name": "清浦区"}, {"id": 810, "name": "涟水县"}, {"id": 811, "name": "洪泽县"}, {
            "id": 812,
            "name": "盱眙县"
        }, {"id": 813, "name": "金湖县"}],
        "94": [{"id": 814, "name": "市辖区"}, {"id": 815, "name": "亭湖区"}, {"id": 816, "name": "盐都区"}, {
            "id": 817,
            "name": "响水县"
        }, {"id": 818, "name": "滨海县"}, {"id": 819, "name": "阜宁县"}, {"id": 820, "name": "射阳县"}, {
            "id": 821,
            "name": "建湖县"
        }, {"id": 822, "name": "东台市"}, {"id": 823, "name": "大丰市"}],
        "95": [{"id": 824, "name": "市辖区"}, {"id": 825, "name": "广陵区"}, {"id": 826, "name": "邗江区"}, {
            "id": 827,
            "name": "郊　区"
        }, {"id": 828, "name": "宝应县"}, {"id": 829, "name": "仪征市"}, {"id": 830, "name": "高邮市"}, {
            "id": 831,
            "name": "江都市"
        }],
        "96": [{"id": 832, "name": "市辖区"}, {"id": 833, "name": "京口区"}, {"id": 834, "name": "润州区"}, {
            "id": 835,
            "name": "丹徒区"
        }, {"id": 836, "name": "丹阳市"}, {"id": 837, "name": "扬中市"}, {"id": 838, "name": "句容市"}],
        "97": [{"id": 839, "name": "市辖区"}, {"id": 840, "name": "海陵区"}, {"id": 841, "name": "高港区"}, {
            "id": 842,
            "name": "兴化市"
        }, {"id": 843, "name": "靖江市"}, {"id": 844, "name": "泰兴市"}, {"id": 845, "name": "姜堰市"}],
        "98": [{"id": 846, "name": "市辖区"}, {"id": 847, "name": "宿城区"}, {"id": 848, "name": "宿豫区"}, {
            "id": 849,
            "name": "沭阳县"
        }, {"id": 850, "name": "泗阳县"}, {"id": 851, "name": "泗洪县"}],
        "99": [{"id": 852, "name": "市辖区"}, {"id": 853, "name": "上城区"}, {"id": 854, "name": "下城区"}, {
            "id": 855,
            "name": "江干区"
        }, {"id": 856, "name": "拱墅区"}, {"id": 857, "name": "西湖区"}, {"id": 858, "name": "滨江区"}, {
            "id": 859,
            "name": "萧山区"
        }, {"id": 860, "name": "余杭区"}, {"id": 861, "name": "桐庐县"}, {"id": 862, "name": "淳安县"}, {
            "id": 863,
            "name": "建德市"
        }, {"id": 864, "name": "富阳市"}, {"id": 865, "name": "临安市"}],
        "100": [{"id": 866, "name": "市辖区"}, {"id": 867, "name": "海曙区"}, {"id": 868, "name": "江东区"}, {
            "id": 869,
            "name": "江北区"
        }, {"id": 870, "name": "北仑区"}, {"id": 871, "name": "镇海区"}, {"id": 872, "name": "鄞州区"}, {
            "id": 873,
            "name": "象山县"
        }, {"id": 874, "name": "宁海县"}, {"id": 875, "name": "余姚市"}, {"id": 876, "name": "慈溪市"}, {
            "id": 877,
            "name": "奉化市"
        }],
        "101": [{"id": 878, "name": "市辖区"}, {"id": 879, "name": "鹿城区"}, {"id": 880, "name": "龙湾区"}, {
            "id": 881,
            "name": "瓯海区"
        }, {"id": 882, "name": "洞头县"}, {"id": 883, "name": "永嘉县"}, {"id": 884, "name": "平阳县"}, {
            "id": 885,
            "name": "苍南县"
        }, {"id": 886, "name": "文成县"}, {"id": 887, "name": "泰顺县"}, {"id": 888, "name": "瑞安市"}, {
            "id": 889,
            "name": "乐清市"
        }],
        "102": [{"id": 890, "name": "市辖区"}, {"id": 891, "name": "秀城区"}, {"id": 892, "name": "秀洲区"}, {
            "id": 893,
            "name": "嘉善县"
        }, {"id": 894, "name": "海盐县"}, {"id": 895, "name": "海宁市"}, {"id": 896, "name": "平湖市"}, {
            "id": 897,
            "name": "桐乡市"
        }],
        "103": [{"id": 898, "name": "市辖区"}, {"id": 899, "name": "吴兴区"}, {"id": 900, "name": "南浔区"}, {
            "id": 901,
            "name": "德清县"
        }, {"id": 902, "name": "长兴县"}, {"id": 903, "name": "安吉县"}],
        "104": [{"id": 904, "name": "市辖区"}, {"id": 905, "name": "越城区"}, {"id": 906, "name": "绍兴县"}, {
            "id": 907,
            "name": "新昌县"
        }, {"id": 908, "name": "诸暨市"}, {"id": 909, "name": "上虞市"}, {"id": 910, "name": "嵊州市"}],
        "105": [{"id": 911, "name": "市辖区"}, {"id": 912, "name": "婺城区"}, {"id": 913, "name": "金东区"}, {
            "id": 914,
            "name": "武义县"
        }, {"id": 915, "name": "浦江县"}, {"id": 916, "name": "磐安县"}, {"id": 917, "name": "兰溪市"}, {
            "id": 918,
            "name": "义乌市"
        }, {"id": 919, "name": "东阳市"}, {"id": 920, "name": "永康市"}],
        "106": [{"id": 921, "name": "市辖区"}, {"id": 922, "name": "柯城区"}, {"id": 923, "name": "衢江区"}, {
            "id": 924,
            "name": "常山县"
        }, {"id": 925, "name": "开化县"}, {"id": 926, "name": "龙游县"}, {"id": 927, "name": "江山市"}],
        "107": [{"id": 928, "name": "市辖区"}, {"id": 929, "name": "定海区"}, {"id": 930, "name": "普陀区"}, {
            "id": 931,
            "name": "岱山县"
        }, {"id": 932, "name": "嵊泗县"}],
        "108": [{"id": 933, "name": "市辖区"}, {"id": 934, "name": "椒江区"}, {"id": 935, "name": "黄岩区"}, {
            "id": 936,
            "name": "路桥区"
        }, {"id": 937, "name": "玉环县"}, {"id": 938, "name": "三门县"}, {"id": 939, "name": "天台县"}, {
            "id": 940,
            "name": "仙居县"
        }, {"id": 941, "name": "温岭市"}, {"id": 942, "name": "临海市"}],
        "109": [{"id": 943, "name": "市辖区"}, {"id": 944, "name": "莲都区"}, {"id": 945, "name": "青田县"}, {
            "id": 946,
            "name": "缙云县"
        }, {"id": 947, "name": "遂昌县"}, {"id": 948, "name": "松阳县"}, {"id": 949, "name": "云和县"}, {
            "id": 950,
            "name": "庆元县"
        }, {"id": 951, "name": "景宁畲族自治县"}, {"id": 952, "name": "龙泉市"}],
        "110": [{"id": 953, "name": "市辖区"}, {"id": 954, "name": "瑶海区"}, {"id": 955, "name": "庐阳区"}, {
            "id": 956,
            "name": "蜀山区"
        }, {"id": 957, "name": "包河区"}, {"id": 958, "name": "长丰县"}, {"id": 959, "name": "肥东县"}, {
            "id": 960,
            "name": "肥西县"
        }],
        "111": [{"id": 961, "name": "市辖区"}, {"id": 962, "name": "镜湖区"}, {"id": 963, "name": "马塘区"}, {
            "id": 964,
            "name": "新芜区"
        }, {"id": 965, "name": "鸠江区"}, {"id": 966, "name": "芜湖县"}, {"id": 967, "name": "繁昌县"}, {
            "id": 968,
            "name": "南陵县"
        }],
        "112": [{"id": 969, "name": "市辖区"}, {"id": 970, "name": "龙子湖区"}, {"id": 971, "name": "蚌山区"}, {
            "id": 972,
            "name": "禹会区"
        }, {"id": 973, "name": "淮上区"}, {"id": 974, "name": "怀远县"}, {"id": 975, "name": "五河县"}, {
            "id": 976,
            "name": "固镇县"
        }],
        "113": [{"id": 977, "name": "市辖区"}, {"id": 978, "name": "大通区"}, {"id": 979, "name": "田家庵区"}, {
            "id": 980,
            "name": "谢家集区"
        }, {"id": 981, "name": "八公山区"}, {"id": 982, "name": "潘集区"}, {"id": 983, "name": "凤台县"}],
        "114": [{"id": 984, "name": "市辖区"}, {"id": 985, "name": "金家庄区"}, {"id": 986, "name": "花山区"}, {
            "id": 987,
            "name": "雨山区"
        }, {"id": 988, "name": "当涂县"}],
        "115": [{"id": 989, "name": "市辖区"}, {"id": 990, "name": "杜集区"}, {"id": 991, "name": "相山区"}, {
            "id": 992,
            "name": "烈山区"
        }, {"id": 993, "name": "濉溪县"}],
        "116": [{"id": 994, "name": "市辖区"}, {"id": 995, "name": "铜官山区"}, {"id": 996, "name": "狮子山区"}, {
            "id": 997,
            "name": "郊　区"
        }, {"id": 998, "name": "铜陵县"}],
        "117": [{"id": 999, "name": "市辖区"}, {"id": 1000, "name": "迎江区"}, {"id": 1001, "name": "大观区"}, {
            "id": 1002,
            "name": "郊　区"
        }, {"id": 1003, "name": "怀宁县"}, {"id": 1004, "name": "枞阳县"}, {"id": 1005, "name": "潜山县"}, {
            "id": 1006,
            "name": "太湖县"
        }, {"id": 1007, "name": "宿松县"}, {"id": 1008, "name": "望江县"}, {"id": 1009, "name": "岳西县"}, {
            "id": 1010,
            "name": "桐城市"
        }],
        "118": [{"id": 1011, "name": "市辖区"}, {"id": 1012, "name": "屯溪区"}, {"id": 1013, "name": "黄山区"}, {
            "id": 1014,
            "name": "徽州区"
        }, {"id": 1015, "name": "歙　县"}, {"id": 1016, "name": "休宁县"}, {"id": 1017, "name": "黟　县"}, {
            "id": 1018,
            "name": "祁门县"
        }],
        "119": [{"id": 1019, "name": "市辖区"}, {"id": 1020, "name": "琅琊区"}, {"id": 1021, "name": "南谯区"}, {
            "id": 1022,
            "name": "来安县"
        }, {"id": 1023, "name": "全椒县"}, {"id": 1024, "name": "定远县"}, {"id": 1025, "name": "凤阳县"}, {
            "id": 1026,
            "name": "天长市"
        }, {"id": 1027, "name": "明光市"}],
        "120": [{"id": 1028, "name": "市辖区"}, {"id": 1029, "name": "颍州区"}, {"id": 1030, "name": "颍东区"}, {
            "id": 1031,
            "name": "颍泉区"
        }, {"id": 1032, "name": "临泉县"}, {"id": 1033, "name": "太和县"}, {"id": 1034, "name": "阜南县"}, {
            "id": 1035,
            "name": "颍上县"
        }, {"id": 1036, "name": "界首市"}],
        "121": [{"id": 1037, "name": "市辖区"}, {"id": 1038, "name": "墉桥区"}, {"id": 1039, "name": "砀山县"}, {
            "id": 1040,
            "name": "萧　县"
        }, {"id": 1041, "name": "灵璧县"}, {"id": 1042, "name": "泗　县"}],
        "122": [{"id": 1043, "name": "市辖区"}, {"id": 1044, "name": "居巢区"}, {"id": 1045, "name": "庐江县"}, {
            "id": 1046,
            "name": "无为县"
        }, {"id": 1047, "name": "含山县"}, {"id": 1048, "name": "和　县"}],
        "123": [{"id": 1049, "name": "市辖区"}, {"id": 1050, "name": "金安区"}, {"id": 1051, "name": "裕安区"}, {
            "id": 1052,
            "name": "寿　县"
        }, {"id": 1053, "name": "霍邱县"}, {"id": 1054, "name": "舒城县"}, {"id": 1055, "name": "金寨县"}, {
            "id": 1056,
            "name": "霍山县"
        }],
        "124": [{"id": 1057, "name": "市辖区"}, {"id": 1058, "name": "谯城区"}, {"id": 1059, "name": "涡阳县"}, {
            "id": 1060,
            "name": "蒙城县"
        }, {"id": 1061, "name": "利辛县"}],
        "125": [{"id": 1062, "name": "市辖区"}, {"id": 1063, "name": "贵池区"}, {"id": 1064, "name": "东至县"}, {
            "id": 1065,
            "name": "石台县"
        }, {"id": 1066, "name": "青阳县"}],
        "126": [{"id": 1067, "name": "市辖区"}, {"id": 1068, "name": "宣州区"}, {"id": 1069, "name": "郎溪县"}, {
            "id": 1070,
            "name": "广德县"
        }, {"id": 1071, "name": "泾　县"}, {"id": 1072, "name": "绩溪县"}, {"id": 1073, "name": "旌德县"}, {
            "id": 1074,
            "name": "宁国市"
        }],
        "127": [{"id": 1075, "name": "市辖区"}, {"id": 1076, "name": "鼓楼区"}, {"id": 1077, "name": "台江区"}, {
            "id": 1078,
            "name": "仓山区"
        }, {"id": 1079, "name": "马尾区"}, {"id": 1080, "name": "晋安区"}, {"id": 1081, "name": "闽侯县"}, {
            "id": 1082,
            "name": "连江县"
        }, {"id": 1083, "name": "罗源县"}, {"id": 1084, "name": "闽清县"}, {"id": 1085, "name": "永泰县"}, {
            "id": 1086,
            "name": "平潭县"
        }, {"id": 1087, "name": "福清市"}, {"id": 1088, "name": "长乐市"}],
        "128": [{"id": 1089, "name": "市辖区"}, {"id": 1090, "name": "思明区"}, {"id": 1091, "name": "海沧区"}, {
            "id": 1092,
            "name": "湖里区"
        }, {"id": 1093, "name": "集美区"}, {"id": 1094, "name": "同安区"}, {"id": 1095, "name": "翔安区"}],
        "129": [{"id": 1096, "name": "市辖区"}, {"id": 1097, "name": "城厢区"}, {"id": 1098, "name": "涵江区"}, {
            "id": 1099,
            "name": "荔城区"
        }, {"id": 1100, "name": "秀屿区"}, {"id": 1101, "name": "仙游县"}],
        "130": [{"id": 1102, "name": "市辖区"}, {"id": 1103, "name": "梅列区"}, {"id": 1104, "name": "三元区"}, {
            "id": 1105,
            "name": "明溪县"
        }, {"id": 1106, "name": "清流县"}, {"id": 1107, "name": "宁化县"}, {"id": 1108, "name": "大田县"}, {
            "id": 1109,
            "name": "尤溪县"
        }, {"id": 1110, "name": "沙　县"}, {"id": 1111, "name": "将乐县"}, {"id": 1112, "name": "泰宁县"}, {
            "id": 1113,
            "name": "建宁县"
        }, {"id": 1114, "name": "永安市"}],
        "131": [{"id": 1115, "name": "市辖区"}, {"id": 1116, "name": "鲤城区"}, {"id": 1117, "name": "丰泽区"}, {
            "id": 1118,
            "name": "洛江区"
        }, {"id": 1119, "name": "泉港区"}, {"id": 1120, "name": "惠安县"}, {"id": 1121, "name": "安溪县"}, {
            "id": 1122,
            "name": "永春县"
        }, {"id": 1123, "name": "德化县"}, {"id": 1124, "name": "金门县"}, {"id": 1125, "name": "石狮市"}, {
            "id": 1126,
            "name": "晋江市"
        }, {"id": 1127, "name": "南安市"}],
        "132": [{"id": 1128, "name": "市辖区"}, {"id": 1129, "name": "芗城区"}, {"id": 1130, "name": "龙文区"}, {
            "id": 1131,
            "name": "云霄县"
        }, {"id": 1132, "name": "漳浦县"}, {"id": 1133, "name": "诏安县"}, {"id": 1134, "name": "长泰县"}, {
            "id": 1135,
            "name": "东山县"
        }, {"id": 1136, "name": "南靖县"}, {"id": 1137, "name": "平和县"}, {"id": 1138, "name": "华安县"}, {
            "id": 1139,
            "name": "龙海市"
        }],
        "133": [{"id": 1140, "name": "市辖区"}, {"id": 1141, "name": "延平区"}, {"id": 1142, "name": "顺昌县"}, {
            "id": 1143,
            "name": "浦城县"
        }, {"id": 1144, "name": "光泽县"}, {"id": 1145, "name": "松溪县"}, {"id": 1146, "name": "政和县"}, {
            "id": 1147,
            "name": "邵武市"
        }, {"id": 1148, "name": "武夷山市"}, {"id": 1149, "name": "建瓯市"}, {"id": 1150, "name": "建阳市"}],
        "134": [{"id": 1151, "name": "市辖区"}, {"id": 1152, "name": "新罗区"}, {"id": 1153, "name": "长汀县"}, {
            "id": 1154,
            "name": "永定县"
        }, {"id": 1155, "name": "上杭县"}, {"id": 1156, "name": "武平县"}, {"id": 1157, "name": "连城县"}, {
            "id": 1158,
            "name": "漳平市"
        }],
        "135": [{"id": 1159, "name": "市辖区"}, {"id": 1160, "name": "蕉城区"}, {"id": 1161, "name": "霞浦县"}, {
            "id": 1162,
            "name": "古田县"
        }, {"id": 1163, "name": "屏南县"}, {"id": 1164, "name": "寿宁县"}, {"id": 1165, "name": "周宁县"}, {
            "id": 1166,
            "name": "柘荣县"
        }, {"id": 1167, "name": "福安市"}, {"id": 1168, "name": "福鼎市"}],
        "136": [{"id": 1169, "name": "市辖区"}, {"id": 1170, "name": "东湖区"}, {"id": 1171, "name": "西湖区"}, {
            "id": 1172,
            "name": "青云谱区"
        }, {"id": 1173, "name": "湾里区"}, {"id": 1174, "name": "青山湖区"}, {"id": 1175, "name": "南昌县"}, {
            "id": 1176,
            "name": "新建县"
        }, {"id": 1177, "name": "安义县"}, {"id": 1178, "name": "进贤县"}],
        "137": [{"id": 1179, "name": "市辖区"}, {"id": 1180, "name": "昌江区"}, {"id": 1181, "name": "珠山区"}, {
            "id": 1182,
            "name": "浮梁县"
        }, {"id": 1183, "name": "乐平市"}],
        "138": [{"id": 1184, "name": "市辖区"}, {"id": 1185, "name": "安源区"}, {"id": 1186, "name": "湘东区"}, {
            "id": 1187,
            "name": "莲花县"
        }, {"id": 1188, "name": "上栗县"}, {"id": 1189, "name": "芦溪县"}],
        "139": [{"id": 1190, "name": "市辖区"}, {"id": 1191, "name": "庐山区"}, {"id": 1192, "name": "浔阳区"}, {
            "id": 1193,
            "name": "九江县"
        }, {"id": 1194, "name": "武宁县"}, {"id": 1195, "name": "修水县"}, {"id": 1196, "name": "永修县"}, {
            "id": 1197,
            "name": "德安县"
        }, {"id": 1198, "name": "星子县"}, {"id": 1199, "name": "都昌县"}, {"id": 1200, "name": "湖口县"}, {
            "id": 1201,
            "name": "彭泽县"
        }, {"id": 1202, "name": "瑞昌市"}],
        "140": [{"id": 1203, "name": "市辖区"}, {"id": 1204, "name": "渝水区"}, {"id": 1205, "name": "分宜县"}],
        "141": [{"id": 1206, "name": "市辖区"}, {"id": 1207, "name": "月湖区"}, {"id": 1208, "name": "余江县"}, {
            "id": 1209,
            "name": "贵溪市"
        }],
        "142": [{"id": 1210, "name": "市辖区"}, {"id": 1211, "name": "章贡区"}, {"id": 1212, "name": "赣　县"}, {
            "id": 1213,
            "name": "信丰县"
        }, {"id": 1214, "name": "大余县"}, {"id": 1215, "name": "上犹县"}, {"id": 1216, "name": "崇义县"}, {
            "id": 1217,
            "name": "安远县"
        }, {"id": 1218, "name": "龙南县"}, {"id": 1219, "name": "定南县"}, {"id": 1220, "name": "全南县"}, {
            "id": 1221,
            "name": "宁都县"
        }, {"id": 1222, "name": "于都县"}, {"id": 1223, "name": "兴国县"}, {"id": 1224, "name": "会昌县"}, {
            "id": 1225,
            "name": "寻乌县"
        }, {"id": 1226, "name": "石城县"}, {"id": 1227, "name": "瑞金市"}, {"id": 1228, "name": "南康市"}],
        "143": [{"id": 1229, "name": "市辖区"}, {"id": 1230, "name": "吉州区"}, {"id": 1231, "name": "青原区"}, {
            "id": 1232,
            "name": "吉安县"
        }, {"id": 1233, "name": "吉水县"}, {"id": 1234, "name": "峡江县"}, {"id": 1235, "name": "新干县"}, {
            "id": 1236,
            "name": "永丰县"
        }, {"id": 1237, "name": "泰和县"}, {"id": 1238, "name": "遂川县"}, {"id": 1239, "name": "万安县"}, {
            "id": 1240,
            "name": "安福县"
        }, {"id": 1241, "name": "永新县"}, {"id": 1242, "name": "井冈山市"}],
        "144": [{"id": 1243, "name": "市辖区"}, {"id": 1244, "name": "袁州区"}, {"id": 1245, "name": "奉新县"}, {
            "id": 1246,
            "name": "万载县"
        }, {"id": 1247, "name": "上高县"}, {"id": 1248, "name": "宜丰县"}, {"id": 1249, "name": "靖安县"}, {
            "id": 1250,
            "name": "铜鼓县"
        }, {"id": 1251, "name": "丰城市"}, {"id": 1252, "name": "樟树市"}, {"id": 1253, "name": "高安市"}],
        "145": [{"id": 1254, "name": "市辖区"}, {"id": 1255, "name": "临川区"}, {"id": 1256, "name": "南城县"}, {
            "id": 1257,
            "name": "黎川县"
        }, {"id": 1258, "name": "南丰县"}, {"id": 1259, "name": "崇仁县"}, {"id": 1260, "name": "乐安县"}, {
            "id": 1261,
            "name": "宜黄县"
        }, {"id": 1262, "name": "金溪县"}, {"id": 1263, "name": "资溪县"}, {"id": 1264, "name": "东乡县"}, {
            "id": 1265,
            "name": "广昌县"
        }],
        "146": [{"id": 1266, "name": "市辖区"}, {"id": 1267, "name": "信州区"}, {"id": 1268, "name": "上饶县"}, {
            "id": 1269,
            "name": "广丰县"
        }, {"id": 1270, "name": "玉山县"}, {"id": 1271, "name": "铅山县"}, {"id": 1272, "name": "横峰县"}, {
            "id": 1273,
            "name": "弋阳县"
        }, {"id": 1274, "name": "余干县"}, {"id": 1275, "name": "鄱阳县"}, {"id": 1276, "name": "万年县"}, {
            "id": 1277,
            "name": "婺源县"
        }, {"id": 1278, "name": "德兴市"}],
        "147": [{"id": 1279, "name": "市辖区"}, {"id": 1280, "name": "历下区"}, {"id": 1281, "name": "市中区"}, {
            "id": 1282,
            "name": "槐荫区"
        }, {"id": 1283, "name": "天桥区"}, {"id": 1284, "name": "历城区"}, {"id": 1285, "name": "长清区"}, {
            "id": 1286,
            "name": "平阴县"
        }, {"id": 1287, "name": "济阳县"}, {"id": 1288, "name": "商河县"}, {"id": 1289, "name": "章丘市"}],
        "148": [{"id": 1290, "name": "市辖区"}, {"id": 1291, "name": "市南区"}, {"id": 1292, "name": "市北区"}, {
            "id": 1293,
            "name": "四方区"
        }, {"id": 1294, "name": "黄岛区"}, {"id": 1295, "name": "崂山区"}, {"id": 1296, "name": "李沧区"}, {
            "id": 1297,
            "name": "城阳区"
        }, {"id": 1298, "name": "胶州市"}, {"id": 1299, "name": "即墨市"}, {"id": 1300, "name": "平度市"}, {
            "id": 1301,
            "name": "胶南市"
        }, {"id": 1302, "name": "莱西市"}],
        "149": [{"id": 1303, "name": "市辖区"}, {"id": 1304, "name": "淄川区"}, {"id": 1305, "name": "张店区"}, {
            "id": 1306,
            "name": "博山区"
        }, {"id": 1307, "name": "临淄区"}, {"id": 1308, "name": "周村区"}, {"id": 1309, "name": "桓台县"}, {
            "id": 1310,
            "name": "高青县"
        }, {"id": 1311, "name": "沂源县"}],
        "150": [{"id": 1312, "name": "市辖区"}, {"id": 1313, "name": "市中区"}, {"id": 1314, "name": "薛城区"}, {
            "id": 1315,
            "name": "峄城区"
        }, {"id": 1316, "name": "台儿庄区"}, {"id": 1317, "name": "山亭区"}, {"id": 1318, "name": "滕州市"}],
        "151": [{"id": 1319, "name": "市辖区"}, {"id": 1320, "name": "东营区"}, {"id": 1321, "name": "河口区"}, {
            "id": 1322,
            "name": "垦利县"
        }, {"id": 1323, "name": "利津县"}, {"id": 1324, "name": "广饶县"}],
        "152": [{"id": 1325, "name": "市辖区"}, {"id": 1326, "name": "芝罘区"}, {"id": 1327, "name": "福山区"}, {
            "id": 1328,
            "name": "牟平区"
        }, {"id": 1329, "name": "莱山区"}, {"id": 1330, "name": "长岛县"}, {"id": 1331, "name": "龙口市"}, {
            "id": 1332,
            "name": "莱阳市"
        }, {"id": 1333, "name": "莱州市"}, {"id": 1334, "name": "蓬莱市"}, {"id": 1335, "name": "招远市"}, {
            "id": 1336,
            "name": "栖霞市"
        }, {"id": 1337, "name": "海阳市"}],
        "153": [{"id": 1338, "name": "市辖区"}, {"id": 1339, "name": "潍城区"}, {"id": 1340, "name": "寒亭区"}, {
            "id": 1341,
            "name": "坊子区"
        }, {"id": 1342, "name": "奎文区"}, {"id": 1343, "name": "临朐县"}, {"id": 1344, "name": "昌乐县"}, {
            "id": 1345,
            "name": "青州市"
        }, {"id": 1346, "name": "诸城市"}, {"id": 1347, "name": "寿光市"}, {"id": 1348, "name": "安丘市"}, {
            "id": 1349,
            "name": "高密市"
        }, {"id": 1350, "name": "昌邑市"}],
        "154": [{"id": 1351, "name": "市辖区"}, {"id": 1352, "name": "市中区"}, {"id": 1353, "name": "任城区"}, {
            "id": 1354,
            "name": "微山县"
        }, {"id": 1355, "name": "鱼台县"}, {"id": 1356, "name": "金乡县"}, {"id": 1357, "name": "嘉祥县"}, {
            "id": 1358,
            "name": "汶上县"
        }, {"id": 1359, "name": "泗水县"}, {"id": 1360, "name": "梁山县"}, {"id": 1361, "name": "曲阜市"}, {
            "id": 1362,
            "name": "兖州市"
        }, {"id": 1363, "name": "邹城市"}],
        "155": [{"id": 1364, "name": "市辖区"}, {"id": 1365, "name": "泰山区"}, {"id": 1366, "name": "岱岳区"}, {
            "id": 1367,
            "name": "宁阳县"
        }, {"id": 1368, "name": "东平县"}, {"id": 1369, "name": "新泰市"}, {"id": 1370, "name": "肥城市"}],
        "156": [{"id": 1371, "name": "市辖区"}, {"id": 1372, "name": "环翠区"}, {"id": 1373, "name": "文登市"}, {
            "id": 1374,
            "name": "荣成市"
        }, {"id": 1375, "name": "乳山市"}],
        "157": [{"id": 1376, "name": "市辖区"}, {"id": 1377, "name": "东港区"}, {"id": 1378, "name": "岚山区"}, {
            "id": 1379,
            "name": "五莲县"
        }, {"id": 1380, "name": "莒　县"}],
        "158": [{"id": 1381, "name": "市辖区"}, {"id": 1382, "name": "莱城区"}, {"id": 1383, "name": "钢城区"}],
        "159": [{"id": 1384, "name": "市辖区"}, {"id": 1385, "name": "兰山区"}, {"id": 1386, "name": "罗庄区"}, {
            "id": 1387,
            "name": "河东区"
        }, {"id": 1388, "name": "沂南县"}, {"id": 1389, "name": "郯城县"}, {"id": 1390, "name": "沂水县"}, {
            "id": 1391,
            "name": "苍山县"
        }, {"id": 1392, "name": "费　县"}, {"id": 1393, "name": "平邑县"}, {"id": 1394, "name": "莒南县"}, {
            "id": 1395,
            "name": "蒙阴县"
        }, {"id": 1396, "name": "临沭县"}],
        "160": [{"id": 1397, "name": "市辖区"}, {"id": 1398, "name": "德城区"}, {"id": 1399, "name": "陵　县"}, {
            "id": 1400,
            "name": "宁津县"
        }, {"id": 1401, "name": "庆云县"}, {"id": 1402, "name": "临邑县"}, {"id": 1403, "name": "齐河县"}, {
            "id": 1404,
            "name": "平原县"
        }, {"id": 1405, "name": "夏津县"}, {"id": 1406, "name": "武城县"}, {"id": 1407, "name": "乐陵市"}, {
            "id": 1408,
            "name": "禹城市"
        }],
        "161": [{"id": 1409, "name": "市辖区"}, {"id": 1410, "name": "东昌府区"}, {"id": 1411, "name": "阳谷县"}, {
            "id": 1412,
            "name": "莘　县"
        }, {"id": 1413, "name": "茌平县"}, {"id": 1414, "name": "东阿县"}, {"id": 1415, "name": "冠　县"}, {
            "id": 1416,
            "name": "高唐县"
        }, {"id": 1417, "name": "临清市"}],
        "162": [{"id": 1418, "name": "市辖区"}, {"id": 1419, "name": "滨城区"}, {"id": 1420, "name": "惠民县"}, {
            "id": 1421,
            "name": "阳信县"
        }, {"id": 1422, "name": "无棣县"}, {"id": 1423, "name": "沾化县"}, {"id": 1424, "name": "博兴县"}, {
            "id": 1425,
            "name": "邹平县"
        }],
        "163": [{"id": 1426, "name": "市辖区"}, {"id": 1427, "name": "牡丹区"}, {"id": 1428, "name": "曹　县"}, {
            "id": 1429,
            "name": "单　县"
        }, {"id": 1430, "name": "成武县"}, {"id": 1431, "name": "巨野县"}, {"id": 1432, "name": "郓城县"}, {
            "id": 1433,
            "name": "鄄城县"
        }, {"id": 1434, "name": "定陶县"}, {"id": 1435, "name": "东明县"}],
        "164": [{"id": 1436, "name": "市辖区"}, {"id": 1437, "name": "中原区"}, {"id": 1438, "name": "二七区"}, {
            "id": 1439,
            "name": "管城回族区"
        }, {"id": 1440, "name": "金水区"}, {"id": 1441, "name": "上街区"}, {"id": 1442, "name": "邙山区"}, {
            "id": 1443,
            "name": "中牟县"
        }, {"id": 1444, "name": "巩义市"}, {"id": 1445, "name": "荥阳市"}, {"id": 1446, "name": "新密市"}, {
            "id": 1447,
            "name": "新郑市"
        }, {"id": 1448, "name": "登封市"}],
        "165": [{"id": 1449, "name": "市辖区"}, {"id": 1450, "name": "龙亭区"}, {"id": 1451, "name": "顺河回族区"}, {
            "id": 1452,
            "name": "鼓楼区"
        }, {"id": 1453, "name": "南关区"}, {"id": 1454, "name": "郊　区"}, {"id": 1455, "name": "杞　县"}, {
            "id": 1456,
            "name": "通许县"
        }, {"id": 1457, "name": "尉氏县"}, {"id": 1458, "name": "开封县"}, {"id": 1459, "name": "兰考县"}],
        "166": [{"id": 1460, "name": "市辖区"}, {"id": 1461, "name": "老城区"}, {"id": 1462, "name": "西工区"}, {
            "id": 1463,
            "name": "廛河回族区"
        }, {"id": 1464, "name": "涧西区"}, {"id": 1465, "name": "吉利区"}, {"id": 1466, "name": "洛龙区"}, {
            "id": 1467,
            "name": "孟津县"
        }, {"id": 1468, "name": "新安县"}, {"id": 1469, "name": "栾川县"}, {"id": 1470, "name": "嵩　县"}, {
            "id": 1471,
            "name": "汝阳县"
        }, {"id": 1472, "name": "宜阳县"}, {"id": 1473, "name": "洛宁县"}, {"id": 1474, "name": "伊川县"}, {
            "id": 1475,
            "name": "偃师市"
        }],
        "167": [{"id": 1476, "name": "市辖区"}, {"id": 1477, "name": "新华区"}, {"id": 1478, "name": "卫东区"}, {
            "id": 1479,
            "name": "石龙区"
        }, {"id": 1480, "name": "湛河区"}, {"id": 1481, "name": "宝丰县"}, {"id": 1482, "name": "叶　县"}, {
            "id": 1483,
            "name": "鲁山县"
        }, {"id": 1484, "name": "郏　县"}, {"id": 1485, "name": "舞钢市"}, {"id": 1486, "name": "汝州市"}],
        "168": [{"id": 1487, "name": "市辖区"}, {"id": 1488, "name": "文峰区"}, {"id": 1489, "name": "北关区"}, {
            "id": 1490,
            "name": "殷都区"
        }, {"id": 1491, "name": "龙安区"}, {"id": 1492, "name": "安阳县"}, {"id": 1493, "name": "汤阴县"}, {
            "id": 1494,
            "name": "滑　县"
        }, {"id": 1495, "name": "内黄县"}, {"id": 1496, "name": "林州市"}],
        "169": [{"id": 1497, "name": "市辖区"}, {"id": 1498, "name": "鹤山区"}, {"id": 1499, "name": "山城区"}, {
            "id": 1500,
            "name": "淇滨区"
        }, {"id": 1501, "name": "浚　县"}, {"id": 1502, "name": "淇　县"}],
        "170": [{"id": 1503, "name": "市辖区"}, {"id": 1504, "name": "红旗区"}, {"id": 1505, "name": "卫滨区"}, {
            "id": 1506,
            "name": "凤泉区"
        }, {"id": 1507, "name": "牧野区"}, {"id": 1508, "name": "新乡县"}, {"id": 1509, "name": "获嘉县"}, {
            "id": 1510,
            "name": "原阳县"
        }, {"id": 1511, "name": "延津县"}, {"id": 1512, "name": "封丘县"}, {"id": 1513, "name": "长垣县"}, {
            "id": 1514,
            "name": "卫辉市"
        }, {"id": 1515, "name": "辉县市"}],
        "171": [{"id": 1516, "name": "市辖区"}, {"id": 1517, "name": "解放区"}, {"id": 1518, "name": "中站区"}, {
            "id": 1519,
            "name": "马村区"
        }, {"id": 1520, "name": "山阳区"}, {"id": 1521, "name": "修武县"}, {"id": 1522, "name": "博爱县"}, {
            "id": 1523,
            "name": "武陟县"
        }, {"id": 1524, "name": "温　县"}, {"id": 1525, "name": "济源市"}, {"id": 1526, "name": "沁阳市"}, {
            "id": 1527,
            "name": "孟州市"
        }],
        "172": [{"id": 1528, "name": "市辖区"}, {"id": 1529, "name": "华龙区"}, {"id": 1530, "name": "清丰县"}, {
            "id": 1531,
            "name": "南乐县"
        }, {"id": 1532, "name": "范　县"}, {"id": 1533, "name": "台前县"}, {"id": 1534, "name": "濮阳县"}],
        "173": [{"id": 1535, "name": "市辖区"}, {"id": 1536, "name": "魏都区"}, {"id": 1537, "name": "许昌县"}, {
            "id": 1538,
            "name": "鄢陵县"
        }, {"id": 1539, "name": "襄城县"}, {"id": 1540, "name": "禹州市"}, {"id": 1541, "name": "长葛市"}],
        "174": [{"id": 1542, "name": "市辖区"}, {"id": 1543, "name": "源汇区"}, {"id": 1544, "name": "郾城区"}, {
            "id": 1545,
            "name": "召陵区"
        }, {"id": 1546, "name": "舞阳县"}, {"id": 1547, "name": "临颍县"}],
        "175": [{"id": 1548, "name": "市辖区"}, {"id": 1549, "name": "湖滨区"}, {"id": 1550, "name": "渑池县"}, {
            "id": 1551,
            "name": "陕　县"
        }, {"id": 1552, "name": "卢氏县"}, {"id": 1553, "name": "义马市"}, {"id": 1554, "name": "灵宝市"}],
        "176": [{"id": 1555, "name": "市辖区"}, {"id": 1556, "name": "宛城区"}, {"id": 1557, "name": "卧龙区"}, {
            "id": 1558,
            "name": "南召县"
        }, {"id": 1559, "name": "方城县"}, {"id": 1560, "name": "西峡县"}, {"id": 1561, "name": "镇平县"}, {
            "id": 1562,
            "name": "内乡县"
        }, {"id": 1563, "name": "淅川县"}, {"id": 1564, "name": "社旗县"}, {"id": 1565, "name": "唐河县"}, {
            "id": 1566,
            "name": "新野县"
        }, {"id": 1567, "name": "桐柏县"}, {"id": 1568, "name": "邓州市"}],
        "177": [{"id": 1569, "name": "市辖区"}, {"id": 1570, "name": "梁园区"}, {"id": 1571, "name": "睢阳区"}, {
            "id": 1572,
            "name": "民权县"
        }, {"id": 1573, "name": "睢　县"}, {"id": 1574, "name": "宁陵县"}, {"id": 1575, "name": "柘城县"}, {
            "id": 1576,
            "name": "虞城县"
        }, {"id": 1577, "name": "夏邑县"}, {"id": 1578, "name": "永城市"}],
        "178": [{"id": 1579, "name": "市辖区"}, {"id": 1580, "name": "师河区"}, {"id": 1581, "name": "平桥区"}, {
            "id": 1582,
            "name": "罗山县"
        }, {"id": 1583, "name": "光山县"}, {"id": 1584, "name": "新　县"}, {"id": 1585, "name": "商城县"}, {
            "id": 1586,
            "name": "固始县"
        }, {"id": 1587, "name": "潢川县"}, {"id": 1588, "name": "淮滨县"}, {"id": 1589, "name": "息　县"}],
        "179": [{"id": 1590, "name": "市辖区"}, {"id": 1591, "name": "川汇区"}, {"id": 1592, "name": "扶沟县"}, {
            "id": 1593,
            "name": "西华县"
        }, {"id": 1594, "name": "商水县"}, {"id": 1595, "name": "沈丘县"}, {"id": 1596, "name": "郸城县"}, {
            "id": 1597,
            "name": "淮阳县"
        }, {"id": 1598, "name": "太康县"}, {"id": 1599, "name": "鹿邑县"}, {"id": 1600, "name": "项城市"}],
        "180": [{"id": 1601, "name": "市辖区"}, {"id": 1602, "name": "驿城区"}, {"id": 1603, "name": "西平县"}, {
            "id": 1604,
            "name": "上蔡县"
        }, {"id": 1605, "name": "平舆县"}, {"id": 1606, "name": "正阳县"}, {"id": 1607, "name": "确山县"}, {
            "id": 1608,
            "name": "泌阳县"
        }, {"id": 1609, "name": "汝南县"}, {"id": 1610, "name": "遂平县"}, {"id": 1611, "name": "新蔡县"}],
        "182": [{"id": 1612, "name": "市辖区"}, {"id": 1613, "name": "江岸区"}, {"id": 1614, "name": "江汉区"}, {
            "id": 1615,
            "name": "乔口区"
        }, {"id": 1616, "name": "汉阳区"}, {"id": 1617, "name": "武昌区"}, {"id": 1618, "name": "青山区"}, {
            "id": 1619,
            "name": "洪山区"
        }, {"id": 1620, "name": "东西湖区"}, {"id": 1621, "name": "汉南区"}, {"id": 1622, "name": "蔡甸区"}, {
            "id": 1623,
            "name": "江夏区"
        }, {"id": 1624, "name": "黄陂区"}, {"id": 1625, "name": "新洲区"}],
        "183": [{"id": 1626, "name": "市辖区"}, {"id": 1627, "name": "黄石港区"}, {"id": 1628, "name": "西塞山区"}, {
            "id": 1629,
            "name": "下陆区"
        }, {"id": 1630, "name": "铁山区"}, {"id": 1631, "name": "阳新县"}, {"id": 1632, "name": "大冶市"}],
        "184": [{"id": 1633, "name": "市辖区"}, {"id": 1634, "name": "茅箭区"}, {"id": 1635, "name": "张湾区"}, {
            "id": 1636,
            "name": "郧　县"
        }, {"id": 1637, "name": "郧西县"}, {"id": 1638, "name": "竹山县"}, {"id": 1639, "name": "竹溪县"}, {
            "id": 1640,
            "name": "房　县"
        }, {"id": 1641, "name": "丹江口市"}],
        "185": [{"id": 1642, "name": "市辖区"}, {"id": 1643, "name": "沙市区"}, {"id": 1644, "name": "荆州区"}, {
            "id": 1645,
            "name": "公安县"
        }, {"id": 1646, "name": "监利县"}, {"id": 1647, "name": "江陵县"}, {"id": 1648, "name": "石首市"}, {
            "id": 1649,
            "name": "洪湖市"
        }, {"id": 1650, "name": "松滋市"}],
        "186": [{"id": 1651, "name": "市辖区"}, {"id": 1652, "name": "西陵区"}, {"id": 1653, "name": "伍家岗区"}, {
            "id": 1654,
            "name": "点军区"
        }, {"id": 1655, "name": "猇亭区"}, {"id": 1656, "name": "夷陵区"}, {"id": 1657, "name": "远安县"}, {
            "id": 1658,
            "name": "兴山县"
        }, {"id": 1659, "name": "秭归县"}, {"id": 1660, "name": "长阳土家族自治县"}, {"id": 1661, "name": "五峰土家族自治县"}, {
            "id": 1662,
            "name": "宜都市"
        }, {"id": 1663, "name": "当阳市"}, {"id": 1664, "name": "枝江市"}],
        "187": [{"id": 1665, "name": "市辖区"}, {"id": 1666, "name": "襄城区"}, {"id": 1667, "name": "樊城区"}, {
            "id": 1668,
            "name": "襄阳区"
        }, {"id": 1669, "name": "南漳县"}, {"id": 1670, "name": "谷城县"}, {"id": 1671, "name": "保康县"}, {
            "id": 1672,
            "name": "老河口市"
        }, {"id": 1673, "name": "枣阳市"}, {"id": 1674, "name": "宜城市"}],
        "188": [{"id": 1675, "name": "市辖区"}, {"id": 1676, "name": "梁子湖区"}, {"id": 1677, "name": "华容区"}, {
            "id": 1678,
            "name": "鄂城区"
        }],
        "189": [{"id": 1679, "name": "市辖区"}, {"id": 1680, "name": "东宝区"}, {"id": 1681, "name": "掇刀区"}, {
            "id": 1682,
            "name": "京山县"
        }, {"id": 1683, "name": "沙洋县"}, {"id": 1684, "name": "钟祥市"}],
        "190": [{"id": 1685, "name": "市辖区"}, {"id": 1686, "name": "孝南区"}, {"id": 1687, "name": "孝昌县"}, {
            "id": 1688,
            "name": "大悟县"
        }, {"id": 1689, "name": "云梦县"}, {"id": 1690, "name": "应城市"}, {"id": 1691, "name": "安陆市"}, {
            "id": 1692,
            "name": "汉川市"
        }],
        "191": [{"id": 1693, "name": "市辖区"}, {"id": 1694, "name": "黄州区"}, {"id": 1695, "name": "团风县"}, {
            "id": 1696,
            "name": "红安县"
        }, {"id": 1697, "name": "罗田县"}, {"id": 1698, "name": "英山县"}, {"id": 1699, "name": "浠水县"}, {
            "id": 1700,
            "name": "蕲春县"
        }, {"id": 1701, "name": "黄梅县"}, {"id": 1702, "name": "麻城市"}, {"id": 1703, "name": "武穴市"}],
        "192": [{"id": 1704, "name": "市辖区"}, {"id": 1705, "name": "咸安区"}, {"id": 1706, "name": "嘉鱼县"}, {
            "id": 1707,
            "name": "通城县"
        }, {"id": 1708, "name": "崇阳县"}, {"id": 1709, "name": "通山县"}, {"id": 1710, "name": "赤壁市"}],
        "193": [{"id": 1711, "name": "市辖区"}, {"id": 1712, "name": "曾都区"}, {"id": 1713, "name": "广水市"}],
        "194": [{"id": 1714, "name": "仙桃市"}],
        "195": [{"id": 1715, "name": "天门市"}],
        "196": [{"id": 1716, "name": "潜江市"}],
        "197": [{"id": 1717, "name": "神农架林区"}],
        "198": [{"id": 1718, "name": "恩施市"}, {"id": 1719, "name": "利川市"}, {"id": 1720, "name": "建始县"}, {
            "id": 1721,
            "name": "巴东县"
        }, {"id": 1722, "name": "宣恩县"}, {"id": 1723, "name": "咸丰县"}, {"id": 1724, "name": "来凤县"}, {
            "id": 1725,
            "name": "鹤峰县"
        }],
        "199": [{"id": 1726, "name": "市辖区"}, {"id": 1727, "name": "芙蓉区"}, {"id": 1728, "name": "天心区"}, {
            "id": 1729,
            "name": "岳麓区"
        }, {"id": 1730, "name": "开福区"}, {"id": 1731, "name": "雨花区"}, {"id": 1732, "name": "长沙县"}, {
            "id": 1733,
            "name": "望城县"
        }, {"id": 1734, "name": "宁乡县"}, {"id": 1735, "name": "浏阳市"}],
        "200": [{"id": 1736, "name": "市辖区"}, {"id": 1737, "name": "荷塘区"}, {"id": 1738, "name": "芦淞区"}, {
            "id": 1739,
            "name": "石峰区"
        }, {"id": 1740, "name": "天元区"}, {"id": 1741, "name": "株洲县"}, {"id": 1742, "name": "攸　县"}, {
            "id": 1743,
            "name": "茶陵县"
        }, {"id": 1744, "name": "炎陵县"}, {"id": 1745, "name": "醴陵市"}],
        "201": [{"id": 1746, "name": "市辖区"}, {"id": 1747, "name": "雨湖区"}, {"id": 1748, "name": "岳塘区"}, {
            "id": 1749,
            "name": "湘潭县"
        }, {"id": 1750, "name": "湘乡市"}, {"id": 1751, "name": "韶山市"}],
        "202": [{"id": 1752, "name": "市辖区"}, {"id": 1753, "name": "珠晖区"}, {"id": 1754, "name": "雁峰区"}, {
            "id": 1755,
            "name": "石鼓区"
        }, {"id": 1756, "name": "蒸湘区"}, {"id": 1757, "name": "南岳区"}, {"id": 1758, "name": "衡阳县"}, {
            "id": 1759,
            "name": "衡南县"
        }, {"id": 1760, "name": "衡山县"}, {"id": 1761, "name": "衡东县"}, {"id": 1762, "name": "祁东县"}, {
            "id": 1763,
            "name": "耒阳市"
        }, {"id": 1764, "name": "常宁市"}],
        "203": [{"id": 1765, "name": "市辖区"}, {"id": 1766, "name": "双清区"}, {"id": 1767, "name": "大祥区"}, {
            "id": 1768,
            "name": "北塔区"
        }, {"id": 1769, "name": "邵东县"}, {"id": 1770, "name": "新邵县"}, {"id": 1771, "name": "邵阳县"}, {
            "id": 1772,
            "name": "隆回县"
        }, {"id": 1773, "name": "洞口县"}, {"id": 1774, "name": "绥宁县"}, {"id": 1775, "name": "新宁县"}, {
            "id": 1776,
            "name": "城步苗族自治县"
        }, {"id": 1777, "name": "武冈市"}],
        "204": [{"id": 1778, "name": "市辖区"}, {"id": 1779, "name": "岳阳楼区"}, {"id": 1780, "name": "云溪区"}, {
            "id": 1781,
            "name": "君山区"
        }, {"id": 1782, "name": "岳阳县"}, {"id": 1783, "name": "华容县"}, {"id": 1784, "name": "湘阴县"}, {
            "id": 1785,
            "name": "平江县"
        }, {"id": 1786, "name": "汨罗市"}, {"id": 1787, "name": "临湘市"}],
        "205": [{"id": 1788, "name": "市辖区"}, {"id": 1789, "name": "武陵区"}, {"id": 1790, "name": "鼎城区"}, {
            "id": 1791,
            "name": "安乡县"
        }, {"id": 1792, "name": "汉寿县"}, {"id": 1793, "name": "澧　县"}, {"id": 1794, "name": "临澧县"}, {
            "id": 1795,
            "name": "桃源县"
        }, {"id": 1796, "name": "石门县"}, {"id": 1797, "name": "津市市"}],
        "206": [{"id": 1798, "name": "市辖区"}, {"id": 1799, "name": "永定区"}, {"id": 1800, "name": "武陵源区"}, {
            "id": 1801,
            "name": "慈利县"
        }, {"id": 1802, "name": "桑植县"}],
        "207": [{"id": 1803, "name": "市辖区"}, {"id": 1804, "name": "资阳区"}, {"id": 1805, "name": "赫山区"}, {
            "id": 1806,
            "name": "南　县"
        }, {"id": 1807, "name": "桃江县"}, {"id": 1808, "name": "安化县"}, {"id": 1809, "name": "沅江市"}],
        "208": [{"id": 1810, "name": "市辖区"}, {"id": 1811, "name": "北湖区"}, {"id": 1812, "name": "苏仙区"}, {
            "id": 1813,
            "name": "桂阳县"
        }, {"id": 1814, "name": "宜章县"}, {"id": 1815, "name": "永兴县"}, {"id": 1816, "name": "嘉禾县"}, {
            "id": 1817,
            "name": "临武县"
        }, {"id": 1818, "name": "汝城县"}, {"id": 1819, "name": "桂东县"}, {"id": 1820, "name": "安仁县"}, {
            "id": 1821,
            "name": "资兴市"
        }],
        "209": [{"id": 1822, "name": "市辖区"}, {"id": 1823, "name": "芝山区"}, {"id": 1824, "name": "冷水滩区"}, {
            "id": 1825,
            "name": "祁阳县"
        }, {"id": 1826, "name": "东安县"}, {"id": 1827, "name": "双牌县"}, {"id": 1828, "name": "道　县"}, {
            "id": 1829,
            "name": "江永县"
        }, {"id": 1830, "name": "宁远县"}, {"id": 1831, "name": "蓝山县"}, {"id": 1832, "name": "新田县"}, {
            "id": 1833,
            "name": "江华瑶族自治县"
        }],
        "210": [{"id": 1834, "name": "市辖区"}, {"id": 1835, "name": "鹤城区"}, {"id": 1836, "name": "中方县"}, {
            "id": 1837,
            "name": "沅陵县"
        }, {"id": 1838, "name": "辰溪县"}, {"id": 1839, "name": "溆浦县"}, {"id": 1840, "name": "会同县"}, {
            "id": 1841,
            "name": "麻阳苗族自治县"
        }, {"id": 1842, "name": "新晃侗族自治县"}, {"id": 1843, "name": "芷江侗族自治县"}, {
            "id": 1844,
            "name": "靖州苗族侗族自治县"
        }, {"id": 1845, "name": "通道侗族自治县"}, {"id": 1846, "name": "洪江市"}],
        "211": [{"id": 1847, "name": "市辖区"}, {"id": 1848, "name": "娄星区"}, {"id": 1849, "name": "双峰县"}, {
            "id": 1850,
            "name": "新化县"
        }, {"id": 1851, "name": "冷水江市"}, {"id": 1852, "name": "涟源市"}],
        "212": [{"id": 1853, "name": "吉首市"}, {"id": 1854, "name": "泸溪县"}, {"id": 1855, "name": "凤凰县"}, {
            "id": 1856,
            "name": "花垣县"
        }, {"id": 1857, "name": "保靖县"}, {"id": 1858, "name": "古丈县"}, {"id": 1859, "name": "永顺县"}, {
            "id": 1860,
            "name": "龙山县"
        }],
        "213": [{"id": 1861, "name": "市辖区"}, {"id": 3138, "name": "萝岗区"}, {"id": 3139, "name": "南沙区"}, {
            "id": 1863,
            "name": "荔湾区"
        }, {
            "id": 1864,
            "name": "越秀区"
        }, {"id": 1865, "name": "海珠区"}, {"id": 1866, "name": "天河区"}, {"id": 1867, "name": "芳村区"}, {
            "id": 1868,
            "name": "白云区"
        }, {"id": 1869, "name": "黄埔区"}, {"id": 1870, "name": "番禺区"}, {"id": 1871, "name": "花都区"}, {
            "id": 1872,
            "name": "增城市"
        }, {"id": 1873, "name": "从化市"}],
        "214": [{"id": 1874, "name": "市辖区"}, {"id": 1875, "name": "罗湖区"}, {"id": 1876, "name": "福田区"}, {
            "id": 1877,
            "name": "南山区"
        }, {"id": 1878, "name": "宝安区"}, {"id": 1879, "name": "龙岗区"}, {"id": 1880, "name": "盐田区"}],
        "215": [{"id": 1881, "name": "市辖区"}, {"id": 1882, "name": "香洲区"}, {"id": 1883, "name": "斗门区"}, {
            "id": 1884,
            "name": "金湾区"
        }],
        "216": [{"id": 1885, "name": "市辖区"}, {"id": 1886, "name": "龙湖区"}, {"id": 1887, "name": "金平区"}, {
            "id": 1888,
            "name": "濠江区"
        }, {"id": 1889, "name": "潮阳区"}, {"id": 1890, "name": "潮南区"}, {"id": 1891, "name": "澄海区"}, {
            "id": 1892,
            "name": "南澳县"
        }],
        "217": [{"id": 1893, "name": "市辖区"}, {"id": 1894, "name": "武江区"}, {"id": 1895, "name": "浈江区"}, {
            "id": 1896,
            "name": "曲江区"
        }, {"id": 1897, "name": "始兴县"}, {"id": 1898, "name": "仁化县"}, {"id": 1899, "name": "翁源县"}, {
            "id": 1900,
            "name": "乳源瑶族自治县"
        }, {"id": 1901, "name": "新丰县"}, {"id": 1902, "name": "乐昌市"}, {"id": 1903, "name": "南雄市"}],
        "218": [{"id": 1904, "name": "市辖区"}, {"id": 1905, "name": "禅城区"}, {"id": 1906, "name": "南海区"}, {
            "id": 1907,
            "name": "顺德区"
        }, {"id": 1908, "name": "三水区"}, {"id": 1909, "name": "高明区"}],
        "219": [{"id": 1910, "name": "市辖区"}, {"id": 1911, "name": "蓬江区"}, {"id": 1912, "name": "江海区"}, {
            "id": 1913,
            "name": "新会区"
        }, {"id": 1914, "name": "台山市"}, {"id": 1915, "name": "开平市"}, {"id": 1916, "name": "鹤山市"}, {
            "id": 1917,
            "name": "恩平市"
        }],
        "220": [{"id": 1918, "name": "市辖区"}, {"id": 1919, "name": "赤坎区"}, {"id": 1920, "name": "霞山区"}, {
            "id": 1921,
            "name": "坡头区"
        }, {"id": 1922, "name": "麻章区"}, {"id": 1923, "name": "遂溪县"}, {"id": 1924, "name": "徐闻县"}, {
            "id": 1925,
            "name": "廉江市"
        }, {"id": 1926, "name": "雷州市"}, {"id": 1927, "name": "吴川市"}],
        "221": [{"id": 1928, "name": "市辖区"}, {"id": 1929, "name": "茂南区"}, {"id": 1930, "name": "茂港区"}, {
            "id": 1931,
            "name": "电白县"
        }, {"id": 1932, "name": "高州市"}, {"id": 1933, "name": "化州市"}, {"id": 1934, "name": "信宜市"}],
        "222": [{"id": 1935, "name": "市辖区"}, {"id": 1936, "name": "端州区"}, {"id": 1937, "name": "鼎湖区"}, {
            "id": 1938,
            "name": "广宁县"
        }, {"id": 1939, "name": "怀集县"}, {"id": 1940, "name": "封开县"}, {"id": 1941, "name": "德庆县"}, {
            "id": 1942,
            "name": "高要市"
        }, {"id": 1943, "name": "四会市"}],
        "223": [{"id": 1944, "name": "市辖区"}, {"id": 1945, "name": "惠城区"}, {"id": 1946, "name": "惠阳区"}, {
            "id": 1947,
            "name": "博罗县"
        }, {"id": 1948, "name": "惠东县"}, {"id": 1949, "name": "龙门县"}],
        "224": [{"id": 1950, "name": "市辖区"}, {"id": 1951, "name": "梅江区"}, {"id": 1952, "name": "梅　县"}, {
            "id": 1953,
            "name": "大埔县"
        }, {"id": 1954, "name": "丰顺县"}, {"id": 1955, "name": "五华县"}, {"id": 1956, "name": "平远县"}, {
            "id": 1957,
            "name": "蕉岭县"
        }, {"id": 1958, "name": "兴宁市"}],
        "225": [{"id": 1959, "name": "市辖区"}, {"id": 1960, "name": "城　区"}, {"id": 1961, "name": "海丰县"}, {
            "id": 1962,
            "name": "陆河县"
        }, {"id": 1963, "name": "陆丰市"}],
        "226": [{"id": 1964, "name": "市辖区"}, {"id": 1965, "name": "源城区"}, {"id": 1966, "name": "紫金县"}, {
            "id": 1967,
            "name": "龙川县"
        }, {"id": 1968, "name": "连平县"}, {"id": 1969, "name": "和平县"}, {"id": 1970, "name": "东源县"}],
        "227": [{"id": 1971, "name": "市辖区"}, {"id": 1972, "name": "江城区"}, {"id": 1973, "name": "阳西县"}, {
            "id": 1974,
            "name": "阳东县"
        }, {"id": 1975, "name": "阳春市"}],
        "228": [{"id": 1976, "name": "市辖区"}, {"id": 1977, "name": "清城区"}, {"id": 1978, "name": "佛冈县"}, {
            "id": 1979,
            "name": "阳山县"
        }, {"id": 1980, "name": "连山壮族瑶族自治县"}, {"id": 1981, "name": "连南瑶族自治县"}, {"id": 1982, "name": "清新县"}, {
            "id": 1983,
            "name": "英德市"
        }, {"id": 1984, "name": "连州市"}],
        "231": [{"id": 1985, "name": "市辖区"}, {"id": 1986, "name": "湘桥区"}, {"id": 1987, "name": "潮安县"}, {
            "id": 1988,
            "name": "饶平县"
        }],
        "232": [{"id": 1989, "name": "市辖区"}, {"id": 1990, "name": "榕城区"}, {"id": 1991, "name": "揭东县"}, {
            "id": 1992,
            "name": "揭西县"
        }, {"id": 1993, "name": "惠来县"}, {"id": 1994, "name": "普宁市"}],
        "233": [{"id": 1995, "name": "市辖区"}, {"id": 1996, "name": "云城区"}, {"id": 1997, "name": "新兴县"}, {
            "id": 1998,
            "name": "郁南县"
        }, {"id": 1999, "name": "云安县"}, {"id": 2000, "name": "罗定市"}],
        "234": [{"id": 2001, "name": "市辖区"}, {"id": 2002, "name": "城关区"}, {"id": 2003, "name": "七里河区"}, {
            "id": 2004,
            "name": "西固区"
        }, {"id": 2005, "name": "安宁区"}, {"id": 2006, "name": "红古区"}, {"id": 2007, "name": "永登县"}, {
            "id": 2008,
            "name": "皋兰县"
        }, {"id": 2009, "name": "榆中县"}],
        "235": [{"id": 2010, "name": "市辖区"}, {"id": 2011, "name": "金川区"}, {"id": 2012, "name": "永昌县"}],
        "236": [{"id": 2013, "name": "市辖区"}, {"id": 2014, "name": "白银区"}, {"id": 2015, "name": "平川区"}, {
            "id": 2016,
            "name": "靖远县"
        }, {"id": 2017, "name": "会宁县"}, {"id": 2018, "name": "景泰县"}],
        "237": [{"id": 2019, "name": "市辖区"}, {"id": 2020, "name": "秦城区"}, {"id": 2021, "name": "北道区"}, {
            "id": 2022,
            "name": "清水县"
        }, {"id": 2023, "name": "秦安县"}, {"id": 2024, "name": "甘谷县"}, {"id": 2025, "name": "武山县"}, {
            "id": 2026,
            "name": "张家川回族自治县"
        }],
        "238": [{"id": 2027, "name": "市辖区"}],
        "239": [{"id": 2028, "name": "市辖区"}, {"id": 2029, "name": "凉州区"}, {"id": 2030, "name": "民勤县"}, {
            "id": 2031,
            "name": "古浪县"
        }, {"id": 2032, "name": "天祝藏族自治县"}],
        "240": [{"id": 2033, "name": "市辖区"}, {"id": 2034, "name": "甘州区"}, {"id": 2035, "name": "肃南裕固族自治县"}, {
            "id": 2036,
            "name": "民乐县"
        }, {"id": 2037, "name": "临泽县"}, {"id": 2038, "name": "高台县"}, {"id": 2039, "name": "山丹县"}],
        "241": [{"id": 2040, "name": "市辖区"}, {"id": 2041, "name": "崆峒区"}, {"id": 2042, "name": "泾川县"}, {
            "id": 2043,
            "name": "灵台县"
        }, {"id": 2044, "name": "崇信县"}, {"id": 2045, "name": "华亭县"}, {"id": 2046, "name": "庄浪县"}, {
            "id": 2047,
            "name": "静宁县"
        }],
        "242": [{"id": 2048, "name": "市辖区"}, {"id": 2049, "name": "肃州区"}, {"id": 2050, "name": "金塔县"}, {
            "id": 2051,
            "name": "安西县"
        }, {"id": 2052, "name": "肃北蒙古族自治县"}, {"id": 2053, "name": "阿克塞哈萨克族自治县"}, {
            "id": 2054,
            "name": "玉门市"
        }, {"id": 2055, "name": "敦煌市"}],
        "243": [{"id": 2056, "name": "市辖区"}, {"id": 2057, "name": "西峰区"}, {"id": 2058, "name": "庆城县"}, {
            "id": 2059,
            "name": "环　县"
        }, {"id": 2060, "name": "华池县"}, {"id": 2061, "name": "合水县"}, {"id": 2062, "name": "正宁县"}, {
            "id": 2063,
            "name": "宁　县"
        }, {"id": 2064, "name": "镇原县"}],
        "244": [{"id": 2065, "name": "市辖区"}, {"id": 2066, "name": "安定区"}, {"id": 2067, "name": "通渭县"}, {
            "id": 2068,
            "name": "陇西县"
        }, {"id": 2069, "name": "渭源县"}, {"id": 2070, "name": "临洮县"}, {"id": 2071, "name": "漳　县"}, {
            "id": 2072,
            "name": "岷　县"
        }],
        "245": [{"id": 2073, "name": "市辖区"}, {"id": 2074, "name": "武都区"}, {"id": 2075, "name": "成　县"}, {
            "id": 2076,
            "name": "文　县"
        }, {"id": 2077, "name": "宕昌县"}, {"id": 2078, "name": "康　县"}, {"id": 2079, "name": "西和县"}, {
            "id": 2080,
            "name": "礼　县"
        }, {"id": 2081, "name": "徽　县"}, {"id": 2082, "name": "两当县"}],
        "246": [{"id": 2083, "name": "临夏市"}, {"id": 2084, "name": "临夏县"}, {"id": 2085, "name": "康乐县"}, {
            "id": 2086,
            "name": "永靖县"
        }, {"id": 2087, "name": "广河县"}, {"id": 2088, "name": "和政县"}, {"id": 2089, "name": "东乡族自治县"}, {
            "id": 2090,
            "name": "积石山保安族东乡族撒拉族自治县"
        }],
        "247": [{"id": 2091, "name": "合作市"}, {"id": 2092, "name": "临潭县"}, {"id": 2093, "name": "卓尼县"}, {
            "id": 2094,
            "name": "舟曲县"
        }, {"id": 2095, "name": "迭部县"}, {"id": 2096, "name": "玛曲县"}, {"id": 2097, "name": "碌曲县"}, {
            "id": 2098,
            "name": "夏河县"
        }],
        "248": [{"id": 2099, "name": "市辖区"}, {"id": 2100, "name": "锦江区"}, {"id": 2101, "name": "青羊区"}, {
            "id": 2102,
            "name": "金牛区"
        }, {"id": 2103, "name": "武侯区"}, {"id": 2104, "name": "成华区"}, {"id": 2105, "name": "龙泉驿区"}, {
            "id": 2106,
            "name": "青白江区"
        }, {"id": 2107, "name": "新都区"}, {"id": 2108, "name": "温江县"}, {"id": 2109, "name": "金堂县"}, {
            "id": 2110,
            "name": "双流县"
        }, {"id": 2111, "name": "郫　县"}, {"id": 2112, "name": "大邑县"}, {"id": 2113, "name": "蒲江县"}, {
            "id": 2114,
            "name": "新津县"
        }, {"id": 2115, "name": "都江堰市"}, {"id": 2116, "name": "彭州市"}, {"id": 2117, "name": "邛崃市"}, {
            "id": 2118,
            "name": "崇州市"
        }],
        "249": [{"id": 2119, "name": "市辖区"}, {"id": 2120, "name": "自流井区"}, {"id": 2121, "name": "贡井区"}, {
            "id": 2122,
            "name": "大安区"
        }, {"id": 2123, "name": "沿滩区"}, {"id": 2124, "name": "荣　县"}, {"id": 2125, "name": "富顺县"}],
        "250": [{"id": 2126, "name": "市辖区"}, {"id": 2127, "name": "东　区"}, {"id": 2128, "name": "西　区"}, {
            "id": 2129,
            "name": "仁和区"
        }, {"id": 2130, "name": "米易县"}, {"id": 2131, "name": "盐边县"}],
        "251": [{"id": 2132, "name": "市辖区"}, {"id": 2133, "name": "江阳区"}, {"id": 2134, "name": "纳溪区"}, {
            "id": 2135,
            "name": "龙马潭区"
        }, {"id": 2136, "name": "泸　县"}, {"id": 2137, "name": "合江县"}, {"id": 2138, "name": "叙永县"}, {
            "id": 2139,
            "name": "古蔺县"
        }],
        "252": [{"id": 2140, "name": "市辖区"}, {"id": 2141, "name": "旌阳区"}, {"id": 2142, "name": "中江县"}, {
            "id": 2143,
            "name": "罗江县"
        }, {"id": 2144, "name": "广汉市"}, {"id": 2145, "name": "什邡市"}, {"id": 2146, "name": "绵竹市"}],
        "253": [{"id": 2147, "name": "市辖区"}, {"id": 2148, "name": "涪城区"}, {"id": 2149, "name": "游仙区"}, {
            "id": 2150,
            "name": "三台县"
        }, {"id": 2151, "name": "盐亭县"}, {"id": 2152, "name": "安　县"}, {"id": 2153, "name": "梓潼县"}, {
            "id": 2154,
            "name": "北川羌族自治县"
        }, {"id": 2155, "name": "平武县"}, {"id": 2156, "name": "江油市"}],
        "254": [{"id": 2157, "name": "市辖区"}, {"id": 2158, "name": "市中区"}, {"id": 2159, "name": "元坝区"}, {
            "id": 2160,
            "name": "朝天区"
        }, {"id": 2161, "name": "旺苍县"}, {"id": 2162, "name": "青川县"}, {"id": 2163, "name": "剑阁县"}, {
            "id": 2164,
            "name": "苍溪县"
        }],
        "255": [{"id": 2165, "name": "市辖区"}, {"id": 2166, "name": "船山区"}, {"id": 2167, "name": "安居区"}, {
            "id": 2168,
            "name": "蓬溪县"
        }, {"id": 2169, "name": "射洪县"}, {"id": 2170, "name": "大英县"}],
        "256": [{"id": 2171, "name": "市辖区"}, {"id": 2172, "name": "市中区"}, {"id": 2173, "name": "东兴区"}, {
            "id": 2174,
            "name": "威远县"
        }, {"id": 2175, "name": "资中县"}, {"id": 2176, "name": "隆昌县"}],
        "257": [{"id": 2177, "name": "市辖区"}, {"id": 2178, "name": "市中区"}, {"id": 2179, "name": "沙湾区"}, {
            "id": 2180,
            "name": "五通桥区"
        }, {"id": 2181, "name": "金口河区"}, {"id": 2182, "name": "犍为县"}, {"id": 2183, "name": "井研县"}, {
            "id": 2184,
            "name": "夹江县"
        }, {"id": 2185, "name": "沐川县"}, {"id": 2186, "name": "峨边彝族自治县"}, {"id": 2187, "name": "马边彝族自治县"}, {
            "id": 2188,
            "name": "峨眉山市"
        }],
        "258": [{"id": 2189, "name": "市辖区"}, {"id": 2190, "name": "顺庆区"}, {"id": 2191, "name": "高坪区"}, {
            "id": 2192,
            "name": "嘉陵区"
        }, {"id": 2193, "name": "南部县"}, {"id": 2194, "name": "营山县"}, {"id": 2195, "name": "蓬安县"}, {
            "id": 2196,
            "name": "仪陇县"
        }, {"id": 2197, "name": "西充县"}, {"id": 2198, "name": "阆中市"}],
        "259": [{"id": 2199, "name": "市辖区"}, {"id": 2200, "name": "东坡区"}, {"id": 2201, "name": "仁寿县"}, {
            "id": 2202,
            "name": "彭山县"
        }, {"id": 2203, "name": "洪雅县"}, {"id": 2204, "name": "丹棱县"}, {"id": 2205, "name": "青神县"}],
        "260": [{"id": 2206, "name": "市辖区"}, {"id": 2207, "name": "翠屏区"}, {"id": 2208, "name": "宜宾县"}, {
            "id": 2209,
            "name": "南溪县"
        }, {"id": 2210, "name": "江安县"}, {"id": 2211, "name": "长宁县"}, {"id": 2212, "name": "高　县"}, {
            "id": 2213,
            "name": "珙　县"
        }, {"id": 2214, "name": "筠连县"}, {"id": 2215, "name": "兴文县"}, {"id": 2216, "name": "屏山县"}],
        "261": [{"id": 2217, "name": "市辖区"}, {"id": 2218, "name": "广安区"}, {"id": 2219, "name": "岳池县"}, {
            "id": 2220,
            "name": "武胜县"
        }, {"id": 2221, "name": "邻水县"}, {"id": 2222, "name": "华莹市"}],
        "262": [{"id": 2223, "name": "市辖区"}, {"id": 2224, "name": "通川区"}, {"id": 2225, "name": "达　县"}, {
            "id": 2226,
            "name": "宣汉县"
        }, {"id": 2227, "name": "开江县"}, {"id": 2228, "name": "大竹县"}, {"id": 2229, "name": "渠　县"}, {
            "id": 2230,
            "name": "万源市"
        }],
        "263": [{"id": 2231, "name": "市辖区"}, {"id": 2232, "name": "雨城区"}, {"id": 2233, "name": "名山县"}, {
            "id": 2234,
            "name": "荥经县"
        }, {"id": 2235, "name": "汉源县"}, {"id": 2236, "name": "石棉县"}, {"id": 2237, "name": "天全县"}, {
            "id": 2238,
            "name": "芦山县"
        }, {"id": 2239, "name": "宝兴县"}],
        "264": [{"id": 2240, "name": "市辖区"}, {"id": 2241, "name": "巴州区"}, {"id": 2242, "name": "通江县"}, {
            "id": 2243,
            "name": "南江县"
        }, {"id": 2244, "name": "平昌县"}],
        "265": [{"id": 2245, "name": "市辖区"}, {"id": 2246, "name": "雁江区"}, {"id": 2247, "name": "安岳县"}, {
            "id": 2248,
            "name": "乐至县"
        }, {"id": 2249, "name": "简阳市"}],
        "266": [{"id": 2250, "name": "汶川县"}, {"id": 2251, "name": "理　县"}, {"id": 2252, "name": "茂　县"}, {
            "id": 2253,
            "name": "松潘县"
        }, {"id": 2254, "name": "九寨沟县"}, {"id": 2255, "name": "金川县"}, {"id": 2256, "name": "小金县"}, {
            "id": 2257,
            "name": "黑水县"
        }, {"id": 2258, "name": "马尔康县"}, {"id": 2259, "name": "壤塘县"}, {"id": 2260, "name": "阿坝县"}, {
            "id": 2261,
            "name": "若尔盖县"
        }, {"id": 2262, "name": "红原县"}],
        "267": [{"id": 2263, "name": "康定县"}, {"id": 2264, "name": "泸定县"}, {"id": 2265, "name": "丹巴县"}, {
            "id": 2266,
            "name": "九龙县"
        }, {"id": 2267, "name": "雅江县"}, {"id": 2268, "name": "道孚县"}, {"id": 2269, "name": "炉霍县"}, {
            "id": 2270,
            "name": "甘孜县"
        }, {"id": 2271, "name": "新龙县"}, {"id": 2272, "name": "德格县"}, {"id": 2273, "name": "白玉县"}, {
            "id": 2274,
            "name": "石渠县"
        }, {"id": 2275, "name": "色达县"}, {"id": 2276, "name": "理塘县"}, {"id": 2277, "name": "巴塘县"}, {
            "id": 2278,
            "name": "乡城县"
        }, {"id": 2279, "name": "稻城县"}, {"id": 2280, "name": "得荣县"}],
        "268": [{"id": 2281, "name": "西昌市"}, {"id": 2282, "name": "木里藏族自治县"}, {"id": 2283, "name": "盐源县"}, {
            "id": 2284,
            "name": "德昌县"
        }, {"id": 2285, "name": "会理县"}, {"id": 2286, "name": "会东县"}, {"id": 2287, "name": "宁南县"}, {
            "id": 2288,
            "name": "普格县"
        }, {"id": 2289, "name": "布拖县"}, {"id": 2290, "name": "金阳县"}, {"id": 2291, "name": "昭觉县"}, {
            "id": 2292,
            "name": "喜德县"
        }, {"id": 2293, "name": "冕宁县"}, {"id": 2294, "name": "越西县"}, {"id": 2295, "name": "甘洛县"}, {
            "id": 2296,
            "name": "美姑县"
        }, {"id": 2297, "name": "雷波县"}],
        "269": [{"id": 2298, "name": "市辖区"}, {"id": 2299, "name": "南明区"}, {"id": 2300, "name": "云岩区"}, {
            "id": 2301,
            "name": "花溪区"
        }, {"id": 2302, "name": "乌当区"}, {"id": 2303, "name": "白云区"}, {"id": 2304, "name": "小河区"}, {
            "id": 2305,
            "name": "开阳县"
        }, {"id": 2306, "name": "息烽县"}, {"id": 2307, "name": "修文县"}, {"id": 2308, "name": "清镇市"}],
        "270": [{"id": 2309, "name": "钟山区"}, {"id": 2310, "name": "六枝特区"}, {"id": 2311, "name": "水城县"}, {
            "id": 2312,
            "name": "盘　县"
        }],
        "271": [{"id": 2313, "name": "市辖区"}, {"id": 2314, "name": "红花岗区"}, {"id": 2315, "name": "汇川区"}, {
            "id": 2316,
            "name": "遵义县"
        }, {"id": 2317, "name": "桐梓县"}, {"id": 2318, "name": "绥阳县"}, {"id": 2319, "name": "正安县"}, {
            "id": 2320,
            "name": "道真仡佬族苗族自治县"
        }, {"id": 2321, "name": "务川仡佬族苗族自治县"}, {"id": 2322, "name": "凤冈县"}, {"id": 2323, "name": "湄潭县"}, {
            "id": 2324,
            "name": "余庆县"
        }, {"id": 2325, "name": "习水县"}, {"id": 2326, "name": "赤水市"}, {"id": 2327, "name": "仁怀市"}],
        "272": [{"id": 2328, "name": "市辖区"}, {"id": 2329, "name": "西秀区"}, {"id": 2330, "name": "平坝县"}, {
            "id": 2331,
            "name": "普定县"
        }, {"id": 2332, "name": "镇宁布依族苗族自治县"}, {"id": 2333, "name": "关岭布依族苗族自治县"}, {"id": 2334, "name": "紫云苗族布依族自治县"}],
        "273": [{"id": 2335, "name": "铜仁市"}, {"id": 2336, "name": "江口县"}, {"id": 2337, "name": "玉屏侗族自治县"}, {
            "id": 2338,
            "name": "石阡县"
        }, {"id": 2339, "name": "思南县"}, {"id": 2340, "name": "印江土家族苗族自治县"}, {"id": 2341, "name": "德江县"}, {
            "id": 2342,
            "name": "沿河土家族自治县"
        }, {"id": 2343, "name": "松桃苗族自治县"}, {"id": 2344, "name": "万山特区"}],
        "274": [{"id": 2345, "name": "毕节市"}, {"id": 2346, "name": "大方县"}, {"id": 2347, "name": "黔西县"}, {
            "id": 2348,
            "name": "金沙县"
        }, {"id": 2349, "name": "织金县"}, {"id": 2350, "name": "纳雍县"}, {"id": 2351, "name": "威宁彝族回族苗族自治县"}, {
            "id": 2352,
            "name": "赫章县"
        }],
        "275": [{"id": 2353, "name": "兴义市"}, {"id": 2354, "name": "兴仁县"}, {"id": 2355, "name": "普安县"}, {
            "id": 2356,
            "name": "晴隆县"
        }, {"id": 2357, "name": "贞丰县"}, {"id": 2358, "name": "望谟县"}, {"id": 2359, "name": "册亨县"}, {
            "id": 2360,
            "name": "安龙县"
        }],
        "276": [{"id": 2361, "name": "凯里市"}, {"id": 2362, "name": "黄平县"}, {"id": 2363, "name": "施秉县"}, {
            "id": 2364,
            "name": "三穗县"
        }, {"id": 2365, "name": "镇远县"}, {"id": 2366, "name": "岑巩县"}, {"id": 2367, "name": "天柱县"}, {
            "id": 2368,
            "name": "锦屏县"
        }, {"id": 2369, "name": "剑河县"}, {"id": 2370, "name": "台江县"}, {"id": 2371, "name": "黎平县"}, {
            "id": 2372,
            "name": "榕江县"
        }, {"id": 2373, "name": "从江县"}, {"id": 2374, "name": "雷山县"}, {"id": 2375, "name": "麻江县"}, {
            "id": 2376,
            "name": "丹寨县"
        }],
        "277": [{"id": 2377, "name": "都匀市"}, {"id": 2378, "name": "福泉市"}, {"id": 2379, "name": "荔波县"}, {
            "id": 2380,
            "name": "贵定县"
        }, {"id": 2381, "name": "瓮安县"}, {"id": 2382, "name": "独山县"}, {"id": 2383, "name": "平塘县"}, {
            "id": 2384,
            "name": "罗甸县"
        }, {"id": 2385, "name": "长顺县"}, {"id": 2386, "name": "龙里县"}, {"id": 2387, "name": "惠水县"}, {
            "id": 2388,
            "name": "三都水族自治县"
        }],
        "278": [{"id": 2389, "name": "市辖区"}, {"id": 2390, "name": "秀英区"}, {"id": 2391, "name": "龙华区"}, {
            "id": 2392,
            "name": "琼山区"
        }, {"id": 2393, "name": "美兰区"}],
        "279": [{"id": 2394, "name": "市辖区"}],
        "280": [{"id": 2395, "name": "五指山市"}],
        "281": [{"id": 2396, "name": "琼海市"}],
        "282": [{"id": 2397, "name": "儋州市"}],
        "283": [{"id": 2398, "name": "文昌市"}],
        "284": [{"id": 2399, "name": "万宁市"}],
        "285": [{"id": 2400, "name": "东方市"}],
        "286": [{"id": 2401, "name": "澄迈县"}],
        "287": [{"id": 2402, "name": "定安县"}],
        "288": [{"id": 2403, "name": "屯昌县"}],
        "289": [{"id": 2404, "name": "临高县"}],
        "290": [{"id": 2405, "name": "白沙黎族自治县"}],
        "291": [{"id": 2406, "name": "昌江黎族自治县"}],
        "292": [{"id": 2407, "name": "乐东黎族自治县"}],
        "293": [{"id": 2408, "name": "陵水黎族自治县"}],
        "294": [{"id": 2409, "name": "保亭黎族苗族自治县"}],
        "295": [{"id": 2410, "name": "琼中黎族苗族自治县"}],
        "296": [{"id": 2411, "name": "市辖区"}, {"id": 2412, "name": "五华区"}, {"id": 2413, "name": "盘龙区"}, {
            "id": 2414,
            "name": "官渡区"
        }, {"id": 2415, "name": "西山区"}, {"id": 2416, "name": "东川区"}, {"id": 2417, "name": "呈贡县"}, {
            "id": 2418,
            "name": "晋宁县"
        }, {"id": 2419, "name": "富民县"}, {"id": 2420, "name": "宜良县"}, {"id": 2421, "name": "石林彝族自治县"}, {
            "id": 2422,
            "name": "嵩明县"
        }, {"id": 2423, "name": "禄劝彝族苗族自治县"}, {"id": 2424, "name": "寻甸回族彝族自治县"}, {"id": 2425, "name": "安宁市"}],
        "297": [{"id": 2426, "name": "市辖区"}, {"id": 2427, "name": "麒麟区"}, {"id": 2428, "name": "马龙县"}, {
            "id": 2429,
            "name": "陆良县"
        }, {"id": 2430, "name": "师宗县"}, {"id": 2431, "name": "罗平县"}, {"id": 2432, "name": "富源县"}, {
            "id": 2433,
            "name": "会泽县"
        }, {"id": 2434, "name": "沾益县"}, {"id": 2435, "name": "宣威市"}],
        "298": [{"id": 2436, "name": "市辖区"}, {"id": 2437, "name": "红塔区"}, {"id": 2438, "name": "江川县"}, {
            "id": 2439,
            "name": "澄江县"
        }, {"id": 2440, "name": "通海县"}, {"id": 2441, "name": "华宁县"}, {"id": 2442, "name": "易门县"}, {
            "id": 2443,
            "name": "峨山彝族自治县"
        }, {"id": 2444, "name": "新平彝族傣族自治县"}, {"id": 2445, "name": "元江哈尼族彝族傣族自治县"}],
        "299": [{"id": 2446, "name": "市辖区"}, {"id": 2447, "name": "隆阳区"}, {"id": 2448, "name": "施甸县"}, {
            "id": 2449,
            "name": "腾冲县"
        }, {"id": 2450, "name": "龙陵县"}, {"id": 2451, "name": "昌宁县"}],
        "300": [{"id": 2452, "name": "市辖区"}, {"id": 2453, "name": "昭阳区"}, {"id": 2454, "name": "鲁甸县"}, {
            "id": 2455,
            "name": "巧家县"
        }, {"id": 2456, "name": "盐津县"}, {"id": 2457, "name": "大关县"}, {"id": 2458, "name": "永善县"}, {
            "id": 2459,
            "name": "绥江县"
        }, {"id": 2460, "name": "镇雄县"}, {"id": 2461, "name": "彝良县"}, {"id": 2462, "name": "威信县"}, {
            "id": 2463,
            "name": "水富县"
        }],
        "301": [{"id": 2464, "name": "市辖区"}, {"id": 2465, "name": "古城区"}, {"id": 2466, "name": "玉龙纳西族自治县"}, {
            "id": 2467,
            "name": "永胜县"
        }, {"id": 2468, "name": "华坪县"}, {"id": 2469, "name": "宁蒗彝族自治县"}],
        "302": [{"id": 2470, "name": "市辖区"}, {"id": 2471, "name": "翠云区"}, {
            "id": 2472,
            "name": "普洱哈尼族彝族自治县"
        }, {"id": 2473, "name": "墨江哈尼族自治县"}, {"id": 2474, "name": "景东彝族自治县"}, {
            "id": 2475,
            "name": "景谷傣族彝族自治县"
        }, {"id": 2476, "name": "镇沅彝族哈尼族拉祜族自治县"}, {"id": 2477, "name": "江城哈尼族彝族自治县"}, {
            "id": 2478,
            "name": "孟连傣族拉祜族佤族自治县"
        }, {"id": 2479, "name": "澜沧拉祜族自治县"}, {"id": 2480, "name": "西盟佤族自治县"}],
        "303": [{"id": 2481, "name": "市辖区"}, {"id": 2482, "name": "临翔区"}, {"id": 2483, "name": "凤庆县"}, {
            "id": 2484,
            "name": "云　县"
        }, {"id": 2485, "name": "永德县"}, {"id": 2486, "name": "镇康县"}, {
            "id": 2487,
            "name": "双江拉祜族佤族布朗族傣族自治县"
        }, {"id": 2488, "name": "耿马傣族佤族自治县"}, {"id": 2489, "name": "沧源佤族自治县"}],
        "304": [{"id": 2490, "name": "文山县"}, {"id": 2491, "name": "砚山县"}, {"id": 2492, "name": "西畴县"}, {
            "id": 2493,
            "name": "麻栗坡县"
        }, {"id": 2494, "name": "马关县"}, {"id": 2495, "name": "丘北县"}, {"id": 2496, "name": "广南县"}, {
            "id": 2497,
            "name": "富宁县"
        }],
        "305": [{"id": 2498, "name": "个旧市"}, {"id": 2499, "name": "开远市"}, {"id": 2500, "name": "蒙自县"}, {
            "id": 2501,
            "name": "屏边苗族自治县"
        }, {"id": 2502, "name": "建水县"}, {"id": 2503, "name": "石屏县"}, {"id": 2504, "name": "弥勒县"}, {
            "id": 2505,
            "name": "泸西县"
        }, {"id": 2506, "name": "元阳县"}, {"id": 2507, "name": "红河县"}, {"id": 2508, "name": "金平苗族瑶族傣族自治县"}, {
            "id": 2509,
            "name": "绿春县"
        }, {"id": 2510, "name": "河口瑶族自治县"}],
        "306": [{"id": 2511, "name": "景洪市"}, {"id": 2512, "name": "勐海县"}, {"id": 2513, "name": "勐腊县"}],
        "307": [{"id": 2514, "name": "楚雄市"}, {"id": 2515, "name": "双柏县"}, {"id": 2516, "name": "牟定县"}, {
            "id": 2517,
            "name": "南华县"
        }, {"id": 2518, "name": "姚安县"}, {"id": 2519, "name": "大姚县"}, {"id": 2520, "name": "永仁县"}, {
            "id": 2521,
            "name": "元谋县"
        }, {"id": 2522, "name": "武定县"}, {"id": 2523, "name": "禄丰县"}],
        "308": [{"id": 2524, "name": "大理市"}, {"id": 2525, "name": "漾濞彝族自治县"}, {"id": 2526, "name": "祥云县"}, {
            "id": 2527,
            "name": "宾川县"
        }, {"id": 2528, "name": "弥渡县"}, {"id": 2529, "name": "南涧彝族自治县"}, {"id": 2530, "name": "巍山彝族回族自治县"}, {
            "id": 2531,
            "name": "永平县"
        }, {"id": 2532, "name": "云龙县"}, {"id": 2533, "name": "洱源县"}, {"id": 2534, "name": "剑川县"}, {
            "id": 2535,
            "name": "鹤庆县"
        }],
        "309": [{"id": 2536, "name": "瑞丽市"}, {"id": 2537, "name": "潞西市"}, {"id": 2538, "name": "梁河县"}, {
            "id": 2539,
            "name": "盈江县"
        }, {"id": 2540, "name": "陇川县"}],
        "310": [{"id": 2541, "name": "泸水县"}, {"id": 2542, "name": "福贡县"}, {
            "id": 2543,
            "name": "贡山独龙族怒族自治县"
        }, {"id": 2544, "name": "兰坪白族普米族自治县"}],
        "311": [{"id": 2545, "name": "香格里拉县"}, {"id": 2546, "name": "德钦县"}, {"id": 2547, "name": "维西傈僳族自治县"}],
        "312": [{"id": 2548, "name": "市辖区"}, {"id": 2549, "name": "城东区"}, {"id": 2550, "name": "城中区"}, {
            "id": 2551,
            "name": "城西区"
        }, {"id": 2552, "name": "城北区"}, {"id": 2553, "name": "大通回族土族自治县"}, {"id": 2554, "name": "湟中县"}, {
            "id": 2555,
            "name": "湟源县"
        }],
        "313": [{"id": 2556, "name": "平安县"}, {"id": 2557, "name": "民和回族土族自治县"}, {
            "id": 2558,
            "name": "乐都县"
        }, {"id": 2559, "name": "互助土族自治县"}, {"id": 2560, "name": "化隆回族自治县"}, {"id": 2561, "name": "循化撒拉族自治县"}],
        "314": [{"id": 2562, "name": "门源回族自治县"}, {"id": 2563, "name": "祁连县"}, {"id": 2564, "name": "海晏县"}, {
            "id": 2565,
            "name": "刚察县"
        }],
        "315": [{"id": 2566, "name": "同仁县"}, {"id": 2567, "name": "尖扎县"}, {"id": 2568, "name": "泽库县"}, {
            "id": 2569,
            "name": "河南蒙古族自治县"
        }],
        "316": [{"id": 2570, "name": "共和县"}, {"id": 2571, "name": "同德县"}, {"id": 2572, "name": "贵德县"}, {
            "id": 2573,
            "name": "兴海县"
        }, {"id": 2574, "name": "贵南县"}],
        "317": [{"id": 2575, "name": "玛沁县"}, {"id": 2576, "name": "班玛县"}, {"id": 2577, "name": "甘德县"}, {
            "id": 2578,
            "name": "达日县"
        }, {"id": 2579, "name": "久治县"}, {"id": 2580, "name": "玛多县"}],
        "318": [{"id": 2581, "name": "玉树县"}, {"id": 2582, "name": "杂多县"}, {"id": 2583, "name": "称多县"}, {
            "id": 2584,
            "name": "治多县"
        }, {"id": 2585, "name": "囊谦县"}, {"id": 2586, "name": "曲麻莱县"}],
        "319": [{"id": 2587, "name": "格尔木市"}, {"id": 2588, "name": "德令哈市"}, {"id": 2589, "name": "乌兰县"}, {
            "id": 2590,
            "name": "都兰县"
        }, {"id": 2591, "name": "天峻县"}],
        "320": [{"id": 2592, "name": "市辖区"}, {"id": 2593, "name": "新城区"}, {"id": 2594, "name": "碑林区"}, {
            "id": 2595,
            "name": "莲湖区"
        }, {"id": 2596, "name": "灞桥区"}, {"id": 2597, "name": "未央区"}, {"id": 2598, "name": "雁塔区"}, {
            "id": 2599,
            "name": "阎良区"
        }, {"id": 2600, "name": "临潼区"}, {"id": 2601, "name": "长安区"}, {"id": 2602, "name": "蓝田县"}, {
            "id": 2603,
            "name": "周至县"
        }, {"id": 2604, "name": "户　县"}, {"id": 2605, "name": "高陵县"}],
        "321": [{"id": 2606, "name": "市辖区"}, {"id": 2607, "name": "王益区"}, {"id": 2608, "name": "印台区"}, {
            "id": 2609,
            "name": "耀州区"
        }, {"id": 2610, "name": "宜君县"}],
        "322": [{"id": 2611, "name": "市辖区"}, {"id": 2612, "name": "渭滨区"}, {"id": 2613, "name": "金台区"}, {
            "id": 2614,
            "name": "陈仓区"
        }, {"id": 2615, "name": "凤翔县"}, {"id": 2616, "name": "岐山县"}, {"id": 2617, "name": "扶风县"}, {
            "id": 2618,
            "name": "眉　县"
        }, {"id": 2619, "name": "陇　县"}, {"id": 2620, "name": "千阳县"}, {"id": 2621, "name": "麟游县"}, {
            "id": 2622,
            "name": "凤　县"
        }, {"id": 2623, "name": "太白县"}],
        "323": [{"id": 2624, "name": "市辖区"}, {"id": 2625, "name": "秦都区"}, {"id": 2626, "name": "杨凌区"}, {
            "id": 2627,
            "name": "渭城区"
        }, {"id": 2628, "name": "三原县"}, {"id": 2629, "name": "泾阳县"}, {"id": 2630, "name": "乾　县"}, {
            "id": 2631,
            "name": "礼泉县"
        }, {"id": 2632, "name": "永寿县"}, {"id": 2633, "name": "彬　县"}, {"id": 2634, "name": "长武县"}, {
            "id": 2635,
            "name": "旬邑县"
        }, {"id": 2636, "name": "淳化县"}, {"id": 2637, "name": "武功县"}, {"id": 2638, "name": "兴平市"}],
        "324": [{"id": 2639, "name": "市辖区"}, {"id": 2640, "name": "临渭区"}, {"id": 2641, "name": "华　县"}, {
            "id": 2642,
            "name": "潼关县"
        }, {"id": 2643, "name": "大荔县"}, {"id": 2644, "name": "合阳县"}, {"id": 2645, "name": "澄城县"}, {
            "id": 2646,
            "name": "蒲城县"
        }, {"id": 2647, "name": "白水县"}, {"id": 2648, "name": "富平县"}, {"id": 2649, "name": "韩城市"}, {
            "id": 2650,
            "name": "华阴市"
        }],
        "325": [{"id": 2651, "name": "市辖区"}, {"id": 2652, "name": "宝塔区"}, {"id": 2653, "name": "延长县"}, {
            "id": 2654,
            "name": "延川县"
        }, {"id": 2655, "name": "子长县"}, {"id": 2656, "name": "安塞县"}, {"id": 2657, "name": "志丹县"}, {
            "id": 2658,
            "name": "吴旗县"
        }, {"id": 2659, "name": "甘泉县"}, {"id": 2660, "name": "富　县"}, {"id": 2661, "name": "洛川县"}, {
            "id": 2662,
            "name": "宜川县"
        }, {"id": 2663, "name": "黄龙县"}, {"id": 2664, "name": "黄陵县"}],
        "326": [{"id": 2665, "name": "市辖区"}, {"id": 2666, "name": "汉台区"}, {"id": 2667, "name": "南郑县"}, {
            "id": 2668,
            "name": "城固县"
        }, {"id": 2669, "name": "洋　县"}, {"id": 2670, "name": "西乡县"}, {"id": 2671, "name": "勉　县"}, {
            "id": 2672,
            "name": "宁强县"
        }, {"id": 2673, "name": "略阳县"}, {"id": 2674, "name": "镇巴县"}, {"id": 2675, "name": "留坝县"}, {
            "id": 2676,
            "name": "佛坪县"
        }],
        "327": [{"id": 2677, "name": "市辖区"}, {"id": 2678, "name": "榆阳区"}, {"id": 2679, "name": "神木县"}, {
            "id": 2680,
            "name": "府谷县"
        }, {"id": 2681, "name": "横山县"}, {"id": 2682, "name": "靖边县"}, {"id": 2683, "name": "定边县"}, {
            "id": 2684,
            "name": "绥德县"
        }, {"id": 2685, "name": "米脂县"}, {"id": 2686, "name": "佳　县"}, {"id": 2687, "name": "吴堡县"}, {
            "id": 2688,
            "name": "清涧县"
        }, {"id": 2689, "name": "子洲县"}],
        "328": [{"id": 2690, "name": "市辖区"}, {"id": 2691, "name": "汉滨区"}, {"id": 2692, "name": "汉阴县"}, {
            "id": 2693,
            "name": "石泉县"
        }, {"id": 2694, "name": "宁陕县"}, {"id": 2695, "name": "紫阳县"}, {"id": 2696, "name": "岚皋县"}, {
            "id": 2697,
            "name": "平利县"
        }, {"id": 2698, "name": "镇坪县"}, {"id": 2699, "name": "旬阳县"}, {"id": 2700, "name": "白河县"}],
        "329": [{"id": 2701, "name": "市辖区"}, {"id": 2702, "name": "商州区"}, {"id": 2703, "name": "洛南县"}, {
            "id": 2704,
            "name": "丹凤县"
        }, {"id": 2705, "name": "商南县"}, {"id": 2706, "name": "山阳县"}, {"id": 2707, "name": "镇安县"}, {
            "id": 2708,
            "name": "柞水县"
        }],
        "330": [{"id": 2709, "name": "市辖区"}, {"id": 2710, "name": "兴宁区"}, {"id": 2711, "name": "青秀区"}, {
            "id": 2712,
            "name": "江南区"
        }, {"id": 2713, "name": "西乡塘区"}, {"id": 2714, "name": "良庆区"}, {"id": 2715, "name": "邕宁区"}, {
            "id": 2716,
            "name": "武鸣县"
        }, {"id": 2717, "name": "隆安县"}, {"id": 2718, "name": "马山县"}, {"id": 2719, "name": "上林县"}, {
            "id": 2720,
            "name": "宾阳县"
        }, {"id": 2721, "name": "横　县"}],
        "331": [{"id": 2722, "name": "市辖区"}, {"id": 2723, "name": "城中区"}, {"id": 2724, "name": "鱼峰区"}, {
            "id": 2725,
            "name": "柳南区"
        }, {"id": 2726, "name": "柳北区"}, {"id": 2727, "name": "柳江县"}, {"id": 2728, "name": "柳城县"}, {
            "id": 2729,
            "name": "鹿寨县"
        }, {"id": 2730, "name": "融安县"}, {"id": 2731, "name": "融水苗族自治县"}, {"id": 2732, "name": "三江侗族自治县"}],
        "332": [{"id": 2733, "name": "市辖区"}, {"id": 2734, "name": "秀峰区"}, {"id": 2735, "name": "叠彩区"}, {
            "id": 2736,
            "name": "象山区"
        }, {"id": 2737, "name": "七星区"}, {"id": 2738, "name": "雁山区"}, {"id": 2739, "name": "阳朔县"}, {
            "id": 2740,
            "name": "临桂县"
        }, {"id": 2741, "name": "灵川县"}, {"id": 2742, "name": "全州县"}, {"id": 2743, "name": "兴安县"}, {
            "id": 2744,
            "name": "永福县"
        }, {"id": 2745, "name": "灌阳县"}, {"id": 2746, "name": "龙胜各族自治县"}, {"id": 2747, "name": "资源县"}, {
            "id": 2748,
            "name": "平乐县"
        }, {"id": 2749, "name": "荔蒲县"}, {"id": 2750, "name": "恭城瑶族自治县"}],
        "333": [{"id": 2751, "name": "市辖区"}, {"id": 2752, "name": "万秀区"}, {"id": 2753, "name": "蝶山区"}, {
            "id": 2754,
            "name": "长洲区"
        }, {"id": 2755, "name": "苍梧县"}, {"id": 2756, "name": "藤　县"}, {"id": 2757, "name": "蒙山县"}, {
            "id": 2758,
            "name": "岑溪市"
        }],
        "334": [{"id": 2759, "name": "市辖区"}, {"id": 2760, "name": "海城区"}, {"id": 2761, "name": "银海区"}, {
            "id": 2762,
            "name": "铁山港区"
        }, {"id": 2763, "name": "合浦县"}],
        "335": [{"id": 2764, "name": "市辖区"}, {"id": 2765, "name": "港口区"}, {"id": 2766, "name": "防城区"}, {
            "id": 2767,
            "name": "上思县"
        }, {"id": 2768, "name": "东兴市"}],
        "336": [{"id": 2769, "name": "市辖区"}, {"id": 2770, "name": "钦南区"}, {"id": 2771, "name": "钦北区"}, {
            "id": 2772,
            "name": "灵山县"
        }, {"id": 2773, "name": "浦北县"}],
        "337": [{"id": 2774, "name": "市辖区"}, {"id": 2775, "name": "港北区"}, {"id": 2776, "name": "港南区"}, {
            "id": 2777,
            "name": "覃塘区"
        }, {"id": 2778, "name": "平南县"}, {"id": 2779, "name": "桂平市"}],
        "338": [{"id": 2780, "name": "市辖区"}, {"id": 2781, "name": "玉州区"}, {"id": 2782, "name": "容　县"}, {
            "id": 2783,
            "name": "陆川县"
        }, {"id": 2784, "name": "博白县"}, {"id": 2785, "name": "兴业县"}, {"id": 2786, "name": "北流市"}],
        "339": [{"id": 2787, "name": "市辖区"}, {"id": 2788, "name": "右江区"}, {"id": 2789, "name": "田阳县"}, {
            "id": 2790,
            "name": "田东县"
        }, {"id": 2791, "name": "平果县"}, {"id": 2792, "name": "德保县"}, {"id": 2793, "name": "靖西县"}, {
            "id": 2794,
            "name": "那坡县"
        }, {"id": 2795, "name": "凌云县"}, {"id": 2796, "name": "乐业县"}, {"id": 2797, "name": "田林县"}, {
            "id": 2798,
            "name": "西林县"
        }, {"id": 2799, "name": "隆林各族自治县"}],
        "340": [{"id": 2800, "name": "市辖区"}, {"id": 2801, "name": "八步区"}, {"id": 2802, "name": "昭平县"}, {
            "id": 2803,
            "name": "钟山县"
        }, {"id": 2804, "name": "富川瑶族自治县"}],
        "341": [{"id": 2805, "name": "市辖区"}, {"id": 2806, "name": "金城江区"}, {"id": 2807, "name": "南丹县"}, {
            "id": 2808,
            "name": "天峨县"
        }, {"id": 2809, "name": "凤山县"}, {"id": 2810, "name": "东兰县"}, {"id": 2811, "name": "罗城仫佬族自治县"}, {
            "id": 2812,
            "name": "环江毛南族自治县"
        }, {"id": 2813, "name": "巴马瑶族自治县"}, {"id": 2814, "name": "都安瑶族自治县"}, {
            "id": 2815,
            "name": "大化瑶族自治县"
        }, {"id": 2816, "name": "宜州市"}],
        "342": [{"id": 2817, "name": "市辖区"}, {"id": 2818, "name": "兴宾区"}, {"id": 2819, "name": "忻城县"}, {
            "id": 2820,
            "name": "象州县"
        }, {"id": 2821, "name": "武宣县"}, {"id": 2822, "name": "金秀瑶族自治县"}, {"id": 2823, "name": "合山市"}],
        "343": [{"id": 2824, "name": "市辖区"}, {"id": 2825, "name": "江洲区"}, {"id": 2826, "name": "扶绥县"}, {
            "id": 2827,
            "name": "宁明县"
        }, {"id": 2828, "name": "龙州县"}, {"id": 2829, "name": "大新县"}, {"id": 2830, "name": "天等县"}, {
            "id": 2831,
            "name": "凭祥市"
        }],
        "344": [{"id": 2832, "name": "市辖区"}, {"id": 2833, "name": "城关区"}, {"id": 2834, "name": "林周县"}, {
            "id": 2835,
            "name": "当雄县"
        }, {"id": 2836, "name": "尼木县"}, {"id": 2837, "name": "曲水县"}, {"id": 2838, "name": "堆龙德庆县"}, {
            "id": 2839,
            "name": "达孜县"
        }, {"id": 2840, "name": "墨竹工卡县"}],
        "345": [{"id": 2841, "name": "那曲县"}, {"id": 2842, "name": "嘉黎县"}, {"id": 2843, "name": "比如县"}, {
            "id": 2844,
            "name": "聂荣县"
        }, {"id": 2845, "name": "安多县"}, {"id": 2846, "name": "申扎县"}, {"id": 2847, "name": "索　县"}, {
            "id": 2848,
            "name": "班戈县"
        }, {"id": 2849, "name": "巴青县"}, {"id": 2850, "name": "尼玛县"}],
        "346": [{"id": 2851, "name": "昌都县"}, {"id": 2852, "name": "江达县"}, {"id": 2853, "name": "贡觉县"}, {
            "id": 2854,
            "name": "类乌齐县"
        }, {"id": 2855, "name": "丁青县"}, {"id": 2856, "name": "察雅县"}, {"id": 2857, "name": "八宿县"}, {
            "id": 2858,
            "name": "左贡县"
        }, {"id": 2859, "name": "芒康县"}, {"id": 2860, "name": "洛隆县"}, {"id": 2861, "name": "边坝县"}],
        "347": [{"id": 2862, "name": "乃东县"}, {"id": 2863, "name": "扎囊县"}, {"id": 2864, "name": "贡嘎县"}, {
            "id": 2865,
            "name": "桑日县"
        }, {"id": 2866, "name": "琼结县"}, {"id": 2867, "name": "曲松县"}, {"id": 2868, "name": "措美县"}, {
            "id": 2869,
            "name": "洛扎县"
        }, {"id": 2870, "name": "加查县"}, {"id": 2871, "name": "隆子县"}, {"id": 2872, "name": "错那县"}, {
            "id": 2873,
            "name": "浪卡子县"
        }],
        "348": [{"id": 2874, "name": "日喀则市"}, {"id": 2875, "name": "南木林县"}, {"id": 2876, "name": "江孜县"}, {
            "id": 2877,
            "name": "定日县"
        }, {"id": 2878, "name": "萨迦县"}, {"id": 2879, "name": "拉孜县"}, {"id": 2880, "name": "昂仁县"}, {
            "id": 2881,
            "name": "谢通门县"
        }, {"id": 2882, "name": "白朗县"}, {"id": 2883, "name": "仁布县"}, {"id": 2884, "name": "康马县"}, {
            "id": 2885,
            "name": "定结县"
        }, {"id": 2886, "name": "仲巴县"}, {"id": 2887, "name": "亚东县"}, {"id": 2888, "name": "吉隆县"}, {
            "id": 2889,
            "name": "聂拉木县"
        }, {"id": 2890, "name": "萨嘎县"}, {"id": 2891, "name": "岗巴县"}],
        "349": [{"id": 2892, "name": "普兰县"}, {"id": 2893, "name": "札达县"}, {"id": 2894, "name": "噶尔县"}, {
            "id": 2895,
            "name": "日土县"
        }, {"id": 2896, "name": "革吉县"}, {"id": 2897, "name": "改则县"}, {"id": 2898, "name": "措勤县"}],
        "350": [{"id": 2899, "name": "林芝县"}, {"id": 2900, "name": "工布江达县"}, {"id": 2901, "name": "米林县"}, {
            "id": 2902,
            "name": "墨脱县"
        }, {"id": 2903, "name": "波密县"}, {"id": 2904, "name": "察隅县"}, {"id": 2905, "name": "朗　县"}],
        "351": [{"id": 2906, "name": "市辖区"}, {"id": 2907, "name": "兴庆区"}, {"id": 2908, "name": "西夏区"}, {
            "id": 2909,
            "name": "金凤区"
        }, {"id": 2910, "name": "永宁县"}, {"id": 2911, "name": "贺兰县"}, {"id": 2912, "name": "灵武市"}],
        "352": [{"id": 2913, "name": "市辖区"}, {"id": 2914, "name": "大武口区"}, {"id": 2915, "name": "惠农区"}, {
            "id": 2916,
            "name": "平罗县"
        }],
        "353": [{"id": 2917, "name": "市辖区"}, {"id": 2918, "name": "利通区"}, {"id": 2919, "name": "盐池县"}, {
            "id": 2920,
            "name": "同心县"
        }, {"id": 2921, "name": "青铜峡市"}],
        "354": [{"id": 2922, "name": "市辖区"}, {"id": 2923, "name": "原州区"}, {"id": 2924, "name": "西吉县"}, {
            "id": 2925,
            "name": "隆德县"
        }, {"id": 2926, "name": "泾源县"}, {"id": 2927, "name": "彭阳县"}, {"id": 2928, "name": "海原县"}],
        "355": [{"id": 2929, "name": "市辖区"}, {"id": 2930, "name": "沙坡头区"}, {"id": 2931, "name": "中宁县"}],
        "356": [{"id": 2932, "name": "市辖区"}, {"id": 2933, "name": "天山区"}, {"id": 2934, "name": "沙依巴克区"}, {
            "id": 2935,
            "name": "新市区"
        }, {"id": 2936, "name": "水磨沟区"}, {"id": 2937, "name": "头屯河区"}, {"id": 2938, "name": "达坂城区"}, {
            "id": 2939,
            "name": "东山区"
        }, {"id": 2940, "name": "乌鲁木齐县"}],
        "357": [{"id": 2941, "name": "市辖区"}, {"id": 2942, "name": "独山子区"}, {"id": 2943, "name": "克拉玛依区"}, {
            "id": 2944,
            "name": "白碱滩区"
        }, {"id": 2945, "name": "乌尔禾区"}],
        "362": [{"id": 2946, "name": "吐鲁番市"}, {"id": 2947, "name": "鄯善县"}, {"id": 2948, "name": "托克逊县"}],
        "363": [{"id": 2949, "name": "阿克苏市"}, {"id": 2950, "name": "温宿县"}, {"id": 2951, "name": "库车县"}, {
            "id": 2952,
            "name": "沙雅县"
        }, {"id": 2953, "name": "新和县"}, {"id": 2954, "name": "拜城县"}, {"id": 2955, "name": "乌什县"}, {
            "id": 2956,
            "name": "阿瓦提县"
        }, {"id": 2957, "name": "柯坪县"}],
        "364": [{"id": 2958, "name": "莎车县"}, {"id": 2959, "name": "叶城县"}, {"id": 2960, "name": "麦盖提县"}, {
            "id": 2961,
            "name": "岳普湖县"
        }, {"id": 2962, "name": "伽师县"}, {"id": 2963, "name": "巴楚县"}, {"id": 2964, "name": "塔什库尔干塔吉克自治县"}, {
            "id": 2965,
            "name": "泽普县"
        }, {"id": 2966, "name": "疏勒县"}, {"id": 2967, "name": "疏附县"}, {"id": 2968, "name": "喀什市"}, {
            "id": 2969,
            "name": "英吉沙县"
        }],
        "365": [{"id": 2970, "name": "哈密市"}, {"id": 2971, "name": "巴里坤哈萨克自治县"}, {"id": 2972, "name": "伊吾县"}],
        "366": [{"id": 2973, "name": "洛浦县"}, {"id": 2974, "name": "皮山县"}, {"id": 2975, "name": "民丰县"}, {
            "id": 2976,
            "name": "于田县"
        }, {"id": 2977, "name": "策勒县"}, {"id": 2978, "name": "墨玉县"}, {"id": 2979, "name": "和田县"}, {
            "id": 2980,
            "name": "和田市"
        }],
        "367": [{"id": 2981, "name": "阿图什市"}, {"id": 2982, "name": "阿合奇县"}, {"id": 2983, "name": "乌恰县"}, {
            "id": 2984,
            "name": "阿克陶县"
        }],
        "368": [{"id": 2985, "name": "库尔勒市"}, {"id": 2986, "name": "轮台县"}, {"id": 2987, "name": "尉犁县"}, {
            "id": 2988,
            "name": "若羌县"
        }, {"id": 2989, "name": "且末县"}, {"id": 2990, "name": "焉耆回族自治县"}, {"id": 2991, "name": "和静县"}, {
            "id": 2992,
            "name": "和硕县"
        }, {"id": 2993, "name": "博湖县"}],
        "369": [{"id": 2994, "name": "昌吉市"}, {"id": 2995, "name": "阜康市"}, {"id": 2996, "name": "米泉市"}, {
            "id": 2997,
            "name": "呼图壁县"
        }, {"id": 2998, "name": "玛纳斯县"}, {"id": 2999, "name": "奇台县"}, {"id": 3000, "name": "吉木萨尔县"}, {
            "id": 3001,
            "name": "木垒哈萨克自治县"
        }],
        "372": [{"id": 3002, "name": "博乐市"}, {"id": 3003, "name": "精河县"}, {"id": 3004, "name": "温泉县"}],
        "373": [{"id": 3005, "name": "尼勒克县"}, {"id": 3006, "name": "特克斯县"}, {"id": 3007, "name": "昭苏县"}, {
            "id": 3008,
            "name": "新源县"
        }, {"id": 3009, "name": "巩留县"}, {"id": 3010, "name": "霍城县"}, {"id": 3011, "name": "察布查尔锡伯自治县"}, {
            "id": 3012,
            "name": "伊宁县"
        }, {"id": 3013, "name": "奎屯市"}, {"id": 3014, "name": "伊宁市"}],
        "375": [{"id": 3015, "name": "和布克赛尔蒙古自治县"}, {"id": 3016, "name": "裕民县"}, {
            "id": 3017,
            "name": "托里县"
        }, {"id": 3018, "name": "沙湾县"}, {"id": 3019, "name": "额敏县"}, {"id": 3020, "name": "乌苏市"}, {
            "id": 3021,
            "name": "塔城市"
        }],
        "377": [{"id": 3022, "name": "青河县"}, {"id": 3023, "name": "哈巴河县"}, {"id": 3024, "name": "福海县"}, {
            "id": 3025,
            "name": "富蕴县"
        }, {"id": 3026, "name": "布尔津县"}, {"id": 3027, "name": "阿勒泰市"}, {"id": 3028, "name": "吉木乃县"}],
        "378": [{"id": 3029, "name": "市辖区"}, {"id": 3030, "name": "新城区"}, {"id": 3031, "name": "回民区"}, {
            "id": 3032,
            "name": "玉泉区"
        }, {"id": 3033, "name": "赛罕区"}, {"id": 3034, "name": "土默特左旗"}, {"id": 3035, "name": "托克托县"}, {
            "id": 3036,
            "name": "和林格尔县"
        }, {"id": 3037, "name": "清水河县"}, {"id": 3038, "name": "武川县"}],
        "379": [{"id": 3039, "name": "市辖区"}, {"id": 3040, "name": "东河区"}, {"id": 3041, "name": "昆都仑区"}, {
            "id": 3042,
            "name": "青山区"
        }, {"id": 3043, "name": "石拐区"}, {"id": 3044, "name": "白云矿区"}, {"id": 3045, "name": "九原区"}, {
            "id": 3046,
            "name": "土默特右旗"
        }, {"id": 3047, "name": "固阳县"}, {"id": 3048, "name": "达尔罕茂明安联合旗"}],
        "380": [{"id": 3049, "name": "市辖区"}, {"id": 3050, "name": "海勃湾区"}, {"id": 3051, "name": "海南区"}, {
            "id": 3052,
            "name": "乌达区"
        }],
        "381": [{"id": 3053, "name": "市辖区"}, {"id": 3054, "name": "红山区"}, {"id": 3055, "name": "元宝山区"}, {
            "id": 3056,
            "name": "松山区"
        }, {"id": 3057, "name": "阿鲁科尔沁旗"}, {"id": 3058, "name": "巴林左旗"}, {"id": 3059, "name": "巴林右旗"}, {
            "id": 3060,
            "name": "林西县"
        }, {"id": 3061, "name": "克什克腾旗"}, {"id": 3062, "name": "翁牛特旗"}, {"id": 3063, "name": "喀喇沁旗"}, {
            "id": 3064,
            "name": "宁城县"
        }, {"id": 3065, "name": "敖汉旗"}],
        "382": [{"id": 3066, "name": "市辖区"}, {"id": 3067, "name": "科尔沁区"}, {"id": 3068, "name": "科尔沁左翼中旗"}, {
            "id": 3069,
            "name": "科尔沁左翼后旗"
        }, {"id": 3070, "name": "开鲁县"}, {"id": 3071, "name": "库伦旗"}, {"id": 3072, "name": "奈曼旗"}, {
            "id": 3073,
            "name": "扎鲁特旗"
        }, {"id": 3074, "name": "霍林郭勒市"}],
        "383": [{"id": 3075, "name": "东胜区"}, {"id": 3076, "name": "达拉特旗"}, {"id": 3077, "name": "准格尔旗"}, {
            "id": 3078,
            "name": "鄂托克前旗"
        }, {"id": 3079, "name": "鄂托克旗"}, {"id": 3080, "name": "杭锦旗"}, {"id": 3081, "name": "乌审旗"}, {
            "id": 3082,
            "name": "伊金霍洛旗"
        }],
        "384": [{"id": 3083, "name": "市辖区"}, {"id": 3084, "name": "海拉尔区"}, {"id": 3085, "name": "阿荣旗"}, {
            "id": 3086,
            "name": "莫力达瓦达斡尔族自治旗"
        }, {"id": 3087, "name": "鄂伦春自治旗"}, {"id": 3088, "name": "鄂温克族自治旗"}, {"id": 3089, "name": "陈巴尔虎旗"}, {
            "id": 3090,
            "name": "新巴尔虎左旗"
        }, {"id": 3091, "name": "新巴尔虎右旗"}, {"id": 3092, "name": "满洲里市"}, {"id": 3093, "name": "牙克石市"}, {
            "id": 3094,
            "name": "扎兰屯市"
        }, {"id": 3095, "name": "额尔古纳市"}, {"id": 3096, "name": "根河市"}],
        "385": [{"id": 3097, "name": "市辖区"}, {"id": 3098, "name": "临河区"}, {"id": 3099, "name": "五原县"}, {
            "id": 3100,
            "name": "磴口县"
        }, {"id": 3101, "name": "乌拉特前旗"}, {"id": 3102, "name": "乌拉特中旗"}, {"id": 3103, "name": "乌拉特后旗"}, {
            "id": 3104,
            "name": "杭锦后旗"
        }],
        "386": [{"id": 3105, "name": "市辖区"}, {"id": 3106, "name": "集宁区"}, {"id": 3107, "name": "卓资县"}, {
            "id": 3108,
            "name": "化德县"
        }, {"id": 3109, "name": "商都县"}, {"id": 3110, "name": "兴和县"}, {"id": 3111, "name": "凉城县"}, {
            "id": 3112,
            "name": "察哈尔右翼前旗"
        }, {"id": 3113, "name": "察哈尔右翼中旗"}, {"id": 3114, "name": "察哈尔右翼后旗"}, {"id": 3115, "name": "四子王旗"}, {
            "id": 3116,
            "name": "丰镇市"
        }],
        "387": [{"id": 3117, "name": "二连浩特市"}, {"id": 3118, "name": "锡林浩特市"}, {"id": 3119, "name": "阿巴嘎旗"}, {
            "id": 3120,
            "name": "苏尼特左旗"
        }, {"id": 3121, "name": "苏尼特右旗"}, {"id": 3122, "name": "东乌珠穆沁旗"}, {"id": 3123, "name": "西乌珠穆沁旗"}, {
            "id": 3124,
            "name": "太仆寺旗"
        }, {"id": 3125, "name": "镶黄旗"}, {"id": 3126, "name": "正镶白旗"}, {"id": 3127, "name": "正蓝旗"}, {
            "id": 3128,
            "name": "多伦县"
        }],
        "388": [{"id": 3129, "name": "乌兰浩特市"}, {"id": 3130, "name": "阿尔山市"}, {
            "id": 3131,
            "name": "科尔沁右翼前旗"
        }, {"id": 3132, "name": "科尔沁右翼中旗"}, {"id": 3133, "name": "扎赉特旗"}, {"id": 3134, "name": "突泉县"}],
        "389": [{"id": 3135, "name": "阿拉善左旗"}, {"id": 3136, "name": "阿拉善右旗"}, {"id": 3137, "name": "额济纳旗"}]
    };

    function getCities(provinceId) {
        return AREA.city.filter(function (e) {
            return e.provinceId == provinceId;
        });
    }

    // area=area.map(function (e) {
    //     var city = AREA.city.find(function (c) {
    //         return c.id == e.city_id;
    //     });
    //     return {
    //         id: e.area_id,
    //         name: e.name,
    //         cityId: e.city_id,
    //         cityName: city.name,
    //         provinceName: city.provinceName,
    //         provinceId: city.provinceId
    //     };
    // });

    // area.forEach(function (e) {
    //     var city = AREA.city.find(function (c) {
    //         return c.id == e.cityId;
    //     });
    //     if (!areaGroup[e.cityId]) {
    //         areaGroup[e.cityId] = [];
    //     }
    //     areaGroup[e.cityId].push({id: e.id, name: e.name});
    // });

    return {
        provinceKV: provinceKV,
        province: province,
        cityKV: cityKV,
        city: city,
        cityGroup: cityGroup,
        areaKV: areaKV,
        areaGroup: areaGroup,
        currentCity: currentCity,
        getCities: getCities
    };
}();