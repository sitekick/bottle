$(function() {
	
	'use strict';
	
		var events = {
			'(max-width: 500px)' : function() { 
				test2('500:1'); 
			}  ,
			'(max-width: 768px)' : function() { 
				test2('768:1');
			}
		};
		
		
		//resizeQuery(events);
		
		
		
			
		
/*
		var ob = function() {
			$(window).resize(function(){resizeQuery(events, 'module')});
		}();
*/
		
		function test2(arg) {
			console.log(arg);
		}
		

});

