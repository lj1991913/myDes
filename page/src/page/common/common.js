

'use strict';

require('./common.css');
require('./nav/nav.css');
require('./fot/fot.css');
var _zz = require('util/zz.js');
//
var common = {
	init : function(){
		this.search();
		this.tops();
	},
	search : function(){
		var $tool,$searchUl,$searchInput,$searchBut,$searchType,that,$myOrder;
		that = this;
		$tool = $('.search-left').find('span');
		$searchUl = $('#searchDown');
		$searchInput = $('#searchInput');
		$searchBut = $('#searchBut');
		$searchType = $('#searchType');
		$myOrder = $('#myOrder');
		$tool.click(function(){
			//显示|隐藏下拉框
			if($searchUl.is(':hidden')){
				$(this).addClass('active');
				$searchUl.show();
			}else{
				$(this).removeClass('active');
				$searchUl.hide();
			}
		});
		//下拉点击
		$searchUl.find('li').click(function(){
			var text = $(this).text();
			var tool = $searchType.text();
			$searchType.text(text);
			$(this).text(tool);
			$tool.removeClass('active');
			$searchUl.hide();
		});
		//搜索
		$searchBut.click(function(){
			that.submit();
		});
		//我的订单记录
		$myOrder.click(function(){
			window.location.href = 'orderHistory.html';
		});
	},
	submit : function(){
		var key = $('#searchInput').val();
		window.location.href='query.html?key=' + encodeURIComponent(key);
	},
	tops : function(){
		$('#login').click(function(){
			window.location.href = 'login.html'
		});

		$('#reg').click(function(){
			window.location.href = 'registered.html'
		});
	}
};

$(function(){
	common.init();
});