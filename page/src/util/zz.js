'use strict';
var Hogan =require('hogan.js'); //require('hogan');
var serverHost={
	host :'' //请求地址的host
};
var _zz ={
	//网络请求
	request : function(options){
		var that = this;
		$.ajax({
			type : options.method || 'GET',
			url : options.url || '',
			dataType : options.dataType || 'json',
			data : options.data || {},
			success : function(res){
				if(res.code == 200){ //请求成功
					typeof options.success === 'function' && options.success(res.data,res.msg);
				}else if(res.code == 401){ //登录超时
					that.doLogin();
				}else{//请求失败
					typeof options.error === 'function' && options.error(res.msg)
				}
			},
			error : function(res){
				typeof options.error === 'function' && options.error(err.statusText);
			}
		});
	},
	//获取服务器地址
	getServerHost : function(){
		return serverHost.host;
	},
	getUrlParam : function(name){
		var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
	},
	//渲染html
	renderHtml : function(htmlTemplate,data){
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
		return result;
	},
	successTip : function(msg){
		alert(msg || '操作成功！');
	},
	errorTip : function(msg){
		alert(msg || '出问题了~');
	},
	validate : function(value,type){
		var val = $.trim(value);
		if(type === 'name'){ //用户名
			var a1 =  "^[a-zA-Z\u4e00-\u9fa5]+$";
			var re = new RegExp(a1);
			if(re.test(val)){
				//正确
			}else{
				return false;
			}
		}
	},
	doLogin : function(){
		window.location.href='./login.html'
	},
	goHome : function(){
		window.location.href='./index.html'
	}


}
module.exports = _zz;