/* Detect if max-width is < 500 to initialize footer menu behaviors */
$(function() {
        
        $(window).resize(function(){
	        
	        if (Modernizr.mq('(max-width: 500px)')) {
				
				$(".footer ul").hide();	
				$(".footer h4").unbind( "click" );			
				$(".footer h4").removeClass("active");
				
				$(".footer h4").click( function() {
					
					$(this).next("ul").toggle(100, function() {
						$(".footer ul:visible").prev("h4").addClass("active");
						$(".footer ul:hidden").prev("h4").removeClass("active");				
					});
					
					});
				
							
        	} else {
		        /* footer menu */
		        $(".footer ul").show();
		        $(".footer h4").removeClass("active");
		        $(".footer h4").unbind( "click" );
        	
				/* main menu */
				$("nav .level2").each( function(){
			   		var y = $(this).height()
			   		var yb = parseInt($(this).css("border-bottom-width"), 10);
			   		var py = $(this).parent().height();
			   		var offset = -Math.abs( (y + yb) - py);
			   		$(this).css('top', offset);
			   		$(this).data('calcheight', y);
			   		$(this).data('borderw', yb);
			   		$(this).data('offset', offset);
   				})
	
   				$("nav .level1 li").hover( 
			   		function() {
							var yy = $(this).height();
							var sy = $(".row.slider").height();
							var yb = $(".level2", this).data("borderw");
							$(this).addClass("active");
							$(".level2", this).animate({
									top: yy,
									height : sy-yb
			  					}, 300, "jswing");
						},
					function () {
						
							$(this).removeClass("active");
							$(".level2", this).animate({
									top: $(".level2", this).data("offset"),
									height : $(".level2", this).data("calcheight")
			  					}, 200, "jswing");
				});
        	
        	
        	
        	}
        	
        	
        	
        		
			

        }).resize();
    });




    
