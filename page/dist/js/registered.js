webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(100);


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	

	'use strict';

	var _zz = __webpack_require__(11);

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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(101);
	var _use = __webpack_require__(99);
	var _zz = __webpack_require__(11);

	var reg = {
		init: function() {
			$('input').val('');
			this.bindEvent();
		},
		bindEvent: function() {
			var that = this;
			//注册
			$('#sub').click(function() {
				that.reg();
			});
			$('.reg-right-input-warp input').blur(function(e) {
				that.checkInput(e);
			});
			$('#nameMask,#phoneMask,#passwordMask,#apasswordMask').click(function() {
				$(this).hide();
				$(this).closest('.reg-right').find('input').focus();
			});
			//判断密码强度
			$('#password').keydown(function() {
				var val = $.trim($(this).val());
				if (val.length > 7) {
					if (val.length > 7 && val.length <= 10) { //弱
						that.setPassword(0);
					} else if (val.length > 8 && val.length <= 13) { //中
						that.setPassword(1);
					} else {
						that.setPassword(2);
					}
				}
			});
		},
		reg: function() {
			var data = {
				"name": $.trim($('#name').val()),
				"phone": $.trim($('#phone').val()),
				"password": $.trim($('#password').val()),
			};
			validateResult = this.formValidate(fromData);

		},
		formValidate: function(formData) {
			var result = {
				status: false,
				msg: ''
			};
			if (!_zz.validate(formData.name, 'name')) {
				result.msg = '用户名不对';
				return result;
			}

			if (!_zz.validate(formData.phone, 'phone')) {
				result.msg = '用户名不对';
				return result;
			}
			if (!_zz.validate(formData.password, 'password')) {
				result.msg = '密码不对';
				return result;
			}
			// 通过验证，返回正确提示
			result.status = true;
			result.msg = '验证通过';
			return result;

		},
		checkInput: function(e) {
			var name, phone, password, apassword, $name, $phone, $password, $apassword;
			$name = $('#name');
			$phone = $('#phone');
			$password = $('#password');
			$apassword = $('#apassword');
			name = $.trim($name[0].value);
			phone = $.trim($phone[0].value);
			password = $.trim($password[0].value);
			apassword = $.trim($apassword[0].value);
			if (name == '') {
				$('#nameMask').show();
			} else {
				$('#nameMask').hide();
			}

			if (phone == '') {
				$('#phoneMask').show();
			} else {
				$('#phoneMask').hide();
			}

			if (password == '') {
				this.setPassword();
				$('#passwordMask').show();
			} else {
				$('#passwordMask').hide();
			}

			if (apassword == '') {
				$('#apasswordMask').show();
			} else {
				$('#apasswordMask').hide();
			}

		},
		setPassword: function(index) {
			var index = index || -1;
			var $p = $('#passwordLv');
			$p.find('.password-list').each(function(index, val) {
				$(this).removeClass('active');
			});
			if (index >= 0) {
				$p.find('.password-list').eq(index).addClass('active');
			}
		}
	};

	$(function() {
		reg.init();
	});

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});