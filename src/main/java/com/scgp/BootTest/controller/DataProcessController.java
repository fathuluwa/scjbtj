package com.scgp.BootTest.controller;

import com.scgp.BootTest.service.DataProcessService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.controller
 * @ClassName: DataProcessController
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/29 15:42
 * @Version: 1.0
 */
@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/process/")
@Api("数据计算")
public class DataProcessController {
    @Autowired
    DataProcessService dataProcessService;

    @ApiOperation("按提供的行政区域编码进行中心城区的剪裁")
    @RequestMapping(value = "boua8CutLca/{areacode}",method = RequestMethod.GET)
    @ResponseBody
    public String boua8CutLca(@PathVariable("areacode") String areacode) throws Exception {
        return dataProcessService.Bouax8Cut(areacode);
    }

    @ApiOperation("按图层中唯一的CC码计算各个CC码对应的椭球面积")
    @RequestMapping(value = "areaCal/{layername}",method = RequestMethod.GET)
    @ResponseBody
    public String areaCal(@PathVariable("layername") String layername){
        return dataProcessService.CalArea(layername);
    }
}
