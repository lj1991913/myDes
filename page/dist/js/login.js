webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	__webpack_require__(87);
	var _user = __webpack_require__(92);
	var _zz = __webpack_require__(93);

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
				username : $.trim($('#username').val()),
				password : $.trim($('#password').val()),
			},
			validateResult = this.formValidate(fromData);
			if(validateResult.status){
				showMsg.hide();
				_user.login(fromData,function(res){
					window.location.href = './index.html';
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
	        if(!_zz.validate(formData.username, 'name')){
	            result.msg = '用户名不对';
	            return result;
	        }
	        if(!_zz.validate(formData.password, 'password')){
	            result.msg = '密码不对';
	            return result;
	        }
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

/***/ 87:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	var _zz = __webpack_require__(93);

	var _user ={
		//用户登录
		login : function(userInfo,resolve,reject){
			_zz.request({
				url : _zz.getServerHost + '',
				data : userInfo,
				method : 'POST',
				success : resolve,
				error : reject
			})
		},
		//检查用户名
		checkUserName : function(useName,resolve,reject){
			_zz.request({
				url : _zz.getServerHost + '',
				data : useName,
				method : 'POST',
				success : resolve,
				error : reject
			})
		},
		//注册
		regUser : function(userInfo,resolve,reject){
			_zz.request({
				url : _zz.getServerHost +'',
				data : userInfo,
				method : 'POST',
				success : resolve,
				error : reject
			})
		}
	}
	module.exports = _user;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	'use strict';
	var Hogan = '' ;//require('hogan');
	var serverHost={
		host :'' //请求地址的host
	}
	var _zz ={
		//网络请求
		request : function(options){
			var that = this;
			$.ajax({
				type : options.method || 'GET',
				url : options.url || '',
				dataType : options.dataType || 'json',
				data : options.data || {},
				success : function(res){
					if(res.code == 200){ //请求成功
						typeof options.success === 'function' && options.success(res.data,res.msg);
					}else if(res.code == 401){ //登录超时
						that.doLogin();
					}else{//请求失败
						typeof options.error === 'function' && options.error(res.msg)
					}
				},
				error : function(res){
					typeof options.error === 'function' && options.error(err.statusText);
				}
			})
		},
		//获取服务器地址
		getServerHost : function(){
			return serverHost.host;
		},
		getUrlParam : function(name){
			var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	        var result  = window.location.search.substr(1).match(reg);
	        return result ? decodeURIComponent(result[2]) : null;
		},
		//渲染html
		renderHtml : function(htmlTemplate,data){
			var template = Hogan.compile(htmlTemplate),
				result = template.render(data);
			return result;
		},
		successTip : function(msg){
			alert(msg || '操作成功！');
		},
		errorTip : function(msg){
			alert(msg || '出问题了~');
		},
		validate : function(value,type){
			var val = $.trim(value);
			if(type === 'name'){ //用户名
				var a1 =  "^[a-zA-Z\u4e00-\u9fa5]+$";
				var re = new RegExp(a1);
				if(re.test(val)){
					//正确
				}else{
					return false;
				}
			}
		},
		doLogin : function(){
			window.location.href='./login.html'
		},
		goHome : function(){
			window.location.href='./index.html'
		}


	}
	module.exports = _zz;

/***/ })

});