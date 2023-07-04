import { FC, ReactNode, memo } from 'react'
import { ClickableAvatar } from '@/entities/ClickableAvatar'
import AddIcon from '@/shared/assets/icons/add.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, BorderVariantType } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import {
	FloatDropdown,
	FloatDropdownItemType,
} from '@/shared/ui/redesigned/Popups/FloatDropdown/FloatDropdown'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './EditArticleTools.module.scss'

export interface EditArticleToolType {
	name?: string
	trigger?: ReactNode
	onClick?: () => void
	disabled?: boolean
	items?: FloatDropdownItemType[]
	label?: string
	type?: BorderVariantType
}

export interface EditArticleToolsProps {
	className?: string
	items: EditArticleToolType[]
	userId?: number
	avatar?: string
	username?: string
}

export const EditArticleTools: FC<EditArticleToolsProps> = memo((props: EditArticleToolsProps) => {
	const { className, items, userId, avatar, username } = props

	return (
		<AppCard
			className={classNames(cls.EditArticleTools, {}, [className])}
			radius='big'
			padding='24'
		>
			<VStack gap='24'>
				{avatar && <ClickableAvatar id={userId!} avatar={avatar} username={username} />}
				{items.map((item, index) => {
					if (item?.disabled) return null
					if (item?.trigger) {
						return (
							<FloatDropdown
								key={`${item?.trigger}${index}`}
								trigger={
									<AppButton
										key={`${item?.trigger}${index}`}
										variant='outline'
										disabled={item?.disabled}
										as='div'
										addonLeft={
											item?.type ? undefined : (
												<AppIcon Svg={AddIcon} height={28} width={28} />
											)
										}
									>
										{item?.trigger}
									</AppButton>
								}
								items={item?.items}
							/>
						)
					}
					return (
						<AppButton
							key={`${item?.label}${index}`}
							variant='outline'
							borderVariant={item?.type}
							onClick={item?.onClick}
							disabled={item?.disabled}
							addonLeft={
								item?.type ? undefined : (
									<AppIcon Svg={AddIcon} height={28} width={28} />
								)
							}
						>
							{item?.label}
						</AppButton>
					)
				})}
			</VStack>
		</AppCard>
	)
})
