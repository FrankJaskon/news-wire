import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    const {port} = options

    return {
        port,
        open: true
    }
}

export default buildDevServer