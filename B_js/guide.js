$('#B_citys').focus(function(){
    $('#B_hotcitys').css('display','block');
});
var current=$('.B_cityItem');
$('.B_citys>span').click(function(){
    $('#B_citys').val($(this).html());
    $('.B_selCity').html($(this).html());
    current.removeClass('B_cityItem');
    $(this).addClass('B_cityItem');
    $('#B_hotcitys').css('display','none');
    console.log(8)
});
