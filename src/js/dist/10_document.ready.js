'use strict';

$(function () {

	var events = {
		'(max-width: 500px)': function maxWidth500px() {
			mobileNav();
			footerNavActivate();
		},
		'(max-width: 768px)': function maxWidth768px() {
			standardNav();
			footerNavDeactivate();
		},
		'(max-width: 1024px)': function maxWidth1024px() {
			standardNav();
			footerNavDeactivate();
		},
		'(min-width: 1024px)': function minWidth1024px() {
			standardNav();
			footerNavDeactivate();
		},
		'(all)': function all() {
			$("#productform select").change();
			$("#softwareform select").change();
		}
	};

	//with true to set initial state
	resizeQuery(events, true);

	/* Charts */
	$.getJSON('assets/data/charts.json', function (data) {

		buildCharts(data.charts);
	});

	/* Search Field */
	$.getJSON('assets/data/search.json', function (data) {

		var terms = data.terms;

		var suggestions = $.map(terms, function (term) {
			return { value: term, data: term };
		});
		$('#searchform input[type=text]').autocomplete({
			lookup: suggestions
		});
	});

	/* Change search border color; submit button background color on focus of search field */

	$("#searchform input[type=text]").on({
		focus: function focus() {
			$(this).parent().addClass('active');
		},
		input: function input() {
			$(this).next("input[type=submit]").addClass('active');
		},
		focusout: function focusout() {
			$(this).parent().removeClass('active');

			if ($(this).val().trim().length == 0) {
				$(this).next("input[type=submit]").removeClass('active');
			}
		}
	});

	/* Products */

	$.getJSON('assets/data/products.json', function (data) {

		var target = 'table#products';

		//the select field change event fires the build mechanism for the table
		$("#productform select").change(function () {

			var sel = '';

			sel += $("#productform select option:selected").val();

			$('tbody', target).children('tr').remove();

			buildTable(target, data.products, sel);
		}).change();
	});

	/* Software */

	$.getJSON('assets/data/software.json', function (data) {

		var target = '.software .scrollwrap';
		//the select field change event fires the build mechanism for the table

		$("#softwareform select").change(function () {

			var sel = '';

			sel += $("#softwareform select option:selected").val();

			$(target).children('article').remove();

			buildScroll(target, data.blog[sel]);
		}).change();
	});

	//user agents abbr to html class; because reasons
	(function uaVersion() {

		switch (true) {

			case bowser.name == 'Internet Explorer':
				addUAClass('ie', Math.floor(bowser.version));
				break;
			case bowser.name == 'Safari':
				ver = (bowser.version * 1).toString();
				addUAClass('sf', ver.replace('.', '-'));
				break;
			case bowser.name == 'Chrome':
				addUAClass('ch', Math.floor(bowser.version));
				break;
			case bowser.name == 'Opera':
				addUAClass('op', Math.floor(bowser.version));
				break;
			case bowser.name == 'Firefox':
				addUAClass('ff', Math.floor(bowser.version));
				break;
		}

		function addUAClass(slug, ver) {
			if (slug !== undefined && ver !== undefined) {
				$('html').addClass(slug + ver);
			}
		}
	})();
});