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




    var Myswiper = new Swiper(".sec_left_swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next.bt",
            prevEl: ".swiper-button-prev.bt",
        },
        autoplay: true,
    });

    $(".swiper-button-pause").click(function () {
        Myswiper.autoplay.stop();
        $(".stop_btn").hide();
        $(".start_btn").show();
    })

    $(".swiper-button-start").click(function () {
        Myswiper.autoplay.start();
        $(".stop_btn").show();
        $(".start_btn").hide();
    })



    var swiper = new Swiper(".sec_right_swiper", {
        slidesPerView: 2,
        spaceBetween: 80,
        navigation: {
            nextEl: ".swiper-button-prev.sv",
            prevEl: ".swiper-button-next.sv",
        },
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

    $("#res_ten_stage").click(function () {
        $(".fiveStage").hide();
        $(".tenStage").show();
    })

    $("#res_five_stage").click(function () {
        $(".fiveStage").show();
        $(".tenStage").hide();
    })

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


    $(".dt_btn").click(function () {
        $("#polygonSearch").hide();
        $("#dataSearch").show();
        $(this).addClass("active")
        $(".pg_btn").removeClass("active")
    })

    $(".pg_btn").click(function () {
        $("#dataSearch").hide();
        $("#polygonSearch").show();
        $(this).addClass("active")
        $(".dt_btn").removeClass("active")
    })


    let b = 0
    $(".all_view_btn").click(function () {
        if (b == 0) {
            $(".check_view_wrap02").show();
            $(this).addClass("tap_active")
            $(".all_view_btn a").css("color", "#FFEC43")
            b = 1;
        } else if (b == 1) {
            $(".check_view_wrap02").hide();
            $(this).removeClass("tap_active")
            $(".all_view_btn a").css("color", "#fff")
            b = 0;
        }
    });

    
 
    $(".start_tap02").click(function () {
        $(".tap_conts01").hide();
        $(".tap_conts02").show();
        $(this).addClass("active")
        $(".start_tap01").removeClass("active")
    })

    $(".start_tap01").click(function () {
        $(".tap_conts02").hide();
        $(".tap_conts01").show();
        $(this).addClass("active")
        $(".start_tap02").removeClass("active")
    })

    $(".adb_btn").click(function () {
        $("#administrative").show();
    })
    $(".close_btn").click(function () {
        $("#administrative").hide();
    })

    $(".restaurant_btn").click(function () {
        $("#restaurant").show();
    })
    $(".close_btn").click(function () {
        $("#restaurant").hide();
    })
    $(".service_btn").click(function () {
        $("#service").show();
    })
    $(".close_btn").click(function () {
        $("#service").hide();
    })
    $(".retail_btn").click(function () {
        $("#retail").show();
    })
    $(".close_btn").click(function () {
        $("#retail").hide();
    })
    $(".info_box").click(function () {
        $("#infoClick").show();
    })
    $(".close_btn").click(function () {
        $("#infoClick").hide();
    })
    $(".report_show").click(function () {
        $("#report").show();
    })
    $(".close_btn").click(function () {
        $("#report").hide();
    })
    
    $(".isa_btn").click(function () {
        $(".isa_view").show();
        $(".overview").hide();
        $(".bsa_view").hide();
        $(".aoos_view").hide();
        $(".aocs_view").hide();
        $(".fpa_view").hide();
        $(".paor_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
    });

    $(".bsa_btn").click(function () {
        $(".bsa_view").show();
        $(".overview").hide();
        $(".isa_view").hide();
        $(".aoos_view").hide();
        $(".aocs_view").hide();
        $(".fpa_view").hide();
        $(".paor_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
    });

    $(".aoos_btn").click(function () {
        $(".aoos_view").show();
        $(".overview").hide();
        $(".isa_view").hide();
        $(".bsa_view").hide();
        $(".aocs_view").hide();
        $(".fpa_view").hide();
        $(".paor_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
    });

    $(".aocs_btn").click(function () {
        $(".aocs_view").show();
        $(".overview").hide();
        $(".isa_view").hide();
        $(".bsa_view").hide();
        $(".aoos_view").hide();
        $(".fpa_view").hide();
        $(".paor_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
    });

    $(".fpa_btn").click(function () {
        $(".fpa_view").show();
        $(".overview").hide();
        $(".isa_view").hide();
        $(".bsa_view").hide();
        $(".aoos_view").hide();
        $(".aocs_view").hide();
        $(".paor_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
    });

    $(".paor_btn").click(function () {
        $(".paor_view").show();
        $(".overview").hide();
        $(".isa_view").hide();
        $(".bsa_view").hide();
        $(".aoos_view").hide();
        $(".aocs_view").hide();
        $(".fpa_view").hide();
        $(this).addClass("btn_active")
        $(".overview_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
    });

    $(".overview_btn").click(function () {
        $(".overview").show();
        $(".paor_view").hide();
        $(".isa_view").hide();
        $(".bsa_view").hide();
        $(".aoos_view").hide();
        $(".aocs_view").hide();
        $(".fpa_view").hide();
        $(this).addClass("btn_active")
        $(".paor_btn").removeClass("btn_active")
        $(".isa_btn").removeClass("btn_active")
        $(".bsa_btn").removeClass("btn_active")
        $(".aoos_btn").removeClass("btn_active")
        $(".aocs_btn").removeClass("btn_active")
        $(".fpa_btn").removeClass("btn_active")
    });
})