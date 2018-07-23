package com.scgp.BootTest.service;

import com.scgp.BootTest.dao.ImporterInfo;
import com.scgp.BootTest.dao.InputFileInfo;
import com.scgp.BootTest.dao.VectorFileInfo;

import java.io.IOException;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.service
 * @ClassName: DataImportService
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/26 15:48
 * @Version: 1.0
 */
public interface DataImportService {
    ImporterInfo VectorFileImporter(String fileName, String layerName);
    //no change?
    //some change
    //some change
}
