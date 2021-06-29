const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = "production";
const target = "browserslist";

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
    },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
    }],
  },
  target: target,
  devtool: "source-map",
  devServer: { contentBase: "./dist" },
};
