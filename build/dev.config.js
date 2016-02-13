module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-3', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url?fail', 'sass?sourceMap'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=img/[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    publicPath: '/assets',
    filename: 'bundle.js',
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/*': 'http://localhost:5000',
      '/authenticate': 'http://localhost:5000',
      '/registration': 'http://localhost:5000'
    }
  },
  devtool: 'source-map'
}
