$(document).ready(function () {

    AOS.init();

    // 메뉴페이지 
    $(".menu_title.menu").click(function () {
        $(".menu_box").fadeIn(400);
    })

    $(".menu_title.close").click(function () {
        $(".menu_box").hide();
    })


    function scrollRotate() {
        let image = document.getElementById("scroll");
        image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
    }

    window.addEventListener('scroll', scrollRotate);


    // 로딩페이지 
    // function onReady(callback) {
    //     var intervalId = window.setInterval(function () {
    //         if (document.getElementsByTagName('body')[0] !== undefined) {
    //             window.clearInterval(intervalId);
    //             callback.call(this);
    //         }
    //     }, 2000);
    // }

    // function setVisible(selector, visible) {
    //     document.querySelector(selector).style.display = visible ? 'block' : 'none';
    // }

    // onReady(function () {
    //     setVisible('.main', true);
    //     setVisible('#loading', false);
    // });


    // 가로슬라이드 
    const horizontalSections = gsap.utils.toArray('.sub_fourth')

    horizontalSections.forEach(function (sec, i) {

        var thisPinWrap = sec.querySelector('.scroll_container');
        var thisAnimWrap = thisPinWrap.querySelector('.scroll_wrap');

        var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

        gsap.fromTo(thisAnimWrap, {
            x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
        }, {
            x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
            ease: "none",
            scrollTrigger: {
                trigger: sec,
                start: "top top",
                end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
                pin: thisPinWrap,
                invalidateOnRefresh: true,
                //anticipatePin: 1,
                scrub: true,
                //markers: true,
            }
        });

    });

    // 헤더
    var lnb = $("#hd").offset().top;
    $(window).scroll(function () {
        var window = $(this).scrollTop();

        if (lnb < window) {
            $("#hd").addClass("fixed");
        } else {
            $("#hd").removeClass("fixed");
        }
    });




    $(window).scroll(
        function () {
            //스크롤의 위치가 상단에서 200보다 크면  
            if ($(window).scrollTop() > 400) {
                /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
                $('.scroll_txt').addClass("fix");
                //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
            }
            if ($(window).scrollTop() > 5838) {
                $('.scroll_txt').removeClass("fix");
                //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
            }
            if ($(window).scrollTop() < 399) {
                $('.scroll_txt').removeClass("fix");
                //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
            }
        }
    );


    if (matchMedia("screen and (max-width: 885px)").matches) {
        $(window).scroll(
            function () {
                //스크롤의 위치가 상단에서 200보다 크면  
                if ($(window).scrollTop() > 400) {
                    /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
                    $('.scroll_txt').addClass("fix");
                    //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
                }
                if ($(window).scrollTop() > 4500) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
                if ($(window).scrollTop() < 399) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
            }
        );
    } else if (matchMedia("screen and (max-width: 1280px)").matches) {
        $(window).scroll(
            function () {
                //스크롤의 위치가 상단에서 200보다 크면  
                if ($(window).scrollTop() > 400) {
                    /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
                    $('.scroll_txt').addClass("fix");
                    //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
                }
                if ($(window).scrollTop() > 5100) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
                if ($(window).scrollTop() < 399) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
            }
        );
    } else if (matchMedia("screen and (max-width: 376px)").matches) {
        $(window).scroll(
            function () {
                //스크롤의 위치가 상단에서 200보다 크면  
                if ($(window).scrollTop() > 00) {
                    /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
                    $('.scroll_txt').addClass("fix");
                    //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
                }
                if ($(window).scrollTop() > 1000) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
                if ($(window).scrollTop() < 399) {
                    $('.scroll_txt').removeClass("fix");
                    //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
                }
            }
        );
    }

    /*
        window.onresize = function () {
            document.location.reload();
        };
    */
    $("#news").click(function () {
        $(".news_cont").show();
        $(".table_cont").hide();
        $(this).addClass("cm_active")
        $("#notice").removeClass("cm_active")
    })

    $("#notice").click(function () {
        $(".news_cont").hide();
        $(".table_cont").show();
        $(this).addClass("cm_active")
        $("#news").removeClass("cm_active")
    })

    $(".close_btn").click(function () {
        $(".modal_bg").hide();
    })
    $(".show_modal").click(function () {
        $(".modal_bg").show();
    })

    $("#file").on('change', function () {
        var fileName = $("#file").val();
        $(".upload_name").val(fileName);
    });
})


$(document).ready(function () {
    var swiper = new Swiper(".category_slide.category01", {
        spaceBetween: 20,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    })

    var swiper = new Swiper(".category_slide.category02", {
        spaceBetween: 20,
        centeredSlides: true,
        speed: 4000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    })

    var swiper = new Swiper(".category_slide.category03", {
        spaceBetween: 20,
        centeredSlides: true,
        speed: 5000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    })

})

$(document).ready(function () {
    var swiper = new Swiper(".notice_swiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

})


$(document).ready(function () {
    // // Assign some jquery elements we'll need
    // var $swiper = $(".works_swiper");
    // var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // // into a fixed position for animation purposes
    // var $bottomSlideContent = null; // Slide content that gets passed between the
    // // panning slide stack and the position 'behind'
    // // the stack, needed for correct animation style

    var mySwiper = new Swiper(".works_swiper", {
        spaceBetween: 20,
        slidesPerView: 5,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        autoplay: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            slideChange: function () {
                //이벤트 또는 조건문으로 이용하면 된다.
                $("swiper_hover").css("opacity", "1")
            },
        }
    });
});
