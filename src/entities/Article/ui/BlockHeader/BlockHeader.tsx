import { FC, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import cls from './BlockHeader.module.scss'

export interface BlockHeaderProps {
	className?: string
	children?: ReactNode
}

export const BlockHeader: FC<BlockHeaderProps> = props => {
	const { className, children } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<AppCard
					padding='8'
					radius='bigger'
					className={classNames(cls.BlockHeader, {}, [className])}
				>
					{children}
				</AppCard>
			}
			off={
				<div className={classNames(cls.BlockHeaderDeprecated, {}, [className])}>
					{children}
				</div>
			}
		/>
	)
}
