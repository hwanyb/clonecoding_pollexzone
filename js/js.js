$(document).ready(function () {
    $(".svg").animate({
        opacity: "1",
        top: "-180px"
    }, 1000);
    $(".mainp").delay(500).animate({
        top: "0px",
        opacity: "1"
    }, 1000);
    $("header").delay(300).animate({
        top: "0px"
    }, 500);

    $(".mainsec1").find(".btn_more").delay(500).animate({
        top: "0px",
        opacity: "1"
    }, 1000);
    $(".header_wrap").find(".btn_nav>a").mouseover(function () {
        $(this).children("#lastdiv").animate({
            width: "23px"
        }, 200);
        $(this).children("#firstdiv").animate({
            width: "15px"
        }, 200)
    });
    $(".header_wrap").find(".btn_nav>a").mouseleave(function () {
        $(this).children("#lastdiv").animate({
            width: "15px"
        }, 200);
        $(this).children("#firstdiv").animate({
            width: "23px"
        }, 200)
    });
    $(".btn_nav").on("click", function () {
        $(".bigNav").fadeIn(500);
        
        $(".bigNav").find(".btn_nav>a>div").css("background-color", "#fff");
        $(".bigNav").find("#firstdiv").animate({
            top: "6px"
        }, 50);
        $(".bigNav").find("#firstdiv").transition({
            "rotate": "45deg"
        }, 600);
        
        $(".bigNav").find("#lastdiv").animate({
            width: "23px",
            bottom: "7px"
        }, 50);
        $(".bigNav").find("#lastdiv").transition({
            "rotate": "-45deg"
        }, 600);
        $(".bigNav").find("#seconddiv").animate({
            left: "100px"
        }, 500);
    });

    $(".bigNav").find(".btn_nav").on("click", function () {
        $(".bigNav").fadeOut(500);
        $(".bigNav").find("#firstdiv").transition({
            "rotate": "0deg"
        }, 50);
        $(".bigNav").find("#firstdiv").animate({
            top: "0"
        }, 50);
        $(".bigNav").find("#lastdiv").animate({
            width: "15px",
            bottom: "0"
        }, 50);
        $(".bigNav").find("#lastdiv").transition({
            "rotate": "0deg"
        }, 50);
        $(".bigNav").find("#seconddiv").animate({
            left: "0px"
        }, 50);

    });


    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        if (sct >= 600) {
            $(".mainsec3").find(".cont_left").animate({
                "background-position-x": "0px"
            }, 1000)
            $(".mainsec3").find(".cont_right1").animate({
                "background-position-x": "0px"
            }, 1000)

            $(".mainsec3").find(".cont_right2").animate({
                "background-position-y": "0px"
            }, 1000)

            $(".mainsec3").find(".cont_right3").animate({
                "background-position-y": "0px"
            }, 1000)

            $(".mainsec3").find(".cont_right4").animate({
                "background-position-x": "0px"
            }, 1000)


        }
    });

    
    
//    
//    var swiper = new Swiper('.swiper-container2',{
//    
//    }
// 
//    $(".mapo_btn").on("click", function() {
//        var img_index = $(this).closest(".item").index();
//        
//        imgDetail.slideTo(img_index);
//    });                
////
//    $(".mapo_btn").on("click", function () {
//        $(".mapo").slideTo(".swiper-slide[0]");
//    });
//    $(".gong_btn").mouseover(function () {
//        $(".gong").fadeIn(400);
//    });
//    $(".seoul_btn").mouseover(function () {
//        $(".seoul").fadeIn(400);
//    });
//    
//    $(".bigNav").find("h2").on("click", function(){
//        $(this).next("ul").show();
//    });
    
//    $(".bigNav").find("h2").on("click", function(){
//        $(this).next("ul").hide();
//    });
    
    
//    $(window).resize(function() { 
//        if($(window).width() >767) { 
//        $(".swiper-container2").slidesPerView:1,
//         slidesPerView: 1,
//  spaceBetween: 10,
//  breakpoints: {
//    '@0.75': {
//      slidesPerView: 2,
//      spaceBetween: 20,
//    },
//    '@1.00': {
//      slidesPerView: 3,
//      spaceBetween: 40,
//    },
//    '@1.50': {
//      slidesPerView: 4,
//      spaceBetween: 50,
//    },
//  }

            
            
        
//        /* do something */ } });

//    
//    $(window).resize(function() {
//        if($(window).width() > 767){
//            $(".swiper-container2").slidesPerView(1);
//        }
//    });
//    
    
    
    
    
    
    
    
    
    
    
    
    
})
