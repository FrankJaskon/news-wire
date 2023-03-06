import { getIsAuth } from 'entities/User'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Item } from '../../model/links'
import cls from './SidebarLink.module.scss'

export interface SidebarLinkProps {
	item: Item
	collapsed: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = (props) => {
	const { item: { path, Icon, text, authOnly }, collapsed } = props
	const { t } = useTranslation()
	const isAuth = useSelector(getIsAuth)

	if (authOnly && !isAuth ) {
		return null
	}

	return <AppLink
		className={classNames(cls.AppLink, { [cls.collapsed]: collapsed })}
		to={path}>
		<Icon className={cls.icon} />
		<span>{t(`${text}`)}</span>
	</AppLink>
}