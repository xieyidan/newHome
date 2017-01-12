//// JavaScript Document

/***房客后台管理***/

$(function(){
	//左侧标题
	$(".nav-cont .current").click(function(){				
		$(".nav-cont .current").removeClass("actives"); //移除其他元素样式
		$(this).addClass("actives");  //添加当前元素样式
	});
	
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
