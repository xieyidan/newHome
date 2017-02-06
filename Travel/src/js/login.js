// JavaScript Document


$(function () {

	//未登录、注册
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
	//注册按钮
	$(".reg-btn").on("click",function(){
		$(".content-reg").css("display","none"); 		
		$(".mask-layer").css("display","block");
		$(".content-per").css("display","block"); //注册信息完善
		$("body").css("overflow","hidden");	
		
	});
	//注册信息完善
	$(".per-btn").on("click",function(){
		$(".content-per").css("display","none");  //注册信息完善
		$(".mask-layer").css("display","block");
		$(".content-bg").css("display","block"); 
		$("body").css("overflow","hidden");
	});
	//注册信息完善--跳过按钮
	$(".tg").on("click",function(){
		$(".content-per").css("display","none");  //注册信息完善
		$(".mask-layer").css("display","block");
		$(".content-bg").css("display","block"); 
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
		$(".fk").css("display","none");
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
		}
		
	}).on("mouseleave",function(){
		//未开通
		if (!fasg) {
			$(".fd-pulldown").hide();
		}else{
			$(".fd-dredge").hide();
		}
		
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
	  $(".release").on("click",function(){
		  $(".content-bg").css("display","block");
		  $(".mask-layer").css("display","block");
		  $(".content-reg").css("display","none");
		  $("body").css("overflow","hidden");
	  });

	//验证
	var isvalue; //存放验证结果的变量
	$("#cell-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9]{11}$/;
		if(re.test(tel)){
			$(".prompt-phone").text("输入正确");
			$(".prompt-phone").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-phone").text("您输入的手机号有误，请重新输入!	");
			$(".prompt-phone").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	$("#tel-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9]{11}$/;
		if(re.test(tel)){
			$(".prompt-tel").text("输入正确");
			$(".prompt-tel").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-tel").text("您输入的手机号有误，请重新输入！");
			$(".prompt-tel").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-tel").text("");
	 });
	$(".content-reg #cell-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9]{11}$/;
		if(re.test(tel)){
			$t(".prompt-phone").tex("输入正确");
			$(".prompt-phone").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-phone").text("您输入的手机号有误，请重新输入！");
			$(".prompt-phone").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $t(".prompt-phone").tex("");
	 });
	$(".content-set #cell-phone").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9]{11}$/;
		if(re.test(tel)){
			$(".prompt-phone").text("输入正确");
			$(".prompt-phone").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-phone").text("您输入的手机号有误，请重新输入！");
			$(".prompt-phone").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-phone").text("");
		});
	$("#set-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9A-Za-z]{6,10}$/;
		if(re.test(tel)){
			$(".prompt-pwd").text("输入正确");
			$(".prompt-pwd").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-pwd").text("密码由数字和字母组成，且不少于6个字符！");
			$(".prompt-pwd").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-pwd").text(" ");
	 });
	$(".content-reg #set-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9A-Za-z]{6,10}$/;
		if(re.test(tel)){
			$(".prompt-pwd").text("输入正确");
			$(".prompt-pwd").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-pwd").text("密码由数字和字母组成，且不少于6个字符！");
			$(".prompt-pwd").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-pwd").text("");
		});
	$(".content-set #set-pwd").blur(function(e) {
		var tel=$(this).val();  //获取输入的手机号
		var re=new RegExp();  //创建正则表达式的对象
		re=/^[0-9A-Za-z]{6,10}$/;
		if(re.test(tel)){
			$(".prompt-pwd").text("输入正确");
			$(".prompt-pwd").css("color","#09F");
			isvalue=true;
		}else{
			$(".prompt-pwd").text("密码由数字和字母组成，且不少于6个字符！");
			$(".prompt-pwd").css("color","#F03");
			isvalue=false;
			
		}
	 }).focus(function(e){
		 $(".prompt-pwd").text("");
	 });
	

	$(".content-bg #get-note").on("click",function(){
		resetCode();
		//倒计时方法
		function resetCode(){
			var obj = $(".content-bg #get-note");
			var timer = null ;
			var second = 60; 
			timer = setInterval(function(){
				if(second >0 ){
					obj.html(second+'s后重新获取');
					second -= 1;
					obj.unbind("click"); //阻止点击事件
					 return false;
				}else{
					clearInterval(timer);
					obj.html('重新获取');
					resetCode();
				}
			},1000);
		}	
	});
	$(".content-reg #get-note").on("click",function(){
		resetCode();
		//倒计时方法
		function resetCode(){
			var obj = $(".content-reg #get-note");
			var timer = null ;
			var second = 60; 
			timer = setInterval(function(){
				if(second >0 ){
					obj.html(second+'s后重新获取');
					second -= 1;
					obj.unbind("click"); //阻止点击事件
					 return false;
				}else{
					clearInterval(timer);
					obj.html('重新获取');
					resetCode();
				}
			},1000);
		}	
	});
	$(".content-set #get-note").on("click",function(){
		resetCode();	
		//倒计时方法
		function resetCode(){
			var obj = $(".content-set #get-note");
			var timer = null ;
			var second = 60; 
			timer = setInterval(function(){
				if(second >0 ){
					obj.html(second+'s后重新获取');
					second -= 1;
					obj.unbind("click"); //阻止点击事件
					 return false;
				}else{
					clearInterval(timer);
					obj.html('重新获取');
					resetCode();
				}
			},1000);
		}	
	});
	
	
})
