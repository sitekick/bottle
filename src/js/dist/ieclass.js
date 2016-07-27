"use strict";

$(function () {
	//detects versions 9,10,11
	(function ieVersion() {

		var ua = window.navigator.userAgent;

		switch (true) {

			case ua.indexOf("Trident/7.0") > 0:
				addIeClass(11);
				break;
			case ua.indexOf("Trident/6.0") > 0:
				addIeClass(10);
				break;
			case ua.indexOf("Trident/5.0") > 0:
				addIeClass(9);
				break;
		}

		function addIeClass(v) {
			$('html').addClass("ie" + v);
		}
	})();
});