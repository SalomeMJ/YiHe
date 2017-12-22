window.onload=function (){
	var mak = document.querySelectorAll('.marks>span')
		
		for (var index = 0 ; index < 5 ; index++){
        mak[index].index = index;
      	mak[index].select = false;
        mak[index].onclick = function(e){
          console.log('1')
          for (var i = 0 ; i <= e.target.index ; i++){
            // 1.先判断一下是否已经被选了

            if (!mak[i].select){
              // 2.如果没选就选上
              mak.select = true;
              mak[i].style.backgroundImage = 'url(../C_images/star2.png)';
            } 


            
          }

        }

      }
      var mak1 = document.querySelectorAll('.markes>span')
		
		for (var index = 0 ; index < 5 ; index++){
        mak1[index].index = index;
      	mak1[index].select = false;
        mak1[index].onclick = function(e){
          console.log('1')
          for (var i = 0 ; i <= e.target.index ; i++){
            // 1.先判断一下是否已经被选了

            if (!mak1[i].select){
              // 2.如果没选就选上
              mak1.select = true;
              mak1[i].style.backgroundImage = 'url(../C_images/star2.png)';
            } 


            
          }

        }

      }
      var mak2 = document.querySelectorAll('.markStar>span')
		
		for (var index = 0 ; index < 5 ; index++){
        mak2[index].index = index;
      	mak2[index].select = false;
        mak2[index].onclick = function(e){
          console.log('1')
          for (var i = 0 ; i <= e.target.index ; i++){
            // 1.先判断一下是否已经被选了

            if (!mak2[i].select){
              // 2.如果没选就选上
              mak2.select = true;
              mak2[i].style.backgroundImage = 'url(../C_images/star2.png)';
            } 


            
          }

        }

      }

      var s1 = document.querySelectorAll('.item>a');
      console.log(s1)
      var s2 = document.querySelectorAll('.dispear');
      var s3 = document.querySelectorAll('.show');
      console.log(s2)
      console.log(s3)
      for (var index=0;index<s1.length;index++){
        s1[index].onclick = function valueGoods(){
          s2[0].style.display='none';
          s3[0].style.display='inline-block';
        }
      }


      
  $(".addmore").children().mouseover(function(){

    
      $("#s-select").children().eq($(this).index()).show().siblings().hide()


  })
     


































}

