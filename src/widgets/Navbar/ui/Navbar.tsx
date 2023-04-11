import { userActions } from 'entities/User'
import { getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { FC, memo, ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton, ButtonVariant } from 'shared/ui/AppButton'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Text } from 'shared/ui/Text'
import cls from './Navbar.module.scss'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { TextColor } from 'shared/const/consts'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar, AvatarVariant } from 'shared/ui/Avatar'
import { HStack } from 'shared/ui/Stack'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useAppDispatch()

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.removeAuthData())
	}, [dispatch])

	let content: ReactNode

	if (authData) {
		content = <HStack
			justify='between'
			align='center'
			className={cls.linksGroup}
		>
			<AppLink
				className={cls.link}
				to={RoutePaths.articles_details_new}
				variant={AppLinkVariant.CUSTOM_BUTTON}
			>
				{t('navbar.create-article')}
			</AppLink>
			<Dropdown
				items={[
					{
						component: 'Перейти до профілю',
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
				isRelativeWithin={false}
				className={cls.dropdownButton}
			/>
		</HStack>
	} else {
		content = <>
			<div className={cls.linksGroup}>
				<AppButton
					className={classNames(cls.link, {}, [cls.login])}
					variant={ButtonVariant.PRIMARY}
					onClick={openModal}
					noBg
				>
					{t('navbar.login')}
				</AppButton>
			</div>
			<LoginModal
				isOpen={isAuthModal}
				onClose={closeModal} />
		</>
	}

	return <header className={classNames(cls.Navbar, {}, [className])}>
		<HStack
			className={cls.container}
			align='center'
		>
			<AppLink
				to={RoutePaths.main}
			>
				<Text
					className={cls.logo}
					title='News wire'
					titleHue={TextColor.LIGHT}
				/>
			</AppLink>
			{content}
		</HStack>
	</header>
})