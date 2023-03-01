import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'

interface LanguageTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
	short?: boolean
}

export const LanguageToggler: FC<LanguageTogglerProps> = memo((props: LanguageTogglerProps) => {
	const { t, i18n } = useTranslation()
	const { className, short, ...otherProps } = props

	const isEn = i18n.language === 'en'

	const toggleLanguage = async () => {
		await i18n.changeLanguage(isEn ? 'ua' : 'en')
	}

	return <AppButton
		variant='custom'
		data-testid='language-toggler'
		onClick={toggleLanguage}
		className={classNames('', {}, [className])}
		{...otherProps}>
		{short ? t('language-toggler.language-short') : t('language-toggler.language')}
	</AppButton>
})