import React from 'react'

export const LazyMainPage = React.lazy(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./MainPage')), 300)
	)
)