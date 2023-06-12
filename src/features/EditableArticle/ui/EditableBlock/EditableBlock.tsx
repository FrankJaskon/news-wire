import { FC, ReactNode } from 'react'
import { BlockHeader } from '@/entities/Article'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppCard as AppCardDeprecated } from '@/shared/ui/deprecated/AppCard'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
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
			<ToggleFeatures
				feature='isAppRedesigned'
				on={
					<AppCard padding='0'>
						<VStack gap='16'>
							<BlockHeader>{header}</BlockHeader>
							<div className={cls.inner}>{children}</div>
						</VStack>
					</AppCard>
				}
				off={
					<AppCardDeprecated noPaddings>
						<BlockHeader>{header}</BlockHeader>
						<div className={cls.innerDeprecated}>{children}</div>
					</AppCardDeprecated>
				}
			/>
		</VStack>
	)
}
