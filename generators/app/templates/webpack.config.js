const path = require('path')
const webpack = require('webpack')

var config = {
	entry: ['./src/<%= appname %>.js'],
	output: {
		path: path.resolve(__dirname),
		publicPath: '/',
		filename: '<%= appname %>.js',
		library: '<%= appname %>',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: []
}

if(process.env.NODE_ENV === 'production'){
	config.output.path = path.resolve(__dirname, './dist')
	config
		.plugins
		.push(new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
            	warnings: true,
            	drop_console: false, // 不删除console
        	}
		}))
}else if(process.env.NODE_ENV === 'development'){
	config.entry.unshift("webpack-dev-server/client?http://localhost:8000/")
	config.devtool = '#eval-source-map'
}
module.exports = config