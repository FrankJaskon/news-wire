import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsUserAdmin, getIsUserManager, useUserAuthData, userActions } from '@/entities/User'
import { getAdminRoute, getMainRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { Avatar, AvatarVariant } from '@/shared/ui/deprecated/Avatar'
import { Dropdown } from '@/shared/ui/deprecated/Popups'
import cls from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = props => {
	const { className } = props

	const dispatch = useAppDispatch()
	const isUserAdmin = useSelector(getIsUserAdmin)
	const isUserManager = useSelector(getIsUserManager)
	const navigate = useNavigate()
	const { t } = useTranslation()
	const authData = useUserAuthData()
	const isAdminPageAvailable = isUserAdmin || isUserManager

	const onLogout = useCallback(() => {
		dispatch(userActions.removeAuthData())
		navigate(getMainRoute())
	}, [dispatch, navigate])

	if (!authData) {
		return null
	}

	return (
		<Dropdown
			items={[
				[
					...(isAdminPageAvailable
						? [
								{
									component: t('navbar.links.admin'),
									href: getAdminRoute(),
								},
						  ]
						: []),
					{
						component: t('navbar.links.profile'),
						href: getProfileRoute(authData.id),
					},
					{
						component: t('navbar.logout'),
						onClick: onLogout,
					},
				],
			]}
			trigger={<Avatar size={40} src={authData.avatar} variant={AvatarVariant.CIRCLE} />}
			direction='bottom left'
			className={classNames(cls.AvatarDropdown, {}, [className])}
			align='center'
		/>
	)
}
