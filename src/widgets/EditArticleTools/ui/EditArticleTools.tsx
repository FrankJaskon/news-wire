import { FC, memo } from 'react'
import { ClickableAvatar } from '@/entities/ClickableAvatar'
import AddIcon from '@/shared/assets/icons/add.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, BorderVariantType } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './EditArticleTools.module.scss'

interface OptionsProps {
	content: string
	onClick: () => void
}

export interface EditArticleToolType {
	name?: string
	content?: string
	onClick?: () => void
	disabled?: boolean
	type?: BorderVariantType
	options?: OptionsProps[][]
}

export interface EditArticleToolsProps {
	className?: string
	items: EditArticleToolType[][]
	userId?: number
	avatar?: string
	username?: string
}

export const EditArticleTools: FC<EditArticleToolsProps> = memo((props: EditArticleToolsProps) => {
	const { className, items, userId, avatar, username } = props

	return (
		<VStack gap='24'>
			{items.map((itemsList, index) => (
				<AppCard
					key={index}
					className={classNames(cls.EditArticleTools, {}, [className])}
					radius='big'
					padding='24'
				>
					<VStack gap='24' align='start'>
						{index === 0 && (
							<ClickableAvatar id={userId!} avatar={avatar} username={username} />
						)}
						{itemsList.map((item, index) => {
							if (item.disabled) return null
							if (item.options) {
								return (
									<Dropdown
										key={`${item.content}${index}`}
										trigger={
											<AppButton
												key={`${item.content}${index}`}
												variant='outline'
												borderVariant={item.type}
												disabled={item.disabled}
												as='div'
												addonLeft={
													item.type ? undefined : (
														<AppIcon
															Svg={AddIcon}
															height={28}
															width={28}
														/>
													)
												}
											>
												{item.content}
											</AppButton>
										}
										items={item.options}
									/>
								)
							}
							return (
								<AppButton
									key={`${item.content}${index}`}
									variant='outline'
									borderVariant={item.type}
									onClick={item.onClick}
									disabled={item.disabled}
									addonLeft={
										item.type ? undefined : (
											<AppIcon Svg={AddIcon} height={28} width={28} />
										)
									}
								>
									{item.content}
								</AppButton>
							)
						})}
					</VStack>
				</AppCard>
			))}
		</VStack>
	)
})
