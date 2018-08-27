

var _zz = require('util/zz.js');

var history = {
	postPay :function(data,resolve,reject){
		_zz.request({
			url : _zz.getServerHost() +'/order/createOrder',
			method : 'POST',
			data : data,
			success : resolve,
			error : reject
		});
	},
	getList : function(data,resolve,reject){ //获取订单记录
		_zz.request({
			url : _zz.getServerHost() +'/order/searchOrder',
			method : 'POST',
			data : data,
			success : resolve,
			error : reject
		});
	},
	delOrder : function(id,resolve,reject){ //删除订单记录

	}
};

module.exports = history;
