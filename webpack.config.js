const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
	devtool: 'inline-source-map',
	
	devServer: {
		static: './dist',
	},

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },


	plugins: [
    new HtmlWebpackPlugin({
			title: 'Development',
      template: './src/index.html',
    }),
  ],

	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

			{
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: '/public/icons/[name].[ext]'
        }
      }
    ],
  },

	mode: 'development',
};
