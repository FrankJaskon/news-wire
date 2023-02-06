export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}