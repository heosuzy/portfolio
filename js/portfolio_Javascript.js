//메인 blob

window.onload = function () {
    let mainBlob = createBlob({
        element: document.querySelector("#main_blob1"),
        numPoints: 10,
        centerX: 330,
        centerY: 330,
        minRadius: 260,
        maxRadius: 325,
        minDuration: 5,
        maxDuration: 5,
    });
    let mainBlob2 = createBlob({
        element: document.querySelector("#main_blob2"),
        numPoints: 10,
        centerX: 150,
        centerY: 500,
        minRadius: 250,
        maxRadius: 325,
        minDuration: 5,
        maxDuration: 5,
    });
    let mainBlob3 = createBlob({
        element: document.querySelector("#main_blob3"),
        numPoints: 10,
        centerX: 150,
        centerY: 500,
        minRadius: 270,
        maxRadius: 325,
        minDuration: 5,
        maxDuration: 5,
    });
    let mainBlob4 = createBlob({
        element: document.querySelector("#main_blob4"),
        numPoints: 10,
        centerX: 150,
        centerY: 500,
        minRadius: 250,
        maxRadius: 325,
        minDuration: 5,
        maxDuration: 5,
    });


    // typeit
    new TypeIt(".hello", {
            speed: 80,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
        .type("welcome!")
        .move(-7, {
            delay: 50
        })
        .delete(1)
        .type("W", {
            delay: 225
        })
        .go();

    new TypeIt(".m_works", {
            speed: 70,
            startDelay: 3000,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
        .type("PORTFOLIO WORKS BY HEO SUJI").go();

    new TypeIt(".main_title1", {
            speed: 70,
            startDelay: 5500,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
        .type("IF YOU CAN DREAM IT, YOU CAN DO IT.").go();


    new TypeIt(".main_title2", {
            speed: 70,
            startDelay: 8000,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
        .type("<br>#행동하는 사람이 세상을 바꾸는 이유.", ).go();

    new TypeIt(".main_title3", {
            speed: 70,
            startDelay: 10500,
            afterComplete: function (instance) {
                instance.destroy();
            }
        })
        .type("<br>#행동하는 웹퍼블리셔 허수지입니다 :)", ).pause(500)
        .move(-6, {
            delay: 100
        })
        .delete(3).pause(100)
        .type("<strong style='color:#3cfffc'>허수지</strong>")
        .go();


    // 스크롤 이벤트
    let windowHeight = document.body.clientHeight;
    windowHeight = windowHeight;

    function scrollEvent() {

        console.log('scroll', window.scrollY, windowHeight);
        if (window.scrollY < windowHeight) {

            document.querySelectorAll('.navi_menu li')[0].classList.add('on');
            document.querySelectorAll('.navi_menu li')[1].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[2].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[3].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[4].classList.remove('on');
        } else if (window.scrollY >= windowHeight && window.scrollY < windowHeight * 2) {
            document.querySelectorAll('.navi_menu li')[0].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[1].classList.add('on');
            document.querySelectorAll('.navi_menu li')[2].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[3].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[4].classList.remove('on');
        } else if (window.scrollY >= windowHeight * 2 && window.scrollY < windowHeight * 3) {
            document.querySelectorAll('.navi_menu li')[0].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[1].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[2].classList.add('on');
            document.querySelectorAll('.navi_menu li')[3].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[4].classList.remove('on');
        } else if (window.scrollY >= windowHeight * 3 && window.scrollY < windowHeight * 4) {
            document.querySelectorAll('.navi_menu li')[0].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[1].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[2].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[3].classList.add('on');
            document.querySelectorAll('.navi_menu li')[4].classList.remove('on');
        } else if (window.scrollY >= windowHeight * 4 && window.scrollY < windowHeight * 5) {
            document.querySelectorAll('.navi_menu li')[0].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[1].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[2].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[3].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[4].classList.add('on');
        } else if (window.scrollY >= windowHeight * 5) {
            document.querySelectorAll('.navi_menu li')[0].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[1].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[2].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[3].classList.remove('on');
            document.querySelectorAll('.navi_menu li')[4].classList.remove('on');

        }


        if (window.scrollY > windowHeight / 3) {
            document.querySelector('.profile_inner').classList.add('profile_inner_on');
        } else {
            document.querySelector('.profile_inner').classList.remove('profile_inner_on');
        }

        if (window.scrollY > 3071 && window.scrollY < 4000) {
            document.querySelector('.project_down').style.opacity = 1;
            document.querySelector('.project_down').style.marginTop = 0;
        } else {
            document.querySelector('.project_down').style.opacity = 0;
            document.querySelector('.project_down').style.marginTop = '100px';
        }
    }
    window.addEventListener('scroll', scrollEvent);
};



//스킬그래프
function scrollBar() {
    let htmlBar = document.querySelector('#html_bar');
    let cssBar = document.querySelector('#css_bar');
    let javaScriptBar = document.querySelector('#javascript_bar');
    let jqueryBar = document.querySelector('#jquery_bar');
    let vueBar = document.querySelector('#vue_bar');
    let phpBar = document.querySelector('#php_bar');
    let photoShopBar = document.querySelector('#photoshop_bar');
    let figmaBar = document.querySelector('#figma_bar');
    let githubBar = document.querySelector('#github_bar');
    let firebaseBar = document.querySelector('#firebase_bar');

    if (window.scrollY > 800) {
        htmlBar.classList.add('html_skill');
        cssBar.classList.add('css_skill');
        javaScriptBar.classList.add('javascript_skill');
        jqueryBar.classList.add('jquery_skill');
        vueBar.classList.add('vue_skill');
        phpBar.classList.add('php_skill');
        photoShopBar.classList.add('photoshop_skill');
        figmaBar.classList.add('figma_skill');
        githubBar.classList.add('github_skill');
        firebaseBar.classList.add('firebase_skill');
    } else {
        htmlBar.classList.remove('html_skill');
        cssBar.classList.remove('css_skill');
        javaScriptBar.classList.remove('javascript_skill');
        jqueryBar.classList.remove('jquery_skill');
        vueBar.classList.remove('vue_skill');
        phpBar.classList.remove('php_skill');
        githubBar.classList.remove('github_skill');
        firebaseBar.classList.remove('firebase_skill');
    }
};

window.addEventListener('scroll', scrollBar);