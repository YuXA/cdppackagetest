(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04623b88"],{"5e5c":function(t,s,a){},ba06:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.edit}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deletemenu}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"main-body"},[a("div",{staticClass:"lf_list"},[a("el-tree",{attrs:{data:t.data,"default-expand-all":"",props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1),t._v(" "),a("div",{staticClass:"rt_info"},[a("el-tag",{staticStyle:{"margin-left":"15px"}},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("菜单编号:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.id))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("菜单名称:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.name))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("显示顺序:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.stk))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("菜单图标:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.icon))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("路径:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.path))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("备注:")]),t._v(" "),a("span",[t._v(t._s(t.currentRow.remarks))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"tit"},[t._v("显示:")]),t._v(" "),a("span",[t._v(t._s("1"===t.currentRow.is_show?"是":"否"))])])])],1)]),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.isShowAdd,width:"50%"},on:{"update:visible":function(s){t.isShowAdd=s}}},[a("div",[a("el-form",{ref:"ruleForm",staticClass:"add_info",attrs:{rules:t.rules,"label-width":"80px","label-position":"left",model:t.addInfo}},[a("el-form-item",{staticClass:"item",attrs:{label:"菜单名称",prop:"name"}},[a("el-input",{model:{value:t.addInfo.name,callback:function(s){t.$set(t.addInfo,"name",s)},expression:"addInfo.name"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"显示顺序",prop:"stk"}},[a("el-input",{model:{value:t.addInfo.stk,callback:function(s){t.$set(t.addInfo,"stk",s)},expression:"addInfo.stk"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"是否显示",prop:"is_show"}},[a("el-input",{model:{value:t.addInfo.is_show,callback:function(s){t.$set(t.addInfo,"is_show",s)},expression:"addInfo.is_show"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"选择图标",prop:"icon"}},[a("el-input",{model:{value:t.addInfo.icon,callback:function(s){t.$set(t.addInfo,"icon",s)},expression:"addInfo.icon"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"路径",prop:"path"}},[a("el-input",{model:{value:t.addInfo.path,callback:function(s){t.$set(t.addInfo,"path",s)},expression:"addInfo.path"}})],1),t._v(" "),a("el-form-item",{staticClass:"item",attrs:{label:"说明",prop:"remarks"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addInfo.remarks,callback:function(s){t.$set(t.addInfo,"remarks",s)},expression:"addInfo.remarks"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(s){t.isShowAdd=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.addMenu("ruleForm")}}},[t._v("确 定")])],1)])],1)},i=[],n=a("d5b2"),o={data:function(){return{data:[{name:"所有菜单项",children:[],id:0}],isShowAdd:!1,addInfo:{},defaultProps:{label:"name",children:"children"},currentRow:"",title:""}},created:function(){this.getMenuList()},methods:{getMenuList:function(){var t=this;Object(n["c"])().then(function(s){console.log(s),t.data[0].children=s.data,t.currentRow=s.data[0]})},addMenu:function(){var t=this,s=this.addInfo;"新增"===this.title?s.pid=this.currentRow.id:s.menuid=this.currentRow.id,Object(n["b"])(s).then(function(s){console.log(s),t.isShowAdd=!1,t.getMenuList()})},handleNodeClick:function(t){console.log(t),this.currentRow=t},add:function(){this.isShowAdd=!0,this.title="新增",this.addInfo={}},edit:function(){this.isShowAdd=!0,this.addInfo=this.currentRow},deletemenu:function(){var t=this;this.$confirm("此操作将删除该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n["a"])({menuid:t.currentRow.id}).then(function(s){t.getMenuList(),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},l=o,d=(a("e6b7"),a("2877")),c=Object(d["a"])(l,e,i,!1,null,"6ce5b8b0",null);s["default"]=c.exports},e6b7:function(t,s,a){"use strict";var e=a("5e5c"),i=a.n(e);i.a}}]);