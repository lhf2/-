
/*
    hezuojiaxiao.html
    轮播图
*/
var swiperImg = function(){
    var swiper_box = $(".swiper-box");
    var swiper_img = $(".swiper-img");
    var swiper_ul = swiper_img.find('ul');
    var swiper_li = swiper_ul.find('li');
    var swiper_li_w = swiper_li.width();
    var swiper_li_len = swiper_li.length;
    var swiper_w = swiper_li_len*swiper_li_w;
    swiper_img.find('ul').width(swiper_w);
    var rBtn = swiper_box.find('.btn');
    var idx = 0;
    rBtn.click(function(){
       var des = $(this).attr('class');
       des.indexOf('l')==-1?idx++:idx--;
       if(idx < 0){
        idx = swiper_li_len-1
       }else if(idx > swiper_li_len-1){
        idx = 0
       }
       moveimg(idx);
    });

     function moveimg(i){
        swiper_ul.stop().animate({
            left: -swiper_li_w*i
        },300)
    }
}
var myUrl = window.location.href;
$(document).ready(function(){
    //头部导航显示隐藏效果
    $('.header').hover(function () {
        $('.head-menu').css('margin-top','0px');
    },function(){
        $('.head-menu').css('margin-top','-120%');
    })
    //竖轮播
    //获取窗口跟底部高度
    var win_h = $(window).height();
    var ftH = $(".footer").height();
    var len=$(".med_fixnav ul li").length-1;
    var isAni = false;
    var step=0;
    //鼠标滚动事件
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        
        
        if(

            myUrl.indexOf('index.html')           != -1 ||
            myUrl.indexOf('activity-public.html') != -1 ||
            myUrl.indexOf('offline.html')         != -1 ||
            myUrl.indexOf('online.html')          != -1 ||
            myUrl.indexOf('digital-market.html')  != -1 
                
        ){
            
        


            if(isAni==false){
                isAni=true;
                win_h = $(window).height();
                ftH = $(".footer").height();
                var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
                if (delta > 0) {
                    // 向上滚
                    step--;
                    console.log(step+'$$$'+win_h);
                } else if (delta < 0) {
                    step++;
                    // 向下滚
                    console.log(step+'$$$'+win_h);
                }
                if(step<0){
                    step=0
                }else if(step>len){
                    step=len
                }
                setpFunc(step,win_h,600);
                var timeOut = setTimeout(function() {
                    isAni = false;
                }, 1000);
            }
            return false;
        

        }
    });

    if(

            myUrl.indexOf('index.html')           != -1 ||
            myUrl.indexOf('activity-public.html') != -1 ||
            myUrl.indexOf('offline.html')         != -1 ||
            myUrl.indexOf('online.html')          != -1 ||
            myUrl.indexOf('digital-market.html')  != -1 
                
        ){

    touch.on( document, 'swipeup', function(){
        touchmove('up')
    });

    touch.on( document, 'swipedown', function(){
        touchmove('down')
    });

    }

    // 手指滑动
    function touchmove(_d){

        if(isAni==false){
            isAni=true;
            win_h = $(window).height();
            ftH = $(".footer").height();
            // var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            //     (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            if (_d == 'down') {
                // 向上滚
                step--;
                console.log(step+'$$$'+win_h);
            } else if (_d == 'up') {
                step++;
                // 向下滚
                console.log(step+'$$$'+win_h);
            }
            if(step<0){
                step=0
            }else if(step>len){
                step=len
            }
            setpFunc(step,win_h,600);
            var timeOut = setTimeout(function() {
                isAni = false;
            }, 800);
        }
        return false;
    }

    function setpFunc(step, win_h,time){
        if(step<len){
            $('#dowebok').stop().animate({
                'top': -win_h*step
            },time, 'easeOutSine',function(){
                $('.fp-section'+(step+1)).addClass('active').siblings('.fp-section').removeClass('active');
            });
            $(".med_fixnav ul li").eq(step).addClass("active").siblings().removeClass("active");
        }else if(step==len){
            $('#dowebok').stop().animate({
                'top': -(win_h*(step-1)+ftH)
            },time, 'easeOutSine',function(){
                $('.fp-section'+(step+1)).addClass('active').siblings('.fp-section').removeClass('active');
            });
            $(".med_fixnav ul li").eq(step).addClass("active").siblings().removeClass("active");
        }
    }
    //点击圆点
    var fixnav_num = $(".med_fixnav ul li").length-1;
    $(".med_fixnav ul li").click(function(){
        isAni = false;
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        var topH = win_h*i;
        var topH2 = win_h*(i-1)+ftH;
        if(i==fixnav_num){
            $("#dowebok").animate({top:-topH2+"px"});
        }else{
            $("#dowebok").animate({top:-topH+"px"});
        }
        $("#dowebok .fp-section").eq(i).addClass('active').siblings().removeClass('active');
        step = i;
    });
    //点击导航栏
    $('#menu li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    /*
     zixunhuanli.html
     tab切换
     */
    $('.tab-title .tab-text').click(function(){
        console.log(1);
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.tab-content .tab-child').eq(index).addClass('show').siblings().removeClass('show');
    });
})