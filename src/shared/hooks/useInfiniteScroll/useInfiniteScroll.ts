import { MutableRefObject, useEffect } from 'react'

export interface InfiniteScrollProps {
	callback?: () => void
	triggerRef: MutableRefObject<HTMLElement>
	wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: InfiniteScrollProps) => {
	useEffect(() => {
		let observer: IntersectionObserver | null = null
		const currentWrapperRef = wrapperRef.current
		const currentTriggerRef = triggerRef.current

		if (callback) {
			const options = {
				root: currentWrapperRef,
				rootMargin: '20px 20px 20px 40px',
				threshold: 1.0,
			}

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback()
				}
			}, options)

			observer.observe(currentTriggerRef)

			return () => {
				if (observer) {
					observer.unobserve(currentTriggerRef)
				}
			}
		}
	}, [triggerRef, wrapperRef, callback])
}
