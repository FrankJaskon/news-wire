import React from 'react'

export const LazyAddNewComment = React.lazy(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./AddNewComment')), 300)
	)
)