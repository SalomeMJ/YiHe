//我的易和券
$('.B_myquans').each(function(i){
   $(this).click(function(){
       if(i==0){
           $('#B_content').css('height','855px');
           $('#B_show').css('height','791px');
           $($('.B_shows'))[i].style.display='block';
           $($('.B_shows'))[i+1].style.display='none';
           $($('.B_shows'))[i+2].style.display='none';
           $($('.B_shows'))[i+3].style.display='none';
           $(this).css('color','#f60');
           $(this).css('text-decoration','underline');
           $($('.B_myquans'))[i+1].style.color='#999';
           $($('.B_myquans'))[i+1].style.textDecoration='none';
           $($('.B_myquans'))[i+2].style.color='#999';
           $($('.B_myquans'))[i+2].style.textDecoration='none';
           $($('.B_myquans'))[i+3].style.color='#999';
           $($('.B_myquans'))[i+3].style.textDecoration='none';
           $(this).css('text-decoration','underline');
           $('#B_messageBottom').css('display','none');
       }else if(i==1){
           $('#B_content').css('height','855px');
           $('#B_show').css('height','791px');
           $($('.B_shows'))[i].style.display='block';
           $($('.B_shows'))[i-1].style.display='none';
           $($('.B_shows'))[i+1].style.display='none';
           $($('.B_shows'))[i+2].style.display='none';
           $($('.B_myquans'))[i-1].style.color='#999';
           $($('.B_myquans'))[i-1].style.textDecoration='none';
           $($('.B_myquans'))[i+1].style.color='#999';
           $($('.B_myquans'))[i+1].style.textDecoration='none';
           $($('.B_myquans'))[i+2].style.color='#999';
           $($('.B_myquans'))[i+2].style.textDecoration='none';
           $(this).addClass('one');
           $(this).css('color','#f60');
           $(this).css('text-decoration','underline');
           $('#B_messageBottom').css('display','none');
       }else if(i==2){
           $('#B_content').css('height','855px');
           $('#B_show').css('height','791px');
           $($('.B_shows'))[i].style.display='block';
           $($('.B_shows'))[i-1].style.display='none';
           $($('.B_shows'))[i-2].style.display='none';
           $($('.B_shows'))[i+1].style.display='none';
           $($('.B_myquans'))[i-1].style.color='#999';
           $($('.B_myquans'))[i-1].style.textDecoration='none';
           $($('.B_myquans'))[i-2].style.color='#999';
           $($('.B_myquans'))[i-2].style.textDecoration='none';
           $($('.B_myquans'))[i+1].style.color='#999';
           $($('.B_myquans'))[i+1].style.textDecoration='none';
           $(this).css('color','#f60');
           $(this).css('text-decoration','underline');
           $('#B_messageBottom').css('display','none');
       }else if(i==3){
           $($('.B_shows'))[i].style.display='block';
           $($('.B_shows'))[i-1].style.display='none';
           $($('.B_shows'))[i-2].style.display='none';
           $($('.B_shows'))[i-3].style.display='none';
           $($('.B_myquans'))[i-1].style.color='#999';
           $($('.B_myquans'))[i-1].style.textDecoration='none';
           $($('.B_myquans'))[i-2].style.color='#999';
           $($('.B_myquans'))[i-2].style.textDecoration='none';
           $($('.B_myquans'))[i-3].style.color='#999';
           $($('.B_myquans'))[i-3].style.textDecoration='none';
           $('#B_content').css('height','600px');
            $('#B_show').css('height','544px');
           $(this).css('color','#f60');
           $(this).css('text-decoration','underline');
           $('#B_messageBottom').css('display','block');

       }

   });

});
//我的收藏
$('.B_gift').mouseover(function(){
    $(this).addClass(' B_firstGift');
});
$('.B_gift').mouseout(function(){
    $(this).removeClass(' B_firstGift');
});
//查看和删除数据
//查看数据
function clickLook(){
    $('.B_clickLook').each(function(i){
        $(this).click(function(){
            $('.B_status').css('display','none');
            $('.B_messageTitle').css('display','none');
            $('.B_checkContent').css('display','block');
            $($('.B_notlook'))[i].innerHTML='已查看';
            $($('.B_notlook'))[i].style.color='#666';
            //    让前一页显示
            $('.B_backPage').css('display','block');
            $('.B_backPage').css('display','inline-block');
            $('.B_backPage').css('width','90px');
            $('.B_backPage').css('padding','0');
            //返回前一页
            $('.B_backPage').click(function(){
                $('.B_status').css('display','block');
                $('.B_messageTitle').css('display','block');
                $('.B_checkContent').css('display','none');
                $(this).css('color','#008de1');
                $('#B_firstPage').css('color','#666');
                $(this).css('display','none');
            });
        });
    });
}
//删除数据
function dropData(){
    $('.B_drop').each(function(i){
        $(this).click(function(){
            $($('.B_statusItems'))[i].style.display='none';
        });

    });
}
//我的消息动态添加数据
function  addData1() {
    count++;
    $('<div class="B_statusItems">\n' +
        '<span>您的货物已发货您的货物已发货您的货物已发货</span>\n' +
        '<span>2015年9月23日&nbsp;15:25:07</span>\n' +
        '<span class="B_notlook">未查看</span>\n' +
        '<span class="B_clickLook">查看</span>\n' +
        '<span>|</span>\n' +
        '<span class="B_drop">删除</span>\n' +
        '</div>').appendTo($('#B_pages'));
    clickLook();
    dropData();
}
addData1();addData1();addData1();
var count=0;
function addData2(){
    count++;
    $('<div class="B_statusItems">\n' +
        '<span>您的货物已发货您的货物已发货您的货物已发货</span>\n' +
        '<span>2015年9月23日&nbsp;15:25:07</span>\n' +
        '<span class="B_notlook B_look">已查看</span>\n' +
        '<span class="B_clickLook">查看</span>\n' +
        '<span>|</span>\n' +
        '<span class="B_drop">删除</span>\n' +
        '</div>').appendTo($('#B_pages'));
    clickLook();
    dropData();
}
addData2();addData2();addData2();addData1();addData2();addData2();addData2();
//上一页

