


var _zz = require('util/zz.js');

var _query = {
	//查询
	findOne : function(k,resolve,reject){
		_zz.request({
			url : _zz.getServerHost() +'/',
			data : k,
			method : 'POST',	
			success : resolve,
			error : reject
		});
	}
};

module.exports = _query;