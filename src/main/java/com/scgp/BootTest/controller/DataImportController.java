package com.scgp.BootTest.controller;

import com.scgp.BootTest.Greeting;
import com.scgp.BootTest.dao.ImporterInfo;
import com.scgp.BootTest.dao.InputFileInfo;
import com.scgp.BootTest.dao.OgrExeImporterInfo;
import com.scgp.BootTest.dao.VectorFileInfo;
import com.scgp.BootTest.service.DataImportService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.controller
 * @ClassName: DataImportController
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/26 15:41
 * @Version: 1.0
 */
@Controller
@RequestMapping("/import/")
@Api("数据入库")
public class DataImportController {
    @Autowired
    DataImportService dataImportService;
    @Autowired
    private OgrExeImporterInfo ogrInfoBean;
    @Autowired
    private SimpMessagingTemplate greetingTemplate;


    @ApiOperation("矢量数据入库")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType="body",name="files",dataType="InputFileInfo",required=true,value="入库GDB文件名",defaultValue="{\"fileName\":[\"JC17_510103.gdb\",\"JC17_510104.gdb\"]}")
    })
    @ApiResponses({
            @ApiResponse(code=400,message="请求参数没填好"),
            @ApiResponse(code=404,message="请求路径没有或页面跳转路径不对")
    })
    @CrossOrigin(origins = "*")
    @RequestMapping(value ="vector",method = RequestMethod.POST)
    @ResponseBody
    public VectorFileInfo[] VectorImport(@RequestBody InputFileInfo files) throws IOException {
        String[] gdbFiles=files.getFileName();
        String[] countryGDBFileLayers=ogrInfoBean.getLayers();
        ImporterInfo importerInfo=new ImporterInfo();
        importerInfo.setTotalGDBCount(Integer.toString(gdbFiles.length));
        ArrayList<VectorFileInfo> importedFileList=new ArrayList<>();
        for (int i= 0;i<gdbFiles.length;i++){
            for(int j=0;j<countryGDBFileLayers.length;j++){
                importerInfo=dataImportService.VectorFileImporter(gdbFiles[i],countryGDBFileLayers[j]);
                importerInfo.setImportedCount(Integer.toString(i+1));
                if(importerInfo.getStauts().equals("Success")){
                    VectorFileInfo vectorFileInfo=new VectorFileInfo();
                    vectorFileInfo.setFileName(gdbFiles[i]);
                    vectorFileInfo.setLayerName(countryGDBFileLayers[j]);
                    importedFileList.add(vectorFileInfo);
                }
                this.greetingTemplate.convertAndSend("/topic/importer",importerInfo);
            }

        }

        return importedFileList.toArray(new VectorFileInfo[importedFileList.size()]);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "test",method = RequestMethod.GET)
    public void test() throws InterruptedException {
        while (true){
            this.greetingTemplate.convertAndSend("/topic/greetings",new Greeting("Hello, " + "shit" + "!"));
            Thread.sleep(150);
        }
    }
//    @RequestMapping("raster")
//    public RasterFileInfo[] RasterImport(){
//        //todo
//        return null;
//    }
}
