import { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppCard.module.scss'

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
	noPaddings?: boolean
}

export const AppCard: FC<AppCardProps> = (props) => {
	const {
		className,
		children,
		noPaddings = false,
		...extraProps
	} = props

	return (
		<div
			className={classNames(
				cls.AppCard,
				{
					[cls.noPaddings]: noPaddings
				},
				[className]
			)}
			{...extraProps}
		>
			{children}
		</div>
	)
}