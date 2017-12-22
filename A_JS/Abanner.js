
$(function(){
//console.log($("#a-banner>img"))
//$("#a-banner>img")	
//var count = 0;
//var iwidth=$("#a-banner>img").width()
//
//function move(){
//	  count++;
////	  console.log(count)
//    $("#a-banner>img")	.animate({
//    	"right":count*iwidth+'px'
//    },1000,function(){
//    	if(count==4){
//    		count=0;
////    	$("#a-banner>img").eq(0).css('right','0px')
////    	$("#a-banner>img").eq(1).css('right','0px')
//    	$("#a-banner>img").eq(2).css('right','0px')
//       }  
//    
//    
//    })
//    }
////
////  
////    console.log(count)
////    if(count==4){
////    	$("#a-banner>img").stop(true);
////     clearInterval(timer)
//		
////		count=0
////		
////    	$("#a-banner>img").animate({
////    	"right":'0px'
////       })
////    	count=1;
////
////    }
////}
////
//var timer = setInterval(move,2000)
//	
//	
	
	
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	loop:true,
	prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination : '.swiper-pagination',
    paginationClickable :true,
})
	
})


