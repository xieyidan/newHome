;(function(){
	
//获取ID
var $ = function (id) {return typeof id === "string" ? document.getElementById(id) : id};
//获取tagName
var $$ = function (tagName, oParent) {return (oParent || document).getElementsByTagName(tagName)};
var idx = 0 ;
var idx1 = 1;
var len = 0 ;

//获取class
var $$$ = function (sClass, oParent) {
	var aClass = [],
	i = 0,
	reClass = new RegExp("(\\s|^)" + sClass + "($|\\s)"),
	aElement = $$("*", oParent);
	for (i = 0; i < aElement.length; i++)reClass.test(aElement[i].className) && aClass.push(aElement[i]);
	return aClass
};
//获取元素位置
function getPos(obj) {
	var iTop = obj.offsetTop;
	var iLeft = obj.offsetLeft;
	while (obj.offsetParent)
	{
		iTop += obj.offsetParent.offsetTop;
		iLeft += obj.offsetParent.offsetLeft;
		obj = obj.offsetParent;
	}
	return {top:iTop, left:iLeft};	
};
//创建照片墙对象
var PhotoWall = function () {this.initialize.apply(this, arguments)};
PhotoWall.prototype = {
	initialize: function (obj, aData)
	{
		var oThis = this;
		this.oParent = $(obj);
		this.oUl = $$("ul", this.oParent)[0];
		this.oBtn = $$("a", this.oParent)[0];
		this.zIndex = 1;
		this.aPos = [];
		this.aData = aData;
		this.dom = document.documentElement || document.body;
		this.create();
	},
	create: function ()
	{
		var aFrag = document.createDocumentFragment();
		var i = 0;
		for (i = 0; i < this.aData.length; i++)
		{	
			
			var oLi = document.createElement("li");
			var oImg = document.createElement("img");
			oImg.setAttribute("class","active-img" );
			var oImg1 = document.createElement("img");
			var oImg2 = document.createElement("img");
			if (idx == 0) {
				idx++;
				oImg1.src = "../css/img/fengmian_img.png"; //封面
				oImg2.src = "../images/user/guanbi_icon.png"; //删除按钮
				oImg1.setAttribute("class","active-fm" );
				oImg2.setAttribute("class","active-del");
				oLi.appendChild(oImg1);
				oLi.appendChild(oImg2);
			}else{
				if (idx1<25) {
					idx1++;
					oImg2.src = "../images/user/guanbi_icon.png"; //删除按钮
					oImg2.setAttribute("class","active-del");
					oLi.appendChild(oImg2);
				}
				else{
					alert("房源图片添加不能超过25张");
					return;
				}
				
			}
			
			oImg.src = this.aData[i];
			oLi.appendChild(oImg);
			aFrag.appendChild(oLi);
			oImg2.onclick = function(){
				this.parentNode.parentNode.removeChild(this.parentNode);
				this.parentNode.style.display = "none";
			}
		}
		this.oUl.appendChild(aFrag);
		this.aLi = $$("li", this.oParent);
		this.changeLayout()
	},
	changeLayout: function ()
	{
		var i = 0;
		this.oParent.style.height = this.oParent.offsetHeight + "px";
		this.aPos.length = 0;
		
		len=this.aLi.length;
		for (i = 0; i < this.aLi.length; i++) this.aLi[i].style.cssText = "";	
		for (i = 0; i < this.aLi.length; i++)
		{
			this.aLi[i].index = i;
			this.aLi[i].style.top = getPos(this.aLi[i]).top + "px";
			this.aLi[i].style.left = getPos(this.aLi[i]).left + "px";
			this.aPos.push({left:getPos(this.aLi[i]).left, top:getPos(this.aLi[i]).top})
		}
		for (i = 0; i < this.aLi.length; i++)
		{
			this.aLi[i].style.position = "absolute";	
			this.aLi[i].style.margin = "0";			
			this.drag(this.aLi[i])
		}	
	},
	drag: function (obj, handle)
	{
		var oThis = this;
		var handle = handle || obj;
		handle.style.cursor = "move";
		handle.onmousedown = function (event)
		{
			var event = event || window.event;	
			var disX = event.clientX - this.offsetLeft;
			var disY = event.clientY - this.offsetTop;
			var oNear = null;
			handle.style.zIndex = oThis.zIndex++;
			
			document.onmousemove = function (event)
			{
				var event = event || window.event;
				var iL = event.clientX - disX;
				var iT = event.clientY - disY;
				var maxL = Math.max(oThis.dom.clientWidth, oThis.dom.scrollWidth) - handle.offsetWidth;
				var maxT = Math.max(oThis.dom.clientHeight, oThis.dom.scrollHeight) - handle.offsetHeight;
				
				iL < 0 && (iL = 0);
				iT < 0 && (iT = 0);
				iL > maxL && (iL = maxL);
				iT > maxT && (iT = maxT);
							
				handle.style.left = iL + "px";
				handle.style.top = iT + "px";
				
				oNear = oThis.findNearest(obj);
				
				for (var i = 0; i < oThis.aLi.length; i++) oThis.aLi[i].className = "";
				
				oNear && (oNear.className = "hig");
				
				return false
			};
			document.onmouseup = function ()
			{
				document.onmousemove = null;
				document.onmouseup = null;
				
				if (oNear)
				{
					handle.index = [handle.index, oNear.index];
					oNear.index = handle.index[0];
					handle.index = handle.index[1];
					oNear.style.zIndex = oThis.zIndex++;
					oThis.doMove(handle, oThis.aPos[handle.index]);
					oThis.doMove(oNear, oThis.aPos[oNear.index]);					
					oNear.className = "";
				}
				else
				{
					oThis.doMove(handle, oThis.aPos[handle.index])	
				}
				
				handle.releaseCapture && handle.releaseCapture()
			};
			this.setCapture && this.setCapture();
			return false
		};
	},
	doMove: function (obj, iTarget, callback)
	{
		var oThis = this;
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			var iCurL = getPos(obj).left;
			var iCurT = getPos(obj).top;
			var iSpeedL = (iTarget.left - iCurL) / 5;
			var iSpeedT = (iTarget.top - iCurT) / 5;
			iSpeedL = iSpeedL > 0 ? Math.ceil(iSpeedL) : Math.floor(iSpeedL);
			iSpeedT = iSpeedT > 0 ? Math.ceil(iSpeedT) : Math.floor(iSpeedT);
			
			if (iCurL == iTarget.left && iCurT == iTarget.top)
			{
				clearInterval(obj.timer);
				callback && callback()	
			}
			else
			{
				obj.style.left = iCurL + iSpeedL + "px";
				obj.style.top = iCurT + iSpeedT + "px"	
			}
		}, 30)
	},
	findNearest: function (obj)
	{
		var aDistance = [];
		var i = 0;
		for (i = 0; i < this.aLi.length; i++) aDistance[i] = this.aLi[i] == obj ? Number.MAX_VALUE : this.getDistance(obj, this.aLi[i]);
		
		var minNum = Number.MAX_VALUE;
		var minIndex = -1;
		for (i = 0; i < aDistance.length; i++) aDistance[i] < minNum && (minNum = aDistance[i], minIndex = i);
		
		return this.isButt(obj, this.aLi[minIndex]) ? this.aLi[minIndex] : null
	},
	getDistance: function(obj1, obj2)
	{
		var a = (obj1.offsetLeft + obj1.offsetWidth / 2) - (obj2.offsetLeft + obj2.offsetWidth / 2);
		var b = (obj1.offsetTop + obj1.offsetTop / 2) - (obj2.offsetTop + obj2.offsetTop / 2);
		return Math.sqrt(a * a + b * b)
	},
	isButt: function (obj1, obj2)
	{
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = l1 + obj1.offsetWidth;
		var b1 = t1 + obj1.offsetHeight;
		
		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = l2 + obj2.offsetWidth;
		var b2 = t2 + obj2.offsetHeight;
		
		return !(r1 < l2 || b1 < t2 || r2 < l1 || b2 < t1)
	}
};
window.onload = function ()
{	
	var Uploading = document.getElementById("Uploading");
	var aBox = $$$("Pic-box");
	var aData = [];
	var aExample = [];
	var i = 0;
	var aBtn = document.getElementsByClassName("first-btn")[0];
	console.log(aBtn);
	
	//添加图片
	Uploading.onchange = function(){
		var strsrc=getObjectURL(this.files[0]);
		aData[i] = strsrc;
		//创建实例
		var oExample = new PhotoWall(aBox[i], aData);
		aExample.push(oExample);
		this.onresize = function ()
		{
			for (var p in aExample) aExample[p].changeLayout()	
		};
		this.onresize()
	};
	aBtn.onclick = function(){
		if (len>4&&len<25) {
			window.location.href="Upload_step4.html";
		}else{
			alert("房源照片不能少于5张")
		}
	}
}

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

})();
