$(function(){
	$(".a-exchange").click(function(){
	console.log(1);
	
	$("#overlay").show()
	$("#alert").show()
	
	
	
})
	console.log($("#alert").children())
// $("#alert").
	$("#alert").children().css('margin-top','20px')
	$(".back").click(function(){
		$("#alert").hide();
		$("#overlay").hide()
		
	})
	$(".keep").click(function(){
	    alert('保存成功')	
	})
	
	
//	jsonobj

for(var index=0;index<jsonobj.length;index++){
	$("#pre").append("<option value='"+index+"'>"+jsonobj[index].name+"</option>")
}
console.log("**********")
$("#pre").change(function(e){
	console.log(e.target.value)
	$("#country>option").remove();
	$("#city>option").remove()
	for (var i=0;i<jsonobj[e.target.value].city.length;i++) {
		$("#city").append("<option value='"+i+"'>"+jsonobj[e.target.value].city[i].name+"</option>")
	}	
		
	$("#city").change(function(event){
		
		$("#country>option").remove();
	for (var index=0;index<jsonobj[e.target.value].city[event.target.value].area.length;index++) {
		$("#country").append("<option value='"+index+"'>"+jsonobj[e.target.value].city[event.target.value].area[index])
	}
		
		
	})
		
	
})



//$(document).on('change',function(e){
//	console.log(e.target.value)
//	console.log(jsonobj[e.target.value].city[0].name)
//	$("#city>option").remove();
//	$("#country>option").remove();
//	
//	for(var i=0;i<11;i++){
//		$("#city").append("<option value='"+i+"'>"+jsonobj[e.target.value].city[0].name+"</option>")
//		
//		
//		
//	}
//	
//	for(var index=0;index<jsonobj[e.target.value].city[0].area.length;index++){
//	
//
//	$("#country").append("<option value='"+index+"'>"+jsonobj[e.target.value].city[0].area[index]+"</option>")
//	
//	
//	}
//	
//
//})


	
	
	
	
	
	
	
	
})