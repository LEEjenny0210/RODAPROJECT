$(document).ready(function () {

    function NAV() {
        $(".sub_item > a").click(function () {
            $(".sub_txt").slideUp();
            $(".sub_item > a").removeClass("active");
            if (!$(this).next().is(":visible")) {
                $(this).next().slideDown();
                $(this).addClass("active");
            }
        });

        $(".nav_item").mouseover(function () {
            $(this).find(".menu_02").show();
        });
        $(".nav_item").mouseleave(function () {
            $(".menu_02").hide();
        });
    }
    NAV();


    function TAP() {
        $("#data_tap_02").click(function () {
            $("#data_tap_02 > button").addClass("tap_active")
            $("#data_tap_01 > button").removeClass("tap_active")
            $(".tap_view_01").hide();
            $(".tap_view_02").show();
        })

        $("#data_tap_01").click(function () {
            $("#data_tap_01 > button").addClass("tap_active")
            $("#data_tap_02 > button").removeClass("tap_active")
            $(".tap_view_02").hide();
            $(".tap_view_01").show();
        })
    }
    TAP();

    function POPUPTAP() {
        $("#popUp_tap_02").click(function () {
            $("#popUp_tap_02 > button").addClass("tap_active")
            $("#popUp_tap_01 > button").removeClass("tap_active")
            $("#popUp_01").hide();
            $("#popUp_02").show();
        })

        $("#popUp_tap_01").click(function () {
            $("#popUp_tap_01 > button").addClass("tap_active")
            $("#popUp_tap_02 > button").removeClass("tap_active")
            $("#popUp_02").hide();
            $("#popUp_01").show();
        })
    }
    POPUPTAP();

    function POPUP() {
        $(".popUp_btn").click(function () {
            $(".popUp").show();
        })
        $(".popUp_bottom_btn > div> .cancel").click(function () {
            $(".popUp").hide();
        })
    }
    POPUP();

})