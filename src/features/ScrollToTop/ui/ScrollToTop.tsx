import { FC, memo, useCallback, useEffect, useState } from 'react'
import ScrollToTopIcon from '@/shared/assets/icons/scroll-bottom.svg'
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'

export const ScrollToTop: FC = memo(() => {
	const [available, setAvailable] = useState(false)
	const [windowHeight, setWindowHeight] = useState(window.innerHeight)

	const handleOnScroll = useThrottle(() => {
		if (window.pageYOffset > windowHeight) {
			setAvailable(true)
		} else {
			setAvailable(false)
		}
	}, 100)

	const handleResize = useCallback(() => {
		setWindowHeight(window.innerHeight)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleOnScroll)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('scroll', handleOnScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [handleOnScroll, handleResize])

	const handleOnClick = useThrottle(() => {
		if (window.scrollY === 0) {
			return
		}

		const scrollToTop = () => {
			if (window.scrollY > 0) {
				window.scrollBy(0, -50)
				requestAnimationFrame(scrollToTop)
			}
		}

		requestAnimationFrame(scrollToTop)
	}, 500)

	return available ? <AppIcon Svg={ScrollToTopIcon} onClick={handleOnClick} clickable /> : null
})
