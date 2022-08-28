$(document).ready(function () {

    /* topbar */
    $('#menu_1>a>img').click(function () {
        $('#menu_1').slideUp();
    });

    /* nav */
    $(".gnb_2>li").mouseenter(function () {
        $(this).find('.pc-submenu').stop().slideDown();
    });


    $('.gnb_2>li').mouseleave(function () {
        $(this).find('.pc-submenu').stop().slideUp();
    });

    /* banner */
    var banner = $('.banner li');
    var current = 0;

    setInterval(function () {
        var prev = banner.eq(current);
        move(prev, 0, '-100%');

        current++;

        if (current == banner.size()) {
            current = 0
        }


        var next = banner.eq(current)
        move(next, '100%', 0);


    }, 2000);

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, 800);
    }

    /* mo-banner */
    var banner = $('.mo-banner>ul>li');
    var current = 0;

    setInterval(function () {
        var prev = banner.eq(current);
        move(prev, 0, '-100%');

        current++;

        if (current == banner.size()) {
            current = 0
        }


        var next = banner.eq(current)
        move(next, '100%', 0);


    }, 2000);

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, 800);
    }


    /* best slide */

    const swiper = new Swiper('.swiper', {

        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 3,
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },            
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 2000,
        },

        spaceBetween: 30,


    });

    $('.swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });

   

    /* mo-nav */
    // 햄버거 버튼 클릭
    $('.menu-btn').click(function () {

        $('#mo_menu').addClass('on');
        $('#mo_menubg').css("display", "block");

    });

    // 화면 클릭
    $('#mo_menubg').click(function () {

        $('#mo_menu').removeClass('on');
        $('#mo_menubg').css("display", "none");

    });

    // 닫기 버튼 클릭
    $('.mo-close').click(function () {

        $('#mo_menu').removeClass('on');
        $('#mo_menubg').css("display", "none");

    });


    /* 모바일 서브메뉴 */
    var moSub1 = $('#mo_menu .mo-nav02>ul>li') 
    var moSub2 = $('#mo_menu .mo-nav02>ul>li .mo_sub>li')

    $(moSub1).click(function () {
        $(this).find(moSub2).stop().slideDown();
    });


    $(moSub1).mouseleave(function () {
        $(this).find(moSub2).stop().slideUp();
    });



















})