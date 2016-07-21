$(function() {
	
		var products = [];
			products['featured'] = [];
			products['sale'] = [];
		
		//detect when a screen resize occurs that results in new media query being utilized;
		//refires products table build mechanism to switch between layout modes;
		var currentMQ = transitionMq();
		$(window).resize(function(){ transitionMq() });
		
		
		$('table#products').hide();	
		
				
		$.getJSON('assets/data/products.json', function(data) {
				
				$.each(data.products.product, function (key,value) {
										
					var kv = [];
					
					Object.getOwnPropertyNames(value).forEach(function(val, idx, array) {
						kv[val] = value[val];
					});
					
					if(value.featured === true){
						products['featured'].push(kv);
					}
					if(value.sale !== false){
						products['sale'].push(kv);
					}
				});	
		
				//the select field change event fires the build mechanism for the table
				$("#productform select").change(function() {
			
				var sel = '';
			
				sel += $("#productform select option:selected").val(); 
			
				$('#products tbody').children('tr').remove();
				
				buildTable(products[sel]);

				}).change();
		
		});
		
	
	function transitionMq() {
		/* As screen size changes; detect if we have transitioned between media queries; requires Modernizr */
		let mQueries = ['(max-width: 500px)','(max-width: 768px)','(max-width: 1024px)','(min-width: 1024px)'];
		
		for (i=0 ;i < mQueries.length; i++) {
			
			if(Modernizr.mq(mQueries[i]) == true){
				
				if(currentMQ == null){
				 	return mQueries[i];
				} else if(mQueries[i] != currentMQ){
					currentMQ = mQueries[i];
					transitionMqEvents();
				} 
				
				break;
			}
		}
	}
	
	function transitionMqEvents() {
			//rebuild products table to allow switch between two modes; done by firing change on select input
			$("#productform select").change();
		}
	
	function buildTable(arr) {
	
				var divs = [];
				var div;
				
				$('table#products tbody').hide();
				
				$.each(arr, function (index, value) {
					var div = `<tr>
					<td><img src="assets/img/products/${value.image}" alt="" /></td>
					<td>${value.manufacturer}</td>
					<td>${value.description} </td>
					<td><a href="#">${value.number}</a></td>
					<td>${value.category}</td>
					<td>$${PriceColumn(value.price,value.sale)}</td>
					</tr>`;
						
					divs.push(div);	
				});
				
				$('table#products tbody').append(divs);	
				
				if (Modernizr.mq('(min-width: 768px)') ) {	
				//large screen layout mode; includes custom hover effect	
					
					//hover
					$('#products tbody tr').hover(	
						function () {
							activateRevealPanel(this);
								});
					//tabbed focus
					$('#products tbody tr a').on({
						focus: function () {
							let tr = $(this).parents('tr');
							$(tr).addClass('focused');
							activateRevealPanel(tr);
						},
						focusout: function () {
							let tr = $(this).parents('tr');
							$(tr).removeClass('focused');
						}
					});
					//reset
					$('#products').on({
						mouseleave : function () {
							deactivateRevealPanel();
						}
					});
					$('#products tbody tr:nth-last-child(1) a').on({
						focusout: function () {
							deactivateRevealPanel();
						}
					})	
								
				} else {
					//small screen layout mode; standard table output
					$('#products tbody tr').off( "mouseenter mouseleave" );
					}
				
				
				$('table#products').show();
				$('table#products tbody').fadeIn( "slow" );
				
	}
	
	function PriceColumn(templatePrice, templateSale) {
		
		if(templateSale === false) {
			return templatePrice.toFixed(2);
		} else {
			return `<del>${templatePrice.toFixed(2)}</del>${templateSale.toFixed(2)}`;

		}
	}
	
	function activateRevealPanel(el){
			
			//take the hover||tabbed row element and retrieve data from child cells to populate hover element
			deactivateRevealPanel();
			
			$('.products .col1').prepend('<div id="product-details"></div>');
			
			var image = $('td:nth-child(1)', el).html();
			var manufacturer = $('td:nth-child(2)', el).html();
			var description = $('td:nth-child(3)', el).html();
			
			var details = `<div class="product-detail"><div class="photo">${image}</div><div class="copy"><h4>${manufacturer}</h4><p>${description}</p></div></div>`;
			
			$('#product-details').append(details);
			$('.product-detail').hide().fadeIn( "fast" );
	}
	
	function deactivateRevealPanel(){
			$('#product-details').remove();
			}
	
		
});