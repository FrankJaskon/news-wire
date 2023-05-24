import { FC, ReactNode } from 'react'
import RemoveIcon from '@/shared/assets/icons/clear.svg'
import { AppButton, ButtonShape, ButtonVariant } from '@/shared/ui/deprecated/AppButton'
import { HStack } from '@/shared/ui/deprecated/HStack'
import { OptionIcon } from '../EditableArticleOptions/OptionIcon/OptionIcon'

export interface EditableArticleWithRemoveProps {
	className?: string
	children?: ReactNode
	onRemove: () => void
}

export const EditableArticleWithRemove: FC<EditableArticleWithRemoveProps> = props => {
	const { className, children, onRemove } = props

	return (
		<HStack gap='4' className={className}>
			{children}
			<AppButton variant={ButtonVariant.CUSTOM} shape={ButtonShape.SQUARE} onClick={onRemove}>
				<OptionIcon icon={RemoveIcon} />
			</AppButton>
		</HStack>
	)
}
