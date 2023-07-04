import { TFunction } from 'i18next'
import { FC, KeyboardEvent as ReactKeyboardEvent, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CountrySelect, CountryType } from '@/entities/Country'
import { CurrencySelect, CurrencyType } from '@/entities/Currency'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ProfileType } from '../../../model/types/profile'
import { ProfileCardSkeleton } from '../../ProfileCardSkeleton/ProfileCardSkeleton'

const getDefaultValue = (
	readonly: boolean,
	t: TFunction<'profile', undefined, 'profile'>,
	value?: string
) => {
	if (value) return value
	return readonly ? t('empty-input-placeholder') : ''
}

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
	'data-testid'?: string
}

export const ProfileCard: FC<ProfileCardProps> = props => {
	const {
		data,
		isLoading,
		error,
		className,
		readonly = true,
		updateFirstname,
		updateLastname,
		updateCity,
		updateAge,
		updateCountry,
		updateUsername,
		updateAvatar,
		updateCurrency,
		editForm,
		cancelEdit,
		saveForm,
		canEdit,
		'data-testid': dataTestId = 'profile-card',
	} = props

	const { t } = useTranslation('profile')

	const onPressEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				cancelEdit?.()
			}
		},
		[cancelEdit]
	)

	const onPressEnter = useCallback(
		(e: ReactKeyboardEvent<HTMLButtonElement>) => {
			if (e.key === 'Enter') {
				saveForm?.()
			}
		},
		[saveForm]
	)

	useEffect(() => {
		if (!readonly) {
			window.addEventListener('keydown', onPressEscape)
		}

		return () => {
			window.removeEventListener('keydown', onPressEscape)
		}
	}, [readonly, onPressEscape])

	if (error) {
		return (
			<VStack justify='center' align='start'>
				<AppText variant='error' text={error} />
			</VStack>
		)
	}

	if (isLoading) {
		return <ProfileCardSkeleton />
	}

	return (
		<form className={className} data-testid={dataTestId}>
			<VStack gap='16' max={false}>
				<HStack align='center' justify='between'>
					<HStack justify='start'>
						{!readonly && (
							<AppButton
								onClick={cancelEdit}
								variant='outline'
								borderVariant='cancel'
								data-testid='profile-card-close-btn'
							>
								{t('card.header.close-btn')}
							</AppButton>
						)}
					</HStack>
					<HStack justify='center'>
						<Avatar src={data?.avatar} size={128} />
					</HStack>
					<HStack justify='end'>
						{canEdit &&
							(readonly ? (
								<AppButton
									variant='outline'
									data-testid='profile-card-edit-btn'
									onClick={editForm}
								>
									{t('card.header.edit-btn')}
								</AppButton>
							) : (
								<AppButton
									variant='outline'
									borderVariant='save'
									data-testid='profile-card-save-btn'
									onClick={saveForm}
									onKeyDown={onPressEnter}
								>
									{t('card.header.save-btn')}
								</AppButton>
							))}
					</HStack>
				</HStack>
				<HStack gap='24'>
					<VStack gap='16'>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='firstname'>{t('card.input.firstname')}</AppLabel>
							<AppInput
								id='firstname'
								onChange={updateFirstname}
								value={getDefaultValue(readonly, t, data?.firstname)}
								placeholder={t('profile-card.placeholders.firstname')}
								readonly={readonly}
								data-testid='profile-card-firstname-input'
							/>
						</HStack>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='lastname'>{t('card.input.secondname')}</AppLabel>
							<AppInput
								id='lastname'
								onChange={updateLastname}
								value={getDefaultValue(readonly, t, data?.lastname)}
								placeholder={t('profile-card.placeholders.lastname')}
								readonly={readonly}
								data-testid='profile-card-lastname-input'
							/>
						</HStack>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='user-age'>{t('card.input.age')}</AppLabel>
							{!data?.age && !readonly ? (
								<AppInput
									id='user-age'
									onChange={updateAge}
									value={data?.age}
									placeholder={t('profile-card.placeholders.age')}
									readonly={readonly}
									type='number'
									data-testid='profile-card-age-input'
								/>
							) : (
								<AppInput value={t('empty-input-placeholder')} readonly />
							)}
						</HStack>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='city'>{t('card.input.city')}</AppLabel>
							<AppInput
								id='city'
								onChange={updateCity}
								value={getDefaultValue(readonly, t, data?.city)}
								placeholder={t('profile-card.placeholders.city')}
								readonly={readonly}
								data-testid='profile-card-city-input'
							/>
						</HStack>
					</VStack>
					<VStack gap='16'>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='user-username'>{t('card.input.username')}</AppLabel>
							<AppInput
								id='user-username'
								onChange={updateUsername}
								value={getDefaultValue(readonly, t, data?.username)}
								placeholder={t('profile-card.placeholders.username')}
								readonly={readonly}
								data-testid='profile-card-username-input'
							/>
						</HStack>
						<HStack gap='8' align='center'>
							<AppLabel htmlFor='user-avatar'>{t('card.input.avatar')}</AppLabel>
							<AppInput
								id='user-avatar'
								onChange={updateAvatar}
								value={getDefaultValue(readonly, t, data?.avatar)}
								placeholder={t('profile-card.placeholders.avatar')}
								readonly={readonly}
								data-testid='profile-card-avatar-input'
							/>
						</HStack>
						<CurrencySelect
							value={data?.currency}
							onChange={updateCurrency}
							readonly={readonly}
						/>
						<CountrySelect
							value={data?.country}
							onChange={updateCountry}
							readonly={readonly}
						/>
					</VStack>
				</HStack>
			</VStack>
		</form>
	)
}
