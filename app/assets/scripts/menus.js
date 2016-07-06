/* Detect width to initialize appropriate menu behaviors */
$(function() {
	 //Mobile Chrome (will fire resize on scroll; track width)
	 var cachedwidth = $(window).width();
     $(window).resize(function(){nav(cachedwidth)});
   
    nav($(window).width() + 1);
    
    function nav(cwidth) {
	    	
	    	if( $(window).width() == cwidth ){
		   	     return ;
		   	} 
	    	
	    	if (Modernizr.mq('(min-width: 500px)') ) {
				standardNav();
				footerNavDeactivate();	
			} else {
				mobileNav();
				footerNavActivate();
        	}
			
			cachedwidth = $(window).width();
    }
    
    
    
    function mobileNav() {
	   	     
	  
	   	      //reset elements
		        $("nav .level1 > li").off(); 
				$("nav .level2").each( function() {
					 	$(this).hide();
					 	$(this).css({'top': 0, 'height' : 'auto'});  
			     });
		       
		        //mobile nav activate
		        if(!$("#login .menu-toggle").length){
					
					$("#login div").append( '<button class="menu-toggle" role="button" aria-pressed="false"></button>' ); 
			        $( '.level1 > li > a' ).attr('aria-pressed', 'false');
						
						$( '.menu-toggle' ).on( 'click', function() {
							
							$(this).attr( 'aria-pressed', function( index, value ) {
								return 'false' === value ? 'true' : 'false';
							});
					
							$(this).toggleClass( 'active' );
							$( 'nav' ).slideToggle(100);
						});
						
						$( 'nav .level1 > li > a' ).on( 'click', function() {
							
							$(this).attr( 'aria-pressed', function( index, value ) {
								return 'false' === value ? 'true' : 'false';
							});
							$(this).toggleClass( 'active' );
							$(this).next( '.level2' ).slideToggle(100);
							
							$("nav .level1 > li > a").not(this).each( function() {
								 
									 if( $(this).hasClass('active') ){
										$(this).toggleClass( 'active' );
										$(this).next( '.level2' ).slideToggle(100);
									 }
								});
						});
			        
			    } //if(!$("#login .menu-toggle").length)
			    
	}
   
   function standardNav() {
	   
				//reset elements
				$( '.level1 > li > a' ).off();
				if( $("#login .menu-toggle").length ){
					$("#login .menu-toggle").remove();
					$("nav").show();
					$("nav .level2").show();
					$("nav .level1 > li > a").removeClass('active').removeAttr('aria-pressed');
					}	

				$("nav .level2").each( function(){
			   		var y = $(this).height()
			   		var yb = parseInt($(this).css("border-bottom-width"), 10);
			   		var py = $(this).parent().height();
			   		var offset = -Math.abs( (y + yb) - py);
			   		$(this).css('top', offset);
			   		$(this).data('calcheight', y);
			   		$(this).data('borderw', yb);
			   		$(this).data('offset', offset);
		   		});
	
		   		$("nav .level1 > li").off().on({
					mouseenter: function() {
							var yy = $(this).height();
							var sy = $(".row.slider").height();
							var yb = $(".level2", this).data("borderw");
							$(this).addClass("active");
							$(".level2", this).animate({
									top: yy,
									height : sy-yb
			  					}, 300, "swing");
						},
					mouseleave: function () {
						
							$(this).removeClass("active");
							$(".level2", this).animate({
									top: $(".level2", this).data("offset"),
									height : $(".level2", this).data("calcheight")
			  					}, 200, "swing");
						}
					});
   
   }
   
   function footerNavActivate() {
	   $(".footer ul").hide();	
	   $(".footer h4").removeClass("active");
	   $(".footer h4").off().on("click", function() {
			$(this).next("ul").slideToggle(300, function() {
					$(".footer ul:visible").prev("h4").addClass("active");
					$(".footer ul:hidden").prev("h4").removeClass("active");				
			});
		});
   }
   
   function footerNavDeactivate() {
	   $(".footer ul").show();
	   $(".footer h4").removeClass("active");
	   $(".footer h4").off();
   }
   
});//$(function ()




    
