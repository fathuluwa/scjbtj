package com.scgp.BootTest.service;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.service
 * @ClassName: DataProcessService
 * @Description: 基本统计分析各类操作，数据剪裁，面积操作等
 * @Author: Bush
 * @CreateDate: 2018/6/29 10:51
 * @Version: 1.0
 */
public interface DataProcessService {
    String Bouax8Cut(String areaCode) throws Exception;
    String CalArea(String layerName);
}


