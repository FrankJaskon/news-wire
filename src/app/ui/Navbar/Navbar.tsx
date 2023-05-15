import { FC, memo, ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { MobileNotificationDrawer } from '@/features/MobileNotificationDrawer'
import { NotificationPopup } from '@/features/NotificationPopup'
import { TextColor } from '@/shared/const/consts'
import { getMainRoute, getNewArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonVariant } from '@/shared/ui/AppButton'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const authData = useSelector(getUserAuthData)
	const isMobile = useDetectMobile()

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	let content: ReactNode

	if (authData) {
		content = (
			<HStack justify='between' align='center' className={cls.linksGroup}>
				<AppLink
					className={cls.link}
					to={getNewArticleDetailsRoute()}
					variant={AppLinkVariant.CUSTOM_BUTTON}
				>
					{t('navbar.create-article')}
				</AppLink>
				<HStack gap='4' max={false} align='center'>
					{isMobile ? <MobileNotificationDrawer /> : <NotificationPopup />}
					<AvatarDropdown />
				</HStack>
			</HStack>
		)
	} else {
		content = (
			<>
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
				<LoginModal isOpen={isAuthModal} onClose={closeModal} />
			</>
		)
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<HStack className={cls.container} align='center'>
				<AppLink to={getMainRoute()}>
					<Text className={cls.logo} title='News wire' titleHue={TextColor.LIGHT} />
				</AppLink>
				{content}
			</HStack>
		</header>
	)
})
