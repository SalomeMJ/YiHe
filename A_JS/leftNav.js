$(function(){
	console.log($(".a-business>span").eq(1).attr("index"))
	
//	var index=$(".a-business>span").eq(1).attr("index")
//	$(".a-business>.aboutMe").hide()
	$(".a-business>span").click(
		function(){
			var index=$(this).attr("index")
		$(".a-business>.aboutMe").eq(index).slideToggle()	
		}
	)

})
