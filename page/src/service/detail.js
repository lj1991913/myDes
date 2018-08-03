'use strict';

var _zz = require('util/zz.js');

var indexList = {
	getDetail: function(id,resolve, reject) {
			_zz.request({
				url : _zz.getServerHost() +'/index/goods/detail?id=' + id,
				success : resolve,
				error : reject
			});
	}
};

module.exports = indexList;