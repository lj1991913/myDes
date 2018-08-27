'use strict';
var Hogan = require('hogan.js'); //require('hogan');
var serverHost = {
	host: 'http://127.0.0.1:8080' //请求地址的host
};
var _zz = {
	//网络请求
	request: function(options) {
		var that = this;
		$.ajax({
			type : options.method || 'GET',
			url : options.url || '',
			dataType : options.dataType || 'json',
			data : options.data || {},
			success : function(res){
				typeof options.success === 'function' && options.success(res);
			},
			error : function(err){
				typeof options.error === 'function' && options.error(err.statusText);
			}
		});
		/*$.getJSON(options.url, "", function(res) {
			typeof options.success === 'function' && options.success(res.data, res.msg);
		});
*/
	},
	//获取服务器地址
	getServerHost: function() {
		return serverHost.host;
	},
	getUrlParam: function(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	//渲染html
	renderHtml: function(htmlTemplate, data) {
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
		return result;
	},
	successTip: function(msg) {
		alert(msg || '操作成功！');
	},
	errorTip: function(msg) {
		alert(msg || '出问题了~');
	},
	validate: function(value, type) {
		var val = $.trim(value);
		if (type === 'name') { //用户名
			var a1 = "^[a-zA-Z\u4e00-\u9fa5]+$";
			var re = new RegExp(a1);
			if (re.test(val)) {
				//正确
				return true;
			} else {
				return false;
			}
		}
	},
	doLogin: function() {
		window.location.href = './login.html'
	},
	goHome: function() {
		window.location.href = './index.html'
	},
	setCookie : function(key,val,time){
		document.cookie=key + '=' + val;
	},
	getCookie : function(key){
		var c = document.cookie;
		return c;
	},
	delCookie : function(key){
		
	},
	setlocalStorage : function(key,val){
		localStorage.setItem(key, val);
	},
	getlocalStorage : function(key){
		return localStorage.getItem(key)
	},
	dellocalStorage : function(key){
		localStorage.setItem(key,'');
	}
};
module.exports = _zz;