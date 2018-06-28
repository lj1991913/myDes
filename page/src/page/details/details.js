

'use strict';

require('./details.css');
var _zz = require('util/zz.js');
var tab = require('util/switch.js');
var templateIndex1   = require('./details.string');
var details ={
	init : function(){
		var f2 = new tab({
			tabTarget : $('#f2')
		});
		f2.init();
	}
};

$(function(){
	details.init();
});