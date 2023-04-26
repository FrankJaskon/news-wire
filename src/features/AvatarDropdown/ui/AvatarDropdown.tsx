import { FC, useCallback } from 'react'
import { Dropdown } from '@/shared/ui/Popups'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AvatarDropdown.module.scss'
import { useSelector } from 'react-redux'
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from '@/entities/User'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { RoutePaths } from '@/shared/const/RoutPaths'
import { useTranslation } from 'react-i18next'
import { Avatar, AvatarVariant } from '@/shared/ui/Avatar'

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
	const { className } = props

	const dispatch = useAppDispatch()
	const isUserAdmin = useSelector(getIsUserAdmin)
	const isUserManager = useSelector(getIsUserManager)
	const navigate = useNavigate()
	const { t } = useTranslation()
	const authData = useSelector(getUserAuthData)
	const isAdminPageAvailable = isUserAdmin || isUserManager

	const onLogout = useCallback(() => {
		dispatch(userActions.removeAuthData())
		navigate(RoutePaths.main)
	}, [dispatch, navigate])

	if (!authData) {
		return null
	}

	return <Dropdown
		items={[
			...(isAdminPageAvailable ? [{
				component: t('navbar.links.admin'),
				href: RoutePaths.admin
			}] : []),
			{
				component: t('navbar.links.profile'),
				href: RoutePaths.profiles + authData.id
			},
			{
				component: t('navbar.logout'),
				onClick: onLogout
			},
		]}
		trigger={<Avatar
			size={40}
			src={authData.avatar}
			variant={AvatarVariant.CIRCLE}
		/>}
		direction='bottom left'
		className={classNames(cls.AvatarDropdown, {}, [className])}
		align='center'
	/>
}