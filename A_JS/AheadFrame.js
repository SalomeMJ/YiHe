
$(function(){
	
	$(".a-headLeft").append("<div class='a-headerFrame'></div>")
	console.log(jsonobj)
	var Aarray=[];
			for (var i=0;i<jsonobj.length;i++) {
//				console.log(jsonobj[i])
				
				for(var j = 0;j<jsonobj[i].city.length;j++){
//				console.log(jsonobj[i].city[j].name)
				var a=jsonobj[i].city[j].name
					Aarray.push('<a href="#">'+a+' </a>  ')
					
				}
			}
			
	$(".a-headerFrame").html(Aarray)
	$(".a-headerFrame>a").click(function(){
		$(".a-headLeftAdd").html($(this).html())
//		$(".a-headerFrame").hide()
	})
	
})