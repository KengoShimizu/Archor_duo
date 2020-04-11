const path = require("path");

module.exports = {
  entry: "./src/views/components/index.tsx",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
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
