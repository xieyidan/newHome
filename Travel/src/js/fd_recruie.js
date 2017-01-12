;(function(){
	$(function(){
		//验证加入我们
		var arr = [];
		//验证姓名
		$('.recruit-name').blur(function(){
			var value = $(this).val();		
			console.log(value)
			var Reg = /^[\u4E00-\u9FA5]{2,4}$/;	
			if( Reg.test(value) == false ){
				arr[0] = 0;
			}else{
				arr[0] = 1;
			}
		});
		//验证电话号码
		$('.recruit-phone').blur(function(){
			var value = $(this).val();	
			var Reg = /^(([0+]d{2,3}-)?(0d{2,3})-)(d{7,8})(-(d{3,}))?$/;
			if( Reg.test(value) == false ){
				arr[1] = 0;
			}else{
				arr[1]=1;
			}
		});
		var selpro = $("#selpro").val();
		var selcity = $("#selcity").val();
		$('form').submit(function(e){
			 e.preventDefault();
			if (arr.length==0||arr[0]==0||arr[1]==0||selpro==""||selpro==0||selcity==""||selcity==0 ) {
				alert("请填写完成")
			}
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})();
