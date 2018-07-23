package com.scgp.BootTest;

import com.scgp.BootTest.dao.OgrExeImporterInfo;
import com.scgp.BootTest.dao.ProcessConfigInfo;
import com.scgp.jbtj.JBTJProcess;
import com.scgp.jbtj.Untils.*;
import io.swagger.annotations.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Properties;


@SpringBootApplication(scanBasePackages="com.scgp.BootTest")
@Configuration
@PropertySource("classpath:config.properties")
@EnableSwagger2
public class SCJBTJApplication {
	private dbUntils dbuntils;
	private Properties properties;
	public SCJBTJApplication() throws IOException, SQLException, ClassNotFoundException {
		this.properties = new Properties();
		ClassPathResource resource = new ClassPathResource("config.properties");
		properties.load(resource.getInputStream());
		String url=properties.getProperty("jdbc.url");
		String user = properties.getProperty("jdbc.username");
		String pwd=properties.getProperty("jdbc.password");
		this.dbuntils=new dbUntils(url,user,pwd);
	}
	@Bean
	public Logger LoggerBean(){
		return LoggerFactory.getLogger(Example.class);
	}
	//基本统计处理引擎对象
	@Bean
	public JBTJProcess jbtjProcessBean() throws SQLException, ClassNotFoundException {
		return new JBTJProcess(this.dbuntils.getConn());
	}
	//数据库全局配置
	@Bean
	public dbUntils dbUntilsBean() throws SQLException, ClassNotFoundException, IOException {
		return this.dbuntils;
	}

	//配置gdal中ogr.exe所在路径
	@Bean
	public OgrExeImporterInfo ogrInfoBean() throws IOException {
		OgrExeImporterInfo ogrExeImporterInfo = new OgrExeImporterInfo();
		String url1 = properties.getProperty("jdbc.url1");
		String port=properties.getProperty("jdbc.port");
		String ogrPath=properties.getProperty("postgis.ogr2ogr");
		String dataPath=properties.getProperty("data.result");
		String defaultdbName=properties.getProperty("defaultdb.name");
		String user = properties.getProperty("jdbc.username");
		String pwd=properties.getProperty("jdbc.password");
		String layers=properties.getProperty("layers");
		ogrExeImporterInfo.setUrl1(url1);
		ogrExeImporterInfo.setPort(port);
		ogrExeImporterInfo.setOgrPath(ogrPath);
		ogrExeImporterInfo.setDataPath(dataPath);
		ogrExeImporterInfo.setDefaultdbName(defaultdbName);
		ogrExeImporterInfo.setUser(user);
		ogrExeImporterInfo.setPwd(pwd);
		ogrExeImporterInfo.setLayers(layers.split(","));
		return ogrExeImporterInfo;
	}

	//载入数据处理相应配置，如图层剪裁关系
	@Bean
	public ProcessConfigInfo processConfigInfoBean() throws IOException {
		ProcessConfigInfo processConfigInfo=new ProcessConfigInfo();
		String cut1Boua=properties.getProperty("cut1.boua");
		String cut2Layers=properties.getProperty("cut2.layers");
		processConfigInfo.setCut1Boua(cut1Boua.split(","));
		processConfigInfo.setCutLayers(cut2Layers.split(","));
		return processConfigInfo;
	}


	public static void main(String[] args) {
		SpringApplication.run(SCJBTJApplication.class, args);
	}
}
