const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),

    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
