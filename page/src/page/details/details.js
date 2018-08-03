

'use strict';

require('./details.css');
var _zz = require('util/zz.js');
var tab = require('util/switch.js');
var detail = require('service/detail.js');
var templateIndex1  = require('./details.string');
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
		
	},
	showInfo : function(id){
		detail.getDetail(id,function(res){
			console.log(res);
			var html = _zz.renderHtml(templateIndex1,{
				list : res
			});
			$('#details').append(html);
		},function(){

		});
		
	}
};

$(function(){
	details.init();
});