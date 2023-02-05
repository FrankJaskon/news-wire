import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
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
    ]
}

export default buildLoaders