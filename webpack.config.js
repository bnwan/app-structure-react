var getConfig = require('hjs-webpack');

module.exports = getConfig({
	in: 'src/app.js',
	out: 'dist',
	isDev: process.env.NODE_ENV !== 'production'
});