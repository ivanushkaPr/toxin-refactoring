const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    alias: {
      'jquery': path.join(__dirname, 'node_modules/jquery/src/jquery')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",

 }),
    /*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/room_details.pug',
      filename: './index.html',
      inject: true
    }),
    */
    /*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/filter_page.pug',
      filename: './index.html',
      inject: true
    }),
    */
    /*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/sign_in_page.pug',
      filename: './index.html',
      inject: true
    }),
    
    new HtmlWebpackPlugin({
      template: './src/pug/pages/registration.pug',
      filename: './index.html',
      inject: true
    }),
    */

    /*
    
    new HtmlWebpackPlugin({
      template: './src/pug/pages/landing_page.pug',
      filename: './index.html',
      inject: true
    }),
    */
    
    
    new HtmlWebpackPlugin({
      template: './src/pug/pages/Headers&Footers.pug',
      filename: './index.html',
      inject: true
    }),
    
    /*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/cards.pug',
      filename: './index.html',
      inject: true
    }),
  */

/*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/form-elements.pug',
      filename: './index.html',
      inject: true
    }),
  */
    /*
    new HtmlWebpackPlugin({
      template: './src/pug/pages/colors&types.pug',
      filename: './colorAndTypes.html',
      inject: true
    }),
    */
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader',],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};