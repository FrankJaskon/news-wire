import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const typeScriptLoader: webpack.RuleSetRule =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
            filename: options.paths.assets.svg,
        }
    }

    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const styleLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]'
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        styleLoader,
        imgLoader,
        svgLoader
    ]
}

export default buildLoaders