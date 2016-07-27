'use strict';

$(function () {

	var target = 'table#products';
	$(target).hide();
	//detect when a screen resize occurs that results in new media query being utilized;
	//refires products table build mechanism to switch between layout modes;

	var events = {
		'(all)': function all() {
			$("#productform select").change();
		}
	};

	resizeQuery(events);

	$.getJSON('assets/data/products.json', function (data) {

		//the select field change event fires the build mechanism for the table
		$("#productform select").change(function () {

			var sel = '';

			sel += $("#productform select option:selected").val();

			$('#products tbody').children('tr').remove();

			buildTable(data.products, sel);
		}).change();
	});

	function buildTable(products, display) {

		//products array of all products
		//display: which subset to display(featured or sale)

		var divs = [];

		$('tbody', target).hide();

		for (var p = 0; p < products.length; p++) {

			var value = products[p];

			if (display == 'featured' && value.featured === false) continue;
			if (display == 'sale' && value.sale === false) continue;

			var div = '<tr>\n\t\t\t\t\t<td><img src="assets/img/products/' + value.image + '" alt="" /></td>\n\t\t\t\t\t<td>' + value.manufacturer + '</td>\n\t\t\t\t\t<td>' + value.description + ' </td>\n\t\t\t\t\t<td><a href="#">' + value.number + '</a></td>\n\t\t\t\t\t<td>' + value.category + '</td>\n\t\t\t\t\t<td>$' + PriceColumn(value.price, value.sale) + '</td>\n\t\t\t\t\t</tr>';

			divs.push(div);
		};

		$('tbody', target).append(divs);

		if (Modernizr.mq('(min-width: 768px)')) {
			//large screen layout mode; includes custom hover effect	

			//hover
			$('tbody tr', target).hover(function () {
				activateRevealPanel(this);
			});
			//tabbed focus
			$('tbody tr a', target).on({
				focus: function focus() {
					var tr = $(this).parents('tr');
					$(tr).addClass('focused');
					activateRevealPanel(tr);
				},
				focusout: function focusout() {
					var tr = $(this).parents('tr');
					$(tr).removeClass('focused');
				}
			});
			//reset
			$(target).on({
				mouseleave: function mouseleave() {
					deactivateRevealPanel();
				}
			});
			$('tbody tr:nth-last-child(1) a', target).on({
				focusout: function focusout() {
					deactivateRevealPanel();
				}
			});
		} else {
			//small screen layout mode; standard table output
			$('tbody tr', target).off("mouseenter mouseleave");
		}

		$(target).show();
		$('tbody', target).fadeIn("slow");
	}

	function PriceColumn(templatePrice, templateSale) {

		if (templateSale === false) {
			return templatePrice.toFixed(2);
		} else {
			return '<del>' + templatePrice.toFixed(2) + '</del> ' + templateSale.toFixed(2);
		}
	}

	function activateRevealPanel(el) {

		//take the hover||tabbed row element and retrieve data from child cells to populate hover element
		deactivateRevealPanel();

		$('.products .col1').prepend('<div id="product-details"></div>');

		var image = $('td:nth-child(1)', el).html();
		var manufacturer = $('td:nth-child(2)', el).html();
		var description = $('td:nth-child(3)', el).html();

		var details = '<div class="product-detail"><div class="photo">' + image + '</div><div class="copy"><h4>' + manufacturer + '</h4><p>' + description + '</p></div></div>';

		$('#product-details').append(details);
		$('.product-detail').hide().fadeIn("fast");
	}

	function deactivateRevealPanel() {
		$('#product-details').remove();
	}
});