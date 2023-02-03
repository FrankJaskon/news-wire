import path from 'path'
import webpack from 'webpack'
import { Mode } from './config/build/types/config'
import buildWebpackConfig from './config/build/buildWebpackConfig'

const paths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode: Mode = 'development'

const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
	mode,
	paths,
	isDev,
})

export default config