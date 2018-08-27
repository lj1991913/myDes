

'use strict';

require('./common.css');
require('./nav/nav.css');
require('./fot/fot.css');
var _zz = require('util/zz.js');
var _user = require('service/user-s.js');
//
var common = {
	init : function(){
		this.search();
		this.tops();
		$(document).on('click','#backhome',function(){
			window.location.href='/';
		});
		//获取username
		var $user = $('#username');
		var username = _zz.getlocalStorage('userName');
		if(username!=''){
			$user.text(username);
			$('#top1').show();
			$('#top2').hide();
		}else{
			$user.text('');
			$('#top2').show();
			$('#top1').hide();
		}
		//退出登录
		this.outLogin();
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
		
		//我的订单记录
		$myOrder.click(function(){
			var userName = _zz.getlocalStorage('userName');
			if(userName==""){
				alert('错误操作，请先登录');
				return false;
			}
			window.location.href = 'orderHistory.html';
		});
	},
	
	tops : function(){
		$('#login').click(function(){
			window.location.href = 'login.html'
		});

		$('#reg').click(function(){
			window.location.href = 'registered.html'
		});
	},
	outLogin : function(){
		$(document).on('click','#out',function(){
			_user.outLogin(function(res){
				console.log(res);
				_zz.dellocalStorage('userName');
				_zz.dellocalStorage('userId');
				location.reload();
			},function(msg){
				showMsg.show(msg)
			});
		});
	}
};

$(function(){
	common.init();
});