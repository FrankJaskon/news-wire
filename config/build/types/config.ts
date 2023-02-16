export type BuildMode = 'production' | 'development'

export interface AssetPaths {
    svg: string,
    images: string,
}

export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
    assets: AssetPaths
}

export interface BuildEnv {
    mode: BuildMode
    port?: number
    analyzed?: boolean
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
    analyzed: boolean
}