var os = require('os');
var uptimeInfo = require('./uptime');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('System:', type);
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
	uptimeInfo.print();
}

exports.print = getOSinfo;