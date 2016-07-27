$(function() {
	
	/* Change search border color; submit button background color on focus of search field */
	
	$("#searchform input[type=text]").focus(function() {
		$(this).parent().toggleClass('active');	
		$(this).next("input[type=submit]").toggleClass('active');	
		});

	$("#searchform input[type=text]").focusout(function() {
		$(this).parent().toggleClass('active');	
		$(this).next("input[type=submit]").toggleClass('active');
		
		});

});