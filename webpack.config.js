const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/app.js', './src/style/style.scss'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },{ // regular css files
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader?importLoaders=1',
      }),
    }
  ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style/style.css',
      allChunks: true
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
