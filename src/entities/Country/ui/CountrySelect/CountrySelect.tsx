import { Country, CountryType } from '../../model/types/CountryScheme'
import { FC, memo, useCallback } from 'react'
import { AppLabel } from 'shared/ui/Form/Label'
import { Select, SelectOption } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'

const countryOptionList: SelectOption[] = [
	{ label: Country.UKRAINE, value: Country.UKRAINE },
	{ label: Country.USA, value: Country.USA },
]

interface CountrySelectProps {
	value?: CountryType
	onChange?: (value: CountryType) => void
	readonly?: boolean
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
	const { value, onChange, readonly } = props
	const { t } = useTranslation()

	const handleOnChange = useCallback((value: string) => {
		onChange?.(value as CountryType)
	}, [onChange])

	return <Select
		Label={<AppLabel htmlFor='country-select'>{t('choose-country')}</AppLabel>}
		name={'country-select'}
		onChange={handleOnChange}
		value={value}
		options={countryOptionList}
		readonly={readonly}
	/>
})