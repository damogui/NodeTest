using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NodeTest.Controllers
{
    public class StuController : Controller
    {
        // GET: Stu
        public ActionResult Index()
        {
            return View();
        }


        /// <summary>
        /// 获取学生列表
        /// </summary>
        /// <returns></returns>
        public JsonResult GetStuList()
        {
            List<Student> list = new List<Student>();
            list.Add(new Student() { StuName = "学生1", Tel = "123" });
            list.Add(new Student() { StuName = "学生2", Tel = "124" });
            list.Add(new Student() { StuName = "学生3", Tel = "125" });
            list.Add(new Student() { StuName = "学生4", Tel = "221" });
            list.Add(new Student() { StuName = "学生5", Tel = "222" });
            list.Add(new Student() { StuName = "学生6", Tel = "223" });
            JsonResult json = new JsonResult();
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            json.Data = list;


            return json;


        }

    }

    public class Student
    {

        public string StuName { get; set; }
        public string Tel { get; set; }



    }
}