import { FC, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './BlockHeader.module.scss'

export interface BlockHeaderProps {
	className?: string
	children?: ReactNode
}

export const BlockHeader: FC<BlockHeaderProps> = props => {
	const { className, children } = props

	return <div className={classNames(cls.BlockHeader, {}, [className])}>{children}</div>
}
