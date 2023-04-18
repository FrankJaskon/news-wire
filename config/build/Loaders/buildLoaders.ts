import webpack from 'webpack'
import { BuildOptions } from '../types/config'
import { imgLoader } from './imgLoader'
import { styleLoader } from './styleLoader'
import { svgLoader } from './svgLoader'
import { babelLoader } from './babelLoader'

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

	const codeBabelLoader = babelLoader({ ...options, isTsx: false })
	const tsxBabelLoader = babelLoader({ ...options, isTsx: true })

	return [
		codeBabelLoader,
		tsxBabelLoader,
		styleLoader(options.isDev),
		imgLoader(),
		svgLoader()
	]
}

export default buildLoaders