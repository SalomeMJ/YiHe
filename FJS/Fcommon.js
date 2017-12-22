$(function(){
	$("#f-mengban").hide();
	$(".f-xiala").hide();
	$(".f-items1Content").hide()
	$(".f-items").hover(function(){
		$("#f-mengban").show();
		$(".f-xiala").show();

		$(".zindex").show().siblings(".f-items1Content").hide()
		
		
	},function(){	
		$("#f-mengban").hide();
		$(".f-xiala").hide();
		$(".f-items1Content").hide()
		
	});

	$(".f-xiala").eq(0).css('background-color','#f60')
	$(".f-xiala").hover(function(){
		$(this).css('background-color','#f60').siblings('.f-xiala').css('background-color','#2F4F4F');
		var a=$(this).index();
		$(".f-items1Content").eq(a-2).show().siblings(".f-items1Content").hide();
		
	},function(){
		$(this).css('background-color','#f60').siblings('.f-xiala').css('background-color','#2F4F4F');
		
	});

	
	
	
	
	
	
	
	
	
//到底了	
});


