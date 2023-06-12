import { FC, ReactNode } from 'react'
import RemoveIconDeprecated from '@/shared/assets/icons/clear.svg'
import RemoveIcon from '@/shared/assets/icons/remove.svg'
import { ToggleFeatures } from '@/shared/lib/features'
import {
	AppButton as AppButtonDeprecated,
	ButtonShape,
	ButtonVariant,
} from '@/shared/ui/deprecated/AppButton'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { OptionIcon } from '../EditableArticleOptions/OptionIcon/OptionIcon'

export interface EditableArticleWithRemoveProps {
	className?: string
	children?: ReactNode
	onRemove: () => void
}

export const EditableArticleWithRemove: FC<EditableArticleWithRemoveProps> = props => {
	const { className, children, onRemove } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<HStack gap='4' className={className}>
					{children}
					<AppIcon Svg={RemoveIcon} height={24} width={24} clickable onClick={onRemove} />
				</HStack>
			}
			off={
				<HStack gap='4' className={className}>
					{children}
					<AppButtonDeprecated
						variant={ButtonVariant.CUSTOM}
						shape={ButtonShape.SQUARE}
						onClick={onRemove}
					>
						<OptionIcon icon={RemoveIconDeprecated} />
					</AppButtonDeprecated>
				</HStack>
			}
		/>
	)
}
