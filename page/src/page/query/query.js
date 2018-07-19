
'use strict';

require('./query.css');
var _zz = require('util/zz.js');
var _query = require('service/query-r.js');

var page = {
	init : function(){
		this.search();
	},
	search : function(){
		var k = _zz.getUrlParam('key');
		_query.findOne(k,function(res){
			console.log(res);
		},function(error){

		});
	}
};

$(function(){
	page.init();
});