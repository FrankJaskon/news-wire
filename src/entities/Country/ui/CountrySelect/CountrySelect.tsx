import { CountryType } from '../../model/types/CountryScheme'
import { Country } from '../../model/consts/country'
import { FC, memo, useCallback, useMemo } from 'react'
import { AppLabel } from 'shared/ui/Form/Label'
import { Select, SelectOption } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'

interface CountrySelectProps {
	value?: CountryType
	onChange?: (value: CountryType) => void
	readonly?: boolean
	'data-testid'?: string
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
	const {
		value,
		onChange,
		readonly,
	} = props

	const { t } = useTranslation()


	const countryOptionList: SelectOption[] = useMemo(() => Object.values(Country).map(item => (
		{ label: t(`country.${item}`), value: item }
	)), [t])

	const selected = useMemo(() => countryOptionList.find((item) => item.value === value),
		[value, countryOptionList])

	const handleOnChange = useCallback((value: SelectOption) => {
		onChange?.(value.value as CountryType)
	}, [onChange])

	return <VStack>
		<AppLabel htmlFor='country-select'>{t('choose-country')}</AppLabel>
		<Select
			onChange={handleOnChange}
			value={selected}
			options={countryOptionList}
			readonly={readonly}
		/>
	</VStack>

})