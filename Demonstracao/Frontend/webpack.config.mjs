import { resolve } from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: `development`,
  devtool: `inline-source-map`,
	watch: true,
  entry: {
		legado: `./src/legado.js`, 
		cangaco: `./src/cangaco.js`,
	},
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: `[name].js`,
    path: resolve(process.cwd(), `../wwwroot/`),
  },
  module: {
    rules: [
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          `sass-loader`,
        ]
      },
    ],
  },
  resolve: {
    extensions: [ `.js` ],
    alias: {
      '&': resolve(process.cwd(), `src`),
    },
  },
}