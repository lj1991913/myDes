

'use strict';

var _zz = require('util/zz.js');

var _user ={
	//用户登录
	login : function(userInfo,resolve,reject){
		_zz.request({
			url : _zz.getServerHost + '',
			data : userInfo,
			method : 'POST',
			success : resolve,
			error : reject
		})
	},
	//检查用户名
	checkUserName : function(useName,resolve,reject){
		_zz.request({
			url : _zz.getServerHost + '',
			data : useName,
			method : 'POST',
			success : resolve,
			error : reject
		})
	},
	//注册
	regUser : function(userInfo,resolve,reject){
		_zz.request({
			url : _zz.getServerHost +'',
			data : userInfo,
			method : 'POST',
			success : resolve,
			error : reject
		})
	}
}
module.exports = _user;