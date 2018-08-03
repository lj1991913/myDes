webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110);


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	
	'use stirct';
	__webpack_require__(111);
	var _zz = __webpack_require__(11);
	var history = __webpack_require__(113);

	var page={
		init : function(){

		}
	};

	$(function(){
		page.init();
	});

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	

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



/***/ })

});