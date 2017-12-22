$(function(){
	var sWidth = document.documentElement.clientWidth;
	var sHeight = document.documentElement.clientHeight;
	console.log(sHeight);
	$(".f-right").css({'top':(sHeight-432)/2,'left':(sWidth-648)/2});
	console.log(sWidth);
	$(".f-window").hide();
	$(".f-pf>button").click(function(){
		console.log($(".f-pf>button"));
		$(".f-window").show();
	});
	$(".f-btn>button").click(function(){
		$(".f-window").hide();
	});
});