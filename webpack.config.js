const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      api: path.resolve(__dirname, "./src/api"),
      constants: path.resolve(__dirname, "./src/constants"),
      mRedux: path.resolve(__dirname, "./src/redux"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeComments: true,
        useShortDoctype: true,
        removeRedundantAttributes: true
      }
    })
  ]
};
