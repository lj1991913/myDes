webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(107);


/***/ }),

/***/ 92:
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	__webpack_require__(108);
	var tab = __webpack_require__(92);
	var _zz = __webpack_require__(11);

	$(function(){


		var f1 = new tab({
			tabTarget : $('#zf1')
		});
		f1.init();
		
	})

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});