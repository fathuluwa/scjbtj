package com.scgp.BootTest.service.impl;

import com.scgp.BootTest.dao.OgrExeImporterInfo;
import com.scgp.BootTest.service.MetaDataQueryService;
import com.scgp.jbtj.JBTJProcess;
import com.scgp.jbtj.Untils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.service.impl
 * @ClassName: JBTJServiceImpl
 * @Description: 元数据服务
 * @Author: Bush
 * @CreateDate: 2018/6/26 11:36
 * @Version: 1.0
 */
@Service
public class MetaDataQueryServiceImpl implements MetaDataQueryService {
    @Autowired
    private dbUntils dbUntilsBean;
    @Autowired
    OgrExeImporterInfo ogrInfoBean;
    @Autowired
    JBTJProcess jbtjProcessBean;
    @Override
    public String[] getVectorLayers() throws SQLException {
        return this.dbUntilsBean.getGeoLayers("AreaTest","geom");
    }

    @Override
    public String[] getRasterLayers() throws SQLException {
        return this.dbUntilsBean.getGeoLayers("AreaTest","rast");
    }

    @Override
    public String[] getGDBFiles() {
        File file=new File(this.ogrInfoBean.getDataPath());
        File[] files=file.listFiles();
        ArrayList<String> fileNameList=new ArrayList<>();
        for(int i=0;i<files.length;i++){
            File singleFile = files[i];
            fileNameList.add(singleFile.getName());
        }
        String[] fileNames=fileNameList.toArray(new String[fileNameList.size()]);
        return fileNames;
    }

    @Override
    public String[] getBoua8CutAdminCodes() throws SQLException {
        return this.jbtjProcessBean.getBoua8CutAdminCodes();
    }

    @Override
    public String[] getBoua8CutedAdminCodes() throws SQLException {
        return this.jbtjProcessBean.getBoua8CutedAdminCode();
    }
}
