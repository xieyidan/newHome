// JavaScript Document

/***房客预定房源***/
$(function(){
	/***提交订单***/
	//入住人数
	$(".people-no").blur(function(){
		var peoplenum = $(".people-no").val();
		if(peoplenum>6)
		{
			alert("最多入住6人");
			e.preventDefault();
		}
	});
	//新增入住人
	$(".add-btn").on("click",function(){
		//添加入住人信息
		$(".tab-infor tbody").append('<tr>'+									
    					'<td><input class="name" type="text" value="张某某" /></td>'+
    					'<td>'+
    						'<select class="card-type">'+
	    						'<option value="">请选择</option>'+
	    						'<option value="">身份证</option>'+
	    						'<option value="">港澳通行证</option>'+
	    						'<option value="">台湾通行证</option>'+
	    						'<option value="">军官通行证</option>'+
	    						'<option value="">护照</option>'+
	    					'</select>'+
    					'</td>'+
    					'<td><input class="card" type="text" value="522726455821415222" /></td>'+
    					'<td><input class="phone" type="tel" value="12549879877" /></td>'+
    					'<td>'+
    						'<select class="sex">'+
	    						'<option>请选择</option>'+
	    						'<option>男</option>'+
	    						'<option>女</option>'+
	    					'</select>'+
    					'</td>'+
    					'<td><input type="date" value="2017-1-5" /></td>'+
    					'<td class="delete"><a class="delete-btn" href="javascript:;">删除</a></td>'+
    				'</tr>'								
		);
		//删除
		$(".delete-btn").on("click",function(){
			$(this).parent().parent().remove(); //删除tr信息
		});
	});
	
	//修改
	$(".change-num").on("click",function(){
		$(".reserve-code").toggle(); //短信，图片验证码的显示
		$(this).css("display","none"); //class名为change-num隐藏
		$(".change-off").css("display","inline-block");  //‘取消修改’文本显示
	});
	//取消修改
	$(".change-off").on("click",function(){
		$(".reserve-code").toggle(); //短信，图片验证码的隐藏
		$(this).css("display","none"); //class名为change-off元素隐藏
		$(".change-num").css("display","inline-block"); //‘修改’文本显示
	});
	//验证预留人信息
	var isvalue; //存放验证结果的变量
	//号码
	$('#reserve-tel').blur(function(e) {
		var tel=$('#reserve-tel').val();
		var re=new RegExp();
		re=/^\d{11}$/;
		if(re.test(tel))
		{	
		    isvalue=true;
		}
		else
		{
			alert("请输入数字,且不能少于11位字符");
			isvalue=false;
		}
	});
	//姓名
	$('#reserve-name').blur(function(e) {
		var name=$('#reserve-name').val();
		var re=new RegExp();
		re=/^[u4e00-\u9fa5]$/;
		if(re.test(name))
		{	
		    isvalue=true;
		}
		else
		{
			alert("请输入汉字");
			isvalue=false;
		}
	});
    
	//提交按钮
	$("#login-sub").on("submit",function(e){	
		var peoplenum = $(".people-no").val();
		if(peoplenum>6)
		{
			alert("最多入住6人");
			e.preventDefault();
		}
	});
	
	/***支付定金***/
	//优惠券
	$(".coupon-val").change(function(){
		var selobj=$(".coupon-val").val(); //下拉列表select的值
		if(selobj==1) //判断select的值是否等于1
		{
			$(".add-use").css("display","block"); //是，则叠加使用优惠券显示
		}
		else{
			$(".add-use").css("display","none");  //否，则叠加使用优惠券隐藏
		}	
	});
	//积分	
	var numobj = $("#my-num").html(); //积分的值
	$(".integral").blur(function(){
		var integral = $(".integral").val(); //积分的输入框值
		if(integral>numobj)
		{
			$(".integral-prompt").css("display","block");
		}
		else
		{
			$(".integral-prompt").css("display","none")
		}
	}).focus(function(){
		$(".integral-prompt").css("display","none")
	});
	//支付按钮
	$(".pay-btn").click(function(e){
		
	});
});