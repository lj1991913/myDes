'use strict';

require('./order.css');
var tab = require('util/switch.js');
var _zz = require('util/zz.js');
var templateIndex = require('./order.string');
$(function() {

	var f1 = new tab({
		tabTarget: $('#zf1')
	});
	f1.init();

	var info = _zz.getlocalStorage('orderInfo');
	info = JSON.parse(info);
	var t = info.travelTime,y,m,d;
	t  = new Date(t);
	y = t.getFullYear();
	m = t.getMonth() + 1;
	d = t.getDate();
	if(m<10){
		m = '0' + m;
	}
	if(d<10){
		d='0' + d;
	}
	t = y+'-'+m+'-' + d;
	info.travelTime = t;
	var html = _zz.renderHtml(templateIndex, {
		list: info
	});
	$('#main').append(html);

	$(document).on('click','.order-liji-zf',function(){
		$('#show1').show();
		$('#show2').hide();
	});
})