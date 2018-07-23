package com.scgp.BootTest.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @ProjectName: SCJBTJ
 * @Package: com.scgp.BootTest.dao
 * @ClassName: ImporterInfo
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/7/3 15:55
 * @Version: 1.0
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImporterInfo {
    private String stauts;
    private String layerName;
    private String gdbName;
    private String totalGDBCount;
    private String importedCount;
}
