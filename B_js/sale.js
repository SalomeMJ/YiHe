// 轮播图
$('#B_banner>img').eq(0).show().siblings().hide();
$('#B_number').children().first().css('background','#ff6c00');
var page=0;
function moveLeft(){
    page++;
    if(page==$('#B_banner img').length){
        page=0;
    }
    move();
}
function move() {
    $($('#B_banner img')[page]).fadeIn(300).siblings().fadeOut(300);
    $($('#B_number>div')[page]).css('background','#ff6c00');
    $($('#B_number>div')[page]).siblings().css('background','');
}
setInterval(moveLeft,2000);
//内容部分轮播图
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay:1000,
    spaceBetween: 20
});
//动态生成今日特价内容
var count=0;
function addItem(){
    count++;
    $(' <li class="B_gift">\n' +
        '   <img src="../B_images/fruit1.png" alt="">\n' +
        '   <div class="B_giftTitle">\n' +
        '       <span class="B_giftTitles">自家礼包送亲人，送朋友的不二选择自家礼包送亲人...</span>\n' +
        '       <div class="B_giftPrice">\n' +
        '           <span>￥11.8</span>\n' +
        '           <span class="B_disc">￥20.0</span>\n' +
        '       </div>\n' +
        '   </div>\n' +
        '</li>').appendTo($('#B_firstPages'));
}
addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();
addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();
function demandItem(){
    addItem();
    if(count>20){
        $('#B_firstPages').html('');
    }
    addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();

}
//下一页
function nextPageClick(){
    $('#B_page>span:nth-child(2)').removeClass('B_onePage');
    $('#B_page>span:nth-child(3)').addClass('B_onePage');
    $(this).css('color','#008de1');
    demandItem();
    $('.B_lastPage').css('color','#808080');
    $('#B_firstPage').css('color','#808080');
    mouseOver();
}
$('.B_nextPage').click(function(){
    nextPageClick();
});
// 上一页
function  lastPageClick() {
        if(count<21){
            $('#B_firstPage').css('color','#808080');
            $(this).css('color','#008de1');
            alert('当前是第一页');
            return;
        }
        $(this).css('color','#008de1');
        $('#B_firstPage').css('color','#808080');
        $('#B_page>span:nth-child(2)').addClass('B_onePage');
        $('#B_page>span:nth-child(3)').removeClass('B_onePage');
        addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();
        $('.B_nextPage').css('color','#808080');
        mouseOver();
}
$('.B_lastPage').click(function() {
    lastPageClick();
});
//首页
function firstPageClick(){
    if(count<21){
        alert('当前是第一页');
        return;
    }else if(count>40){
        $('#B_firstPages').html('');
        $(this).css('color', '#008de1');
        $('.B_lastPage').css('color','#808080');
        $('.B_nextPage').css('color','#808080');
        $('#B_page>span:nth-child(2)').addClass('B_onePage');
        $('#B_page>span:nth-child(3)').removeClass('B_onePage');
        addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();
        addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();addItem();
        mouseOver();
    }
}
$('#B_firstPage').click(function() {
    firstPageClick();
});
//跳页
$('.B_decide').click(function(){
    if($('#B_blanks').val()==1){
        lastPageClick();
        $('#B_firstPage').css('color','#008de1');
        return;
    }else if($('#B_blanks').val()==2){
        nextPageClick();
        return;
    }else if($('#B_blanks').val()==''){
        alert('请输入页码');
        return;
    }else{
        alert('该页不存在,请重新输入');
        return;
    }
});

function mouseOver(){
    $('.B_gift').mouseover(function(){
        $(this).addClass('B_saleLi');
    });
    $('.B_gift').mouseout(function(){
        $(this).removeClass('B_saleLi');
    });
}
mouseOver();














