import path from 'path'
import webpack from 'webpack'
import { BuildEnv, BuildMode } from './config/build/types/config'
import buildWebpackConfig from './config/build/buildWebpackConfig'

export default ( env: BuildEnv ) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const mode: BuildMode = env.mode || 'development'

	const PORT = env.port || 3000

	const isDev = env.mode === 'development'

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT
	})

	return config
}