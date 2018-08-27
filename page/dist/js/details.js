webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	__webpack_require__(17);
	var _zz = __webpack_require__(11);
	var tab = __webpack_require__(19);
	var detail = __webpack_require__(20);
	var templateIndex1  = __webpack_require__(21);
	var details ={
		init : function(){
			var f2 = new tab({
				tabTarget : $('#f2')
			});
			f2.init();
			//获取url
			var id = _zz.getUrlParam('id');
			//
			this.showInfo(id);
			this.toPlay();

			$(document).on('click','#shang',function(){
				var pic = $('#imgs').attr('img');
				pic = pic.split(',');
				var index =  $('#imgs').attr('imgindex');
				if(index == 0){
					index == 3;
				}else{
					index--;
				}
				$('#imgs').css('background-image','url('+pic[index]+')');
				$('#imgs').attr('imgindex',index);
			});
			$(document).on('click','#xia',function(){
				var pic = $('#imgs').attr('img');
				pic = pic.split(',');
				var index =  $('#imgs').attr('imgindex');
				if(index == 2){
					index == 0;
				}else{
					index++;
				}
				$('#imgs').css('background-image','url('+pic[index]+')');
				$('#imgs').attr('imgindex',index);
			});
		},
		showInfo : function(id){
			detail.getDetail(id,function(res){
				console.log(res);
				_zz.setlocalStorage('cpinfo',JSON.stringify(res));
				var arr =new Array();
				for(var i =0 ;i<res.pics.length;i++){
					arr[i] = 'http://127.0.0.1:8080/goods/pic?path=' +res.pics[i].picUrl; 
				}
				res.pics = arr;
				var html = _zz.renderHtml(templateIndex1,{
					list : res
				});
				$('#details').append(html);
				var pic = $('#imgs').attr('img');
				pic = pic.split(',');
				var index =  $('#imgs').attr('imgindex');
				$('#imgs').css('background-image','url('+pic[index]+')');
			},function(){

			});
			
		},
		toPlay : function(){
			var that =this;
			$(document).on('click','#toPlay',function(){
			});
		}
	};

	$(function(){
		details.init();
	});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _zz = __webpack_require__(11);

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "\t<div>\r\n\t\t<div  class=\"details-cont1\">\r\n\t\t\t<div class=\"details-title\">产品名称</div>\r\n\t\t\t<div class=\"details-cont1-bot\">\r\n\t\t\t\t<div id=\"imgs\" class=\"details-cont1-bot-left\" img=\"{{list.pics}}\" imgIndex=0>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-left-piciocn\">\r\n\t\t\t\t\t\t<div id=\"shang\" class=\"details-cont1-bot-left-s\">上</div>\r\n\t\t\t\t\t\t<div id=\"xia\" class=\"details-cont1-bot-left-x\">下</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"details-cont1-bot-right\">\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">产品编号：{{list.id}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">景点地址：{{list.address}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">价格：{{list.price}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">取票时间：{{list.ticTime}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">取票地点：{{list.ticAddress}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">费用包含：{{list.priceInclude}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">费用包不含：{{list.priceNotInclude}}</div>\r\n\t\t\t\t\t<div class=\"details-cont1-bot-item\">简介描述：{{list.introduce}}</div>\r\n\t\t\t\t\t<div class=\"details-to\" ><a id=\"toPlay\" href=\"/porder.html?id={{list.id}}\">预订</a></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--3-->\r\n\t\t<div class=\"details-cont3\">\r\n\t\t\t<div id=\"f2\" class=\"home-tab-warp\">\r\n\t\t\t<div class=\"home-tab-list-warp\">\r\n\t\t\t\t<div class=\"home-tab-item\">景点介绍</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"home-tab-main-warp\">\r\n\t\t\t\t<div class=\"home-tab-main-item\">\r\n\t\t\t\t\t<div id=\"f1cont1\" class=\"home-tab-main-all\">\r\n\t\t\t\t\t{{list.introduce}}\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<!--3-->\r\n\t</div>\r\n";

/***/ })
]);