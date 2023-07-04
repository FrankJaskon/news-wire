import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsUserAdmin, getIsUserManager, useUserAuthData, userActions } from '@/entities/User'
import {
	getAdminRoute,
	getMainRoute,
	getProfileRoute,
	getUsersSettingsRoute,
} from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { FloatDropdown } from '@/shared/ui/redesigned/Popups/FloatDropdown/FloatDropdown'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'

export const AvatarDropdown: FC = memo(() => {
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
		location.reload()
	}, [dispatch, navigate])

	const items = useMemo(
		() => [
			...(isAdminPageAvailable
				? [
						{
							label: t('navbar.links.admin'),
							onClick: () => navigate(getAdminRoute()),
						},
				  ]
				: []),
			{
				label: t('navbar.links.profile'),
				onClick: () => navigate(getProfileRoute(authData!.id)),
			},
			{
				label: t('user-settings-title'),
				onClick: () => navigate(getUsersSettingsRoute()),
			},
			{
				label: t('navbar.logout'),
				onClick: onLogout,
			},
		],
		[authData, isAdminPageAvailable, navigate, onLogout, t]
	)

	if (!authData) {
		return null
	}

	return (
		<AppTooltip tooltip={t('tooltips.navbar.menu')} as='div'>
			<FloatDropdown items={items} trigger={<Avatar size={48} src={authData.avatar} />} />
		</AppTooltip>
	)
})
