import { RefObject, useEffect, useMemo, useState } from 'react'

interface UseInitContentWidthProps {
	left?: RefObject<HTMLDivElement>
	content: RefObject<HTMLDivElement>
	right?: RefObject<HTMLDivElement>
	container?: HTMLElement
}

const padding = 32

export const useInitContentWidth = ({
	left,
	content,
	right,
	container,
}: UseInitContentWidthProps) => {
	const initialMaxWidth = useMemo(
		() =>
			Math.min(
				window.innerWidth,
				window.document.documentElement.scrollWidth,
				document.documentElement.clientWidth
			),
		[]
	)

	const [availableMaxWidth, setAvailableMaxWidth] = useState(
		container ? container?.getBoundingClientRect().width - 2 * padding : initialMaxWidth
	)

	useEffect(() => {
		if (container) {
			const handleResize = () => {
				const availableMaxWidth = container.getBoundingClientRect().width - 2 * padding
				setAvailableMaxWidth(availableMaxWidth)
			}

			handleResize()

			window.addEventListener('resize', handleResize)
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		} else {
			const handleResize = () => {
				const availableMaxWidth = Math.min(
					window.innerWidth,
					window.document.documentElement.scrollWidth,
					document.documentElement.clientWidth
				)
				setAvailableMaxWidth(availableMaxWidth)
			}

			handleResize()

			window.addEventListener('resize', handleResize)
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [container])

	useEffect(() => {
		const handleResize = () => {
			const hasScrollbar = document.documentElement.scrollHeight > window.innerHeight

			let availableWidth =
				availableMaxWidth -
				(left?.current?.getBoundingClientRect().width ?? 0) -
				(right?.current?.getBoundingClientRect().width ?? 0) -
				1

			if (hasScrollbar) {
				const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
				availableWidth -= scrollbarWidth
			}
			if (availableWidth > 0) {
				if (content.current) {
					content.current.style.maxWidth = `${availableWidth}px`
				}
			} else {
				if (content.current) {
					content.current.style.maxWidth = '1200px'
				}
			}
		}

		handleResize()

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [content, left, right, availableMaxWidth])
}
