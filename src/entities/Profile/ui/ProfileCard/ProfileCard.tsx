import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { AppInput } from 'shared/ui/Form/AppInput'
import { Text } from 'shared/ui/Text'
import { AppLabel } from 'shared/ui/Form/Label'
import { FormControl } from 'shared/ui/Form/FormControl'
import { Avatar } from 'shared/ui/Avatar'
import { CurrencySelect, CurrencyType } from 'entities/Currency'
import { CountrySelect, CountryType } from 'entities/Country'
import type { Profile } from 'pages/ProfilePage'
import { PageLoader } from 'widgets/PageLoader'

export interface ProfileCardProps {
	className?: string
	data?: Profile
	isLoading?: boolean
	readonly?: boolean
	error?: string
	updateFirstname?: (value: string) => void
	updateLastname?: (value: string) => void
	updateAge?: (value: string) => void
	updateCity?: (value: string) => void
	updateUsername?: (value: string) => void
	updateAvatar?: (value: string) => void
	updateCurrency?: (value: CurrencyType) => void
	updateCountry?: (value: CountryType) => void
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
		updateCity,
		updateUsername,
		updateAvatar,
		updateCurrency
	} = props

	const { t } = useTranslation('profile')

	if (error) {
		return <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
			<Text
				variant='error'
				content={error}
				size='size-l'
			/>
		</div>
	}

	if (isLoading) {
		return <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
			<PageLoader />
		</div>
	}

	const mods = { [cls.editing]: !readonly }

	const highlightedFiledMod = { [cls.highlighted]: !readonly }

	const formControlVariant = readonly ? 'underlined' : 'primary'

	return <div className={classNames(cls.ProfileCard, mods, [className])}>
		<div className={cls.wrapper}>
			<div className={cls.avatarWrapper}>
				<Avatar
					src={data?.avatar}
					size={150}
					variant='circle'
				/>
			</div>
			<div className={cls.inner}>
				<FormControl
					variant={formControlVariant}
				>
					<AppLabel
						variant='primary'
						htmlFor='firstname'
					>
						{t('card.input.firstname')}
					</AppLabel>
					<AppInput
						className={classNames('', highlightedFiledMod)}
						color='secondary-color'
						id='firstname'
						variant='clear'
						onChange={updateFirstname}
						value={data?.firstname || ''}
						readonly={readonly}
					/>
				</FormControl>
				<FormControl
					variant={formControlVariant}
				>
					<AppLabel
						variant='primary'
						htmlFor='firstname'
					>
						{t('card.input.secondname')}
					</AppLabel>
					<AppInput
						className={classNames('', highlightedFiledMod)}
						color='secondary-color'
						id='lastname'
						variant='clear'
						onChange={updateLastname}
						value={data?.lastname || ''}
						readonly={readonly}
					/>
				</FormControl>
			</div>
		</div>
		<FormControl
			variant={formControlVariant}
		>
			<AppLabel
				variant='primary'
				htmlFor='user-age'
			>
				{t('card.input.age')}
			</AppLabel>
			<AppInput
				className={classNames('', highlightedFiledMod)}
				color='secondary-color'
				id='user-age'
				variant='clear'
				onChange={updateAge}
				value={data?.age}
				readonly={readonly}
			/>
		</FormControl>
		<FormControl
			variant={formControlVariant}
		>
			<CountrySelect
				value={data?.country}
				onChange={updateCountry}
				readonly={readonly}
			/>
		</FormControl>
		<FormControl
			variant={formControlVariant}
		>
			<AppLabel
				variant='primary'
				htmlFor='user-city'
			>
				{t('card.input.city')}
			</AppLabel>
			<AppInput
				className={classNames('', highlightedFiledMod)}
				color='secondary-color'
				id='user-city'
				variant='clear'
				onChange={updateCity}
				value={data?.city || ''}
				readonly={readonly}
			/>
		</FormControl>
		<FormControl
			variant={formControlVariant}
		>
			<AppLabel
				variant='primary'
				htmlFor='user-username'
			>
				{t('card.input.username')}
			</AppLabel>
			<AppInput
				className={classNames('', highlightedFiledMod)}
				color='secondary-color'
				id='user-username'
				variant='clear'
				onChange={updateUsername}
				value={data?.username || ''}
				readonly={readonly}
			/>
		</FormControl>
		<FormControl
			variant={formControlVariant}
		>
			<CurrencySelect
				value={data?.currency}
				onChange={updateCurrency}
				readonly={readonly}
			/>
		</FormControl>
		<FormControl
			variant={formControlVariant}
		>
			<AppLabel
				variant='primary'
				htmlFor='user-avatar'
			>
				{t('card.input.avatar')}
			</AppLabel>
			<AppInput
				className={classNames('', highlightedFiledMod)}
				color='secondary-color'
				id='user-avatar'
				variant='clear'
				onChange={updateAvatar}
				value={data?.avatar || ''}
				readonly={readonly}
			/>
		</FormControl>
	</div>
}