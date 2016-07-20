$(function() {
	
		var target = '.software .scrollwrap';
		//detect when a screen resize occurs that results in new media query being utilized;
		//refires products table build mechanism to switch between layout modes;
		var currentMQ = transitionMq();
		$(window).resize(function(){ transitionMq() });
		
		
		
		$.getJSON('assets/data/software.json', function(data) {
								
				//the select field change event fires the build mechanism for the table
				
				$("#softwareform select").change(function() {
			
				var sel = '';
			
				sel += $("#softwareform select option:selected").val(); 
			
				$(target).children('article').remove();
				
				buildScroll(data.blog[sel]);

				}).change();
		});
		
	
	function transitionMq() {
		/* As screen size changes; detect if we have transitioned between media queries; requires Modernizr */
		let mQueries = ['(max-width: 500px)','(max-width: 768px)','(max-width: 1024px)','(min-width: 1024px)'];
		
		for (i=0 ;i < mQueries.length; i++) {
			
			if(Modernizr.mq(mQueries[i]) == true){
				
				if(currentMQ == null){
				 	return mQueries[i];
				} else if(mQueries[i] != currentMQ){
					currentMQ = mQueries[i];
					transitionMqEvents();
				} 
				
				break;
			}
		}
	}
	
	function transitionMqEvents() {
			//rebuild products table to allow switch between two modes; done by firing change on select input
			$("#softwareform select").change();
		}
	
	function buildScroll(arr) {
	
				var articles = [];
				
				$(target).hide();	
				
				$.each(arr, function (index, value) {
				
					let article = `<article>
					<div class="logo"><img src="assets/img/blog/logos/${value.image1}" alt="" /></div>
					<div class="teaser"><h4><a href="${value.link}">${value.title}</a></h4><p>${value.teaser}</p></div>
					<div class="reveal"><img class="autosize" src="assets/img/blog/photos/src/${value.image2}" alt="" /></div>
					<hr /></article>`;
						
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
				
				
				//$('table#products').show();
				$(target).fadeIn( "slow" );
				
	}
	
	
	
	function activateRevealPanel(el){
			
			//take the hover||tabbed row element and retrieve data from child cells to populate hover element
			deactivateRevealPanel();
			
			$('.software .col3').prepend('<div id="blog-photo"></div>');
			
			let image = $('div.reveal', el).html();
			
			let photo = `<div class="blog-photo">${image}</div>`;
			
			$('#blog-photo').append(photo);
			$('.blog-photo').hide().fadeIn( "fast" );
	}
	
	function deactivateRevealPanel(){
			$('#blog-photo').remove();
			}
	
		
});