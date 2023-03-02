import webpack from 'webpack'
import { BuildOptions } from '../types/config'
import { imgLoader } from './imgLoader'
import { styleLoader } from './styleLoader'
import { svgLoader } from './svgLoader'

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

	const typeScriptLoader: webpack.RuleSetRule =  {
		test: /\.tsx?$/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			}
		},
		exclude: /node_modules/,
	}

	const babelLoader: webpack.RuleSetRule = {
		test: /\.(js|ts|tsx|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-typescript',
					['@babel/preset-env', { targets: 'defaults' }]
				]
			}
		}
	}

	return [
		babelLoader,
		typeScriptLoader,
		styleLoader(options.isDev),
		imgLoader(),
		svgLoader()
	]
}

export default buildLoaders