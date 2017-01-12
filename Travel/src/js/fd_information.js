// JavaScript Document
;(function(){
	/***房东信息验证***/
	$(function(){

			//初始状态
			$(".fd-perinfo").css("background","url(../css/img/buzou_01.png)");
			$(".line_span span:first").css("color","#1bc272");
			
//			//保存下一步
//			$('.btn_next').on('click',function(event){
//				$(".fd-perinfo").css("background","url(../css/img/buzou01.png)");
//				$(".fd-gathering").css("background","url(../css/img/buzou_02.png)");
//				$(".line_span span:first").css("color","#808080");
//				$(".line_span span:last").css("color","#1bc272");
//				
//				$(".cont-1").css("display", "none");
//				$(".cont-2").css("display", "block");
//			});
			
			//上一步
			$(".btn_Return").on("click",function(){
				$(".fd-perinfo").css("background","url(../css/img/buzou_01.png)");
				$(".fd-gathering").css("background","url(../css/img/buzou02.png)");
				$(".line_span span:last").css("color","#808080");
				$(".line_span span:first").css("color","#1bc272");
				
				$(".cont-1").css("display", "block");
				$(".cont-2").css("display", "none");
			});
			
			
			//添加头像
			var previewImg = $('.previewImg');
			var previewBtn = $('.previewBtn');
			previewBtn.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
		    	previewImg.attr("src",strsrc);
			});
			
			
			//添加身份证照片
			var zmImg = $('.zm-img');
			var fmImg = $('.fm-img');
			var picBtn1 = $('.pic-btn1');
			var picBtn2 = $('.pic-btn2');
			picBtn1.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
				var img = $('<img />').attr("src",strsrc);
		    	img.appendTo(zmImg)
			});
			picBtn2.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
		    	var img = $('<img />').attr("src",strsrc);
		    	img.appendTo(fmImg)
		    	
			});
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
	
	
			//支付宝，银行卡内容
			$("select[name='queryType']").change(function(){
			
				$div = $("#div"+$(this).val());//选择的div
				
				$div.parent().children("div").hide(); //让其他所有div隐藏
				
				$div.show(); //选中显示
				
				var div1=$(".select_xz option:selected").val();
				if(div1==2)
				{
					$(".select_tit").css("margin-right","355px");
					$(".cont-2 .div_btn").css("margin-top", "90px");
				}
				else if(div1==1){
					$(".select_tit").css("margin-right","126px");
					$(".cont-2 .div_btn").css("margin-top", "230px");
				}
			});
			//验证
			var arr = [];
			//验证头像是否上传
			var haedImg = $(".haed-img");
			var previewBtn = $('.previewBtn');
			previewBtn.on("change",function(){
				if (haedImg[0].src == "../images/user/fangdongxinxi_touxiang_icon.png") {
					arr[0] = 0;
					console.log("失败")
				}else{
					arr[0]=1;
					console.log("成功")
				}
			})
			//验证昵称
			$('.fd-info').blur(function(){
				var value = $(this).val();		//取得用户输入值
				console.log(value)
				var Reg = /^(\w|[\u4e00-\u9fa5]){4,12}$/;	//定义昵称正则对象
				
				if( Reg.test(value) == false ){
					//显示错误提示信息
					$(".txt1").text("昵称填写格式错误");
					//保存验证结果
					arr[1] = 0;
				}else{
					$('.txt1').text("");
					arr[1]=1;
				}
			});
			//验证身份证号
			$('.id-number').blur(function(){
				var value = $(this).val();		//取得用户输入值
				var Reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;	//定义昵称正则对象
				
				if( Reg.test(value) == false ){
					
					$(".txt2").text("身份证号有误");
				
					arr[2] = 0;
				}else{
					$(".txt2").text("身份证输入正确");
					arr[2]=1;
				}
			});
			//验证姓名
			$('.my-name').blur(function(){
				var value = $(this).val();		
				console.log(value)
				var Reg = /^[\u4E00-\u9FA5]{2,4}$/;	//验证姓名
				
				if( Reg.test(value) == false ){
					
					$(".txt3").text("名字格式错误");
					
					arr[3] = 0;
				}else{
					$('.txt3').text("");
					arr[3]=1;
				}
			});
			//提交
			$('.btn_next').on('click',function(event){
				
				if( arr.length==0||arr[0]==0||arr[1]==0||arr[2] ==0 ||arr[3] ==0){
					event.preventDefault();
					console.log(haedImg[0].src)
					if (haedImg[0].src == "../images/user/fangdongxinxi_touxiang_icon.png") {
						arr[0] = 0;
						alert("请上传头像")
					}else{
						arr[0]=1;
						alert("*为必填项")
					}
					
				}
				else if(arr[0]==1&&arr[1]==1&&arr[2]==1&&arr[3]==1){
					event.preventDefault();
					$(".fd-perinfo").css("background","url(../css/img/buzou01.png)");
					$(".fd-gathering").css("background","url(../css/img/buzou_02.png)");
					$(".line_span span:first").css("color","#808080");
					$(".line_span span:last").css("color","#1bc272");
					
					$(".cont-1").css("display", "none");
					$(".cont-2").css("display", "block");
				}
				
			});
			
	});
})();