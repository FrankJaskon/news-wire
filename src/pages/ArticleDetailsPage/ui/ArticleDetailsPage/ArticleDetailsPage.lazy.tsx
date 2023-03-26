import React from 'react'

export const LazyArticleDetailsPage = React.lazy(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./ArticleDetailsPage')), 300)
	)
)