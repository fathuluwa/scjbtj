package com.scgp.BootTest.service;

import org.springframework.stereotype.Service;

import java.sql.SQLException;

/**
 * @ProjectName: BootTest
 * @Package: com.scgp.BootTest.service
 * @ClassName: JBTJService
 * @Description: 实现CalEngine中数据操作功能的服务发布
 * @Author: Bush
 * @CreateDate: 2018/6/26 11:29
 * @Version: 1.0
 */

public interface MetaDataQueryService {
    //获取数据库中矢量图层信息
    String[] getVectorLayers() throws SQLException;
    //获取数据库中矢量图层信息
    String[] getRasterLayers() throws SQLException;
    //获取入库指定目录下文件列表
    String[] getGDBFiles();
    //获取数据库中可进行城市中心剪裁的行政区域代码
    String[] getBoua8CutAdminCodes() throws SQLException;
    //获取数据库中已完成中心城区剪裁区域的代码
    String[] getBoua8CutedAdminCodes() throws SQLException;
}
