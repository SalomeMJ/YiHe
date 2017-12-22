$(function(){
	

//var frameNum=153
for (var index = 0;index<58;index++) {
	
	$("#a-frame").append("<div  class='a-frame1' abc="+index+"><img src='../A_images/jifenshangcheng.png' /><p>自己礼包,送朋友送家人不容错过...</p><span>积分:</span><span>50</span><span>价值¥</span><span>20.0</span><button class='a-exchange'>兑换</button></div>")
}


//兑换界面
console.log(1)
pagesFun(".a-frame1");





})