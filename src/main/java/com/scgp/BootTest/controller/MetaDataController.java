package com.scgp.BootTest.controller;


import com.scgp.BootTest.service.MetaDataQueryService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @ProjectName: BootTest
 * @Package: com.scgp.BootTest.controller
 * @ClassName: dbMetaDataController
 * @Description: 获取数据库中图层信息等数据
 * @Author: Bush
 * @CreateDate: 2018/6/26 14:32
 * @Version: 1.0
 */
@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/viewinfo/")
@Api("查询数据库图层及数据目录文件信息")
public class MetaDataController {
    //注入基本服务
    @Autowired
    MetaDataQueryService metaDataQueryService;

    @ApiOperation("获取数据库中矢量图层")
    @RequestMapping(value = "vecLayerInfo",method = RequestMethod.GET)
    @ResponseBody
    public String[] vecLayerInfo() throws SQLException {
        return metaDataQueryService.getVectorLayers();
    }
    @ApiOperation("获取数据库中栅格图层")
    @ApiResponses({
            @ApiResponse(code=404,message="请求路径没有或页面跳转路径不对")
    })
    @RequestMapping(value ="rastLayerInfo",method = RequestMethod.GET)
    @ResponseBody
    public String[] rastLayerInfo() throws SQLException {
        return metaDataQueryService.getRasterLayers();
    }
    @ApiOperation("获取待入库目录中GDB文件列表")
    @RequestMapping(value ="gdbFileList",method = RequestMethod.GET)
    @ResponseBody
    public String[] gdbFileList(){
        return metaDataQueryService.getGDBFiles();
    }


    @ApiOperation("获取可用于市中心范围剪裁的行政单元编码")
    @RequestMapping(value = "boua8CutableCode",method = RequestMethod.GET)
    @ResponseBody
    public String[] boua8CutableCode() throws SQLException {
        return metaDataQueryService.getBoua8CutAdminCodes();
    }


    @ApiOperation("获取已进行了城市中心范围剪裁的行政单元代码")
    @RequestMapping(value = "boua8CutedCode",method = RequestMethod.GET)
    @ResponseBody
    public String[] boua8CutedCode() throws SQLException{
        return metaDataQueryService.getBoua8CutedAdminCodes();
    }

//    @RequestMapping("/hello")
//    public String home() {
//        LoggerBean.info("logback 访问hello");
//        LoggerBean.error("logback 访问hello");
//        return "Hello World!";
//    }

}
