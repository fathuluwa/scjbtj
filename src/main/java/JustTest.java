import com.scgp.jbtj.JBTJProcess;
import com.scgp.jbtj.Untils.*;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Properties;

/**
 * @ProjectName: BootTest
 * @Package: PACKAGE_NAME
 * @ClassName: JustTest
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/5/31 10:44
 * @Version: 1.0
 */
public class JustTest {
    @Test
    public void jbtjTest()throws IOException, SQLException, ClassNotFoundException {
        ClassLoader classLoader=getClass().getClassLoader();
        String dbConfigFilePath=classLoader.getResource("db.properties").getFile();
        Properties properties=new Properties();
        FileInputStream filein=new FileInputStream(dbConfigFilePath);
        properties.load(filein);
        Iterator<String> propertyKeys=properties.stringPropertyNames().iterator();
        String url = properties.getProperty("jdbc.url");
        String user = properties.getProperty("jdbc.username");
        String pwd=properties.getProperty("jdbc.password");
        filein.close();
        //新建数据库管理对象并获取数据库连接
        dbUntils dbu = new dbUntils(url,user,pwd);
        Connection conn = dbu.getConn();
        JBTJProcess areaPreProcess = new JBTJProcess(conn);
        String[] tableNames={"lca510123","lca510124"};
        areaPreProcess.EllipsoidAreaPreProcess(tableNames);
        ArrayList<String> resultList = new ArrayList<>();
        resultList = dbu.checkPreTables();
        System.out.println(resultList);
    }

    @Test
    public void getFils(){
        File file=new File("D:\\scgp\\vector");
        File[] files=file.listFiles();
        ArrayList<String> fileNameList=new ArrayList<>();
        for(int i=0;i<files.length;i++){
            File singleFile = files[i];
            fileNameList.add(singleFile.getName());
        }
        String[] fileNames=fileNameList.toArray(new String[fileNameList.size()]);
        System.out.println(fileNames[0]+fileNames[1]);
    }
}
