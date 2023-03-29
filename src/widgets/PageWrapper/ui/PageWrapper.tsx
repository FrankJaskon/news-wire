import { StateSchema } from 'app/providers/StoreProvider'
import { FC, MutableRefObject, ReactNode, UIEvent, UIEventHandler, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll'
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle'
import classNames from 'shared/lib/classNames/classNames'
import { getPageScrollByPath } from '../model/selectors/getPageScroll'
import { pageScrollActions } from '../model/slice/pageScrollSlice'
import cls from './PageWrapper.module.scss'

export interface PageWrapperProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
	watchedScroll?: boolean
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
	const {
		className,
		children,
		onScrollEnd,
		watchedScroll = false
	} = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname))

	useInfiniteScroll({
		wrapperRef,
		triggerRef,
		callback: onScrollEnd
	})

	useEffect(() => {
		if (watchedScroll) {
			wrapperRef.current.scrollTop = scrollPosition
		}
	}, [watchedScroll, scrollPosition])

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		if (watchedScroll) {
			dispatch(pageScrollActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
		}
	}, 300)

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.PageWrapper, {}, [className])}
			onScroll={watchedScroll ? onScroll : undefined}
		>
			{children}
			{onScrollEnd && <div ref={triggerRef} />}
		</section>
	)
}