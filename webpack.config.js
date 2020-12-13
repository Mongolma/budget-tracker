const config = {
    entry: {
      app: "./public/index.js"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.js"
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
              name: "Images App",
              short_name: "Images App",
              description: "An application for images",
              background_color: "#01579b",
              theme_color: "#ffffff",
              "theme-color": "#ffffff",
              start_url: "/",
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
