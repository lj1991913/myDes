

'use strict';

require('./index.css');
var tab = require('util/switch.js');
var _zz = require('util/zz.js');


$(function(){
	var f1 = new tab({
		tabTarget : $('#f1')
	});
	f1.init();

	var f2 = new tab({
		tabTarget : $('#f2')
	});
	f2.init();

}); 