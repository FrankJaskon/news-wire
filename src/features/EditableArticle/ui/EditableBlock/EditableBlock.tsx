import { FC, ReactNode } from 'react'
import { BlockHeader } from '@/entities/Article'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '@/shared/ui/deprecated/AppCard'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './EditableBlock.module.scss'

export interface EditableBlockProps {
	className?: string
	children?: ReactNode
	header?: ReactNode
}

export const EditableBlock: FC<EditableBlockProps> = props => {
	const { className, header, children } = props

	return (
		<VStack className={classNames(cls.EditableBlock, {}, [className])} gap='12'>
			<AppCard noPaddings>
				<BlockHeader>{header}</BlockHeader>
				<div className={cls.inner}>{children}</div>
			</AppCard>
		</VStack>
	)
}
