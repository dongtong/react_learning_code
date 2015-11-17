var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
	entry: path.resolve(__dirname, 'src/javascripts/main.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	}
	modules: {
		loaders: [{
			test: /\.js$/,
			exclude: [node_modules],
			loader: 'babel-loader' 
		}]
	}
}

module.exports = config;
