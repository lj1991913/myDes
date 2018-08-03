'use strict';

var _zz = require('util/zz.js');

var indexList = {
	getList1: function(name,page,resolve, reject) {
			var n = name || "";
			var p = page || 1;
			_zz.request({
				url : _zz.getServerHost() +'/index/goods?page=' + p +'&name=' + n,
				success : resolve,
				error : reject
			});
	}
};

module.exports = indexList;