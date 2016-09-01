"use strict";

function mobileNav() {

	//reset elements
	$("nav .level1 > li").off();
	$("nav .level2").each(function () {
		$(this).hide().css({ 'top': 0, 'height': 'auto' });
	});

	//mobile nav activate
	if (!$("#login .menu-toggle").length) {

		$('nav').hide();
		$("#login div").append('<button class="menu-toggle" role="button" aria-pressed="false"></button>');
		$('.level1 > li > a').attr('aria-pressed', 'false');

		$('.menu-toggle').on('click', function () {

			$(this).attr('aria-pressed', function (index, value) {
				return 'false' === value ? 'true' : 'false';
			}).toggleClass('active');

			$('nav').slideToggle(100);
		});

		$('nav .level1 > li > a').off().on('click', function () {

			$(this).attr('aria-pressed', function (index, value) {
				return 'false' === value ? 'true' : 'false';
			}).toggleClass('active').next('.level2').slideToggle(100);

			$("nav .level1 > li > a").not(this).each(function () {

				if ($(this).hasClass('active')) {
					$(this).toggleClass('active').next('.level2').slideToggle(100);
				}
			});
		});
	} //if(!$("#login .menu-toggle").length)
}

function standardNav() {

	//reset elements
	$('.level1 > li > a').off();

	if ($("#login .menu-toggle").length) {

		$("#login .menu-toggle").remove();
		$("nav").show();
		$("nav .level2").show();
		$("nav .level1 > li > a").removeClass('active').removeAttr('aria-pressed');
	}

	$('nav .level1 > li a').off().on({

		focus: function focus() {
			//@a11y: show drop down on tab focus
			_fireDropDown('down', $(this).parent());
		}
	});

	$("nav .level2").each(function () {

		var y = $(this).height();
		var yb = parseInt($(this).css("border-bottom-width"), 10);
		var py = $(this).parent().height();
		var offset = -Math.abs(y + yb - py);
		$(this).css('top', offset).data({ calcheight: y, borderw: yb, offset: offset }).hide();
	});

	$('nav .level2 > li:last-child a').on({

		//retract dropdown when last sub menu item loses focus
		focusout: function focusout() {
			_fireDropDown('up', $(this).parents('.level1 li'));
		}
	});

	$("nav .level1 > li").off().on({
		mouseenter: function mouseenter() {
			_fireDropDown('down', this);
		},
		mouseleave: function mouseleave() {
			_fireDropDown('up', this);
		}
	});
}

function _fireDropDown(dir, el) {

	switch (dir) {

		case 'down':

			$(el).data({ fired: true }).addClass("active");
			var yy = $(el).height();
			var sy = $(".row.slider").height();
			var yb = $(".level2", el).data().borderw;
			$(".level2", el).show().animate({
				top: yy,
				height: sy - yb
			}, 300, "swing");
			break;
		case 'up':
		default:
			//retract

			if ($(el).data().fired) {
				$(el).data({ fired: false }).removeClass("active");
				$(".level2", el).animate({
					top: $(".level2", el).data().offset,
					height: $(".level2", el).data().calcheight
				}, 200, "swing", function () {
					$(this).hide();
				});
			} else {
				return;
			}

	}
};

function footerNavActivate() {

	$(".footer ul").hide();
	$(".footer h4").off().removeClass("active").on("click", function () {
		$(this).next("ul").slideToggle(300, function () {
			$(".footer ul:visible").prev("h4").addClass("active");
			$(".footer ul:hidden").prev("h4").removeClass("active");
		});
	});
}

function footerNavDeactivate() {

	$(".footer ul").show();
	$(".footer h4").off().removeClass("active");
}