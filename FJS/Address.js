$(function(){
	$(".f-right .f-div").hide();
	$(".f-right1").hide();
	$(".f-right2").hide();
	$(".f-right3").hide();
	$(".f-bdok").hide();
	$(".f-xgok").hide();
	$(".f-content .f-dzgl").click(function(){
		$(".f-right1").hide();
		$(".f-right2").hide();
		$(".f-right3").hide();
		$(".f-bdok").hide();
		$(".f-xgok").hide();
		$(".f-right").show();
		$(".f-right .f-div").show();
	});
	$(".f-content .f-yhq").click(function(){
		$(".f-right3").hide();
		$(".f-right2").hide();
		$(".f-right").hide();
		$(".f-bdok").hide();
		$(".f-xgok").hide();
		$(".f-right1").show();
	});
	$(".f-content .f-grzl").click(function(){
		$(".f-right").hide();
		$(".f-right1").hide();
		$(".f-right3").hide();
		$(".f-xgok").hide();
		$(".f-right2").show();
	});
	$(".f-content .f-pw").click(function(){
		$(".f-right").hide();
		$(".f-right1").hide();
		$(".f-right2").hide();
		$(".f-bdok").hide();
		$(".f-right3").show();
	});





	
	$(".f-content .f-btn1 button").click(function(){
		$(".f-xgok").hide();
		$(".f-bdok").show();
	});
	$(".f-content .f-btn2 button").click(function(){
		$(".f-bdok").hide();
		$(".f-xgok").show();
	});
});