package com.scgp.BootTest.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;

/**
 * @ProjectName: BootTest
 * @Package: com.scgp.BootTest
 * @ClassName: fileList
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/4 17:19
 * @Version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class VectorFileInfo {
    private String fileName;
    private String layerName;
    private String adminCode;
}
