
'use strict';

require('./porder.css');
var _zz = require('util/zz.js');
var Calendar = require('util/calendar.js');


var porder = {
	init : function(){
		//日期初始化
		var ca = new Calendar({

		});
		ca.init();
		//事件绑定
		this.bindEvent();
	},
	bindEvent : function(){
		
		$('#porderDate').click(function(){
			if($('.calendar-warp').is(":hidden")){
				$('.calendar-warp').show();
			}else{
				$('.calendar-warp').hide();
			}
		});
	}
};


$(function(){
	porder.init();
});