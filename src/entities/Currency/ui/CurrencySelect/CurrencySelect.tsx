import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { CurrencyType } from '../../model/types/CurrencyScheme'
import { CurrencySelect as CurrencySelectDeprecated } from './deprecated/CurrencySelect'
import { CurrencySelect as CurrencySelectRedesigned } from './redesigned/CurrencySelect'

interface CurrencySelectProps {
	value?: CurrencyType
	onChange?: (value: CurrencyType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<CurrencySelectRedesigned {...props} />}
			off={<CurrencySelectDeprecated {...props} />}
		/>
	)
})
