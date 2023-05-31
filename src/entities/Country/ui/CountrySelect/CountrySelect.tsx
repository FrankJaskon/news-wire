import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { CountryType } from '../../model/types/CountryScheme'
import { CountrySelect as CountrySelectDeprecated } from './deprecated/CountrySelect'
import { CountrySelect as CountrySelectRedesigned } from './redesigned/CountrySelect'

interface CountrySelectProps {
	value?: CountryType
	onChange?: (value: CountryType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<CountrySelectRedesigned {...props} />}
			off={<CountrySelectDeprecated {...props} />}
		/>
	)
})
