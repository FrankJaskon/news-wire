import { FC, ReactElement, useRef } from 'react'
import { useInitContentWidth } from '@/shared/hooks/useInitContentWidth/useInitContentWidth'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './MainLayout.module.scss'

interface MainLayoutProps {
	className?: string
	header: ReactElement
	content: ReactElement
	sidebar: ReactElement
	toolbar?: ReactElement
}

export const MainLayout: FC<MainLayoutProps> = props => {
	const { className, content, toolbar, header, sidebar } = props

	const sidebarRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const rightbarRef = useRef<HTMLDivElement>(null)

	useInitContentWidth({ left: sidebarRef, content: contentRef, right: rightbarRef })

	return (
		<div className={classNames(cls.MainLayout, {}, [className])}>
			<div ref={sidebarRef} className={cls.sidebar}>
				{sidebar}
			</div>
			<div ref={contentRef} className={cls.content} id='main_layout_content_container'>
				{content}
			</div>
			<div ref={rightbarRef} className={cls.rightbar}>
				<div className={cls.header}>{header}</div>
				<div className={cls.toolbar}>{toolbar}</div>
			</div>
		</div>
	)
}
