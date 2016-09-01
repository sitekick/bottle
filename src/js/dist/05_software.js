'use strict';

function buildScroll(target, arr) {

	var articles = [];

	$(target).hide();

	$.each(arr, function (index, value) {

		var article = '<article><a href="' + value.link + '">\n\t\t<div class="image"><img class="autosize svg svgtopng" src="assets/img/blog/logos/' + value.image1 + '" alt="" /></div>\n\t\t<div class="teaser"><h4>' + value.title + '</h4><p>' + value.teaser + '</p></div>\n\t\t</a>\n\t\t' + _revealImage(value.image2) + '\n\t\t<hr></article>';

		articles.push(article);
	});

	$(target).append(articles);

	if (Modernizr.mq('(min-width: 768px)')) {
		//large screen layout mode; includes custom hover effect	

		//hover
		$('article', target).hover(function () {
			_activateArticleReveal(this);
		});
		//tabbed focus
		$('article a', target).on({
			focus: function focus() {
				var article = $(this).parents('article');
				$(article).addClass('focused');
				_activateArticleReveal(article);
			},
			focusout: function focusout() {
				var article = $(this).parents('article');
				$(article).removeClass('focused');
			}
		});
		//reset
		$(target).on({
			mouseleave: function mouseleave() {
				_deactivateArticleReveal();
			}
		});
		$('article:nth-last-child(1) a', target).on({
			focusout: function focusout() {
				_deactivateArticleReveal();
			}
		});
	} else {
		//small screen layout mode; standard table output
		$('article', target).off("mouseenter mouseleave");
	}

	$(target).fadeIn("slow");
}

function _revealImage(fileName) {

	if (fileName == null) {
		return '';
	} else {
		return '<div class="reveal"><img src="assets/img/blog/photos/src/' + fileName + '" class="autosize" alt=""></div>';
	}
}

function _activateArticleReveal(el) {

	//take the hover||tabbed row element and retrieve data from child cells to populate hover element
	_deactivateArticleReveal();
	var image = $('div.reveal', el).html();

	if (image == null) {
		return;
	}

	$('.software .col3').prepend('<div id="blog-photo"></div>');

	var photo = '<div class="blog-photo">' + image + '</div>';

	$('#blog-photo').append(photo);
	$('.blog-photo').hide().fadeIn("fast");
}

function _deactivateArticleReveal() {
	$('#blog-photo').remove();
}