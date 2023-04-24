import { Currency, CurrencyType } from '../../model/types/CurrencyScheme'
import { FC, memo, useCallback, useMemo } from 'react'
import { AppLabel } from '@/shared/ui/Form/Label'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/shared/ui/Stack'
import { Select, SelectOption } from '@/shared/ui/Popups'

interface CurrencySelectProps {
	value?: CurrencyType
	onChange?: (value: CurrencyType) => void
	readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
	const { value, onChange, readonly } = props
	const { t } = useTranslation()

	const currencyOptionList: SelectOption[] = useMemo(() => Object.values(Currency).map(item => (
		{ label: t(`currency.${item}`), value: item }
	)), [t])

	const selected = useMemo(() => currencyOptionList.find((item) => item.value === value),
		[value, currencyOptionList])

	const handleOnChange = useCallback((value: SelectOption) => {
		onChange?.(value.value as CurrencyType)
	}, [onChange])

	return <VStack>
		<AppLabel htmlFor='currency-select'>{t('choose-currency')}</AppLabel>
		<Select
			name={'currency-select'}
			onChange={handleOnChange}
			value={selected}
			options={currencyOptionList}
			readonly={readonly}
		/>
	</VStack>
})