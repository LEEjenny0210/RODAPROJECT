$(document).ready(function () {

    var lnb = $("#hd").offset().top;
    $(window).scroll(function () {
        var window = $(this).scrollTop();

        if (lnb < window) {
            $("#hd").addClass("fixed");
        } else {
            $("#hd").removeClass("fixed");
        }
    });


    $(".hd_container>nav>ul>li").mouseover(function () {
        $(".hd_wrap").addClass("menu_active");
        $(".depth_box").show();
    });
    $(".depth_box").mouseleave(function () {
        $(".hd_wrap").removeClass("menu_active");
        $(".depth_box").hide();
    });

    $(function () {
        // divBodyScroll의 스크롤이 동작할때에 함수를 불러옵니다.
        $('.divBodyScroll').scroll(function () {
            // divBodyScroll의 x좌표가 움직인 거리를 가져옵니다.
            var xPoint = $('.divBodyScroll').scrollLeft();

            // 가져온 x좌표를 divHeadScroll에 적용시켜 같이 움직일수 있도록 합니다.
            $('.divHeadScroll').scrollLeft(xPoint);
        });
    });

    let a = 0
    $(".graph_box_arrow_show").click(function () {
        if (a == 0) {
            $(".graph_box").css("right", "0")
            $(this).css("right", 0)
            $(".graph_box_arrow_show div").addClass("arrow_hide");
            $(".graph_box_arrow_show div").removeClass("arrow_show");
            a = 1;
        } else if (a == 1) {
            $(".resident").show();
            $(".graph_box").css("right", "-905px")
            $(".graph_box_arrow_show div").addClass("arrow_show");
            $(".graph_box_arrow_show div").removeClass("arrow_hide");
            a = 0;
        }
    });

    $(".roda_map_btn02>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn03>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn04>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn05>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn06>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn07>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn08>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn01>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn01>.roda_map_conts").slideUp(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
    })

    $(".roda_map_btn01>h3").click(function(){
        $(this).addClass("roda_map_btn_active")
        $(".roda_map_btn02>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn03>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn04>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn05>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn06>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn07>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn08>h3").removeClass("roda_map_btn_active")
        $(".roda_map_btn01>.roda_map_conts").slideToggle(500);
        $(".roda_map_btn02>.roda_map_conts").slideUp(500);
        $(".roda_map_btn03>.roda_map_conts").slideUp(500);
        $(".roda_map_btn04>.roda_map_conts").slideUp(500);
        $(".roda_map_btn05>.roda_map_conts").slideUp(500);
        $(".roda_map_btn06>.roda_map_conts").slideUp(500);
        $(".roda_map_btn07>.roda_map_conts").slideUp(500);
        $(".roda_map_btn08>.roda_map_conts").slideUp(500);
    })

    $(".roda_sub_title").click(function(){
        $(".roda_modal_bg").show();
    })

    $(".roda_close_btn").click(function(){
        $(".roda_modal_bg").hide();
    })
})