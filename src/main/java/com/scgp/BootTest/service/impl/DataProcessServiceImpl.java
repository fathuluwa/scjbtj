package com.scgp.BootTest.service.impl;

import com.scgp.BootTest.service.DataProcessService;
import com.scgp.jbtj.JBTJProcess;
import com.scgp.jbtj.Untils.TextUntils;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.service.impl
 * @ClassName: DataProcessServiceImpl
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/29 10:54
 * @Version: 1.0
 */
@Service
public class DataProcessServiceImpl implements DataProcessService {
    @Autowired
    JBTJProcess jbtjProcessBean;
    @Autowired
    Logger LoggerBean;
    @Override
    public String Bouax8Cut(String areaCode) throws Exception {
        String SuccessAreaCode="";
        if(TextUntils.checkAdminCode(areaCode)){
            String LcraLayerName="v_lcra"+areaCode;
            try{
                jbtjProcessBean.Boua8Cut(LcraLayerName,"v_boua8",areaCode);
                SuccessAreaCode=areaCode;
            }
            catch (Exception ex){
                LoggerBean.error(ex.getMessage());
            }
        }
        else {
            throw new Exception("行政区域代码格式错误");
        }
        return SuccessAreaCode;
    }

    @Override
    public String CalArea(String layerName) {
        String finishedLayerName="";
        try{
            jbtjProcessBean.CalArea(layerName);
            finishedLayerName="area"+layerName;
        }
        catch(Exception ex){
            LoggerBean.error(ex.getMessage());
        }
        return finishedLayerName;
    }

}
