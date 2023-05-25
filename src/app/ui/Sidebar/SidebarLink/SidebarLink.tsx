import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserAuthData } from '@/entities/User'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppIcon as AppIconDeprecated } from '@/shared/ui/deprecated/AppIcon'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink/AppLink'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { SidebarItemType } from '../model/types/sidebarTypes'
import cls from './SidebarLink.module.scss'

export interface SidebarLinkProps {
	item: SidebarItemType
	collapsed: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = memo((props: SidebarLinkProps) => {
	const {
		item: { path, Icon, text, authOnly },
		collapsed,
	} = props

	const { t } = useTranslation()
	const authData = useUserAuthData()
	const isAuth = Boolean(authData)

	if (authOnly && !isAuth) {
		return null
	}

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<AppLink
					className={classNames(cls.SidebarLink, {
						[cls.collapsed]: collapsed,
					})}
					activeClassName={cls.active}
					to={path}
				>
					<AppIcon Svg={Icon} className={cls.icon} />
					<span>{t(`${text}`)}</span>
				</AppLink>
			}
			off={
				<AppLinkDeprecated
					className={classNames(cls.SidebarLinkDeprecated, {
						[cls.collapsed]: collapsed,
					})}
					to={path}
				>
					<HStack>
						<AppIconDeprecated
							Svg={Icon}
							variant='contrast-color'
							className={cls.icon}
						/>
						<span>{t(`${text}`)}</span>
					</HStack>
				</AppLinkDeprecated>
			}
		/>
	)
})
