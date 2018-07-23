// 字符串格式化
String.prototype.format = function () {
    var result = this;
    if (arguments.length == 0)
        return null;
    for (var i = 0; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i) + '\\}', 'gm');
        result = result.replace(re, arguments[i]);
    }
    return result;
};

// dataTables表格工具
var dataTablesUtil = {

    // 创建图标按钮
    /*
        btnInfo:{
            iconClass: String, // 图标
            title: String, // 标题
            onClickFn: function // 单击函数
        },
        parentObj: $, // 按钮放置容器
        data: Object // 传递的数据，单击后返回该数据。可选
    */
    createIconBtn: function (btnInfo, parentObj, data) {
        var me = this;
        
        $('<a href="javascript:;" title="{1}"><button class="btn btn-primary btn-xs" type="">{1}</button> </a>'.format(btnInfo.iconClass, btnInfo.title)).click(function () {
            btnInfo.onClickFn && btnInfo.onClickFn(data);
        }).appendTo(parentObj);
    },

    // 切换过滤文本框
    toggleFilterTextBox: function (dataTables) {
        var me = this;

        dataTables.isFilterTextBoxVisible ? me.hideFilterTextBox(dataTables) : me.showFilterTextBox(dataTables);
    },

    // 显示过滤文本框
    showFilterTextBox: function (dataTables) {
        var me = this;

        $(dataTables.toJQuery().context[0].nTableWrapper).find('.dataTables_filter').show();
        dataTables.isFilterTextBoxVisible = true;
    },

    // 隐藏过滤文本框
    hideFilterTextBox: function (dataTables) {
        var me = this;

        $(dataTables.toJQuery().context[0].nTableWrapper).find('.dataTables_filter').hide();
        dataTables.isFilterTextBoxVisible = false;
    },

    // 清空过滤文本框（清空过滤条件并触发事件）
    clearFilterTextBox: function (dataTables) {
        var me = this;

        $(dataTables.toJQuery().context[0].nTableWrapper).find('.dataTables_filter input[type="search"]').val("").trigger('search.DT');
    }
};

//获取当前时间-格式：yyyy-MM-dd HH:mm:SS string类型
var getFormatDate = {
    getNewDate: function () {
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
        var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
        var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    },

};