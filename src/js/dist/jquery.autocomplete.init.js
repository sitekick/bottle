'use strict';

$(function () {

	$.getJSON('assets/data/search.json', function (data) {

		var terms = data.terms;

		var suggestions = $.map(terms, function (term) {
			return { value: term, data: term };
		});
		$('#searchform input[type=text]').autocomplete({
			lookup: suggestions
		});
	});
});