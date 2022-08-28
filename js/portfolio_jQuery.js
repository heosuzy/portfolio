$(function () {
    navScroll();
    scrollDown();
    scrollTop();
    projectSilde();
    projectSvg();
    closeBt();
    tabBt();



    //네비 스크롤
    function navScroll() {
        let menu1 = $('.navi_menu .menu1');
        let menu2 = $('.navi_menu .menu2');
        let menu3 = $('.navi_menu .menu3');
        let menu4 = $('.navi_menu .menu4');
        let menu5 = $('.navi_menu .menu5');

        let windowHeight = document.body.clientHeight;
        windowHeight = windowHeight + 120;


        menu1.click(function () {
            $('html,body').animate({
                scrollTop: $('html,body').offset().top - 0
            }, 1000);
        });
        menu2.click(function () {
            $('html,body').animate({
                scrollTop: windowHeight
            }, 800);

        });
        menu3.click(function () {
            $('html,body').animate({
                scrollTop: windowHeight * 2
            }, 800);

        });
        menu4.click(function () {
            $('html,body').animate({
                scrollTop: windowHeight * 3
            }, 800);

        });
        menu5.click(function () {
            $('html,body').animate({
                scrollTop: windowHeight * 4 + 180
            }, 800);

        });

    };


    //메인 스크롤다운
    function scrollDown() {
        $('.scroll_down_svg').click(function () {
            $('html,body').animate({
                scrollTop: 1050
            }, 800);


            $('.navi_menu .menu1').removeClass('on');
            $('.navi_menu .menu2').addClass('on');


        });
    };

    //프로젝트 내용 이미지 자동슬라이드
    function projectSilde() {
        $('.emons_li').hover(function () {
            var ah = $(this).find('a').innerHeight();
            var img = $(this).find('img');
            var imgh = $(this).find('img')
                .innerHeight();

            img.stop().animate({
                top: ah - imgh
            }, 2000);

        }, function () {
            var img = $(this).find('img');
            img.stop().animate({
                top: 0
            }, 2000);
        });
    };

    //프로젝트 아이템
    function projectSvg() {

        var projectList1 = $('.project_pop');
        var projectList2 = $('.project_pop2');
        var projectList3 = $('.project_pop3');
        var projectList4 = $('.project_pop4');
        var item1 = $('.project_list .project_item1');
        var item2 = $('.project_list .project_item2');
        var item3 = $('.project_list .project_item3');
        var item4 = $('.project_list .project_item4');

        item1.click(function () {
            projectList1.css('display', 'block');

        });
        item2.click(function () {
            projectList2.css('display', 'block');

        });
        item3.click(function () {
            projectList3.css('display', 'block');

        });
        item4.click(function () {
            projectList4.css('display', 'block');

        });

    };

    //프로젝트 팝업 닫기버튼
    function closeBt() {

        $('.close').click(function () {
            $('.project_pop').css('display', 'none');
        });
        $('.close2').click(function () {
            $('.project_pop2').css('display', 'none');

        });
        $('.close3').click(function () {
            $('.project_pop3').css('display', 'none');

        });
        $('.close4').click(function () {
            $('.project_pop4').css('display', 'none');

        });
    };

    /* 스토리탭버튼 */
    function tabBt() {
        /* tab */
        var tab = $('.tab_bt');
        var content = $('.tab');

        content.hide().eq(0).show();

        tab.click(function (e) {
            e.preventDefault();
            var tg = $(this);
            var i = tg.index();
            tab.removeClass('active');
            tg.addClass('active')
            content.css('display', 'none');
            content.eq(i).css('display', 'block');
        })
    };


    //푸터 스크롤탑
    function scrollTop() {
        $('.scroll_top_svg').click(function () {
            $('html,body').animate({
                scrollTop: $('html,body').offset().top - 0
            }, 1000);

        });
    };









































});