<%@ WebHandler Language="C#" Class="UploadHandler" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;   
using System.Net;
using System.Web;
using System.Web.Services;
public class UploadHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {

        context.Response.ContentType = "text/plain";
        //接收上传后的文件
        //HttpPostedFile file = context.Request.Files["Filedata"];



        foreach (string s in context.Request.Files)
        {
            HttpPostedFile file = context.Request.Files[s];

            int fileSizeInBytes = file.ContentLength;
            string fileName = context.Request.Headers["X-File-Name"];
            string fileExtension = "";

            if (!string.IsNullOrEmpty(file.FileName))
                fileExtension = Path.GetExtension(file.FileName);
            string name=Guid.NewGuid().ToString();
            // IMPORTANT! Make sure to validate uploaded file contents, size, etc. to prevent scripts being uploaded into your web app directory
            string savedFileName = Path.Combine("E:\\项目\\管线全生命周期\\svn\\trunk\\src\\plc\\uploadFiles" + "\\" + name + fileExtension);
            file.SaveAs(savedFileName);

            context.Response.Write(name + fileExtension);
        }
        //获取文件的保存路径

        //string uploadPath = "E:\\项目\\管线全生命周期\\svn\\trunk\\src\\plc\\pages" + "\\"; 
        //string uploadPath = HttpContext.Current.Server.MapPath(@context.Request["folder"])+"\\"; 
        //判断上传的文件是否为空
        //if (file != null)
        //{
        //    if (!Directory.Exists(uploadPath))
        //    {
        //        Directory.CreateDirectory(uploadPath);
        //    }
        //    //保存文件
        //    file.SaveAs(uploadPath + "file1.FileName");
        //    //file.SaveAs(uploadPath + file1.FileName);
        //    context.Response.Write("上传成功");
        //}
        //else
        //{
        //    context.Response.Write("上传失败l");
        //}  
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}