webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(118);


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	__webpack_require__(119);
	var _zz = __webpack_require__(11);
	var _query = __webpack_require__(121);

	var page = {
		init : function(){
			this.search();
		},
		search : function(){
			var k = _zz.getUrlParam('key');
			_query.findOne(k,function(res){
				console.log(res);
			},function(error){

			});
		}
	};

	$(function(){
		page.init();
	});

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	


	var _zz = __webpack_require__(11);

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

/***/ })

});