//// JavaScript Document

/***房客后台管理***/

$(function(){
	/***左侧标题***/
	$(".item:gt(0)").hide();  //隐藏class名为xl的索引大于0的元素
	$(".nav-cont .current").click(function(){				
		$(".nav-cont .current").removeClass("actives"); //移除其他元素样式
		$(this).addClass("actives");  //添加当前元素样式
		
		var index=$(".nav-cont .current").index(this); //获取当前current的索引
		$(".item").eq(index).siblings().hide(); //隐藏当前current索引下兄弟元素的内容
		$(".item").eq(index).show(); //显示当前current索引下的内容
	});
	/***右侧-全部订单***/
	//我的订单
	$(".my-order").on("click",function(){
		$(".all-order").css("display","block");
		$(".order-detail").css("display","none");
	});
	//点击小标题返回页面
	$(".right-subtitle").on("click",function(){
		if($(this).text()=='会员与积分')
		{
			$(".menber-rules").css("display","none");
		    $(".Member").css("display","block");
		}
	});
	//取消订单,我要退房
	$(".goods-state").on("click",function(){
		if($(this).text()=='取消订单')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal"});			
		}
		if($(this).text()=='我要退房')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal-5"});
		}
	});
	//联系房东
	$(".fd-contact").on("click",function(){
		if($(this).text()=='联系房东')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal-8"});
		}
	});
	//查看房东联系方式
	$(".look-contact").on("click",function(){
		if($(this).text()=='查看联系方式')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal-2"});	
		}
	});
	//立即支付,入住确定,评价房东
	$(".confirms").on("click",function(){
		if($(this).text()=='入住确定')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal-3"});
			
		}
		if($(this).text()=='评价房东')
		{
			$(this).attr({"data-toggle":"modal","data-target":"#myModal-7"});
		}
		if($(this).text()=='立即支付')
		{
			window.open("order_step3.html","_blank")
		}
	});
	//订单详情
	$(".order-detail-btn").on("click",function(){
		$(".all-order").css("display","none");
		$(".order-detail").css("display","block");
	});
	
	/***右侧-聊天记录***/
	//回复
	$(".chat-reply").on("click",function(){
		$(this).attr({"data-toggle":"modal","data-target":"#myModal-8"});
	});
	$(".reply-fd").on("click",function(){
		$(this).attr({"data-toggle":"modal","data-target":"#myModal-8"});
	});
	//查看聊天详情
	$(".chat-page").on("click",function(){
		$(".right-chat").css("display","none");
		$(".chat-detail").css("display","block");
	})
	//聊天详情
	$(".detail-list:eq(6)").hide();  //隐藏聊天列表detail-list的索引大于6的元素
	//返回聊天记录页
	$(".back-chat").on("click",function(){
		$(".right-chat").css("display","block");
		$(".chat-detail").css("display","none");
	})
	
	/***右侧-系统消息***/
	/* 全选/全不选 */
	$("#sel-all").click(function(e) {	
		var allsel=$(this).attr("checked");
        $(".chks").each(function() {
           var chksel=$(this).attr("checked");
		   if(chksel != allsel) 
		   {
			  $(this).click();   
		   }
        });
    });
    //系统消息删除
    $(".message-del").on("click",function(){
    	$(this).attr({"data-toggle":"modal","data-target":"#myModal-9"});
    });
    //全选/反选
    $("#sel-all").on("click",function(){
    	if ($(this).attr("checked"))
	    {
	     $("input[name='chks']").attr("checked",false);
	    }else{
	     $("input[name='chks']").attr("checked",true);
	    }
    });
    
	/***右侧-个人信息***/
	//添加头像
	var previewImg = $('.previewImg');
	var previewBtn = $('.previewBtn');
	previewBtn.on('change',function(){
		var strsrc=getObjectURL(this.files[0]);
    	previewImg.attr("src",strsrc);
	});	
	//验证
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
	/***右侧-入住人***/
	//添加入住人
	$(".add-person").on("click",function(){
		$(this).attr({"data-toggle":"modal","data-target":"#myModal-10"});
	});
	//全选/全不选
	$("#selectAll").click(function(e) {        
        $(".chk").each(function() {
        	if($(this).hasClass("checked"))
        	{
        		 $(this).removeClass("checked");
        	}
        	else
        	{
        		 $(this).addClass("checked");
        	}
         
        });
   });

	/***右侧-会员与积分***/
	$(".click-look").on("click",function(){
		$(".menber-rules").css("display","block");
		$(".Member").css("display","none");
	});
});
