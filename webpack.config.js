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

    new HtmlWebpackPlugin({
      template: './src/pages/room_details.pug',
      filename: './room_details.html',
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/filter_page.pug',
      filename: './filter_page.html',
      inject: true
    }),
    
    
    new HtmlWebpackPlugin({
      template: './src/pages/sign_in_page.pug',
      filename: './sign_in_page.html',
      inject: true
    }),
    
   
    new HtmlWebpackPlugin({
      template: './src/pages/registration.pug',
      filename: './registration.html',
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/landing_page.pug',
      filename: './landing_page.html',
      inject: true
    }),
    
    new HtmlWebpackPlugin({
      template: './src/pages/Headers&Footers.pug',
      filename: './headers_&_footers.html',
      inject: true
    }),
  

    new HtmlWebpackPlugin({
      template: './src/pages/cards.pug',
      filename: './cards.html',
      inject: true
    }),
  

    new HtmlWebpackPlugin({
      template: './src/pages/form-elements.pug',
      filename: './form_elements.html',
      inject: true
    }),
    

    new HtmlWebpackPlugin({
      template: './src/pages/colors&types.pug',
      filename: './color_and_types.html',
      inject: true
    }),
  
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