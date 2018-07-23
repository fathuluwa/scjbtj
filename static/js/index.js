$(document).ready(function () {
    index.init();
});

var index = {
    _item: [],
    // 初始化
    init: function () {
        var me = this;

        me._createMenu();
        me._createScroll();
    },

    // 创建菜单
    _createMenu: function (items) {
        
        var items = [
            {
                iconClass: "fa fa-home",
                text: "数据库中数据",
                children: [{
                    text: "栅格",
                    href: "pages/YiRuKu/ShanGe.html"
                },
                    {
                        text: "矢量",
                        href: "pages/YiRuKu/ShiLiang.html"
                    }]
            },
            {
                iconClass: "fa fa-home",
                text: "数据入库",
                children: [{
                    text: "基础国情数据入库",
                    href: "pages/DateCheckin/DiLiGuoQing.html"
                }]
        },{
            iconClass: "fa fa-home",
            text: "数据预处理",
            children: [{
                text: "数据剪裁",
                href: "pages/YuChuLi/JianCai.html"
            }, {
                text: "图斑面积计算",
                href: "pages/xgghxk/444.html"
            }]
        },{
            iconClass: "fa fa-home",
            text: "基本统计计算",
            children: [{
                text: "基本统计计算",
                href: "pages/projectApprove/555.html"
            }]
        },{
            iconClass: "fa fa-home",
            text: "报表生成",
            children: [{
                text: "报表生成",
                href: "pages/projectApprove/666.html"
            }]
        }];

        // 创建UI
        var list = [];
        $.each(items, function (i, item) {
            if ($.isArray(item.children) && item.children.length > 0) {
                var li = $("<li></li>").appendTo("#side-menu");
                li.append('<a href="#"><i class="{0}"></i><span class="nav-label">{1}</span><span class="fa arrow"></span></a><ul class="nav nav-second-level"></ul>'
                    .format(item.iconClass, item.text));
                $.each(item.children, function (j, childItem) {
                    // 判断是否隐藏                    
                    if (config.hiddenTabName.indexOf(childItem.text)!=-1) {
                        $('<li><a class="J_menuItem" href="{0}" style="display: none;">{1}</a></li>'.format(childItem.href, childItem.text)).appendTo(li.find('> ul'));

                    }
                    else {
                        $('<li><a class="J_menuItem" href="{0}">{1}</a></li>'.format(childItem.href, childItem.text)).appendTo(li.find('> ul'));
                    }
                });
                list.push(li);
            }
        });
        list.length > 0 && list[0].addClass("active");

        // 初始化菜单
        $("#side-menu").metisMenu();

        // 初始化Tab
        initConTabs();

        // 默认单击第一个菜单
        $("#side-menu > li:not(:first) .J_menuItem:first").trigger("click");
    },

    // 创建滚动条
    _createScroll: function () {
        $(".sidebar-collapse").slimScroll({
            height: "100%",
            railOpacity: .9,
            alwaysVisible: false
        });
    }

};