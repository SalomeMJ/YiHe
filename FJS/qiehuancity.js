$(function(){

	$(".f-acity>span").click(function(){
		if($(this).index() !=0){

			var a = $(this).html();
			$(".f-dqcs .f-bj").html(a);
		}
		
	});
	$(".f-common>span").click(function(){
		if($(this).index() !=0){

			var a = $(this).html();
			$(".f-dqcs .f-bj").html(a);
		}
		
	});
	console.log($('.f-common').children());
	$('.f-common').click(function(event){
		// console.log(event.target.nodeName.toLowerCase().html());
		$('.f-common').children().css({'backgroundColor':'#fff','color':'#878787'});
		if($(event.target).html() == $(this).children().eq(0).html()){
			console.log($(event.target).html());
			$(event.target).css({'backgroundColor':'#008de1','color':'#fff'});
			
		}
		$()
		
	});
	






});