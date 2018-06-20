'use strict';

var _zz = require('util/zz.js');

var indexList = {
	getList1: function(resolve, reject) {
		var list = [{
			"id": 1,
			"product_name": "这是名称",
			"product_pic": "xxxxx.jpg",
			"address": "xxxxxxxxxxxx",
			"destination": "xxxxxxxx",
			"type": 0,
			"item": {
				"tickets": "门票名称",
				"market_price": "120￥",
				"unique_price": "100￥"
			}
		}, {
			"id": 2,
			"product_name": "这是名称2",
			"product_pic": "xxxxx.jpg",
			"address": "xxxxxxxxxxxx",
			"type": 1,
			"destination": "xxxxxxxx",
			"item": {
				"tickets": "门票名称",
				"market_price": "120￥",
				"unique_price": "100￥"
			}
		}, {
			"id": 3,
			"product_name": "这是名称3",
			"product_pic": "xxxxx.jpg",
			"address": "xxxxxxxxxxxx",
			"type": 0,
			"destination": "xxxxxxxx",
			"item": {
				"tickets": "门票名称",
				"market_price": "120￥",
				"unique_price": "100￥"
			}
		}];
		return resolve(list)
			/*_zz.request({
				url : _zz.getServerHost() +'/json/index.json',
				success : resolve,
				error : reject
			});*/
	}
};

module.exports = indexList;