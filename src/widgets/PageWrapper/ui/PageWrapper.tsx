import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll'
import classNames from 'shared/lib/classNames/classNames'
import cls from './PageWrapper.module.scss'

export interface PageWrapperProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
	const {
		className,
		children,
		onScrollEnd
	} = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	useInfiniteScroll({
		wrapperRef,
		triggerRef,
		callback: onScrollEnd
	})

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.PageWrapper, {}, [className])}
		>
			{children}
			<div ref={triggerRef} />
		</section>
	)
}