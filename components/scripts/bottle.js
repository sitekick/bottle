// JQUERY

$(function() {
 
	var todos = [
// 		['#searchform','Search selections'],
		['.floater.graphs','Create graphs'],
// 		['nav','Dropdown menus'],
// 		['.revealpanel h2','Hover effects'],
// 		['#productform','Data/ajax'],
// 		['#footer .row', 'Mobile clickable menus'],
	];
	
	jQuery.each( todos, function( i, val ) {

			$(val[0]).css('position', 'relative');
			$(val[0]).append('<div class="todo">* <span>' +val[1]+ '</span></div>');
			$(val[0] + ' .todo').children('span').toggle();
			$(val[0] + ' .todo').click(function() {
			$(this).children('span').toggle('fast');
				});
		});

});