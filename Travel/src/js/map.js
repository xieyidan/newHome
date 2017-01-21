//;(function () {

	

	function initialize() {
		
		
		// 百度地图多点标注
		map = new BMap.Map("allmap"); //创建地图对象
		var picListLi = $(".pic-list").find("li");//房源列表
		var piont = new BMap.Point(116.417854,39.921988); //初始化坐标点
		map.centerAndZoom(piont, 15); //缩放比例
		map.enableScrollWheelZoom(true); //允许滚轮缩放
		var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE}    
		map.addControl(new BMap.NavigationControl(opts));
		$.ajax({
			type:"GET",
		 	url:"../js/map.json",
		 	dataType:"json",
		 	async:true,
		 	success:function(res){
		 		$.each(res, function(idx,item) {
		 			//设置marker图标为水滴
					var marker = new BMap.Marker(new BMap.Point(item.lng,item.lat), {
					  icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
					    scale: 1.1,//图标缩放大小
					    fillColor: "#1BC272",//填充颜色
					    fillOpacity: 0.8//填充透明度
					  })
					});
					var content =
						"<div style=' border-radius: 10px;width:100%;height:200px;position:relative'>"+
						"<a href="+item.url+" style='display:inline-block;width:100%;height:150px;' target='_blank'>"+
						"<img style='padding-top:10px' id='imgDemo' src="+item.src+" width='100%' height='130' />" + 
						"<h4 style='margin:0 0 5px 0; font-weight:600'>"+item.title+"</h4>" + 
						"<p style='margin:0;line-height:1.5;font-size:13px;'>"+item.site+"</p>" +
						"<img style='' src='../css/img/sheshi_dianshi_icon.png'></img>" +
						"<img style='' src='../css/img/sheshi_linyu_icon.png'></img>" +
						"<img style='' src='../css/img/sheshi_juhui_icon.png'></img>" +
						"<img style='position:absolute;top:50%;right:5px' src='../images/user/user_icon.png'></img>" +
						"<div style='position:absolute;top:45%;left:0px;width:100px;height:40px;background:black;opacity:0.6'>"+
						"<span style='font-size:16px;line-height:40px;color: #FFF;'>￥</span>"+
						"<span style='font-size:26px;line-height:40px;color: red;'>618</span>"+
						"<span style='font-size:18px;line-height:40px;color: #FFF;'>/晚</span>"+
						"</div>"+
						"</a>"+"</div>";	
					map.addOverlay(marker); // 将标注添加到地图中
					map.setViewport({center:new BMap.Point(item.lng,item.lat),zoom:15}) //不清楚
					addClickHandler(content,marker); //不清楚
					
					
		 		});
					
		 	}, error: function (error) {
		        alert("加载失败，请检查网络或其他原因");
		    }
		})

		var opts = {
					width : 200,     // 信息窗口宽度
					height: 210,     // 信息窗口高度
					enableMessage:true,//设置允许信息窗发送短息
					offset:{width:0,height:-25}
				  }; 
		// 移入/移出房源列表添加/删除标注
	    for(var i = 0; i < picListLi.length; i++){  
          	picListLi[i].count = i; 
          	picListLi[i].onmouseenter = function(){  
               console.log(this.count+"移入");
//              var myIcon = new BMap.Icon("../images/user/mudidi_xuanzhong_icon.png", new BMap.Size(30,70));//上传本地图标
//				var marker2 = new BMap.Marker(new BMap.Point($(this)[0].NA.lng,$(this)[0].NA.lat),{icon:myIcon});  // 创建本地标注
//				map.addOverlay(marker2);//将本地标注添加到地图中   
//				map.setViewport({center:new BMap.Point($(this)[0].NA.lng,$(this)[0].NA.lat),zoom:15}) //不清楚
//				addClickHandler(content,marker2); //不清楚
               
          	}  
          	picListLi[i].onmouseleave = function(){  
               console.log(this.count+"移出");     
          	}    
        }   
        var index1 = true;
		
		function addClickHandler(content,marker){  //点击弹出信息窗口函数
			marker.addEventListener("click",function(e){
				openInfo(content,e);
				var myIcon = new BMap.Icon("../images/user/mudidi_xuanzhong_icon.png", new BMap.Size(30,70));//上传本地图标
				var marker2 = new BMap.Marker(new BMap.Point($(this)[0].NA.lng,$(this)[0].NA.lat),{icon:myIcon});// 创建本地标注
				map.addOverlay(marker2);//将本地标注添加到地图中   
				map.setViewport({center:new BMap.Point($(this)[0].NA.lng,$(this)[0].NA.lat),zoom:15}) //不清楚
				addClickHandler(content,marker2); //不清楚
				
				//图片加载完毕重绘infowindow
//			   document.getElementById('imgDemo').onload = function (){
//				   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
//			   };
			});
			
		}
		function openInfo(content,e){ //信息窗口对象
			var p = e.target;
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
			map.openInfoWindow(infoWindow,point); //开启信息窗口
		}
		
	}  
		   
	function loadScript() {  
	  var script = document.createElement("script");  
	  script.src = "http://api.map.baidu.com/api?v=2.0&ak=0SVvgq8BvSx7ObWfudubOabkSIuUTWLi&callback=initialize";//此为v2.0版本的引用方式  
	  document.body.appendChild(script);  
	}  	   
	window.onload = loadScript;  
	

	

	


//})();
