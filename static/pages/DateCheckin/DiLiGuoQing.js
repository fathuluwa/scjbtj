/**
* @author 王云
* @version 1.0
* @copyright 
*/

$(document).ready(function () {
    index.init();
});

var index = {
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
        //上传管线数据按钮事件
        $("#uploadDataBtn").click(function () {
            me._applayDate();
        });

    },

    //加载待入库数据列表
    _loadDaiRuKu: function () {
        var me = this;

        $.ajax({
            type: "get",
            url: window.parent.config.ProxyUrl + window.parent.config.serviceUrl + "viewinfo/gdbFileList",
            success: function (data) {
                var res = data;
                var table = $("#checkboxList");
                table.empty();
                for (var i = 0; i < res.length; i++) {
                    var no = i + 1;
                    str = "<div class='checkbox checkbox-success'><input name='dataname' type='checkbox' id='checkbox" + no + "' ><label for='checkbox" + no + "' >" + res[i] + "</label></div>";
                    var tr = $(str);
                    table.append(tr);
                }
            }
        })

    },


    // 提交导入数据
    _applayDate: function () {
        var me = this;
        var socket = new SockJS('/gs-guide-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/topic/importer', function (result) {
                var strli = "<li>数据:" + JSON.parse(result.body).gdbName + "   图层名称:" + JSON.parse(result.body).layerName + "   导入结果：" + JSON.parse(result.body).stauts + getFormatDate.getNewDate() +"</li>";
                $("#resultlist ul").prepend(strli);
            });
        });

        var chk = "{\"fileName\": [";
        $("input[name='dataname']:checked").each(function () {
            chk += "\"" + $(this).next().text() + "\",";
        });
        chk = chk.substring(0, chk.length - 1);
        chk += "]}";

        var jsonstr = JSON.parse(chk);
        $.ajax({
            type: "POST",
            url: window.parent.config.serviceUrl + "import/vector",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(jsonstr),
            success: function (data) {
                toastr.success('已成功提交申请，请上传相关附件', '');
            }
        });
    },
    

};