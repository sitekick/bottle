/* Detect if max-width is < 500 to initialize footer menu behaviors */
$(function() {
        
        $(window).resize(function(){
	        
	        if (Modernizr.mq('(max-width: 500px)')) {
				
				$(".footer ul").hide();	
				$(".footer h4").removeClass("active");
				$(".footer h4").off().on("click", function() {
					
						$(this).next("ul").slideToggle(300, function() {
							$(".footer ul:visible").prev("h4").addClass("active");
							$(".footer ul:hidden").prev("h4").removeClass("active");				
						});
				});
				
        	} else {
		        $(".footer ul").show();
		        $(".footer h4").removeClass("active");
		        $(".footer h4").off();
        	}
        	
        }).resize();
    });




    