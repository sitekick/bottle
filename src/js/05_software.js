function buildScroll(target, arr) {
	
	var articles = [];

	$(target).hide();	
	
	$.each(arr, function (index, value) {
	
		let article = `<article><a href="${value.link}">
		<div class="image"><img class="autosize svg svgtopng" src="assets/img/blog/logos/${value.image1}" alt="" /></div>
		<div class="teaser"><h4>${value.title}</h4><p>${value.teaser}</p></div>
		</a>
		${_revealImage(value.image2)}
		<hr></article>`;
		
		articles.push(article);	
	});
	
	$(target).append(articles);	
	
	if (Modernizr.mq('(min-width: 768px)') ) {	
	//large screen layout mode; includes custom hover effect	
		
		//hover
		$('article', target).hover(	
			function () {
				_activateArticleReveal(this);
					});
		//tabbed focus
		$('article a', target).on({
			focus: function () {
				let article = $(this).parents('article');
				$(article).addClass('focused');
				_activateArticleReveal(article);
			},
			focusout: function () {
				let article = $(this).parents('article');
				$(article).removeClass('focused');
			}
		});
		//reset
		$(target).on({
			mouseleave : function () {
				_deactivateArticleReveal();
			}
		});
		$('article:nth-last-child(1) a', target).on({
			focusout: function () {
				_deactivateArticleReveal();
			}
		})	
					
	} else {
		//small screen layout mode; standard table output
		$('article', target).off( "mouseenter mouseleave" );
		}
	
	$(target).fadeIn( "slow" );

}
	
function _revealImage(fileName){
	
	if(fileName == null) {
		return '';
	} else {
		return `<div class="reveal"><img src="assets/img/blog/photos/src/${fileName}" class="autosize" alt=""></div>`
	}
}
	
function _activateArticleReveal(el){
			
	//take the hover||tabbed row element and retrieve data from child cells to populate hover element
	_deactivateArticleReveal();
	let image = $('div.reveal', el).html();
	
	if(image == null){
		return;
	}
	
	$('.software .col3').prepend('<div id="blog-photo"></div>');
	
	let photo = `<div class="blog-photo">${image}</div>`;
	
	$('#blog-photo').append(photo);
	$('.blog-photo').hide().fadeIn( "fast" );
	
}
	
function _deactivateArticleReveal(){
	$('#blog-photo').remove();
}
