import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { styleLoader } from '../../config/build/Loaders/styleLoader'
import { BuildPaths } from '../../config/build/types/config'
import { svgLoader } from '../../config/build/Loaders/svgLoader'
import { imgLoader } from '../../config/build/Loaders/imgLoader'

const config = ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
	const paths: BuildPaths = {
		assets: {
			svg: '',
			images: ''
		},
		entry: '',
		html: '',
		output: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
		buildLocales: '',
		locales: ''
	}

	// LOADERS

	if ( config.module?.rules ) {
		config.module.rules = config.module.rules.map((rule) => {
			if (/svg/.test((rule as RuleSetRule ).test as string)) {
				return svgLoader()
			}
			return rule
		})

		config.module.rules.push(styleLoader(true))
		config.module.rules.push(imgLoader())
	}

	// RESOLVES

	if ( config.resolve ) {
		config.resolve.modules = [paths.src, 'node_modules']
		config.resolve.preferAbsolute = true
		config.resolve.extensions = ['.tsx', '.ts', '.js']
		config.resolve.mainFiles = ['index']
		config.resolve.alias = {
			'@': paths.src
		}
	}

	// PLUGINS

	if ( config.plugins ) {
		config.plugins?.push(new webpack.DefinePlugin({
			__iS_DEV__: JSON.stringify(true),
			__API_URL__: JSON.stringify('http://mock.url'),
			__PROJECT__: JSON.stringify('storybook')
		}))
	}

	return config
}

module.exports = config