function buildTable(target, products, display) {
	
	//products array of all products
	//display: which subset to display(featured or sale)
				
	var divs = [];
	
	$('tbody', target).hide();
	
	for (var p = 0; p < products.length; p++){
		
		let value = products[p];
			
		if(display == 'featured' && value.featured === false) continue;
		if(display == 'sale' && value.sale === false) continue;
			
		let div = `<tr>
		<td><img src="assets/img/products/${value.image}" alt="" /></td>
		<td>${value.manufacturer}</td>
		<td>${value.description} </td>
		<td><a href="#">${value.number}</a></td>
		<td>${value.category}</td>
		<td>$${_priceColumn(value.price,value.sale)}</td>
		</tr>`;
			
		divs.push(div);	
	};
	
	$('tbody', target).append(divs);	
	
	if (Modernizr.mq( '(min-width: 768px)') ) {	
	//large screen layout mode; includes custom hover effect	
		
		//hover
		$('tbody tr', target).hover(	
			function () {
				_activateProductReveal(this);
			});
		//tabbed focus
		$('tbody tr a', target).on({
			focus: function () {
				let tr = $(this).parents('tr');
				$(tr).addClass('focused');
				_activateProductReveal(tr);
			},
			focusout: function () {
				let tr = $(this).parents('tr');
				$(tr).removeClass('focused');
			}
		});
		//reset
		$(target).on({
			mouseleave : function () {
				_deactivateProductReveal();
			}
		});
		$('tbody tr:nth-last-child(1) a', target).on({
			focusout: function () {
				_deactivateProductReveal();
			}
		})	
					
	} else {
		//small screen layout mode; standard table output
		$('tbody tr', target).off( "mouseenter mouseleave" );
		}
	
	$('tbody', target).fadeIn( "slow" );
	
}
	
function _priceColumn(templatePrice, templateSale) {
	
	if(templateSale === false) {
		return templatePrice.toFixed(2);
	} else {
		return `<del>${templatePrice.toFixed(2)}</del> ${templateSale.toFixed(2)}`;
	}
}
	
function _activateProductReveal(el){
			
	//take the hover||tabbed row element and retrieve data from child cells to populate hover element
	_deactivateProductReveal();
	
	$('.products .col1').prepend('<div id="product-details"></div>');
	
	var image = $('td:nth-child(1)', el).html();
	var manufacturer = $('td:nth-child(2)', el).html();
	var description = $('td:nth-child(3)', el).html();
	
	var details = `<div class="product-detail"><div class="photo">${image}</div><div class="copy"><h4>${manufacturer}</h4><p>${description}</p></div></div>`;
	
	$('#product-details').append(details);
	$('.product-detail').hide().fadeIn( "fast" );
}
	
function _deactivateProductReveal(){
	$('#product-details').remove();
}
