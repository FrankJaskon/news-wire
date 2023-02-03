import webpack from 'webpack'

const buildLoaders = (): webpack.RuleSetRule[] => {

    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
    ]
}

export default buildLoaders