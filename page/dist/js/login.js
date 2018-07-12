webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99);


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	__webpack_require__(100);
	var _user = __webpack_require__(105);
	var _zz = __webpack_require__(11);

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


/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	var _zz = __webpack_require__(11);

	var _user ={
		//用户登录
		login : function(userInfo,resolve,reject){
			_zz.request({
				url : _zz.getServerHost() + '/user/login',
				data : userInfo,
				method : 'POST',
				success : resolve,
				error : reject
			})
		},
		//检查用户名
		checkUserName : function(useName,resolve,reject){
			_zz.request({
				url : _zz.getServerHost() + '/user/checkSame',
				data : useName,
				method : 'POST',
				success : resolve,
				error : reject
			})
		},
		//注册
		regUser : function(userInfo,resolve,reject){
			_zz.request({
				url : _zz.getServerHost() +'/user/save',
				data : userInfo,
				method : 'POST',	
				success : resolve,
				error : reject
			})
		}
	}
	module.exports = _user;

/***/ })

});