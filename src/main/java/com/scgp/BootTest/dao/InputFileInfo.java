package com.scgp.BootTest.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;

/**
 * @ProjectName: BootTest
 * @Package: com.scgp.BootTest
 * @ClassName: InputFileInfo
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/5 15:26
 * @Version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class InputFileInfo {
    private String[] fileName;
}
