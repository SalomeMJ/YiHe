$(document).ready(function(){
        var curIndex = 0, //当前index
        imgLen = $(".imgList li").length; //图片总数
     // 定时器自动变换2.5秒每次
        var autoChange = setInterval(function(){ 
          if(curIndex == 5){ 
            curIndex = 1;
            $(".imgList").css({
                left: 0
            })
            
          }else{ 
            
            curIndex ++;
            
          }

          //调用变换处理函数
          changeTocir(curIndex==5?0:curIndex);
          changeTo(curIndex); 
        },5000);
        //左箭头滑入滑出事件处理
        /*$("#prev").hover(function(){ 
          //滑入清除定时器
          clearInterval(autoChange);
        },function(){ 
          //滑出则重置定时器
          autoChangeAgain();
        });
        //左箭头点击处理
        $("#prev").click(function(){ 
          //根据curIndex进行上一个图片处理
          curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
          changeTo(curIndex);
        });
        //右箭头滑入滑出事件处理
         $("#next").hover(function(){ 
           //滑入清除定时器
           clearInterval(autoChange);
         },function(){ 
           //滑出则重置定时器
           autoChangeAgain();
         });
         //右箭头点击处理
         $("#next").click(function(){ 
           curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
           changeTo(curIndex);
         });*/
        // 清除定时器时候的重置定时器--封装
          /*function autoChangeAgain(){ 
              autoChange = setInterval(function(){ 
              if(curIndex < imgLen-1){ 
                curIndex ++;
              }else{ 
                curIndex = 0;
              }
            //调用变换处理函数
              changeTo(curIndex); 
            },1000);
            }*/
            function changeTo(num){ 
            var goLeft = num * 1922;
            // alert(num)
            $(".imgList").animate({left: "-" + goLeft + "px"},2000);
            // $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
          }
          function changeTocir(num){
        $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
    }
          //对右下角按钮index进行事件绑定处理等
          /*$(".indexList").find("li").each(function(item){ 
            $(this).hover(function(){ 
              clearInterval(autoChange);
              changeTo(item);
              curIndex = item;
            },function(){ 
              autoChangeAgain();
            });
          });*/

    });