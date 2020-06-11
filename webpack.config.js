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
      template: './src/pages/room-details.pug',
      filename: './room-details.html',
      inject: true
    }),
 */
    new HtmlWebpackPlugin({
      template: './src/pages/filter-page.pug',
      filename: './filter-page.html',
      inject: true
    }),
     /*
    new HtmlWebpackPlugin({
      template: './src/pages/sign-in-page.pug',
      filename: './sign-in-page.html',
      inject: true
    }),
   
    new HtmlWebpackPlugin({
      template: './src/pages/registration.pug',
      filename: './registration.html',
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/landing-page.pug',
      filename: './landing-page.html',
      inject: true
    }),
 /*
    new HtmlWebpackPlugin({
      template: './src/pages/headers-and-footers.pug',
      filename: './headers-and-footers.html',
      inject: true
    }),
    */

/*
    new HtmlWebpackPlugin({
      template: './src/pages/cards.pug',
      filename: './cards.html',
      inject: true
    }),
    

/*
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements.pug',
      filename: './form-elements.html',
      inject: true
    }),
    
  /*
    new HtmlWebpackPlugin({
      template: './src/pages/colors-and-types.pug',
      filename: './color-and-types.html',
      inject: true
    }),
    */

    new HtmlWebpackPlugin({
      template: './src/pages/presentation.pug',
      filename: './index.html',
      inject: true
    }),
  
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader',],
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
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
          {
            loader: 'sass-resources-loader',
            options: {
                resources: './src/scss/variables.scss'
            }
        }
        ],
      },

    ],
  },
};