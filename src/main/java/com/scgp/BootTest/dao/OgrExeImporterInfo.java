package com.scgp.BootTest.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.dao
 * @ClassName: OgrExeImporterInfo
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/26 16:00
 * @Version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OgrExeImporterInfo {
    private String ogrPath;
    private String dataPath;
    private String url1;
    private String port;
    private String defaultdbName;
    private String user;
    private String pwd;
    private String[] Layers;
}


