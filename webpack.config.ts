import path from 'path'
import webpack from 'webpack'
import { BuildEnv, BuildMode } from './config/build/types/config'
import buildWebpackConfig from './config/build/buildWebpackConfig'

export default ( env: BuildEnv ) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src' ),
		assets: {
			svg: path.join('icons', '[name].[contenthash][ext]'),
			images: path.join('images', '[name].[contenthash][ext]'),
		},
	}

	const analyzed: boolean = env.analyzed || false

	const mode: BuildMode = env.mode || 'development'

	const PORT: number = env.port || 3000

	const isDev: boolean = mode === 'development'

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		analyzed
	})

	return config
}