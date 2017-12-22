window.onload=function(){
	// div.className='r_nav';
	// rnav.appendChild(div);
	$(".addmore").children().mouseover(function(){

    
      $("#s-select").children().eq($(this).index()).show().siblings().hide()


  })
	
}