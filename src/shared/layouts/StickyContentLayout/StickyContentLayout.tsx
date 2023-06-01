import { memo, ReactElement, useRef } from 'react'
import { useInitContentWidth } from '@/shared/hooks/useInitContentWidth/useInitContentWidth'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './StickyContentLayout.module.scss'

interface StickyContentLayoutProps {
	className?: string
	left?: ReactElement
	content: ReactElement
	right?: ReactElement
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
	const { className, content, left, right } = props
	const leftRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const rightRef = useRef<HTMLDivElement>(null)
	const container = document.getElementById('main_layout_content_container') ?? undefined

	useInitContentWidth({ left: leftRef, content: contentRef, right: rightRef, container })

	return (
		<div className={classNames(cls.StickyContentLayout, {}, [className])}>
			{left && (
				<div ref={leftRef} className={cls.left}>
					{left}
				</div>
			)}
			<div ref={contentRef} className={cls.content}>
				{content}
			</div>
			{right && (
				<div ref={rightRef} className={cls.right}>
					{right}
				</div>
			)}
		</div>
	)
})
