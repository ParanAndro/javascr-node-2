var os = require('os');

function uptimeInfo () {
	var uptime = os.uptime();
	var secRest = ((uptime % 60).toFixed(0));
	var min = ((uptime / 60).toFixed(0));
	var hrs = ((min / 60).toFixed(0));
	var minRest = ((min % 60).toFixed(0));
	if (uptime < 60) {
		console.log('Uptime:', uptime, 'sec.');
	}
	if (uptime < 3600) {
		console.log('Uptime:', min, 'min.,', secRest, 'sec.');
		} else {
		console.log('Uptime:', hrs, 'h,', minRest, 'min.', secRest, 'sec.');
		}
	}
exports.print = uptimeInfo;