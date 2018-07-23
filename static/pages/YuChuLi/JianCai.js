/**
* @author 王云
* @version 1.0
* @copyright 
*/
$(document).ready(function () {
    index.init();
});

var index = {

    // -----公有字段（小驼峰）-----
    
    // -----私有字段（下划线开头 + 小驼峰）-----
    // 暂无
    // -----override或自动调用方法-----
    // 初始化方法
    init: function () {
        var me = this;
        // 绑定
        me._bindEvents();
    },

    // 绑定
    _bindEvents: function () {
        var me = this;
        me._loadDaiRuKu();
        me._loadYiRuKu();
        //上传管线数据按钮事件
        $("#uploadDataBtn").click(function () {
            me._applayDate();
        });

    },

    //加载待入库数据列表 
    _loadDaiRuKu: function () {
        var me = this;

        //城市中心
        var requestUrl = window.parent.config.serviceUrl + "viewinfo/boua8CutableCode";
        $.get(requestUrl, function (data, textStatus) {
            if (textStatus == "success") {
                var res = data;
                var table = $("#checkboxList");
                table.empty();
                for (var i = 0; i < res.length; i++) {
                    var no = parseInt(i) + 1;

                    var xxx = window.parent.ConfigData.region.find((value, index, arr) => {
                        return value.code == res[i];
                    }).name;

                    str = "<div class='checkbox checkbox-success'><input onclick='_checkChange(this,\"" + xxx + "\")' name='dataname' type='checkbox' id='checkbox" + no + "' ><label for='checkbox" + no + "' >" + xxx + "</label></div>";
                    var tr = $(str);
                    table.append(tr);
                }
            }
        });
    },

    //加载已入库数据列表
    _loadYiRuKu: function () {
        var me = this;

        //城市中心
        var requestUrl = window.parent.config.ProxyUrl + window.parent.config.serviceUrl + "viewinfo/boua8CutedCode";
        $.get(requestUrl, function (data, textStatus) {
            if (textStatus == "success") {
                var res = data;
                for (var i = 0; i < res.length; i++) {
                    var xxx = window.parent.ConfigData.region.find((value, index, arr) => {
                        return value.code == res[i];
                    }).name;

                    var strli = "<li class=\"list-group-item\">" + xxx + "</li>";
                    $("#YiJianCaiList1 ul").append(strli);
                }
            }
        });
    },

    // 提交导入数据
    _applayDate: function () {
        var me = this;
        var selDataAll = [];//包括已覆盖的数据
        var selDataOut = [];//剔除已覆盖的数据
        $("input[name='dataname']:checked").each(function () {
            selDataAll.push($(this).next().text());
            selDataOut.push($(this).next().text());
        });
        

        var tixing = "";
        for (var x in $('#tab1 .list-group-item')) {
            if ($('#tab1 .list-group-item').eq(x).css("background-color") == "#1ab394" || $('#tab1 .list-group-item').eq(x).css("background-color") == "rgb(26, 179, 148)") {
                tixing += $('#tab1 .list-group-item')[x].innerHTML + ",";

                selDataOut = $.grep(selDataOut, function (value) {
                    return value != $('#tab1 .list-group-item')[x].innerHTML;
                });
            }
        }
        

        if (tixing != "") {
            var popup = new Popup({
                'type': 'submit',
                'title': '提示',
                'text': tixing + '已完成剪裁，是否覆盖',
                'cancelbutton': true,
                'submitvalue': '是',
                'submitcolor': '#f5f5f5',
                'submitbgcolor': '#1ab394',
                'submitbordercolor': '#007fbe',
                'cancelvalue': '否',
                'cancelcolor': '#1ab394',
                'cancelbgcolor': '#fff',
                'cancelbordercolor': '#1ab394',
                'closeCallBack': function () {//不覆盖
                    me._submitJianCai(selDataOut);
                },
                'submitCallBack': function () {//覆盖
                    me._submitJianCai(selDataAll);
                }
            });
        }


    },

    _submitJianCai: function (data) {
        var me = this;
        //var socket = new SockJS('/gs-guide-websocket');
        //stompClient = Stomp.over(socket);
        //stompClient.connect({}, function (frame) {
        //    //var data = new Data();
        //    stompClient.subscribe('/topic/importer', function (result) {
        //        var strli = "<li>数据:" + JSON.parse(result.body).gdbName + "   图层名称:" + JSON.parse(result.body).layerName + "   导入结果：" + JSON.parse(result.body).stauts + getFormatDate.getNewDate() + "</li>";
        //        $("#resultlist ul").append(strli);
        //    });
        //});

        for (var i = 0; i < data.length;i++) {
            //将地区名称转换成地区编码
            var xxx = window.parent.ConfigData.region.find((value, index, arr) => {
                return value.name == data[i];
            }).code;
            
            var url = window.parent.config.ProxyUrl + window.parent.config.serviceUrl + "process/boua8CutLca/" + xxx;
            $.get(url, function (data, textStatus) {
                if (textStatus == "success") {
                    debugger;
                    var res = JSON.parse(data);
                    
                }
            });
        }
        
        
    },


};