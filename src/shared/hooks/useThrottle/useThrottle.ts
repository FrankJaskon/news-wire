import { MutableRefObject, useCallback, useRef } from 'react'

export const useThrottle = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
	const throttleRef = useRef<boolean>(false)
	const timeoutRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null)

	return useCallback((...args: Parameters<T>) => {
		if (!throttleRef.current) {
			callback(...args)
			throttleRef.current = true

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}

			timeoutRef.current = setTimeout(() => {
				throttleRef.current = false
			}, delay)
		}
	}, [callback, delay])
}