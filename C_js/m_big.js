
$(function(){
	// 个人资料js
	// 商家商品
	$('.m_head_search span').click(function(e){
		var e =  window.event || e;
		$(this).addClass('selected').siblings('span').removeClass('selected');
	})

	//导航nav
	$('.m_head_buttom li a').click(function(){
		$(this).css({'color':'#e87422'}).parent().siblings().children().css('color','#727272');
	})

	$('.m_head_buttom > a').click(function(){
		$(this).toggleClass('checked');
	})
	// *****************************//





	// 行业分类
	// $('.m_head_buttom > span').hover();

	// 个人中心折叠菜单
	$('.m_cont_lists>ul>li').click(function(e){
		var e =  window.event || e;
		var index = $(this).index();
		console.log(index);
		$(this).children().eq(1).css('display','block');
		$(this).siblings().children('.item').css('display','none')									
	})

	// 订单为空list
	$('.cont2 li a').click(function(e){
		var e = window.event || e;
		var index = $(this).parent().index();
		$('.cont2 li a').removeClass('m_a_selected');
		$(this).addClass('m_a_selected');
		
	});

	$(".delTe>a").click(function (){
		$(".s5>.s1").css("display","none")
		console.log($(".s5>.s1"))
	})










});
		
