import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import cls from './Overlay.module.scss'

export interface OverlayProps {
	className?: string
	onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo((props: OverlayProps) => {
	const { className, onClick } = props

	return (
		<div
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.Overlay,
					off: () => cls.OverlayDeprecated,
				}),
				{},
				[className]
			)}
			onClick={onClick}
		/>
	)
})