function  lastPageClick() {
    if(count<11){
        $('#B_firstPage').css('color','#808080');
        $(this).css('color','#008de1');
        alert('当前是第一页');
        return;
    }
    $(this).css('color','#008de1');
    $('#B_firstPage').css('color','#808080');
    $('#B_page>span:nth-child(2)').addClass('B_onePage');
    $('#B_page>span:nth-child(3)').removeClass('B_onePage');
    $('.B_nextPage').css('color','#808080');
    $('#B_pages').html('');
    addData1();addData1();addData1();addData2();addData2();addData2();addData1();addData2();addData2();addData2();

}
$('.B_lastPage').click(function() {
    lastPageClick();
});
//下一页
function demandItem(){
    $('#B_pages').html('');
    addData2();addData1();addData2();addData1();addData1();
}
function nextPageClick(){
    $('#B_page>span:nth-child(2)').removeClass('B_onePage');
    $('#B_page>span:nth-child(3)').addClass('B_onePage');
    $(this).css('color','#008de1');
    demandItem();
    $('.B_lastPage').css('color','#808080');
    $('#B_firstPage').css('color','#808080');
}
$('.B_nextPage').click(function(){
    nextPageClick();
});
//首页
function firstPageClick(){
    if(count<11){
        alert('当前是第一页');
        $('#B_firstPage').css('color', '#008de1');
        return;
    }else if(count>10){
        $('#B_firstPages').html('');
        $(this).css('color', '#008de1');
        $('.B_lastPage').css('color','#808080');
        $('.B_nextPage').css('color','#808080');
        $('#B_page>span:nth-child(2)').addClass('B_onePage');
        $('#B_page>span:nth-child(3)').removeClass('B_onePage');
        $('#B_pages').html('');
        addData1();addData1();addData1();addData2();addData2();addData2();addData1();addData2();addData2();addData2();
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


























