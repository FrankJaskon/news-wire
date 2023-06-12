import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

const buildPlugins = ({
	paths,
	isDev,
	apiUrl,
	analyzed,
	project,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
	const isProd = !isDev

	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__iS_DEV__: JSON.stringify(isDev),
			__API_URL__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
	]

	if (isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin(),
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					diagnosticOptions: {
						semantic: true,
						syntactic: true,
					},
					mode: 'write-references',
				},
			}),
			new CircularDependencyPlugin({
				exclude: /a\.js|node_modules/,
				failOnError: true,
			})
		)
	}

	if (isProd) {
		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }],
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
			})
		)
	}

	if (analyzed) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: true,
			})
		)
	}

	return plugins
}

export default buildPlugins
