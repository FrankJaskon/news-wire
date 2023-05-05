import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CountrySelect, CountryType } from '@/entities/Country'
import { CurrencySelect, CurrencyType } from '@/entities/Currency'
import CancelIcon from '@/shared/assets/icons/cancel.svg'
import SaveIcon from '@/shared/assets/icons/checkmark.svg'
import EditIcon from '@/shared/assets/icons/edit.svg'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonSize, ButtonVariant } from '@/shared/ui/AppButton'
import { AppCard } from '@/shared/ui/AppCard'
import { AppIcon, AppIconSize } from '@/shared/ui/AppIcon'
import { Avatar } from '@/shared/ui/Avatar'
import { AppInput, InputColor, InputVariant } from '@/shared/ui/Form/AppInput'
import { Divider } from '@/shared/ui/Form/Divider/Divider'
import { AppLabel, LabelVariant } from '@/shared/ui/Form/Label'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { ProfileType } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

export interface ProfileCardProps {
	className?: string
	data?: ProfileType
	isLoading?: boolean
	readonly?: boolean
	error?: string
	canEdit?: boolean
	updateFirstname?: (value: string) => void
	updateLastname?: (value: string) => void
	updateAge?: (value: string) => void
	updateCity?: (value: string) => void
	updateUsername?: (value: string) => void
	updateAvatar?: (value: string) => void
	updateCurrency?: (value: CurrencyType) => void
	updateCountry?: (value: CountryType) => void
	editForm?: () => void
	cancelEdit?: () => void
	saveForm?: () => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
	const {
		data,
		isLoading,
		error,
		className,
		readonly = true,
		updateFirstname,
		updateLastname,
		updateAge,
		updateCountry,
		updateUsername,
		updateAvatar,
		updateCurrency,
		editForm,
		cancelEdit,
		saveForm,
		canEdit
	} = props

	const { t } = useTranslation('profile')

	const onPressEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			cancelEdit?.()
		}
	}, [cancelEdit])

	useEffect(() => {
		if (!readonly) {
			window.addEventListener('keydown', onPressEscape)
		}

		return () => {
			window.removeEventListener('keydown', onPressEscape)
		}
	}, [readonly, onPressEscape])

	if (error) {
		return <VStack
			justify='center'
			align='start'
		>
			<Text
				variant='error'
				content={error}
				size='size-l'
			/>
		</VStack>
	}

	if (isLoading) {
		return null
	}

	return <form className={classNames(cls.ProfileCard, {}, [className])}>
		<AppCard>
			<HStack
				gap='24'
				max={false}
			>
				<VStack
					gap='8'
				>
					<AppLabel
						variant={LabelVariant.PRIMARY}
						htmlFor='user-username'
					>
						{t('card.input.username')}
					</AppLabel>
					<AppInput
						colorVariant={InputColor.SECONDARY}
						id='user-username'
						variant={InputVariant.PRIMARY}
						onChange={updateUsername}
						value={data?.username ?? ''}
						readonly={readonly}
						data-testid='profile-card-username-input'
					/>
					<AppLabel
						variant={LabelVariant.PRIMARY}
						htmlFor='firstname'

					>
						{t('card.input.firstname')}
					</AppLabel>
					<AppInput
						colorVariant={InputColor.SECONDARY}
						id='firstname'
						variant={InputVariant.PRIMARY}
						onChange={updateFirstname}
						value={data?.firstname || ''}
						readonly={readonly}
						data-testid='profile-card-firstname-input'
					/>
					<AppLabel
						variant={LabelVariant.PRIMARY}
						htmlFor='lastname'
					>
						{t('card.input.secondname')}
					</AppLabel>
					<AppInput
						colorVariant={InputColor.SECONDARY}
						id='lastname'
						variant={InputVariant.PRIMARY}
						onChange={updateLastname}
						value={data?.lastname || ''}
						readonly={readonly}
						data-testid='profile-card-lastname-input'
					/>
					<HStack
						gap='4'
						innerWidth='evenly'
					>
						<VStack
							max={false}
						>
							<AppLabel
								variant={LabelVariant.PRIMARY}
								htmlFor='user-age'
							>
								{t('card.input.age')}
							</AppLabel>
							<AppInput
								colorVariant={InputColor.SECONDARY}
								id='user-age'
								variant={InputVariant.PRIMARY}
								onChange={updateAge}
								value={data?.age}
								readonly={readonly}
								type='number'
								data-testid='profile-card-age-input'
							/>
						</VStack>
						<CountrySelect
							value={data?.country}
							onChange={updateCountry}
							readonly={readonly}
						/>
						<CurrencySelect
							value={data?.currency}
							onChange={updateCurrency}
							readonly={readonly}
						/>
					</HStack>
					{!readonly && <>
						<Divider />
						<AppLabel
							variant={LabelVariant.PRIMARY}
							htmlFor='user-avatar'
						>
							{t('card.input.avatar')}
						</AppLabel>
						<AppInput
							colorVariant={InputColor.SECONDARY}
							id='user-avatar'
							variant={InputVariant.PRIMARY}
							onChange={updateAvatar}
							value={data?.avatar || ''}
							readonly={readonly}
							data-testid='profile-card-avatar-input'
						/>
					</>}
				</VStack>
				<VStack
					max={false}
					gap='8'
				>
					<Avatar
						src={data?.avatar}
						size={150}
						className={cls.avatar}
					/>
					{canEdit && <>
						{readonly ?
							<HStack
								justify='center'
							>
								<AppButton
									onClick={editForm}
									variant={ButtonVariant.PRIMARY}
									size={ButtonSize.S}
									contentHue={TextColor.SECONDARY}
									noBg
									data-testid='profile-card-edit-btn'
								>
									<HStack
										align='center'
										justify='center'
										gap='4'
									>
										<AppIcon
											Svg={EditIcon}
											size={AppIconSize.SMALL}
										/>
										{t('card.header.edit-btn')}
									</HStack>
								</AppButton>
							</HStack>
							: <VStack
								gap='4'
								max={false}
							>
								<HStack
									justify='center'
								>
									<AppButton
										onClick={cancelEdit}
										variant={ButtonVariant.PRIMARY}
										size={ButtonSize.S}
										contentHue={TextColor.SECONDARY}
										noBg
										data-testid='profile-card-close-btn'
									>
										<HStack
											align='center'
											justify='center'
											gap='4'
										>
											<AppIcon
												Svg={CancelIcon}
												size={AppIconSize.SMALL}
											/>
											{t('card.header.close-btn')}
										</HStack>
									</AppButton>
								</HStack>
								<HStack
									justify='center'
								>
									<AppButton
										onClick={saveForm}
										variant={ButtonVariant.PRIMARY}
										size={ButtonSize.S}
										contentHue={TextColor.SECONDARY}
										noBg
										data-testid='profile-card-save-btn'
									>
										<HStack
											align='center'
											justify='center'
											gap='4'
										>
											<AppIcon
												Svg={SaveIcon}
												size={AppIconSize.SMALL}
											/>
											{t('card.header.save-btn')}
										</HStack>
									</AppButton>
								</HStack>
							</VStack>
						}
					</>}
				</VStack>
			</HStack>
		</AppCard>
	</form>
}