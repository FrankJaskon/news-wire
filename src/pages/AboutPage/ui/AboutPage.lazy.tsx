import React from 'react'

export const LazyAboutPage = React.lazy(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./AboutPage')), 300)
	)
)