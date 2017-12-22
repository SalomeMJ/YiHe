$(function(){
	
	$(".a-seller-middle>span").click(function(){
		$(this).css('border','1px solid red').siblings(".a-seller-middle>span").css('border','1px solid #d3d3d3')
	})
	 	console.log(1)
	
	 $(".a-min").click(function(){
//	 	if($(".a-value").val()==1){
//	 	$(".a-addcar").css('background-color','#ffac77')
//	 	
//	 	}
//	 	console.log(1)
   if($(".a-value").val()>0){
// 
   	$(".a-value").val($(".a-value").val()-1)
   	if($(".a-value").val()==0){
   			$(".a-addcar").css('background-color','#ffac77')
   	}else{
   			$(".a-addcar").css('background-color','#ec6a17')
   	}
   
   }else{
   
      	$(".a-value").val(0)
	 	
      	
   }
    
      
	
		
		
	})
	
	 $(".a-add").click(function(){
   if($(".a-value").val()<=999){
   	$(".a-addcar").css('background-color','#ec6a17')
   	
   	$(".a-value").val(parseInt($(".a-value").val())+1)
   }else{
      	$(".a-value").val(999)
   }
      
	
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
})