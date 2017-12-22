$(".addmore").children().mouseover(function(){
console.log('141')
    
      $("#s-select").children().eq($(this).index()).show().siblings().hide()


  })