const path = require("path");

module.exports = (env) => {
  const environment = env ? "production" : "development";

  return {
    mode: environment,
    // entry point from which webpack loads all the modules included in the app.
    entry: "./src/index.js",
    // where webpack will save the bundle
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
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
  };
};
