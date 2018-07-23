package com.scgp.BootTest.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.dao
 * @ClassName: ProcessConfigInfo
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/28 15:33
 * @Version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProcessConfigInfo {
    private String[] cut1Boua;
    private String[] cutLayers;
}
