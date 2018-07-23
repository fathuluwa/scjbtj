package com.scgp.BootTest.service.impl;

import com.scgp.BootTest.dao.ImporterInfo;
import com.scgp.BootTest.dao.InputFileInfo;
import com.scgp.BootTest.dao.OgrExeImporterInfo;
import com.scgp.BootTest.dao.VectorFileInfo;
import com.scgp.BootTest.service.DataImportService;
import com.scgp.jbtj.GeoDataImportIntoPG;
import com.scgp.jbtj.Untils.TextUntils;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.regex.*;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.service.impl
 * @ClassName: DataImportServiceImpl
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/26 15:49
 * @Version: 1.0
 */
@Service
public class DataImportServiceImpl implements DataImportService {
    @Autowired
    private OgrExeImporterInfo ogrInfoBean;

    @Override
    public ImporterInfo VectorFileImporter(String fileName,String layerName) {
        VectorFileInfo fileInfo=new VectorFileInfo();
        String[] SplittedName=fileName.split("\\.");
        String txt=SplittedName[0];
        //http://www.txt2re.com/正则表达式生成
        String re1=".*?";	// Non-greedy match on filler
        String re2="\\d+";	// Uninteresting: int
        String re3=".*?";	// Non-greedy match on filler
        String re4="(\\d+)";	// Integer Number 1
        Pattern p = Pattern.compile(re1+re2+re3+re4,Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
        Matcher m = p.matcher(txt);
        String adminCode="";
        if (m.find()){
            String int1=m.group(1);
            adminCode=int1;
        }
        String importLayerName=layerName+adminCode;
        String result="";
        ImporterInfo importerInfo= new ImporterInfo();
        try {
            GeoDataImportIntoPG geoDataImportIntoPG=new GeoDataImportIntoPG(ogrInfoBean.getOgrPath(),ogrInfoBean.getDataPath(),ogrInfoBean.getUrl1(),ogrInfoBean.getPort(),ogrInfoBean.getDefaultdbName(),ogrInfoBean.getUser(),ogrInfoBean.getPwd());
            geoDataImportIntoPG.ImportVectorData(fileName,layerName,importLayerName);
            result =  geoDataImportIntoPG.CloseProcess();
            importerInfo.setGdbName(fileName);
            importerInfo.setLayerName(layerName);
            if(TextUntils.isErrorMessage(result)){
                importerInfo.setStauts("Error:"+result);
            }
            else{
                importerInfo.setStauts("Success");
            }
        }
        catch (Exception ex){
            System.out.println(result);
            System.out.println(ex.getMessage());
        }
        return importerInfo;
    }

}
