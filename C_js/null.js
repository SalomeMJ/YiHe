
function YYYYMMDDstart()   
{   
       MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   

       //先给年下拉框赋内容   
       var y  = new Date().getFullYear();   
       for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年   
               document.reg_testdate.YYYY.options.add(new Option(" "+ i , i));   

       //赋月份的下拉框   
       for (var i = 1; i < 13; i++)   
               document.reg_testdate.MM.options.add(new Option(" " + i , i));   

       document.reg_testdate.YYYY.value = y;   
       document.reg_testdate.MM.value = new Date().getMonth() + 1;   
       var n = MonHead[new Date().getMonth()];   
       if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
            writeDay(n); //赋日期下拉框Author:meizz   
       document.reg_testdate.DD.value = new Date().getDate();   
}   
if(document.attachEvent)   
   window.attachEvent("onload", YYYYMMDDstart);   
else   
   window.addEventListener('load', YYYYMMDDstart, false);   
function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
{   
       var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
       if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
       var n = MonHead[MMvalue - 1];   
       if (MMvalue ==2 && IsPinYear(str)) n++;   
            writeDay(n)   
}   
function MMDD(str)   //月发生变化时日期联动   
{   
    var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
    if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
    var n = MonHead[str - 1];   
    if (str ==2 && IsPinYear(YYYYvalue)) n++;   
   writeDay(n)   
}   
function writeDay(n)   //据条件写日期的下拉框   
{   
       var e = document.reg_testdate.DD; optionsClear(e);   
       for (var i=1; i<(n+1); i++)   
            e.options.add(new Option(" "+ i, i));   
}   
function IsPinYear(year)//判断是否闰平年   
{     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
function optionsClear(e)   
{   
    e.options.length = 1;   
}  


var pnum = document.querySelectorAll('.leside>p');
var show = document.getElementsByClassName('rlside');
var show1 = document.getElementsByClassName('r-lside');


for (var index=0;index<pnum.length;index++){
  pnum[3].onclick=function(){

console.log('44')
    
      show[0].style.display='inline-block';
      pnum[3].style.color='red';
      pnum[3].style.textDecoration='underline'
      pnum[7].style.textDecoration='none'
      pnum[7].style.color='#666';

      show1[0].style.display='none';
  }
  pnum[7].onclick=function (){
    show[0].style.display='none';
      pnum[7].style.color='red';
      pnum[7].style.textDecoration='underline'
      pnum[3].style.textDecoration='none'
      pnum[3].style.color='#666';
      show1[0].style.display='inline-block';
  }
}

$(".addmore").children().mouseover(function(){

    
      $("#s-select").children().eq($(this).index()).show().siblings().hide()
    })































