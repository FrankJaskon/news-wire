export const getMainRoute = () => '/'
export const getAboutRoute = () => '/about'
export const getProfileRoute = (id: number | string) => '/profiles/' + id
export const getArticlesRoute = () => '/articles'
export const getArticleDetailsRoute = (id: number | string) => '/articles/' + id
export const getEditArticleDetailsRoute = (id: number | string) => `/articles/${id}/edit`
export const getNewArticleDetailsRoute = () => '/articles/new'
export const getAdminRoute = () => '/admin'
export const getForbiddenRoute = () => '/forbidden'
export const getNotFoundRoute = () => '*'

// request routes

export const getLoginRoute = () => '/login'
export const getUsersRoute = () => '/users'
export const getCommentsRoute = () => '/comments'
