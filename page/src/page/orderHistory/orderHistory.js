
'use stirct';
require('./orderHistory.css');
var _zz = require('util/zz.js');
var history = require('service/orderHistory.js');
var templateIndex = require('./orderHistory.string');
var page={
	init : function(){
		this.getList();
	},
	getList : function(){
		var data = {
			uid: _zz.getlocalStorage('userId'),
			page: 1
		};
		history.getList(data,function(res){
			console.log(res)
			var html = _zz.renderHtml(templateIndex, {
				list: res.list
			});
			$('#orderHistory').append(html);
		},function(error){

		});
	}
};

$(function(){
	page.init();
});