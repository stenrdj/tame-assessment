exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {
		var callCount = start;
		return {
			start: function() {

				var repeater = setInterval(function () {
					if (callCount < end) {
						callfunction();
						callCount += 1;
					} else {
						clearInterval(repeater);
					}
				}, 1000);
			},
			stop: function() {
				callCount=end;
			}
		};
	}
};
