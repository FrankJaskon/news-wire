import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'
import CopyPlugin from 'copy-webpack-plugin'

const buildPlugins = ({
	paths,
	isDev,
	apiUrl,
	analyzed,
	project
}: BuildOptions): webpack.WebpackPluginInstance[] => {
	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__iS_DEV__: JSON.stringify(isDev),
			__API_URL__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project)
		})
	]
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin())
	} else {
		plugins.push(new CopyPlugin({
			patterns: [
				{ from: paths.locales, to: paths.buildLocales },
			],
		}))
	}
	if (analyzed) {
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: true
		}))
	}

	return plugins
}

export default buildPlugins