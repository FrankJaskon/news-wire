import { FC, memo } from 'react'
import { ScrollToTop } from '@/features/ScrollToTop'
import classNames from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/redesigned/HStack'
import cls from './ScrollToolbar.module.scss'

export interface ScrollToolbarProps {
	className?: string
}

export const ScrollToolbar: FC<ScrollToolbarProps> = memo((props: ScrollToolbarProps) => {
	const { className } = props

	return (
		<HStack
			className={classNames(cls.ScrollToolbar, {}, [className])}
			justify='center'
			align='center'
		>
			<ScrollToTop />
		</HStack>
	)
})
