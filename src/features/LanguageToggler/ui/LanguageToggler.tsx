import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'

interface LanguageTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
}

export const LanguageToggler: FC<LanguageTogglerProps> = (props) => {
	const { t, i18n } = useTranslation()
	const { className, ...otherProps } = props

	const isEn = i18n.language === 'en'

	const toggleLanguage = async () => {
		await i18n.changeLanguage(isEn ? 'ua' : 'en')
	}

	return <AppButton
		variant='clear'
		data-testid='language-toggler'
		onClick={toggleLanguage}
		className={classNames('', {}, [className])}
		{...otherProps}>
		{t('language-toggler.language')}
	</AppButton>
}