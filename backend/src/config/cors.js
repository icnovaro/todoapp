'use strict'

module.exports = function (req, res, next) {
	res.header('Acess-Control-Allow-Origin', '*');
	res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DETELE');
	res.header('Acess-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
	next();
}