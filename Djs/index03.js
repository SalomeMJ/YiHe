$(function(){
	$('#content-xq>div').eq(0).children().eq(0).css({'color':'blue','border-top':'1px solid blue'});
$('#content-xq>div').eq(0).children().click(function(){
	$('#content-xq>div').eq(0).children().css({'color':'black','border-top':'1px solid gray'});
	$(this).css({'color':'blue','border-top':'1px solid blue'});
	var a = $(this).index();
	if(a==0){
		a=2;
	}else if(a==2){
		a=0;
	}
	$('#content-xq>div').eq(1).children().hide().eq(a).show();

})

$('#content-commodity-cc>div>span').click(function(){
	// console.log($('#content-commodity-cc>div>span'));
	$(this).siblings('span').css('border','2px solid gray');
	$(this).css('border','2px solid red');
})

  $('#content-commodity-jg-to').click(function(){
  	if($('#content-commodity-jg-ton').html()>=1){
  	$('#content-commodity-jg-ton').html(Number($('#content-commodity-jg-ton').html())-1);
  	}
  	

  }) 
   $('#content-commodity-jg-tt').click(function(){
   	if($('#content-commodity-jg-ton').html()<=999){
   		$('#content-commodity-jg-ton').html(Number($('#content-commodity-jg-ton').html())+1);
   	}
  	
  })                       
                      

// 翻页功能



//当前页 一页让他显示7行
var page =1; 


//总页面
var pages=50;

var dd = Math.floor((pages-1)/7)+1//总页数
if(dd>5){
	$('.address-we-bb-aba').after('<i>'+'......'+'<i>');
}else{
	$('.address-we-bb i').remove();
}
// var pages = $('.address-we-aa>li').length+1/7;

//创建标签页
for(var i = 1;i<dd;i++){
	if(dd>5){
		$('.address-we-bb-abb').html(dd-1);
		$('.address-we-bb-abc').html(dd);
	}
}

//标签内容动态改变
// function boxo3(){
// 	$($('.address-we-bb-a')[0]).html(page);
// 	$($('.address-we-bb-a')[1]).html(page+1);
// 	$($('.address-we-bb-a')[2]).html(page+2);
// }


// 添加函数
function boxo(){
	for(var index = (page-1)*7;index<(page)*7 && index<pages;index++){
		$('.address-we-aa').append('<li>'+'<span>'+'张*****'+'</span>'+'<span>'+'¥699.00'+'</span>'+'<span>'+'1'+'</span>'+'<span>'+'2015-09-10 16:09:14'+'</span>'+'</li>')
	}	
}

// 删除函数
function boxo1(){
$('.address-we-aa').empty();
}


//显示默认页
boxo();


//上一页
$('.address-we-bb-c').click(function(){
	if(page>1){
		page--;
		boxo1();
		// boxo3();
		boxo();
		// if(page>$('.address-we-bb-bab').html()){
		// 	$('.address-we-bb-aa').html(page-1);
		// }//动态页码如何实现？？
		//如何判断让上一页的时候标签跟着变颜色
		// if($('.address-we-bb-a').html()== page){
		// 	console.log($(this).html());
			if(dd>5){
				if(page>3){
					if(page==dd-1){
						console.log(888888);
						boxo2($('.address-we-bb-a')[3]);
					}else{
						console.log(3165);
						$('.address-we-bb-a').css({'backgroundColor':'#fff','color':'black'});
					}
				}else{
					boxo2($('.address-we-bb-a')[page-1]);
				}
			}else{
				boxo2($('.address-we-bb-a')[page-1]);
			}	
	}	
})

//下一页
$('.address-we-bb-d').click(function(){
	if(page<dd){
		// console.log('15661565665');
		page++;
		boxo1();
		// boxo3();
		boxo();
		if(dd>5){
			if(page>3){
				if(page==dd-2){
					console.log(888888);
					boxo2($('.address-we-bb-a')[3]);
				}else if(page==dd-1){
					boxo2($('.address-we-bb-a')[4]);
				}else if(page==dd){
					return ;
				}else{
					console.log(3165);
					$('.address-we-bb-a').css({'backgroundColor':'#fff','color':'black'});
					}
			}else{
					boxo2($('.address-we-bb-a')[page-1]);
				}
		}else{
				boxo2($('.address-we-bb-a')[page-1]);
			}
	}else{
		boxo2($('.address-we-bb-a')[4]);
	}
})

//首页
$('.address-we-bb-b').click(function(){
	page = 1;
	boxo1();
	boxo();
	boxo2($('.address-we-bb-a')[0]);
})

//标签变色
function boxo2(a){
	$('.address-we-bb-a').css({'backgroundColor':'#fff','color':'black'});
	$(a).css({'backgroundColor':'#3786dd','color':'#fff'});
}


$('.address-we-bb-a').click(function(){
	boxo2(this);
	// boxo3();
	page = $(this).html();
	boxo1();
	// console.log($(this).html());
	boxo();
})



//到达指定页
// $('.address-we-bb-e').click(function(){
// 	console.log($('.address-we-bb-bba').val());
// 	if($('.address-we-bb-bba').val()<dd){

// 		var page = $('.address-we-bb-bba').val();
// 		boxo1();
// 		boxo();
// 		boxo2()
// 	}
// })































})