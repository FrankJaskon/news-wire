import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLabel } from '@/shared/ui/deprecated/Label'
import { Select, SelectOption } from '@/shared/ui/deprecated/Popups'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { Country } from '../../model/consts/country'
import { CountryType } from '../../model/types/CountryScheme'

interface CountrySelectProps {
	value?: CountryType
	onChange?: (value: CountryType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
	const { value, onChange, readonly } = props

	const { t } = useTranslation()

	const countryOptionList: SelectOption<CountryType>[] = useMemo(
		() =>
			Object.values(Country).map(item => ({
				label: t(`country.${item}`),
				value: item,
			})),
		[t]
	)

	const selected = useMemo(
		() => countryOptionList.find(item => item.value === value),
		[value, countryOptionList]
	)

	const handleOnChange = useCallback(
		(value: SelectOption<CountryType>) => {
			onChange?.(value.value)
		},
		[onChange]
	)

	return (
		<VStack>
			<AppLabel htmlFor='country-select'>{t('choose-country')}</AppLabel>
			<Select
				onChange={handleOnChange}
				value={selected}
				options={countryOptionList}
				readonly={readonly}
			/>
		</VStack>
	)
})
