$(function () {
	
	 function polyFills() {
		 //Safari 5.1 svg replacement .sf5-1 
			$('img[src*=".svg"]').attr('src', function () {
				console.log('test');
				return $(this).attr('src').replace('.svg', '.png');
			});
	};



});