import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import cls from './LanguageToggler.module.scss'

interface LanguageTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: any
}

export const LanguageToggler: FC<LanguageTogglerProps> = (props) => {
    const { t, i18n } = useTranslation();
    const { className, ...otherProps } = props

    const isEn = i18n.language === 'en'

    const toggleLanguage = () => {
        i18n.changeLanguage(isEn ? 'ua' : 'en')
    }

    return  <AppButton
        onClick={toggleLanguage}
        className={classNames(cls.toggler, {}, [className])}
        {...otherProps}>
        {t('language')}
    </AppButton>
}