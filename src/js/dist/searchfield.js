"use strict";

$(function () {

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
});