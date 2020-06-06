const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const environment = env ? "production" : "development";

  return {
    mode: environment,
    // entry point from which webpack loads all the modules included in the app.
    entry: {
      // provision to have multiple entry points just add them as attributes or the entry object
      app: "./src/index.js",
    },
    // where webpack will save the bundle
    output: {
      // this allows webpac k to create a bundle for each entry point. In this case it would be 'app.bundle.js'
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/preset-react"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    // allows to load source map for the client dev tool
    devtool: "inline-source-map",
    // define where the output will be stored in the client
    devServer: {
      contentBase: "./dist",
      port: 3000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
    ],
  };
};
