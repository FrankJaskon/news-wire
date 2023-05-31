import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { ListBox, ListBoxItem } from '@/shared/ui/redesigned/Popups'
import { Country } from '../../../model/consts/country'
import { CountryType } from '../../../model/types/CountryScheme'

interface CountrySelectProps {
	value?: CountryType
	onChange?: (value: CountryType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
	const { value, onChange, readonly } = props

	const { t } = useTranslation()

	const countryOptionList: ListBoxItem[] = useMemo(
		() =>
			Object.values(Country).map(item => ({
				content: t(`country.${item}`),
				value: item,
			})),
		[t]
	)

	const selected = useMemo(
		() => countryOptionList.find(item => item.value === value),
		[value, countryOptionList]
	)

	const handleOnChange = useCallback(
		(value: string) => {
			onChange?.(value as CountryType)
		},
		[onChange]
	)

	return (
		<HStack gap='8' align='center'>
			<AppLabel htmlFor='country-select'>{t('choose-country')}</AppLabel>
			<ListBox
				onChange={handleOnChange}
				value={selected?.value}
				items={countryOptionList}
				readonly={readonly}
			/>
		</HStack>
	)
})
