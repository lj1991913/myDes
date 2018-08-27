'use strict';

require('./porder.css');
var _zz = require('util/zz.js');
var Calendar = require('util/calendar.js');
var _order = require('service/orderHistory.js');
var templateIndex = require('./porder.string');
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