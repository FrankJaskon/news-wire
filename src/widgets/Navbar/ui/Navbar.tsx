import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props

	return <div className={classNames(cls.Navbar, {}, [className])}>
	</div>
}