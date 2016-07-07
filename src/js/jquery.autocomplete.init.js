$(function () {
	
	var suggestions = $.map(terms, function (term) { return { value: term, data: term }; });
		$('#searchform input[type=text]').autocomplete({
			lookup: suggestions			
		});

});


