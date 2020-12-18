const WebpackOwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js"
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }, 
          plugins: [
            new WebpackPwaManifest({
              filename: "manifest.json",
              //we arent using webpack to generate our html so we set inject to false
              inject: false,
              //set finger prints to 'false' to make the names of the generated files predictible making it easier to refer to them in our code
              fingerprints: false, 
              name: "Budget tracking app",
              short_name: "Budget app",
              background_color: "#01579b",
              theme_color: "#ffffff",
              "theme-color": "#ffffff",
              start_url: "/",
              display: "standalone",
              icons: [
                {
                  src: path.resolve("public/icons/icon-192x192.png"),
                  sizes: [192, 512]
                }
              ]
            })
          ]
        }
      ]
    }
  };
  module.exports = config;
