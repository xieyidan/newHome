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
	//取消订单,我要退房,,
	
	$(".goods-state").on("click",function(){
		//var goodsObj = $(".goods-state"); 
		if($(this).text()=='取消订单')
		{
			var myid= jQuery(".goods-state").data('modal')
			alert(myid);
			
		}
		if($(this).text()=='我要退房')
		{
			//alert(2);
		}
	});
	//联系房东
	//立即支付,入住确定,评价房东
	
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
});
