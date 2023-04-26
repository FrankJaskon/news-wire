import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/AppIcon'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { SidebarItemType } from '../model/types/sidebarTypes'
import cls from './SidebarLink.module.scss'

export interface SidebarLinkProps {
	item: SidebarItemType
	collapsed: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = memo((props: SidebarLinkProps) => {
	const {
		item: {
			path,
			Icon,
			text,
			authOnly
		},
		collapsed
	} = props

	const { t } = useTranslation()
	const authData = useSelector(getUserAuthData)
	const isAuth = Boolean(authData)

	if (authOnly && !isAuth ) {
		return null
	}

	return <AppLink
		className={classNames(cls.SidebarLink, { [cls.collapsed]: collapsed })}
		to={path}>
		<HStack>
			<AppIcon
				Svg={Icon}
				variant='contrast-color'
				className={cls.icon}
			/>
			<span>
				{t(`${text}`)}
			</span>
		</HStack>
	</AppLink>
})