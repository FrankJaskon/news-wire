import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { ListBox, ListBoxItem } from '@/shared/ui/redesigned/Popups'
import { Currency, CurrencyType } from '../../../model/types/CurrencyScheme'

interface CurrencySelectProps {
	value?: CurrencyType
	onChange?: (value: CurrencyType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
	const { value, onChange, readonly, 'data-testid': dataTestId = 'currency-select' } = props
	const { t } = useTranslation()

	const currencyOptionList: ListBoxItem[] = useMemo(
		() =>
			Object.values(Currency).map(item => ({
				content: t(`currency.${item}`),
				value: item,
			})),
		[t]
	)

	const selected = useMemo(
		() => currencyOptionList.find(item => item.value === value),
		[value, currencyOptionList]
	)

	const handleOnChange = useCallback(
		(value: string) => {
			onChange?.(value as CurrencyType)
		},
		[onChange]
	)

	return (
		<HStack gap='8' align='center'>
			<AppLabel htmlFor='currency-select'>{t('choose-currency')}</AppLabel>
			<ListBox
				onChange={handleOnChange}
				value={selected?.value}
				items={currencyOptionList}
				readonly={readonly}
				data-testid={dataTestId}
			/>
		</HStack>
	)
})
