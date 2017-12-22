$(function(){
	$('#p-nav-ff>li').hover(function(){
		$(this).css('backgroundColor','#008de1');
	},function(){
		$(this).css('backgroundColor','#fff');
		$('#p-nav-ff>li').eq(0).css('backgroundColor','#008de1');
	})

	
	// console.log($('#p-nav-ff>li').eq(0));
	$('#p-nav-ff>li').eq(0).hover(function(){
		// $('#p-nav-ff>li').eq(0).children().hide();
		$('#p-nav-ff>li').eq(0).children().eq(1).show();
		$('#p-nav-ff>li').eq(0).children().eq(2).show();
	},function(){
		$('#p-nav-ff>li').eq(0).children().hide();
		$('#p-nav-ff>li').eq(0).children().eq(0).show();

	})

	$('#p-nav-ff-a>li').hover(function(){
		$(this).css('backgroundColor','#e36b1f');
		var a = $(this).index();
		$('.p-nav-ff-b').hide();
		$('.p-nav-ff-b').eq(a).show();
	},function(){
		$(this).css('backgroundColor','#404040');
	})


	// $('.content-nav-a-a').click(function(){
	// 	var a = $(this).parent().index();
	// 	// console.log($('.content-nav-a-b'));
	// 	$(this).parent().children().eq(1).toggle();
	// })

	// $('.content-nav-a-ba>li').hover(function(){
	// 	// console.log($(this))
	// 	$(this).css({'color':'#ed7122','text-decoration':'underline'});
	// },function(){
	// 	$(this).css({'color':'gray','text-decoration':'none'});
	// })


	// $('#content-nav-a>ul>li').eq(1).children().eq(1).click(function(){
	// 	$('#address-we').children().hide();
	// 	$('#address-bb').show();
	// })


	// $('#address>p>span').eq(1).click(function(){
	// 	$('#address-we').children().hide();
	// 	$('#address-cc').show();
	// })

	// $('#content-nav-a-baed').click(function(){
	// 	$('#address-we').children().hide();
	// 	$('#address-www').show();
	// })


function getRequest(url,call){

$.ajax({
	type:'GET',
	url:url,
	dataType:'jsonp',
	jsonp:'callback',
	success:function(data){
		call(data);
	},
	error:function(jqXHR){
		call('error'+jqXHR.stauts);
	}

});

};


function requestPreData(call){
	var url = 'http://api.jisuapi.com/area/province?appkey=b24b1cc925f38a1a';
	getRequest(url,call);
}


function callback1(data){
	if(data){
		if(typeof data == typeof {}){
			var preDatas =[];
			var a='';
			for(var index = 0;index < data.result.length;index++){
				var obj = data.result[index].name;	
				 a += '<a>' + data.result[index].name + '</a>';
				 $('#p-header-css').html(a);
			}
		}
	}
}


$('#p-header-cs').hover(function(){
$('#p-header-css').show();
$('#p-header-cs').css('backgroundColor','#fff');
requestPreData(callback1);

},function(){
	$('#p-header-cs').css('backgroundColor','#eeeeee');
	$('#p-header-css').hide();
})

$('#p-header-css').on('click',$('#p-header-css>a'),function(event){
	// console.log(event.target);
	console.log('213126565');
	if(event.target.nodeName.toLowerCase() == 'a'){
		var a = event.target.innerHTML;
		// console.log(a);

		$('#p-header-cs>span').html(a);
		console.log('aaaaaaaaaaaaaa');
	}
	// console.log('111111');
	// var a = $(this).html();
	// console.log(this);
	// $('#p-header-cs>span').html(a);
})
$('#p-header-css').on('mouseover',$('#p-header-css>a'),function(event){
	if(event.target.nodeName.toLowerCase() == 'a'){
		 $(event.target).css('backgroundColor','red');	
	}
})
$('#p-header-css').on('mouseout',$('#p-header-css>a'),function(event){
	if(event.target.nodeName.toLowerCase() == 'a'){//不知道为什么不加toLowerCase()进入不了这个条件
		 $(event.target).css('backgroundColor','');	
	}
})











});













