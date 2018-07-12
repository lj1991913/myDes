

'use strict';

require('./login.css');
var _user = require('service/user-s.js');
var _zz = require('util/zz.js');

var showMsg ={
	show : function(msg){
		$('#error').text(msg);
	},
	hide : function(){
		$('#error').text('');
	}
}

var page ={
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		var that = this;
		//登录按钮
		$('#sub').click(function(){
			that.submit();
		});

		//用户名&密码
		$('.login-main-warp input').blur(function(){
			that.checkInput();
		});
		$('#maskName').click(function(){
			$(this).hide();
			$(this).closest('.login-input-warp').find('input').focus();
		});

		$('#maskPassword').click(function(){
			$(this).hide();
			$(this).closest('.login-input-warp').find('input').focus();
		});

	},
	checkInput : function(){
		 var name,password,$name,$password;
		 name = $('#username').val();
		 password = $('#password').val();
		 $name =$('#maskName');
		 $password =$('#maskPassword');
		 if($.trim(name) == ''){
		 	$name.show();
		 }
		 if($.trim(password) == ''){
		 	$password.show();
		 }
	},
	submit : function(){
		var fromData = {
			userName : $.trim($('#username').val()),
			password : $.trim($('#password').val()),
		},
		 validateResult = this.formValidate(fromData);
		if(validateResult.status){
			showMsg.hide();
			_user.login(fromData,function(res){
				if(res.id!=''){
					localStorage.setItem('userName', res.userName);
					window.location.href = './index.html';
				}else{
					alert('用户名或密码错误');
				}
			},function(msg){
				showMsg.show(msg)
			})
		}else{
			showMsg.show(validateResult.msg);
		}

	},
	// 表单字段的验证
    formValidate : function(formData){
        var result = {
            status  : false,
            msg     : ''
        };
       /* if(!_zz.validate(formData.username, 'name')){
            result.msg = '用户名不对';
            return result;
        }
        if(!_zz.validate(formData.password, 'password')){
            result.msg = '密码不对';
            return result;
        }*/
        // 通过验证，返回正确提示
        result.status   = true;
        result.msg      = '验证通过';
        return result;
    }
}
$(function(){
	page.init();
})
