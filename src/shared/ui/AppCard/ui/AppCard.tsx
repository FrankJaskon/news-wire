import { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppCard.module.scss'

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
}

export const AppCard: FC<AppCardProps> = (props) => {
	const {
		className,
		children,
		...extraProps
	} = props

	return (
		<div
			className={classNames(cls.AppCard, {}, [className])}
			{...extraProps}
		>
			{children}
		</div>
	)
}