import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsUserAdmin, getIsUserManager, useUserAuthData, userActions } from '@/entities/User'
import { getAdminRoute, getMainRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'

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

	const items = [
		...(isAdminPageAvailable
			? [
					{
						content: t('navbar.links.admin'),
						href: getAdminRoute(),
					},
			  ]
			: []),
		{
			content: t('navbar.links.profile'),
			href: getProfileRoute(authData.id),
		},
		{
			content: t('navbar.logout'),
			onClick: onLogout,
		},
	]

	return (
		<Dropdown
			items={items}
			trigger={<Avatar size={48} src={authData.avatar} />}
			direction='bottom left'
			className={className}
		/>
	)
}
