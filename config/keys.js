// sets what set of keys I want to return
if (process.env.NODE_ENV === 'production') {
	//return keys in production
	module.exports = require('./prod');
} else {
	//return keys in dev 
	module.exports = require('./dev');
}