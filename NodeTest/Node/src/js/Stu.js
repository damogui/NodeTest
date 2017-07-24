
//后台交互
//发送请求调取数据绑定下拉框
var arrJxd = [];//校区
var arrBj = [];//班级
var arrTbk = [];//同步课
var arrEdutions = [];//教材列表
var tplTableStu = require("../tpl/Stu.tpl");//学生列表
var stuGrade = 0;//年级
var stuId = 0;//学生id
var stuEditionId;//学生id


var isSel = 0;//0表示没加载下拉1表示加载（学校）
//var isSelBj = 0;//0表示没加载下拉班级1表示加载
var arrTjr = [];//推荐人，老师
var isLoadTeach = 0;//是否加载推荐人0没加，1加
var userRole = "2";//2为超管,3为老师
var module = {
    init: function () {
        //todo 逻辑函数
        this.render();
        this.initBtns();
    },

    render: function () {
        //加载列表
        GetStuData();


    },
    initBtns: function () {
   


    }


};

var titleO = "全部";//$("#drop_type").attr("title")  定义全局变量来监听改变事件
//绑定数据
$(function () {
    module.init();
    //OptTypeSel();


});


//发送请求调取数据
function GetStuData(page) {
   
    if (page == undefined) {
        page = 1;
    }
    var pageSize = 10;
    var json = {};
  
    //加载列表
    $.ajax({
        type: "post",
        url: "/Stu/GetStuList",
        dataType: "json",
        data: {
            data: JSON.stringify(json), PageIndex: page, PageSize: pageSize
        },
        success: function (data) {
         
            if (data.Data && data.Data.length > 0) {
                $("#tb").html(tplTableStu(data.Data));
                $("#Totalcount").html(data.PageSum);
           
                //加载学校列表
                if (isSel != 1) {
                 
                }
                isSel = 1;

            }
            else {

                $("#tb").html("");
                //<img src="../../../bundle/img/noclass.png" style="text-align:center;">
                $("#tb").html('<tr  style="border:none;text-align:center;height:280px;"><td style="font-size: 16px;" colspan="8"><div class="data_img"><div class="big_area" style="margin-top:10px;line-height:30px;"><br/><span>暂无数据！</span></div></div></td></tr>');//清空数据
                $("#pagination").html("");//分页控件不显示
                $("#Totalcount").html(0);//数据设置为0

            }
        }
    });

}






