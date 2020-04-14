const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: "./src/server.ts",
  output: {
    filename: "js/server.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [
           'node-style-loader',
          {
            loader: 'css-loader',
            options :{
              modules : true
            }
          },
          'postcss-loader','sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
};
