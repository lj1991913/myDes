

'use strict';

require('./index.css');
var tab = require('util/switch.js');
var _zz = require('util/zz.js');
var templateIndex   = require('./index.string');
var indexList = require('service/indexList.js');
$(function(){
	//请求
	indexList.getList1(function(res){
		var html = _zz.renderHtml(templateIndex,{
			list : res
		});
		$('#f1cont').append(html);
	},function(res){
	});
	var f1 = new tab({
		tabTarget : $('#f1')
	});
	f1.init();
}); 