'use strict';

var resizeQuery = function () {

	var mQueries = ['(max-width: 500px)', '(max-width: 768px)', '(max-width: 1024px)', '(min-width: 1024px)'];
	var currentMQ = idQuery();

	var monitorMQ = function monitorMQ(eventsobj, init) {

		var tmpMQ = currentMQ;

		if (init) {
			fireCallback(eventsobj, currentMQ);
		}

		$(window).resize(function () {
			var newMQ = idQuery();

			if (newMQ != tmpMQ) {
				fireCallback(eventsobj, newMQ);

				if (eventsobj['(all)']) {
					fireCallback(eventsobj, '(all)');
				}

				tmpMQ = newMQ;
			};
		});
	};

	function idQuery() {
		for (var i = 0; i < mQueries.length; i++) {
			if (Modernizr.mq(mQueries[i]) == true) {

				return mQueries[i];

				break;
			}
		}
	}

	function fireCallback(events, index) {

		if (typeof events[index] === 'function') {
			return events[index]();
		}
	}

	return monitorMQ;
}();