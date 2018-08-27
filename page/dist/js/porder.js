webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(43);
	var _zz = __webpack_require__(11);
	var Calendar = __webpack_require__(45);
	var _order = __webpack_require__(40);
	var templateIndex = __webpack_require__(46);
	var porder = {
		init: function() {
			//日期初始化
			var ca = new Calendar({

			});
			ca.init();
			//事件绑定
			this.bindEvent();

			this.showcp();
		},
		bindEvent: function() {
			var that = this;
			$('#porderDate').click(function() {
				if ($('.calendar-warp').is(":hidden")) {
					$('.calendar-warp').show();
				} else {
					$('.calendar-warp').hide();
				}
			});
			$(document).on('click', '.select-calendar', function() {
				var date = $(this).attr('date');
				$('#porderDate').text(date);
				$('.calendar-warp').hide();
			});

			$(document).on('click', '.porder-number-p', function() {
				var conut = $('.porder-number-cont').text();
				$('.porder-number-cont').text(parseInt(conut) + 1);
				var list = _zz.getlocalStorage('cpinfo');
				list = JSON.parse(list);
				$('.porder-mingxi').find('.porder-mingxi-right').text(list.price*(parseInt(conut) + 1)+"元");
			});
			$(document).on('click', '.porder-number-s', function() {
				var conut = $('.porder-number-cont').text();
				if (conut == 1) {
					alert('最少一个人');
				} else {
					$('.porder-number-cont').text(parseInt(conut) - 1);
				}
				var list = _zz.getlocalStorage('cpinfo');
				list = JSON.parse(list);
				$('.porder-mingxi').find('.porder-mingxi-right').text(list.price*(parseInt(conut) + 1)+"元");
			});

			//提交订单
			$(document).on('click', '#pay', function() {
				that._pay();
			});
		},
		showcp: function() {

			var list = _zz.getlocalStorage('cpinfo');
			list = JSON.parse(list);
			var html = _zz.renderHtml(templateIndex, {
				list: list
			});
			$('#proderCont').append(html);
			var c =$('.porder-number-cont').text();
			c = parseInt(c);
			$('.porder-mingxi').find('.porder-mingxi-left').text(list.name);
			$('.porder-mingxi').find('.porder-mingxi-right').text(list.price*c+"元");
		},
		_pay: function() {
			var data = $.trim($('#porderDate').text());
			var postDate = {
				byPerson: _zz.getlocalStorage('userId'),
				goodsId: _zz.getUrlParam('id'),
				travelTime: new Date(data),
				goodsNum: $('.porder-number-cont').text(),
				travelName: $('#travelName').val(),
				travelMobile: $('#phone').val(),
				travelEmail: $('#email').val(),
				travelIdNum: $('#sfz').val(),
			};
			if (postDate.travelTime == "") {
				alert('请选择日期');
				return false;
			}
			if (postDate.travelName == "") {
				alert('请填写姓名');
				return false;
			}
			if (postDate.travelMobile == "") {
				alert('请填写手机号');
				return false;
			}
			if (postDate.travelEmail == "") {
				alert('请填写电子邮箱');
				return false;
			}
			if (postDate.travelIdNum == "") {
				alert('请填写身份证');
				return false;
			}
			_order.postPay(postDate, function(res) {
				console.log(res);
				_zz.setlocalStorage('orderInfo',JSON.stringify(res));
				window.location.href = '/order.html';
			}, function(res) { 

			});
		}
	};


	$(function() {
		porder.init();
	});

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	

	function Calendar(opts){
		this.input = opts.input || '';
		this.priceList = opts.priceList || [];
		this.m_day = '';
		this.firstDay = ''; //第一天星期几
		this.year = '';
		this.month = '';
		this.day = '';
		this.list = '';
	}

	Calendar.prototype = {
		init : function(){
			var d = new Date(),y;
			y=d.getFullYear();
			this.m_day = new Array(31,28+this.is_leap(y),31,30,31,30,31,31,30,31,30,31);
			this.firstDay = d.getDay();
			this.day = d.getDate();
			this.year = y;
			this.month = d.getMonth()+1;
			this.list=Math.ceil((this.m_day[this.month-1] + this.firstDay)/7);
			if(this.month<10){
				this.month = '0' + this.month;
			}
			$('#today').text(this.year+'年' + this.month +'月');
			this.randerHtml();

		},
		randerHtml : function(){
			var idx,date_str;
			for(i=0;i<6;i++) { //表格的行
			　　for(k=0;k<7;k++) { //表格每行的单元格
			　　　　idx=i*7+k; //单元格自然序列号
			　　　　date_str=idx-this.firstDay+1; //计算日期
					var str ;
					if(date_str<=0){
						if(this.month>1){
							date_str = this.m_day[parseInt(this.month)] + date_str;
						}else{
							date_str = '';
						}
						str = '<div class="calendar-bot-item hui"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
					}else if(date_str>this.m_day[parseInt(this.month-1)]){
						if(this.month != 12){
							date_str =date_str - this.m_day[parseInt(this.month-1)] + 1 ;
						}else{
							date_str = '';
						}
						str = '<div class="calendar-bot-item hui"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
					}else{
						date_str=idx-this.firstDay+1;
						var d = date_str;
						if(d<10){
							d='0'+d;
						}
						if(date_str<this.day){
							str = '<div class="calendar-bot-item huise" date="'+this.year+'-'+this.month+'-'+d+'"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
						}else{
							str = '<div class="calendar-bot-item select-calendar" date="'+this.year+'-'+this.month+'-'+d+'"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
						}
					}
					
					$('#rl').append(str);
			　　}
			}
		},
		is_leap : function(year){
			var res;
			return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
		}
	};

	module.exports = Calendar;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = "\t\t\t\t\t\t<div class=\"proder-cont-item f\">\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-left\">费用包含：</div>\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-right\">{{list.priceInclude}}</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"proder-cont-item f\">\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-left\">费用不包含：</div>\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-right\">{{list.priceNotInclude}}</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"proder-cont-item f\">\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-left\">入园时间：</div>\r\n\t\t\t\t\t\t\t<div class=\"proder-cont-item-right\">{{list.ticTime}}</div>\r\n\t\t\t\t\t\t</div>";

/***/ })

});