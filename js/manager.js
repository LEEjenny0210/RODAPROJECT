$(document).ready(function () {

    $(".modify_btn").click(function () {
        $("#Modify").show();
    })
    $(".modal_close_btn, .initialization").click(function () {
        $("#Modify").hide();
    })

    $(".modify_btn").click(function () {
        $("#Modify_history").show();
    })
    $(".modal_close_btn, .initialization").click(function () {
        $("#Modify_history").hide();
    })


    $(".add").click(function () {
        $("#Modify_history_add").show();
    })
    $(".modal_close_btn, .initialization").click(function () {
        $("#Modify_history_add").hide();
    })

    $('#img_select').change(function () {
        setImageFromFile(this, '#preview');
    });

    function setImageFromFile(input, expression) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(expression).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }


    $("#ad_news").click(function () {
        $(".ad_news_cont").show();
        $(".ad_table_cont").hide();
        $(this).addClass("ad_cm_active")
        $("#ad_notice").removeClass("ad_cm_active")
    })

    $("#ad_notice").click(function () {
        $(".ad_news_cont").hide();
        $(".ad_table_cont").show();
        $(this).addClass("ad_cm_active")
        $("#ad_news").removeClass("ad_cm_active")
    })

    
    $(".modify").click(function () {
        $("#Modify_history").show();
    })
    $(".modal_close_btn, .initialization").click(function () {
        $("#Modify_history").hide();
    })
})