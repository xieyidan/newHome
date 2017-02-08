// JavaScript Document


$(function () {

	//未登录、注册
	var  loginResult;//保存登录结果
	//登录
  	$(".dl").on("click",function(){
		$(".content-bg").css("display","block"); //登录显示
		$(".mask-layer").css("display","block"); //遮罩层
		$(".content-reg").css("display","none");
		$(".remind-left").css("display","none");
		$(".news-left").css("display","none");
		$(".gotop").click(function() {  
			$("html, body").animate({ scrollTop: 0 }, 120);
		});
		$("body").css("overflow","hidden");
	});
	//注册
	$(".zc").on("click",function(){
		$(".content-reg").css("display","block"); //注册显示
		$(".mask-layer").css("display","block");  //遮罩层
		$(".content-bg").css("display","none"); 
		$(".remind-left").css("display","none");
		$(".news-left").css("display","none");
		$("body").css("overflow","hidden");
	});

	//注册信息完善--跳过按钮
	$(".tg").on("click",function(){
		$(".content-per").css("display","none");  //注册信息完善
		$(".mask-layer").css("display","block");
		$(".content-bg").css("display","block"); 
		$(".content-reg").css("display","none");
		$("body").css("overflow","hidden");
	});
	
	//忘记密码
	$(".forget").on("click",function(){
		$(".content-set").css("display","block"); //重设密码
		$(".mask-layer").css("display","block");
		$(".content-bg").css("display","none"); 
		$("body").css("overflow","hidden");
	});
	//重设密码按钮
	$("#reset-btn").on("click",function(){
		$(".content-set").css("display","none");
		$(".mask-layer").css("display","none");
		$("body").css("overflow","hidden");
	});
	//遮罩层
	$(".mask-layer").on("click",function(){
		$(".content-bg").css("display","none"); //登录
		$(".content-reg").css("display","none"); //注册	
		$(".content-per").css("display","none"); //注册信息完善
		$(".content-set").css("display","none"); //重设密码
		$(this).css("display","none");  //隐藏遮罩层
		$("body").css("overflow","visible"); //显示body
	});
	
	//判断是否已经登录
	//已登录，注册
	//用户头像下拉
	$(".user-img a img").on("mouseenter",function(){
		$(".fk-pulldown").show();
	}).on("mouseleave",function(){
		$(".fk-pulldown").hide();
	});
	$(".fk-pulldown").on("mouseenter",function(){
		$(".fk-pulldown").show();
	}).on("mouseleave",function(){
		$(".fk-pulldown").hide();
	});
	//登录、未登录
	$(".btn").on("click",function(e){
		e.preventDefault();
		$(".content-bg").css("display","none");
		$(".mask-layer").css("display","none");
		$(".fk").css("display","block");
		$(".nolink").css("display","block");
		$(".fd-pulldown").css("display","none");
	});
	//退出登录
	$(".log-out").on("click",function(){
//		$(".fk").css("display","none");
		$(".nolink").css("display","block");
	});
	
	//我是房东
	var fasg = true;
	$(".login a").on("mouseenter",function(){	
		//未开通
		if (!fasg) {
			$(".fd-pulldown").show();
		}else{
			$(".fd-dredge").show();
		};
		
	}).on("mouseleave",function(){
		//未开通
		if (!fasg) {
			$(".fd-pulldown").hide();
		}else{
			$(".fd-dredge").hide();
		};
		
	});
	
	//我要开通
	$(".my-dredge").on("click",function(){
		$(".fd-pulldown").css("display","none");
		
		$(".login a").on("click",function(){
			$(".fd-dredge").toggle();
			$(".fd-pulldown").toggle();
		});
	});
	//发布房源
//	  $(".release").on("click",function(){
//		  $(".content-bg").css("display","block");
//		  $(".mask-layer").css("display","block");
//		  $(".content-reg").css("display","none");
//		  $("body").css("overflow","hidden");
//	  });

/******注册验证********/
	var isvalue; //存放验证结果的变量
	var register = $("#register");
	//手机号验证
	$("#cell-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^1(3|4|5|7|8)\d{9}$/;
		if(re.test(tel)){
			$(".prompt-phone").text("输入正确");
			$(".prompt-phone").css("color","#09F");
			phoneVerify(register);
			isvalue=true;
		}else{
			$(".prompt-phone").text("您输入的手机号有误，请重新输入!	");
			$(".prompt-phone").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	//图片验证码
	$("#pic-code").blur(function(e){
		var tel=$(this).val();  //获取输入框值
		if ($("#reset-verify").text() == tel) {
			$(".prompt-piccode").text("验证码输入正确");
			$(".prompt-piccode").css("color","#09F");
			isvalue=true;
		}
		else if(tel =="" ||tel == null){
			$(".prompt-piccode").text("请输入图片验证码!	");
			$(".prompt-piccode").css("color","#F03");
			isvalue=false;
		}
		else{
			$(".prompt-piccode").text("验证码输入错误，请重新输入!	");
			$(".prompt-piccode").css("color","#F03");
			isvalue=false;
		};
	})
	//手机验证码
	$("#mobile-code").blur(function(e){
		var tel=$(this).val();  //获取输入的手机号
		if (tel =="" ||tel == null) {
			$(".prompt-mobile-reg").text("请输入验证码");
			$(".prompt-mobile-reg").css("color","#F03");
			isvalue=true;
		}else{
			$(".prompt-mobile-reg").text("验证码输入正确!");
			$(".prompt-mobile-reg").css("color","#09F");
			isvalue=false;
		};
	});
	//设置密码
	$("#register-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[a-zA-Z]\w{5,17}$/;
		if(re.test(tel)){
			$(".register-pwd").text("输入正确");
			$(".register-pwd").css("color","#09F");
			isvalue=true;
		}else{
			$(".register-pwd").text("密码格式为8-16的字母和数字!	");
			$(".register-pwd").css("color","#F03");
			isvalue=false;
		};
	 });
	//邀请码
	$("#invitation-code").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^((\d{5})|([a-zA-Z]{5}))$/;
		if(re.test(tel)){
			$(".prompt-inv").text("输入正确");
			$(".prompt-inv").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-inv").text("邀请码输入错误！");
			$(".prompt-inv").css("color","#F03");
			isvalue=false;
		};
	 });
	//注册按钮
	$(".reg-btn").on("click",function(){
		if (isvalue==true) {
			$(".mask-layer").css("display","block");
			$(".content-per").css("display","block"); //注册信息完善
			$("body").css("overflow","hidden");	
		}else{
			$(".prompt-phone").text("请输入手机号");
			$(".prompt-phone").css("color","#F03");
			$(".prompt-piccode").text("请输入图片验证码!	");
			$(".prompt-piccode").css("color","#F03");
			$(".prompt-mobile-reg").text("请输入手机验证码");
			$(".prompt-mobile-reg").css("color","#F03");
			$(".register-pwd").text("请输入密码");
			$(".register-pwd").css("color","#F03");
			$(".prompt-inv").text("请输入邀请码");
			$(".prompt-inv").css("color","#F03");
		};
	});
	
//信息资料完善
	var perfect;//保存验证结果
	var regImg = $(".reg-img")
	//添加头像
	var regImg = $('.reg-img');
	var regUpload = $('.reg-upload');
	regUpload.on('change',function(){
		var strsrc=getObjectURL(this.files[0]);
    	regImg.attr("src",strsrc);
	});
	//验证头像是否上传
	headImg(regImg);
	function headImg(URL){
		if (URL) {
			perfect = false;
			regUpload.on("change",function(){
				perfect = true;
			});
		};
	}
	
	//性别先生
	$(".sir").on("click",function(){
		if ($(this).is(".checked")) {
			perfect=false;
		}else{
			
			perfect=true;
		};
	});
	//性别女士
	$(".madam").on("click",function(){
		if ($(this).is(".checked")) {
			perfect=false;
		}else{
			perfect=true;
		};
	});
	//昵称验证
	$("#pic-nickname").on("blur",function(){
		var tel=$(this).val();  //获取昵称
		if(tel == "" || tel == null){
			$(".prompt-nickname").text("*昵称格式错误");
			$(".prompt-nickname").css("color","#F03");
			perfect=false;
		}else{
			$(".prompt-nickname").text("昵称正确");
			$(".prompt-nickname").css("color","#09F");
			perfect=true;
		};
	});
	//姓名验证
	$("#pic-name").on("blur",function(){
		var tel=$(this).val();  //获取姓名
		if(tel == "" || tel == null){
			$(".prompt-name").text("*请输入姓名!");
			$(".prompt-name").css("color","#F03");
			console.log("姓名")
			perfect=false;
		}else{
			$(".prompt-name").text("正确!");
			$(".prompt-name").css("color","#09F");
			perfect=true;
		};
	});
	//身份证号验证
	$("#set-identity").blur(function() {
		var tel=$(this).val();  
		var re=new RegExp();  
		re=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		if(re.test(tel)){
			$(".prompt-identity").text("输入正确");
			$(".prompt-identity").css("color","#09F");
			perfect=true;
		}else{
			$(".prompt-identity").text("*身份证号有误");
			$(".prompt-identity").css("color","#F03");
			perfect=false;
			
		};
	 }).focus(function(e){
		 $(".prompt-identity").text("");
		});
	//注册完成按钮
	$(".reg-form").on("submit",function(e){
		e.preventDefault();
		if (perfect==true) {
			$(".content-per").css("display","none");  //注册信息完善
			$(".mask-layer").css("display","block");
			$(".content-bg").css("display","block"); 
			$(".content-reg").css("display","none");
			$("body").css("overflow","hidden");
		}else{
			$(".prompt-nickname").text("*请输入昵称");
			$(".prompt-nickname").css("color","#F03");
			$(".prompt-name").text("*请输入姓名!");
			$(".prompt-name").css("color","#F03");
			$(".prompt-identity").text("*请输入身份证号");
			$(".prompt-identity").css("color","#F03");
		};
	});
	
	
/******登录验证********/	
	/*快捷登录*/
	var shortcutUp;//保存快捷登录验证结果
	var HortcutCode = $("#Hortcut-code");
	//手机验证码
	$("#Hortcut-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^1(3|4|5|7|8)\d{9}$/;
		if(re.test(tel)){
			$(".prompt-shortcut").text("输入正确");
			$(".prompt-shortcut").css("color","#09F");
			phoneVerify(HortcutCode);
			shortcutUp=true;
		}else{
			$(".prompt-shortcut").text("您输入的手机号有误，请重新输入!");
			$(".prompt-shortcut").css("color","#F03");
			shortcutUp=false;
			
		};
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	
	//快捷登录图片验证码
	$("#pic-shortcut").blur(function(e){
		var tel=$(this).val();  //获取输入的手机号
		var picCodeV =  $("#pic-code-v").text();
		if (picCodeV == tel) {
			$(".prompt-shortcut-up").text("验证码输入正确");
			$(".prompt-shortcut-up").css("color","#09F");
			shortcutUp=true;
		}
		else if(tel =="" ||tel == null){
			$(".prompt-shortcut-up").text("请输入图片验证码!	");
			$(".prompt-shortcut-up").css("color","#F03");
			shortcutUp=false;
		}
		else{
			$(".prompt-shortcut-up").text("验证码输入错误，请重新输入!	");
			$(".prompt-shortcut-up").css("color","#F03");
			shortcutUp=false;
		};
	});
	//手机验证码
	$("#phone-code").blur(function(e){
		var tel=$(this).val();  //获取输入的手机号
		if (tel =="" ||tel == null) {
			$(".prompt-phone-verify").text("请输入验证码");
			$(".prompt-phone-verify").css("color","#F03");
			shortcutUp=false;
		}else{
			$(".prompt-phone-verify").text("验证码输入正确!");
			$(".prompt-phone-verify").css("color","#09F");
			shortcutUp=true;
		};
	});
	//显示快捷登录手机号码
	hortcut();
	function hortcut(){
		if ($.cookie("rmbUser") == "true") {
		    $("#ck_shortcut").addClass("checked");
		    $("#Hortcut-phone").val($.cookie("username"));
		};
	};
	//快捷登录
	$("#shortcut").on("submit",function(e){
		e.preventDefault();
		var ckShortcut = $("#ck_shortcut");
		var HortcutPhone = $("#Hortcut-phone").val();
		if (shortcutUp==true) {
			loginResult = true;
			SavesHortcut(ckShortcut,HortcutPhone);//自动登录
			$(".content-bg").css("display","none");
			$(".mask-layer").css("display","none");
			$(".fk").css("display","block");
			$(".nolink").hide();
			$(".nolink").css("display","none");
			$(".fd-pulldown").css("display","none");
		}else{
			loginResult = false;
			$(".prompt-shortcut").text("请输入手机号");
			$(".prompt-shortcut").css("color","#F03");
			$(".prompt-shortcut-up").text("请输入图片验证码!	");
			$(".prompt-shortcut-up").css("color","#F03");
			$(".prompt-phone-verify").text("请输入验证码");
			$(".prompt-phone-verify").css("color","#F03");
		};
			
	});
	
	
/*普通登录*/
	var common;//存放验证结果
	//手机号
	$("#tel-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^1(3|4|5|7|8)\d{9}$/;
		if(re.test(tel)){
			$(".prompt-tel").text("输入正确");
			$(".prompt-tel").css("color","#09F");
			common=true;
		}else{
			$(".prompt-tel").text("您输入的手机号有误，请重新输入!	");
			$(".prompt-tel").css("color","#F03");
			common=false;
			
		};
	 }).focus(function(e){
	    $(".prompt-phone").text("");
	});
	//密码
	$("#set-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^1(3|4|5|7|8)\d{9}$/;
		if(re.test(tel)){
			$(".prompt-pwd-common").text("密码正确");
			$(".prompt-pwd-common").css("color","#09F");
			common=true;
		}else{
			$(".prompt-pwd-common").text("密码错误");
			$(".prompt-pwd-common").css("color","#F03");
			common=false;
		};
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	//显示用户普通登录账户密码
	commonSave();
	function commonSave(){
		if ($.cookie("rmbUser") == "true") {
		    $("#ck_rmbUser").addClass("checked");
		    $("#tel-phone").val($.cookie("username"));
		    $("#set-pwd").val($.cookie("password"));
	  };
	};
	//普通登录按钮
	$("#common").on("submit",function(e){
		e.preventDefault();
		if (common==true) {
			loginResult = true;
			$(".content-bg").css("display","none");
			$(".mask-layer").css("display","none");
			$(".fk").css("display","block");
			$(".nolink").css("display","none");
			$(".fd-pulldown").css("display","none");
		}else{
			loginResult = false;
			$(".prompt-tel").text("请输入手机号");
			$(".prompt-tel").css("color","#F03");
			$(".prompt-pwd-common").text("请输入密码");
			$(".prompt-pwd-common").css("color","#F03");
		};
	});
/*重设密码*/
	//手机号
	var Reset; //存放验证结果的变量
	var notePwd = $("#note-pwd");
	//手机号验证
	$("#reset-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^1(3|4|5|7|8)\d{9}$/;
		if(re.test(tel)){
			$(".prompt-phone").text("输入正确");
			$(".prompt-phone").css("color","#09F");
			phoneVerify(notePwd);
			Reset=true;
		}else{
			$(".prompt-phone").text("您输入的手机号有误，请重新输入!	");
			$(".prompt-phone").css("color","#F03");
			Reset=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	//图片验证码
	$("#reset-picture").blur(function(e){
		var tel=$(this).val();  //获取输入的手机号
		if ($("#reset-verify").text() == tel) {
			$(".reset-piccode").text("验证码输入正确");
			$(".reset-piccode").css("color","#09F");
			Reset=true;
		}
		else if(tel =="" ||tel == null){
			$(".reset-piccode").text("请输入图片验证码!	");
			$(".reset-piccode").css("color","#F03");
			Reset=false;
		}
		else{
			$(".reset-piccode").text("验证码输入错误，请重新输入!	");
			$(".reset-piccode").css("color","#F03");
			Reset=false;
		};
	})
	//手机验证码
	$("#reset-phone-verify").blur(function(e){
		var tel=$(this).val();  //获取输入的手机号
		if (tel =="" ||tel == null) {
			$(".reset-mobile").text("请输手机入验证码");
			$(".reset-mobile").css("color","#F03");
			Reset=true;
		}else{
			$(".reset-mobile").text("验证码输入正确!");
			$(".reset-mobile").css("color","#09F");
			Reset=false;
		};
	});
	//设置新密码
	$("#reset-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[a-zA-Z]\w{5,17}$/;
		if(re.test(tel)){
			$(".reset-pwd").text("输入正确");
			$(".reset-pwd").css("color","#09F");
			Reset=true;
		}else{
			$(".reset-pwd").text("密码格式为8-16的字母和数字!	");
			$(".reset-pwd").css("color","#F03");
			Reset=false;
		};
	 });
	//设置新密码完成按钮
	$("#reset-form").on("submit",function(e){
		e.preventDefault();
		if (Reset==true) {
			console.log(222222)
			loginResult = true;
			$(".content-bg").css("display","none");
			$(".mask-layer").css("display","none");
			$(".fk").css("display","block");
			$(".nolink").css("display","none");
			$(".fd-pulldown").css("display","none");
			$(".set-center").css("display","none");
		}else{
			loginResult = false;
			$(".prompt-phone").text("您输入的手机号有误，请重新输入!	");
			$(".prompt-phone").css("color","#F03");
			$(".reset-piccode").text("请输入图片验证码!	");
			$(".reset-piccode").css("color","#F03");
			$(".reset-mobile").text("请输手机入验证码");
			$(".reset-mobile").css("color","#F03");
			$(".reset-pwd").text("请输入新密码");
			$(".reset-pwd").css("color","#F03");
		};
	});
	
/*免费发布房源*/
	
	$(".house").on("click",function(){
		
	})
	
	//获取短信验证码函数封装
	function phoneVerify(ags){
		ags.on("click",function(){
			resetCode();
			//倒计时方法
			function resetCode(){
				var obj = ags;
				var timer = null ;
				var second = 3; 
				timer = setInterval(function(){
					if(second >0 ){
						obj.html(second+'s后重新获取');
						second -= 1;
						obj.unbind("click"); //阻止点击事件
						 return false;
					}else {
						clearInterval(timer);
						obj.html('重新获取');
						ags.on("click",function(){
							resetCode();
						});
					};
				},1000);
			};	
		});
	};
	
	//勾选自动登录函数
	function SavesHortcut(remember,usname,uspassword) {
		if (remember.is(".checked")) {
		  $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
		  $.cookie("username", usname, { expires: 7 });
		   $.cookie("password", uspassword, { expires: 7 });
		}else {
		  $.cookie("rmbUser", "false", { expire: -1 });
		  $.cookie("username", "", { expires: -1 });
		  $.cookie("password", "", { expires: -1 });
		};
		return;
	};
	//base64
	function getObjectURL(file) {
	    var url = null ; 
	    if (window.createObjectURL!=undefined) { // basic
	        url = window.createObjectURL(file) ;
	    } else if (window.URL!=undefined) { // mozilla(firefox)
	        url = window.URL.createObjectURL(file) ;
	    } else if (window.webkitURL!=undefined) { // webkit or chrome
	        url = window.webkitURL.createObjectURL(file) ;
	    }
	    return url ;
	};
});
