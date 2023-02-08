import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__iS_DEV__: JSON.stringify(isDev)
		}),
		isDev && new ReactRefreshWebpackPlugin(),
		isDev && new webpack.HotModuleReplacementPlugin()
	].filter(Boolean)
}

export default buildPlugins