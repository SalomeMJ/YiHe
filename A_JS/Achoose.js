$(function(){
	var chooseFrame=16;
	var frameArray=['男上衣','女上衣','男裤','女裤','男衬衫','到店的商品','男裤','女裤','男衬衫','到店的商品','全部商品','男上衣','女上衣','男裤','女裤','男衬衫']
	for(var index=0;index<chooseFrame;index++){
		var div=document.createElement('div');
		div.classList.add('choose');	
		$(".chooseWrap").append(div)
		$(".choose").eq(index).html(frameArray[index])
		
		
	}
	//隐藏
	
		for (var index=11;index<chooseFrame;index++) {
		$(".choose").eq(index).hide();
	   }

	
	
	$(".choose").eq(10).click(
		function (){
		for (var index=11;index<chooseFrame;index++) {
		        $(".choose").eq(index).toggle();
	        }
	
        }	
	)
//	$(".choose").eq(10).toggle(function(){
//		for (var index=11;index<chooseFrame;index++) {
//		$(".choose").eq(index).show();
//	   }
//	},function(){
//		
//		for (var index=11;index<chooseFrame;index++) {
//		$(".choose").eq(index).hide();
//	   }
//		
//	})
	
	for(var index=0;index<chooseFrame;index++){
		var Acontent=document.createElement('div')
		Acontent.classList.add('Acontent')
		$(".chooseWrap").append(Acontent)
		Acontent.innerHTML=index;
		Acontent.abc=index;
		
	}
	$(".Acontent").eq(0).show().siblings(".Acontent").hide()
	$(".choose").hover(function(){
		$(this).addClass('chooses').siblings().removeClass('chooses')
		
		 $(".Acontent").eq($(this).index()).show().siblings(".Acontent").hide();
	},function(){
		$(this).addClass('chooses').siblings().removeClass('chooses')
		$(".Acontent").eq($(this).index()).show().siblings(".Acontent").hide();
	})
	
	
	for (var index = 0;index<15;index++) {
	
	$(".Acontent").append("<div  class='a-frame1' abc="+index+"><img src='../A_images/jifenshangcheng.png' /><p>自己礼包,送朋友送家人不容错过...</p><span class='price'>¥11.8</span><span class='prices'>¥20.0</span></div>")
}
//$(".Acontent").hide()
//for(var index = 0;index<25;index++){
//	
//	$(".a-frame1").eq(index).show()
//	
//}
//var i=0;


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})