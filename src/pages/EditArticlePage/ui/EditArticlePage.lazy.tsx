import React from 'react'

export const LazyEditArticlePage = React.lazy(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./EditArticlePage')), 300)
	)
)