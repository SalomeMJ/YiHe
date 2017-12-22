function pagesFun(frameArg){
	console.log($(frameArg).length)


  $(frameArg).hide()
for(var index = 0;index<25;index++){
	
	$(frameArg).eq(index).show()
	
}
var i=0;

var pages=parseInt(($(frameArg).length-1)/25+1);
for(var index=1;index<=pages;index++){
	$("#a-pages").append("<button class='a-btnpages'>"+index+"</button>")
}
//下一页
$("#a-pages").append("<button class='a-next'>下一页</button>")
//共几页
$("#a-pages").append("<span>"+"共"+pages+"页,到</span>"+"<input id='a-pagesInput'></input>"+"<span>页</span>")
//确定按钮
$("#a-pages").append("<button class='a-pagesSure'>确定</button><span>共</span>"+$(frameArg).length+"<span>条</span>")

//点击回到首页
$(".a-firstPages").click(function(){
	i=0;
	$('.a-btnpages').eq(0).css('background-color','#008de1').siblings('.a-btnpages').css('background-color','#ffffff');
	
	for(var index = 0;index<25;index++){
	
	$(frameArg).eq(index).show()
	
}
	})
	//点击跳转页数
	$(".a-pagesSure").click(function(){
		
		 $(frameArg).hide()
		 var pagesValue=$("#a-pagesInput").val()
		 console.log(pagesValue)
		 i=pagesValue-1;
		for(var index=25*(pagesValue-1);index<25*(pagesValue-1)+25;index++){
		$(frameArg).eq(index).show()
	   }
		
		$(".a-btnpages").eq(pagesValue-1).css('background-color','#008de1').siblings(".a-btnpages").css('background-color','#fff')
		
	})
	//点击在按钮上跳转页数
	$(".a-btnpages").click(function(){
		$(this).css('background-color','#008de1').siblings(".a-btnpages").css('background-color','#fff')
		var pagesValue=$(this).html();
//		console.log(pagesShow)
		 i=pagesValue-1;
		$(frameArg).hide();
		for(var index=25*(pagesValue-1);index<25*(pagesValue-1)+25;index++){
		$(frameArg).eq(index).show()
	   }
	})
		
	
	

	$('.a-btnpages').eq(0).css('background-color','#008de1')
$(".a-next").click(function(){
	i++;
     $(frameArg).hide()
	
	for(var index=25*i;index<25*i+25;index++){
		$(frameArg).eq(index).show()
	}
//	console.log($('.a-btnpages'))
	$('.a-btnpages').eq(i).css('background-color','#008de1').siblings('.a-btnpages').css('background-color','#ffffff')
	console.log(pages)
	console.log(i)
	if(i>=pages-1){
		i=-1
	}
	
})
$(".a-last").click(function(){
	i--;
	if(i<=-1){
		i=pages-1;
	}
	 $(frameArg).hide()
	
	for(var index=25*i;index<25*i+25;index++){
		$(frameArg).eq(index).show()
	}
	console.log(pages)
	
	console.log(i);
	$('.a-btnpages').eq(i).css('background-color','#008de1').siblings('.a-btnpages').css('background-color','#ffffff')
	
})
	
}