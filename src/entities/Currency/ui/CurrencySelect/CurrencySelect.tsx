import { Currency, CurrencyType } from '../../model/types/CurrencyScheme'
import { FC, memo, useCallback } from 'react'
import { AppLabel } from 'shared/ui/Form/Label'
import { Select, SelectOption } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'

const currencyOptionList: SelectOption[] = [
	{ label: Currency.UAH, value: Currency.UAH },
	{ label: Currency.USD, value: Currency.USD },
]

interface CurrencySelectProps {
	value?: CurrencyType
	onChange?: (value: CurrencyType) => void
	readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
	const { value, onChange, readonly } = props
	const { t } = useTranslation()

	const handleOnChange = useCallback((value: string) => {
		onChange?.(value as CurrencyType)
	}, [onChange])

	return <Select
		Label={<AppLabel htmlFor='currency-select'>{t('choose-currency')}</AppLabel>}
		name={'currency-select'}
		onChange={handleOnChange}
		value={value}
		options={currencyOptionList}
		readonly={readonly}
	/>
})