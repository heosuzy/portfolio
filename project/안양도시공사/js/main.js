$(function () {
	

	/* zoom 버튼 */
	var base = 100;
	var mybody = $('body');
	$('.screen-zoom button').on('click', function () {
		var zNum = $('.screen-zoom button').index(this);
		if (zNum == 0) { //확대(+)
			base += 10;
			//base = base + 10;
		} else if (zNum == 1) { // 100%(100)
			base = 100;
		} else { // 축소(-)
			base -= 10;
		}
		mybody.css('overflow-x', 'auto')
			.css('transform-origin', '50% 0')
			.css('transform', 'scale(' + base / 100 + ')')
			.css('zoom', base + '%'); //낮은 브라우저 때문에
		return false;
	});

	/* nav */
	$('.sub_nav_title').mouseenter(function () {
		$("#gnb").find('.sub-nav').stop().slideDown(300);
	});


	$('#gnb').mouseleave(function () {
		let display = $('.close_btn').css('display');
		if (display === 'none') {
			$(this).find('.sub-nav').stop().slideUp(0);
		}
	});

	$('.letter_list dt').click(function () {


		$('.letter_list dd').css("display", "none");
		$('.letter_list dt a').removeClass("active");


		$(this).next().css("display", "block");
		$(this).children('a').addClass("active");

	});

	/* 햄버거버튼 */
	$('.open_btn').click(function () {
		$(this).hide();
		$('.close_btn').css("display", "block");
		$("#gnb").find('.sub-nav').stop().slideDown(0);
	});

	$('.close_btn').click(function () {
		$(this).hide();
		$('.open_btn').css("display", "block");

		$("#gnb").find('.sub-nav').stop().slideUp(0);
	});


	/* banner */

	var banner = $('#section_banner > div');
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


	}, 3000);

	function move(tg, start, end) {
		tg.css('left', start).stop().animate({
			left: end
		}, 800);
	};


	/* 사이드배너 */
	/* <!-- Initialize Swiper --> */
	var swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 3000,
		}
	});


	/* vr */
	$('.icon_vr').mouseenter(function () {
		$(this).css('display', 'none');
		$('.vr_list').css('display', 'block');
	});

	$('.vr_list').mouseleave(function () {
		$(this).css('display', 'none');
		$('.icon_vr').css('display', 'block');
	});

	
	/* 참고사이트 */

	var refer = $('.referbox_ul');
	var referList = $('.referbox_ul>li');

	var referListWidth = $('.referbox_ul>li').eq(0).width();
	var current = 0; 

	var setInterval01;

	referboxSlide();

	function referboxSlide() {
		setInterval01 = setInterval(function () {
			refer.stop().animate({
				left: -referListWidth
			}, 500, function () {
				$('.referbox_ul>li:first').insertAfter('.referbox_ul>li:last');

				refer.css('left', 0);
			})

		}, 2000);
	}


	referList.hover(function () {

		clearInterval(setInterval01);
	}, function () {
		referboxSlide();
	});



	function next1_1() {
		$('.referbox_ul>li:last').insertBefore('.referbox_ul>li:first');
		refer.css('left', -referListWidth);
		refer.animate({
			left: 0
		}, 500);
	}

	function prev1_1() {
		
		$('.referbox_ul>li:first').insertAfter('.referbox_ul>li:last');
		refer.css('right', -referListWidth);
		refer.animate({
			left: 0
		}, 500);
	}

	$('.btn-before').click(function () {
		prev1_1();
	});

	$('.btn-after').click(function () {
		next1_1();
	});

	$('.btn-stop').click(function () {
		$(this).css('display', 'none');
		$('.btn-play').css('display', 'block');
		clearInterval(setInterval01);

	});

	$('.btn-play').click(function () {
		console.log('test111')
		$(this).css('display', 'none');
		$('.btn-stop').css('display', 'block');
		//setInterval(setInterval01, 2000);
		referboxSlide();

		
	});



	/* 푸터- 관련사이트 */

	var select = $('.footer-select dt a')
	var selectbox = $('.footer-select dd')

	select.click(function () {

		selectbox.toggle(

			function () {
				selectbox.addClass('1000', 'show')
			},

			function () {
				selectbox.addClass('1000', 'hide')
			}
		)
	});


























});