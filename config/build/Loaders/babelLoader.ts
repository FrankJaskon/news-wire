import babelRemoveAttributesPlugin from '../babel/babel-plugin-remove-attributes'
import { BuildOptions } from '../types/config'
import type webpack from 'webpack'

interface BuildOptionsProps extends BuildOptions {
	isTsx?: boolean
}

export const babelLoader = (options: BuildOptionsProps): webpack.RuleSetRule => ({
	test: options.isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				'@babel/preset-typescript',
				['@babel/preset-env', { targets: 'defaults' }]
			],
			plugins: [
				'@babel/plugin-transform-runtime',
				options.isTsx && [babelRemoveAttributesPlugin, { props: ['data-testid']}],
				[
					'@babel/plugin-transform-typescript',
					{
						isTsx: options.isTsx,
					}
				]
			].filter(Boolean)
		}
	}
})