const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tconfig.json"),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    //指定されている拡張子のファイルはimportの際に拡張子を省略できる
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/base.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
