module.exports = {
	watch: true,
	watchOptions: {
		ignored: [
			/node_modules/
		]
	},
	entry: __dirname + '/app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			}
		]
	}
}