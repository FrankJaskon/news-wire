import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import userIcon from 'shared/assets/icons/user.png'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <img src={userIcon} />
            <AppLink to='/about' variant='inverted'>{t('About us')}</AppLink>
            <AppLink to='/' variant='inverted'>{t('Main page')}</AppLink>
        </div>
    </div>
}