import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { AppInput, InputColor, InputVariant } from 'shared/ui/Form/AppInput'
import { Text } from 'shared/ui/Text'
import { AppLabel, LabelVariant } from 'shared/ui/Form/Label'
import { Avatar } from 'shared/ui/Avatar'
import { CurrencySelect, CurrencyType } from 'entities/Currency'
import { CountrySelect, CountryType } from 'entities/Country'
import type { Profile } from 'pages/ProfilePage'
import { PageLoader } from 'widgets/PageLoader'
import { HStack, VStack } from 'shared/ui/Stack'
import { AppCard } from 'shared/ui/AppCard'
import { Divider } from 'shared/ui/Form/Divider/Divider'
import { AppButton, ButtonSize, ButtonVariant } from 'shared/ui/AppButton'
import { AppIcon, AppIconSize } from 'shared/ui/AppIcon'
import EditIcon from 'shared/assets/icons/edit.svg'
import CancelIcon from 'shared/assets/icons/cancel.svg'
import SaveIcon from 'shared/assets/icons/checkmark.svg'
import { TextColor } from 'shared/const/consts'

export interface ProfileCardProps {
	className?: string
	data?: Profile
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

	if (error) {
		return <VStack
			justify='center'
			align='center'
		>
			<Text
				variant='error'
				content={error}
				size='size-l'
			/>
		</VStack>
	}

	if (isLoading) {
		return <VStack
			justify='center'
			align='center'
		>
			<PageLoader />
		</VStack>
	}

	return <form className={classNames(cls.ProfileCard, {}, [className])}>
		<AppCard>
			<HStack
				gap='gap24'
				max={false}
			>
				<VStack
					gap='gap8'
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
					/>
					<HStack
						gap='gap4'
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
						/>
					</>}
				</VStack>
				<VStack
					max={false}
					gap='gap8'
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
								>
									<HStack
										align='center'
										justify='center'
										gap='gap4'
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
								gap='gap4'
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
									>
										<HStack
											align='center'
											justify='center'
											gap='gap4'
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
									>
										<HStack
											align='center'
											justify='center'
											gap='gap4'
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