import { MutableRefObject, useCallback, useRef } from 'react'

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
	const timerRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null)

	return useCallback(
		(...args: Parameters<T>) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
			timerRef.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)
}
