'use strict'

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
	devtool: options.devtool,
	entry: [
		'webpack-dev-server/client?http://localhost:${options.port}',
		'wepack/hot/dev-server'
	],
	output: {
		path: Path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [

	],
	module: {
		loaders: [{

		}]
	}
};

if (options.isProduction) {
	webpackConfig.entry = [''];


} else {
	
}