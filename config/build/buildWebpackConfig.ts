import webpack from 'webpack'
import buildLoaders from './buildLoaders'
import buildPlugins from './buildPlugins'
import buildResolves from './buildResolves'
import { BuildOptions } from './types/config'

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths } = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolves(),
        plugins: buildPlugins(options)
    }
}

export default buildWebpackConfig