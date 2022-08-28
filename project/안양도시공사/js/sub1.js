$(function () {

	/* zoom 버튼 */
	var base = 100;
	var mybody = $('body');
	$('.screen-zoom button').on('click', function () {
		var zNum = $('.screen-zoom button').index(this);
		if (zNum == 0) { //확대(+)
			base += 10;
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
		$("#gnb").find('.sub-nav').stop().slideDown(500);
	});


	$('#gnb').mouseleave(function () {
		let display = $('.close_btn').css('display');
		if (display === 'none') {
			$(this).find('.sub-nav').stop().slideUp(500);
		}
	});

	$('.letter_list dt').click(function () {


		$('.letter_list dd').css("display", "none");
		$('.letter_list dt a').removeClass("active");


		$(this).next().css("display", "block");
		$(this).children('a').addClass("active");

	});


	$('.open_btn').click(function () {
		$(this).hide();
		$('.close_btn').css("display", "block");
		$("#gnb").find('.sub-nav').stop().slideDown(500);
	});

	$('.close_btn').click(function () {
		$(this).hide();
		$('.open_btn').css("display", "block");

		$("#gnb").find('.sub-nav').stop().slideUp(500);
	});

	/* container zoom 버튼 */

	function getSize() {
		size = $("body").css("font-size");
		size = parseInt(size, 10);
		$("#font-size").text(size);
	}

	getSize();

	$(".btn-zoom-in").on("click", function () {

		if ((size + 1) <= 50) {
			$("body, html, #wrap, a, p").css("font-size", "+=1");

		}
	});

	$(".btn-zoom-out").on("click", function () {
		if ((size - 1) >= 12) {
			$("body, html, #wrap, a, p").css("font-size", "-=1");

		}
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