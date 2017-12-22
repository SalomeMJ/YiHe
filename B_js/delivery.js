//必填信息的判断
//姓名
$('#B_deliveryName').focus(function(){
    $('#B_deliveryName').css('border','1px solid red');
});
$('#B_deliveryName').blur(function(){
    $('#B_deliveryName').css('border','1px solid #d3d3d3');
   if($('#B_deliveryName').val().length==0){
       alert('请输入收货人姓名!!');
       return;
   }
});
// 所在地区
$('.B_cityss>select').click(function(){
    if($('#B_deliveryName').val().length==0){
        $('#B_alertName').css('display','block');
        return;
    }else{
        $('#B_alertName').css('display','none');
    }
});
//详细地址
$('.B_address').focus(function(){
    $(this).css('border','1px solid red');
    if($('#B_deliveryName').val().length==0){
        $('#B_alertName').css('display','block');
        return;
    }else{
        $('#B_alertName').css('display','none');
    }
    if($('.B_cityss>select').val()=='省份'){
        $('#B_alerts').css('display','block');
        return;
    }else{
        $('#B_alerts').css('display','none');
    }
});
$('.B_address').blur(function(){
    $(this).css('border','1px solid #d3d3d3');
    $('#B_alerts').css('display','none');
    if($('.B_address').val().length==0){
        return;
    }
});
//联系电话
$('#B_phoneNum').focus(function(){
    $(this).css('border','1px solid red');
    if($('#B_deliveryName').val().length==0){
        $('#B_alertName').css('display','block');
        return;
    }else{
        $('#B_alertName').css('display','none');
    }
    if($('.B_cityss>select').val()=='省份'){
        $('#B_alerts').css('display','block');
        return;
    }else{
        $('#B_alerts').css('display','none');
    }
    if($('.B_address').val().length==0){
        $('#B_alertAddress').css('display','block');
        return;
    }else{
        $('#B_alertAddress').css('display','none');
    }
});
$('#B_phoneNum').blur(function(){
    $(this).css('border','1px solid #d3d3d3');
});
//确定事件
var clickNum=0;
$('.B_confirmAddress').click(function(){
    if($('#B_deliveryName').val().length==0 || $('#B_phoneNum').val().length==0 ||
        $('.B_cityss>select').val()=='省份' || $('.B_address').val().length==0){
        alert('请将带*的填写完整!!');
        return;
    }else{
        alert('收货地址设置成功!!');
        clickNum=clickNum+1;
    }

});
/***********************商品信息*************************************************/
//用户是否选中
$('.Bselect').each(function(i){
    $(this).click(function(){
       if($($('.Bselect'))[i].checked!=false){
           if(i==0){
               $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[i].innerHTML));
               $('.B_smallPay').html(parseInt($($('.B_yunPay'))[0].innerHTML)+parseInt($($('.B_goodsTotalPrice'))[0].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
           }else if(i==1){
               $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[i-1].innerHTML)+
                   parseInt($($('.B_viewPrices'))[1].innerHTML));
               $('.B_smallPay').html(parseInt($($('.B_yunPay'))[0].innerHTML)+parseInt($($('.B_goodsTotalPrice'))[0].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
           }else if(i=2){
               $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[i].innerHTML)+
                   parseInt($($('.B_viewPrices'))[i-1].innerHTML)+
                   parseInt($($('.B_viewPrices'))[i-2].innerHTML));
               $('.B_smallPay').html(parseInt($($('.B_yunPay'))[0].innerHTML)+parseInt($($('.B_goodsTotalPrice'))[0].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
           }

       }else{
           if(i==0){
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
               $('#B_shouldPay').html($('#B_shouldPay').html()-parseInt($('#B_totalPay').html())-parseInt($('#B_dropJifen').html()));
               $('.B_smallPay').html($('.B_smallPay').html()-parseInt($($('.B_goodsTotalPrice'))[0].innerHTML)-parseInt($($('.B_yunPay'))[0].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('.B_goodsTotalPrice').html($('.B_goodsTotalPrice').html()-
                   parseInt($($('.B_viewPrices'))[i].innerHTML));

           }else if(i==1){
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
               $('#B_shouldPay').html($('#B_shouldPay').html()-parseInt($('#B_totalPay').html())-parseInt($('#B_dropJifen').html()));
               $('.B_smallPay').html($('.B_smallPay').html()-parseInt($($('.B_viewPrices'))[i].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('.B_goodsTotalPrice').html($('.B_goodsTotalPrice').html()-
                   parseInt($($('.B_viewPrices'))[i].innerHTML));

           }else if(i==2){
               $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
               $('.B_smallPay').html($('.B_smallPay').html()-parseInt($($('.B_viewPrices'))[i].innerHTML));
               $('#B_totalPay').html($('.B_smallPay').html());
               $('.B_goodsTotalPrice').html($('.B_goodsTotalPrice').html()-
                   parseInt($($('.B_viewPrices'))[i].innerHTML));

           }

       }
    });

});
//减
$('.B_countLeft').each(function(i){
    $(this).click(function(){
        if($($('.B_countItem'))[i].innerHTML!=0){
            $($('.B_countItem'))[i].innerHTML=$($('.B_countItem'))[i].innerHTML-1;
            var countNum=$($('.B_countItem'))[i].innerHTML;
            $($('.B_viewPrices'))[i].innerHTML=countNum*35.0;
            $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[i].innerHTML));
            $('.B_smallPay').html(parseInt($($('.B_yunPay'))[0].innerHTML)+parseInt($($('.B_goodsTotalPrice'))[0].innerHTML));
            $('#B_totalPay').html($('.B_smallPay').html());
            $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
            $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
        }
    });
});
// 加
$('.B_countRight').each(function(i){
    $(this).click(function(){
        var countInner=$($('.B_countItem'))[i].innerHTML;
        $($('.B_countItem'))[i].innerHTML=parseInt(countInner)+1;
        var countNum=$($('.B_countItem'))[i].innerHTML;
        $($('.B_viewPrices'))[i].innerHTML=countNum*35.0;
        $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[i].innerHTML));
        $('.B_smallPay').html(parseInt($($('.B_yunPay'))[0].innerHTML)+parseInt($($('.B_goodsTotalPrice'))[0].innerHTML));
        $('#B_totalPay').html($('.B_smallPay').html());
        $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
        $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
        if($($('.Bselect'))[i].checked==false) {
            $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[0].innerHTML));
        }else{
            $('.B_goodsTotalPrice').html(parseInt($($('.B_viewPrices'))[0].innerHTML)+parseInt($($('.B_viewPrices'))[1].innerHTML)+parseInt($($('.B_viewPrices'))[2].innerHTML));
        }
            if(parseInt(countInner)>4){
            alert('每人限购5个');
            $($('.B_countItem'))[i].innerHTML=5;
            $($('.B_viewPrices'))[i].innerHTML='175';
            $('.B_goodsTotalPrice').html('￥875.0');
            return;
        }
    });
});
//删除
$('.B_viewDrop').each(function(i){
    $(this).click(function(){
        $($('.B_goods>ul>li'))[i].style.display='none';
    });
});
function getPay(){
    $('#B_inputBlank').blur(function(){
        if($('#B_inputBlank').val().length!=0){
            $('#B_ownJifen').val(Math.ceil($('#B_inputBlank').val()/1.245));
            $('#B_dropJifen').html('-'+parseInt($('#B_ownJifen').val())/100);
            $('#B_shouldPay').html(parseInt($('#B_totalPay').html())+parseInt($('#B_dropJifen').html()));
            $('.B_canGet').html(parseInt($('#B_shouldPay').html())/10);
        }
    });
}
getPay();

/************************************************************************************/
//提交订单
$('#B_post').click(function(){
   if($($('.B_cardsMes'))[0].value=='' || $($('.B_cardsMes'))[1].value==''){
       alert('带*的不能为空,请填写完整!!');
   }else if(clickNum!=1){
       alert('请填写收货地址');
   } else{
       alert('提交成功');
       window.location='../A_html/Apay.html';
   }
});
//城市
var Gid  = document.getElementById ;
var showArea = function(){
    Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" +
        Gid('s_city').value + " - 县/区" +
        Gid('s_county').value + "</h3>"
};
Gid('s_county').setAttribute('onchange','showArea()');
























