import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    const {port} = options
    return {
        port,
        open: true
    }
}

export default buildDevServer