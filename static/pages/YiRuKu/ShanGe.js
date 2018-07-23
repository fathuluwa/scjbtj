/**
* @author 
* @version 1.0
*/
$(document).ready(function () {
    index.init();
});


var index = {

    // -----公有字段（小驼峰）-----
    _dataTableId: "shangeTable", // 表格id
    _rowNum: "rowNum", // 行号字段
    _rowToolbar: "rowToolbar", // 行内工具条
    _prjId: null,
    // -----私有字段（下划线开头 + 小驼峰）-----
    // 暂无
    // -----override或自动调用方法-----
    // 初始化方法
    init: function () {
        var me = this;
        // 获取表格数据
        me._requireTableData();
    },

    // 获取表格数据
    _requireTableData: function () {
        var me = this;
        var requestUrl = window.parent.config.ProxyUrl + window.parent.config.serviceUrl + "viewinfo/rastLayerInfo";
        $.get(requestUrl, function (data, textStatus) {
            if (textStatus == "success") {
                var res = data;

                var columns = [
                    {
                        data: "layerName",
                        title: "图层名称"
                    },
                    {
                        data: "layerType",
                        title: "图层类型"
                    },
                    {
                        data: "gridCode",
                        title: "栅格编号"
                    }];// 列


                var dataSet = me._getDataSet(res); // 数据集
                var height = 100; // 高度

                // 创建表格
                me._createDataTables(columns, dataSet, height);
            }
        });

    },

    // 创建表格
    _createDataTables: function (columns, dataSet, height) {
        var me = this;

        // 设置默认值
        columns = columns || [];
        dataSet = dataSet || [];
        height = height || 300;
        if ($.fn.dataTable.isDataTable('#' + me._dataTableId)) {
            me._dataTables.destroy();
        }
        // 创建表格
        var dataTables = me._dataTables = $('#' + me._dataTableId).DataTable({
            paging: false,
            serverSide: false,
            ordering: false,
            dom: '<"toolbar">frtip',
            scrollY: "100%",
            language: {
                url: "../../lib/dataTables/plug-ins/i18n/Chinese.txt"
            },
            columns: columns,
            data: dataSet,

            // 初始化完成
            initComplete: function (settings, json) {

                // 创建工具条
                var toolbarObj = $(settings.nTableWrapper).find(".toolbar");
                me._createToolbar(toolbarObj);

                // 隐藏过滤文本框
                dataTablesUtil.hideFilterTextBox(dataTables);
            },

            // 行回调
            rowCallback: function (row, data, index) {
                var td = $('td:last', row);
                if (!td.data("buttons-created")) {
                    td.data("buttons-created", true);
                }
            }
        });

        // 表格对象
        me._dataTable = $('#' + me._dataTableId).dataTable();
    },


    // 获取数据集
    _getDataSet: function (res) {
        var me = this;
        var dataSet = [];

        for (var i = 0; i < res.length; i++) {
            var row = {};
            row["layerType"] = "";
            row["gridCode"] = "";
            row["layerName"] = res[i];
            dataSet.push(row);
        }

        return dataSet;
    },

    // 创建工具条
    _createToolbar: function (parentObj) {
        var me = this;

        dataTablesUtil.createIconBtn({
            iconClass: "icon iconfont icon-filter",
            title: "过滤",
            onClickFn: $.proxy(me._onFilter, me)
        }, parentObj);

    },

    // 过滤
    _onFilter: function () {
        var me = this;
        var dataTables = me._dataTables;

        // 切换过滤文本框
        dataTablesUtil.toggleFilterTextBox(dataTables);
    }

};