(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b00f13c"],{"0292":function(t,e,a){},4335:function(t,e,a){"use strict";var s=a("b258"),i=a.n(s);i.a},"693c":function(t,e,a){"use strict";var s=a("0292"),i=a.n(s);i.a},b258:function(t,e,a){},ce31:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.edit}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteEnVal}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"user_search"},[a("span",{staticStyle:{"line-height":"36px"}},[t._v("枚举值名称 :")]),t._v(" "),a("el-input",{staticClass:"ipt-search",attrs:{placeholder:"请输入名称"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("span",{staticStyle:{"line-height":"36px"}},[t._v("枚举值编号 :")]),t._v(" "),a("el-input",{staticClass:"ipt-search",attrs:{placeholder:"请输入编号"},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),a("el-button",{on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"main-body"},[a("div",{staticClass:"lf_list"},[a("el-table",{attrs:{data:t.enList,border:"","row-key":"id","highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[a("el-table-column",{attrs:{label:"枚举值名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"枚举值编号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"说明",prop:"remarks"}})],1)],1),t._v(" "),a("div",{staticClass:"rt_info"},[a("div",{staticClass:"tabh"},[a("h3",{staticStyle:{"margin-left":"15px"}},[t._v("子code值")]),t._v(" "),a("el-table",{attrs:{data:t.childList,"row-key":"id",border:""}},[a("el-table-column",{attrs:{label:"枚举值名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"枚举值编号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"说明",prop:"remarks"}})],1)],1),t._v(" "),a("div",{staticClass:"tabf"},[a("h3",{staticStyle:{"margin-left":"15px"}},[t._v("父code值")]),t._v(" "),a("el-table",{attrs:{data:t.fatherList,"row-key":"id",border:""}},[a("el-table-column",{attrs:{label:"枚举值名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"枚举值编号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"说明",prop:"remarks"}})],1)],1)])]),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.isShowAdd,width:"50%"},on:{"update:visible":function(e){t.isShowAdd=e}}},[a("div",[a("el-form",{ref:"ruleForm",staticClass:"add_info",attrs:{rules:t.rules,"label-width":"80px","label-position":"left",model:t.addInfo}},[a("el-form-item",{staticClass:"item",attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.addInfo.name,callback:function(e){t.$set(t.addInfo,"name",e)},expression:"addInfo.name"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"类型",prop:"type"}},[a("el-select",{model:{value:t.addInfo.type,callback:function(e){t.$set(t.addInfo,"type",e)},expression:"addInfo.type"}},[a("el-option",{attrs:{label:"小程序",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"微信渠道",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"外部渠道",value:"3"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"val",prop:"val"}},[a("el-input",{model:{value:t.addInfo.val,callback:function(e){t.$set(t.addInfo,"val",e)},expression:"addInfo.val"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"说明",prop:"remarks"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addInfo.remarks,callback:function(e){t.$set(t.addInfo,"remarks",e)},expression:"addInfo.remarks"}})],1),t._v(" "),"1"===t.addInfo.type?a("el-form-item",{staticClass:"item",attrs:{label:"企业ID",prop:"enterprise_id"}},[a("el-input",{model:{value:t.addInfo.enterprise_id,callback:function(e){t.$set(t.addInfo,"enterprise_id",e)},expression:"addInfo.enterprise_id"}})],1):t._e()],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.isShowAdd=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addEnVal("ruleForm")}}},[t._v("确 定")])],1)])],1)},i=[],n=(a("7f7f"),a("b775"));function r(t){return Object(n["a"])({url:"app/setting/enumerate/list",method:"post",data:t})}function l(t){return Object(n["a"])({url:"app/setting/enumerate/add",method:"post",data:t})}function o(t){return Object(n["a"])({url:"app/setting/enumerate/delete",method:"post",data:t})}var d={data:function(){return{username:"",userId:"",childList:[],fatherList:[],textarea:"",enList:"",isShowAdd:!1,addInfo:{enid:"",name:"",val:"",type:"",remarks:"",pid:"",enterprise_id:""},currentRow:"",rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"blur"}],val:[{required:!0,message:"请输入val值",trigger:"blur"}],enterprise_id:[{required:!0,message:"请输入企业ID",trigger:"blur"}]},title:""}},created:function(){this.getEnumerateList()},methods:{edit:function(){this.isShowAdd=!0,this.addInfo.enid=this.currentRow.id,this.addInfo.name=this.currentRow.name,this.addInfo.val=this.currentRow.val,this.addInfo.type=this.currentRow.type,this.addInfo.remarks=this.currentRow.remarks,this.title="编辑"},getEnumerateList:function(){var t=this,e={page:1,size:10,name:this.username,no:this.userId};r(e).then(function(e){console.log(e),t.enList=e.data})},handleCurrentChange:function(t){this.currentRow=t,this.childList=t.children,this.fatherList=this.enList.filter(function(e){return e.id==t.pid})},add:function(){this.addInfo={},this.title="新增",this.isShowAdd=!0},addEnVal:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;"新增"===e.title?e.addInfo.pid=e.currentRow.id:e.addInfo.pid=e.currentRow.pid,l(e.addInfo).then(function(t){console.log(t),e.isShowAdd=!1,e.getEnumerateList()})})},deleteEnVal:function(){var t=this;this.$confirm("此操作将删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o({enid:t.currentRow.id}).then(function(e){t.getEnumerateList(),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},search:function(){this.getEnumerateList()},reset:function(){this.username="",this.userId="",this.getEnumerateList()}}},c=d,u=(a("4335"),a("693c"),a("2877")),p=Object(u["a"])(c,s,i,!1,null,"3ca05182",null);e["default"]=p.exports}}]);