const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "[name].[hash:8].js",
    sourceMapFilename: "[name].[hash:8].map",
    chunkFilename: "[id].[hash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: { port: 3030 },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(sa|sc|c)ss$/i, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/i, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
