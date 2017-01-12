

	
	function initialize() {
		// 百度地图信息窗口
//		var sContent =
//			"<a href='house_detail.html' style='display:block;width:100%;height:150px; border-radius: 10px;'>"+
//			"<h4 style='margin:0 0 5px 0;padding:0.2em 0'></h4>" + 
//			"<img style='float:right;margin:4px' id='imgDemo' src='../images/house/fangyuan_09.png' width='139' height='104' />" + 
//			"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'></p>" +
//			"</div>"+"</a>";	
		
		// 百度地图多点标注
		map = new BMap.Map("allmap"); //创建地图对象
		var piont = new BMap.Point(116.417854,39.921988); //初始化坐标点
		map.centerAndZoom(piont, 15); //缩放比例
		map.enableScrollWheelZoom(true); //允许滚轮缩放
		var index1 = [];
		var index2 = [];
		var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE}    
		map.addControl(new BMap.NavigationControl(opts));
		var data_info = [[116.417854,39.921988,"标题1","地址：北京市东城区王府井大街88号乐天银泰百货八层","../images/house/fangyuan_09.png"],
						 [116.406605,39.921585,"标题2","地址：北京市东城区东华门大街","../images/house/fangyuan_08.png"],
						 [117.318188,31.883793,"标题3","地址：北京市东城区正义路甲5号","../images/house/fangyuan_07.png"],
						 [117.270314,31.836783,"标题4","地址：包河区金寨路1号（金寨路与望江西路交叉口）","../images/house/fangyuan_06.png"],
						 [117.282201,31.895706,"标题5","地址：庐阳区凤台路209号（凤台路与蒙城北路交叉口）","../images/house/fangyuan_05.png"],
						 [117.278131,31.852094,"标题6","地址：北京市东城区正义路甲6号","../images/house/fangyuan_04.png"],
						 [117.277572,31.855833,"标题7","地址：北京市东城区正义路甲7号","../images/house/fangyuan_03.png"],
						 [117.294754,31.86692,"标题8","地址：北京市东城区正义路甲8号","../images/house/fangyuan_02.png"]
						]; //批量坐标地址
		var opts = {
					width : 200,     // 信息窗口宽度
					height: 150,     // 信息窗口高度
					enableMessage:true,//设置允许信息窗发送短息
					offset:{width:0,height:-25}
				  }; 
		for(var i=0;i<data_info.length;i++){ //循环坐标地址
			//设置marker图标为水滴
			var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]), {
			  icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
			    scale: 1.1,//图标缩放大小
			    fillColor: "#1BC272",//填充颜色
			    fillOpacity: 0.8//填充透明度
			  })
			});
			index1.push(data_info[i][0]) 
			index2.push(data_info[i][1]) 
			var content =
				"<a href='house_detail.html' style='display:block;width:100%;height:150px; border-radius: 10px;'>"+
				"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+data_info[i][2]+"</h4>" + 
				"<img style='float:right;margin:4px' id='imgDemo' src="+data_info[i][4]+" width='139' height='104' />" + 
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+data_info[i][3]+"</p>" +
				"</div>"+"</a>";	
			map.addOverlay(marker); // 将标注添加到地图中
			map.setViewport({center:new BMap.Point(data_info[i][0],data_info[i][1]),zoom:14}) //不清楚
			addClickHandler(content,marker); //不清楚
		}
		
	
	
		function addClickHandler(content,marker){  //点击弹出信息窗口函数
			marker.addEventListener("click",function(e){
				console.log(index1,index2)
				console.log(this.NA.lat,this.NA.lng)
				openInfo(content,e);
				var myIcon = new BMap.Icon("../images/user/mudidi_xuanzhong_icon.png", new BMap.Size(30,70));//上传本地图标
				var marker2 = new BMap.Marker(new BMap.Point(116.417854,39.921988),{icon:myIcon});  // 创建本地标注
				map.addOverlay(marker2);//将本地标注添加到地图中   
				map.setViewport({center:new BMap.Point(116.417854,39.921988),zoom:14}) //不清楚
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
	

