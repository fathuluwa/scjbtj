function addLog(prjId,content) {
    var Obj = {
        Prj_id: prjId,
        Operate_id: eval('(' + $.cookie("USER_INFO") + ')').USERID,
        Operate_content: content
    };
    var jsonStr = JSON.stringify(Obj);
    var requestUrl = window.parent.config.ProxyUrl + window.parent.config.serviceUrl + "logService/AddNewLog?f=json";
    
    $.post(requestUrl, jsonStr, function (data, textStatus) {
        if (textStatus == "success") {
            console.log('已成功提交数据', '');            
        }
    });
    

}