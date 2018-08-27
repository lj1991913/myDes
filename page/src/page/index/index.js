

'use strict';

require('./index.css');
var tab = require('util/switch.js');
var _zz = require('util/zz.js');
var templateIndex   = require('./index.string');
var indexList = require('service/indexList.js');

var index = {
	init : function(){
		var that = this;
		indexList.getList1('',1,function(res){
			$('#f1cont').html('');
		var html = _zz.renderHtml(templateIndex,{
			list : res.list
		});
			$('#f1cont').append(html);
		},function(res){

		});
		var f1 = new tab({
			tabTarget : $('#f1')
		});
		f1.init();
		var $searchBut = $('#searchBut'),$searchInput = $('#searchInput');
		$searchBut.click(function(){
			that.submit($searchInput.val());
		});
	},
	submit : function(val){
		indexList.getList1(val,1,function(res){
			$('#f1cont').html('');
		var html = _zz.renderHtml(templateIndex,{
			list : res.list
		});
			$('#f1cont').append(html);
		},function(res){

		});
	}
};


$(function(){
	index.init();
	//请求
}); 