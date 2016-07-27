$(function() {
		
		var target = '.software .scrollwrap';
		//detect when a screen resize occurs that results in new media query being utilized;
		//refires products table build mechanism to switch between layout modes;
		
		var events = {
			'(all)' : function  (){
				$("#softwareform select").change();
			}
		};
		
		resizeQuery(events);
		
		$.getJSON('assets/data/software.json', function(data) {
								
				//the select field change event fires the build mechanism for the table
				
				$("#softwareform select").change(function() {
			
				var sel = '';
			
				sel += $("#softwareform select option:selected").val(); 
			
				$(target).children('article').remove();
				
				buildScroll(data.blog[sel]);

				}).change();
		});
		

	function buildScroll(arr) {
	
				var articles = [];
				
				$(target).hide();	
				
				$.each(arr, function (index, value) {
				
					let article = `<article><a href="${value.link}">
					<div class="logo"><img class="autosize" src="assets/img/blog/logos/${value.image1}" alt="" /></div>
					<div class="teaser"><h4>${value.title}</h4><p>${value.teaser}</p></div>
					</a>
					${revealImage(value.image2)}
					<hr></article>`;
					
					articles.push(article);	
				});
				
				$(target).append(articles);	
				
				if (Modernizr.mq('(min-width: 768px)') ) {	
				//large screen layout mode; includes custom hover effect	
					
					//hover
					$('article', target).hover(	
						function () {
							activateRevealPanel(this);
								});
					//tabbed focus
					$('article a', target).on({
						focus: function () {
							let article = $(this).parents('article');
							$(article).addClass('focused');
							activateRevealPanel(article);
						},
						focusout: function () {
							let article = $(this).parents('article');
							$(article).removeClass('focused');
						}
					});
					//reset
					$(target).on({
						mouseleave : function () {
							deactivateRevealPanel();
						}
					});
					$('article:nth-last-child(1) a', target).on({
						focusout: function () {
							deactivateRevealPanel();
						}
					})	
								
				} else {
					//small screen layout mode; standard table output
					$('article', target).off( "mouseenter mouseleave" );
					}
				
				$(target).fadeIn( "slow" );
				
	}
	
	function revealImage(fileName){
		if(fileName == null) {
			return '';
		} else {
			return `<div class="reveal"><img src="assets/img/blog/photos/src/${fileName}" class="autosize" alt=""></div>`
		}
	}
	
	function activateRevealPanel(el){
			
			//take the hover||tabbed row element and retrieve data from child cells to populate hover element
			deactivateRevealPanel();
			let image = $('div.reveal', el).html();
			
			if(image == null){
				return;
			}
			
			$('.software .col3').prepend('<div id="blog-photo"></div>');
			
			let photo = `<div class="blog-photo">${image}</div>`;
			
			$('#blog-photo').append(photo);
			$('.blog-photo').hide().fadeIn( "fast" );
	}
	
	function deactivateRevealPanel(){
			$('#blog-photo').remove();
			}
	
		
});