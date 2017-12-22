$(function(){
	    $("#a-mengban").hide();
		$(".a-items1").hide();
	    $(".a-items1Content").hide()
	$("#a-items").hover(function(){
		$("#a-mengban").show();
		$(".a-items1").show();

$(".zindex").show().siblings(".a-items1Content").hide()
	    
		
},function(){	
		$("#a-mengban").hide();
		$(".a-items1").hide();
	    $(".a-items1Content").hide()
		
});

$(".a-items1").eq(0).css('background-color','#f60')
	$(".a-items1").hover(function(){
		$(this).css('background-color','#f60').siblings('.a-items1').css('background-color','#2F4F4F');
		var a=$(this).index();
		$(".a-items1Content").eq(a-2).show().siblings(".a-items1Content").hide();
		
	},function(){
		$(this).css('background-color','#f60').siblings('.a-items1').css('background-color','#2F4F4F');
		
	})

	
	
	
	
	
	
	
	
	
//到底了	
})


