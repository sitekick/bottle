$(function() {
	
	$.ajax({
		type:'GET',
		url:'data/products2.json',
		dataType: 'json',
		success: jsonParser
	})
	
	function jsonParser(json){
		$('#load').fadeOut();
		$.getJSON('data/products2.json', function(data) {
			
			var products = data.length;
			console.log(json.length);
			var counter = 1;
			
			$.each(data.products.product, function (k,v) {
				var number = v.number;
				var category = v.category;
				var price = v.price;
				var hover = v.hover;
				var featured = v.featured;
				var sale = v.sale;
				$('#featuredproducts tbody').append('<tr style="cursor: pointer;"><td>' + number + '</td><td>' + category + '</td><td>' + price + '</td></tr>')
					
					//console.log(counter);
					//console.log(products);
					if(counter == products){
						moreJQ();
					}
				counter++;
				
			});
		});
		
	}
	
	
	function moreJQ() {
		console.log('test');
	}
		
});