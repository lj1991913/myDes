

var _zz = required('util/zz.js');

var history = {
	getList : function(resolve,reject){ //获取订单记录
		_zz.request({
			url : _zz.getServerHost() +'',
			success : resolve,
			error : reject
		});
	},
	delOrder : function(id,resolve,reject){ //删除订单记录

	}
};

