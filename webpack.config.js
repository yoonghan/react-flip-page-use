const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
      index: "./src/index.tsx"
    },
    output: {
      filename: "[name].bundle.js",
      publicPath: "/",
      path: __dirname + "/dist/"
    },

    devServer: {
      contentBase: './dist/'
    },

    devtool: "source-map",

    resolve: {
      extensions: [ ".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: ['/node_modules/']
        }
      ]
    },

    plugins: [
      new UglifyJsPlugin()
    ],

    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
};
