

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
		this.toPlay();

		$(document).on('click','#shang',function(){
			var pic = $('#imgs').attr('img');
			pic = pic.split(',');
			var index =  $('#imgs').attr('imgindex');
			if(index == 0){
				index == 3;
			}else{
				index--;
			}
			$('#imgs').css('background-image','url('+pic[index]+')');
			$('#imgs').attr('imgindex',index);
		});
		$(document).on('click','#xia',function(){
			var pic = $('#imgs').attr('img');
			pic = pic.split(',');
			var index =  $('#imgs').attr('imgindex');
			if(index == 2){
				index == 0;
			}else{
				index++;
			}
			$('#imgs').css('background-image','url('+pic[index]+')');
			$('#imgs').attr('imgindex',index);
		});
	},
	showInfo : function(id){
		detail.getDetail(id,function(res){
			console.log(res);
			_zz.setlocalStorage('cpinfo',JSON.stringify(res));
			var arr =new Array();
			for(var i =0 ;i<res.pics.length;i++){
				arr[i] = 'http://127.0.0.1:8080/goods/pic?path=' +res.pics[i].picUrl; 
			}
			res.pics = arr;
			var html = _zz.renderHtml(templateIndex1,{
				list : res
			});
			$('#details').append(html);
			var pic = $('#imgs').attr('img');
			pic = pic.split(',');
			var index =  $('#imgs').attr('imgindex');
			$('#imgs').css('background-image','url('+pic[index]+')');
		},function(){

		});
		
	},
	toPlay : function(){
		var that =this;
		$(document).on('click','#toPlay',function(){
		});
	}
};

$(function(){
	details.init();
});