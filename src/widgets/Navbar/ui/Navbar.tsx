import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import userIcon from 'shared/assets/icons/user.png'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <img src={userIcon} />
            <AppLink to='/about' variant='inverted'>About page</AppLink>
            <AppLink to='/' variant='inverted'>Main page</AppLink>
        </div>
    </div>
}