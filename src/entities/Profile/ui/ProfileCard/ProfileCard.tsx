import { FC, memo } from 'react'
import { CountryType } from '@/entities/Country'
import { CurrencyType } from '@/entities/Currency'
import { ToggleFeatures } from '@/shared/lib/features'
import { ProfileType } from '../../model/types/profile'
import { ProfileCard as ProfileCardDeprecated } from './deprecated/ProfileCard'
import { ProfileCard as ProfileCardRedesigned } from './redesigned/ProfileCard'

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

export const ProfileCard: FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ProfileCardRedesigned {...props} />}
			off={<ProfileCardDeprecated {...props} />}
		/>
	)
})
