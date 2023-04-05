import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void, ...dependencies: any) => {
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			callback()
		}
	// eslint-disable-next-line
	}, [...dependencies])
}