import webpack from 'webpack'

const buildLoaders = (): webpack.RuleSetRule[] => {

    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }


    return [
        typeScriptLoader,
        styleLoader,
    ]
}

export default buildLoaders