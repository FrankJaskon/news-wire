export type Mode = 'production' | 'development'

export interface Paths {
    entry: string
    output: string
    html: string
}

export interface BuildOptions {
    mode: Mode
    paths: Paths
    isDev: boolean
}