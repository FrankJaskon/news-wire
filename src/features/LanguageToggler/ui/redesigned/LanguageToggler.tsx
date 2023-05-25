import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import cls from './LanguageToggler.module.scss'

interface LanguageTogglerProps {
	className?: string
}

export const LanguageToggler: FC<LanguageTogglerProps> = memo((props: LanguageTogglerProps) => {
	const { t, i18n } = useTranslation()
	const { className, ...otherProps } = props

	const isEn = i18n.language === 'en'

	const toggleLanguage = async () => {
		await i18n.changeLanguage(isEn ? 'ua' : 'en')
	}

	return (
		<AppButton
			variant='custom'
			data-testid='language-toggler'
			onClick={toggleLanguage}
			className={classNames(cls.LanguageToggler, {}, [className])}
			{...otherProps}
		>
			{t('language-toggler.language-short')}
		</AppButton>
	)
})
