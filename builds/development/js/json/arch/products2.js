$(function() {
	
		$.getJSON('data/products2.json', function(data) {
				
				var num = data.products.product.length;
				var counter= 1;
				
				
				$.each(data.products.product, function (k,v) {
					
					var div = '<tr>' +
					'<td><img src="img/products/' + v.hover.image + '" alt="" /></td><td>' + v.hover.manufacturer + '</td>' +
					'<td>' + v.hover.description + '</td>' +
					'<td>' + v.number + '</td><td>' + v.category + '</td>' +
					'<td>' + v.price + '</td>' +
					'</tr>'
					
					
					$('#featuredproducts tbody').append(div);
					
													
					if(counter == num){
						moreJQ();
					}
					counter++
				});
		});
			
		
		
	function moreJQ(el) {
		//console.log(el);
					$('#featuredproducts td:nth-child(1),#featuredproducts td:nth-child(2),#featuredproducts td:nth-child(3),#featuredproducts th:nth-child(1),#featuredproducts th:nth-child(2),#featuredproducts th:nth-child(3)').hide();
					
					$('#featuredproducts').hover(	
						function () {
							$('.products .col1').prepend('<div id="product-details"></div>');
							$('#product-details').hide().fadeIn( "fast" );
							},
						function () {
							$('#product-details').fadeOut("fast", function (){
								$(this).remove();
							})
					});

					
					
					$('#featuredproducts tbody tr')	.hover(	
						function () {
							activateRevealPanel(this);
							},
						function () {
							deactivateRevealPanel(this);
						});
	}
	
	function activateRevealPanel(el){
			
			var image = $('td:nth-child(1)', el).html();
			var manufacturer = $('td:nth-child(2)', el).html();
			var description = $('td:nth-child(3)', el).html();
			
			var details = '<div class="product-detail">' +
			'<div class="photo">' + image + '</div><div class="copy"><h5>' + manufacturer + 
			'</h5><p>' + description + '</p></div></div>';
			
			$('#product-details .product-detail').remove();
			$('#product-details').append(details);
			$('.product-detail').hide().fadeIn( "fast" );
			//console.log( div );
	}
	
	function deactivateRevealPanel(el){
			
			//$('.product-detail', this).remove();
/*
			$('.product-details').fadeOut("fast", function (){
				$(this).remove();
			})
*/
			
			
			}
	
		
});