webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	function switchTab(opts){
		this.tabTarget = opts.tabTarget || $('#f1');
		this.eventType = opts.eventType || 'click'; //默认是点击事件 hover：鼠标移上去触发
	}
	switchTab.prototype={
		init : function(){
			//初始化默认第一个显示
			this.tabTarget.find('.home-tab-list-warp').find('.home-tab-item').eq(0).addClass('active');
			this.tabTarget.find('.home-tab-main-warp').find('.home-tab-main-item').hide();
			this.tabTarget.find('.home-tab-main-warp').find('.home-tab-main-item').eq(0).show();
			this.bindEvent();
		},
		bindEvent : function(){ //绑定事件
			var that = this;
			if(this.eventType=='click'){
				this.tabTarget.find('.home-tab-list-warp').find('.home-tab-item').click(function(){
					var index =$(this).index();
					that.changeActive(index);
				});
			}
			if(this.eventType=='hover'){
				this.tabTarget.find('.home-tab-list-warp').find('.home-tab-item').hover(function(){
					var index =$(this).index();
					that.changeActive(index);
				});
			}

			this.tabTarget.find('.home-tab-main-item').find('.lookInfo').click(function(){
				that.tabTarget.find('.home-tab-main-item').each(function(){
					$(this).closest('.home-tab-main-all-item').find('.home-tab-main-all-item-b1').hide();
				});
				var $b = $(this).closest('.home-tab-main-all-item').find('.home-tab-main-all-item-b1');
				if($b){
					if($b.is(':hidden')){
						$b.show();
					}else{
						$b.hide();
					}
				}
			});
		},
		changeActive : function(index){
			this.tabTarget.find('.home-tab-list-warp .home-tab-item').each(function(){
				$(this).removeClass('active');
			});
			this.tabTarget.find('.home-tab-list-warp .home-tab-item').eq(index).addClass('active');
			this.tabTarget.find('.home-tab-main-warp .home-tab-main-item').each(function(){
				$(this).hide();
			});
			this.tabTarget.find('.home-tab-main-warp .home-tab-main-item').eq(index).show();
		}
	};

	module.exports = switchTab;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	__webpack_require__(23);
	var tab = __webpack_require__(19);
	var _zz = __webpack_require__(11);
	var templateIndex   = __webpack_require__(25);
	var indexList = __webpack_require__(26);

	var index = {
		init : function(){
			var that = this;
			indexList.getList1('',1,function(res){
				$('#f1cont').html('');
			var html = _zz.renderHtml(templateIndex,{
				list : res.list
			});
				$('#f1cont').append(html);
			},function(res){

			});
			var f1 = new tab({
				tabTarget : $('#f1')
			});
			f1.init();
			var $searchBut = $('#searchBut'),$searchInput = $('#searchInput');
			$searchBut.click(function(){
				that.submit($searchInput.val());
			});
		},
		submit : function(val){
			indexList.getList1(val,1,function(res){
				$('#f1cont').html('');
			var html = _zz.renderHtml(templateIndex,{
				list : res.list
			});
				$('#f1cont').append(html);
			},function(res){

			});
		}
	};


	$(function(){
		index.init();
		//请求
	}); 

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = "\t\t\t\t\t{{#list}}\r\n\t\t\t\t\t<div class=\"home-tab-main-all-item\">\r\n\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-t1\">\r\n\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-left\">\r\n\t\t\t\t\t\t\t\t \t<a href=\"/details.html?id={{id}}\"><img src=\"http://127.0.0.1:8080/goods/pic?path={{pic.picUrl}}\" alt=\"\"></a>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"productName\"><a href=\"/details.html?id={{id}}\">{{name}}</a></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"attrAddress\">景点地址：{{address}}</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"lookInfo\">\r\n\t\t\t\t\t\t\t\t\t\t查看详情\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1\">\r\n\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-title\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-mp bb1\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mp\">门票</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-sj bb2\">市值价</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-td bb3\">驴妈妈价</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-fs bb4\">支付方式</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-cont\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-cont-t3 bb3\">{{price}}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"home-tab-main-all-item-b1-cont-t4 bb4\">\r\n\t\t\t\t\t\t\t\t\t\t在线支付\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"yd\">预订</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t{{/list}}\r\n\r\n\t\t\t\t\t\t{{^list}}\r\n\t\t\t\t\t\t    <p class=\"err-tip\">很抱歉，实在找不到您要的商品。</p>\r\n\t\t\t\t\t\t{{/list}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n";

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _zz = __webpack_require__(11);

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

/***/ })

});