webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	
	'use stirct';
	__webpack_require__(38);
	var _zz = __webpack_require__(11);
	var history = __webpack_require__(40);
	var templateIndex = __webpack_require__(41);
	var page={
		init : function(){
			this.getList();
		},
		getList : function(){
			var data = {
				uid: _zz.getlocalStorage('userId'),
				page: 1
			};
			history.getList(data,function(res){
				console.log(res)
				var html = _zz.renderHtml(templateIndex, {
					list: res.list
				});
				$('#orderHistory').append(html);
			},function(error){

			});
		}
	};

	$(function(){
		page.init();
	});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	

	var _zz = __webpack_require__(11);

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


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	module.exports = "{{#list}}\r\n<div class=\"orderHistory-item\">\r\n\t\t\t\t\t<div class=\"orderHistory-list\">{{goodsName}}</div>\r\n\t\t\t\t\t<div class=\"orderHistory-list\">{{goodsPrice}}</div>\r\n\t\t\t\t\t<div class=\"orderHistory-list\">{{goodsNum}}</div>\r\n\t\t\t\t</div>\r\n{{/list}}\r\n\r\n{{^list}}\r\n\t\t\t\t\t\t    <p class=\"err-tip\">很抱歉，还没有订单信息</p>\r\n\t\t\t\t\t\t{{/list}}";

/***/ })

});