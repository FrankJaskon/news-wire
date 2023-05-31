import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { MobileNotificationDrawer } from '@/features/MobileNotificationDrawer'
import { NotificationPopup } from '@/features/NotificationPopup'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { HStack } from '@/shared/ui/redesigned/HStack'
import cls from './NavbarRedesign.module.scss'

interface NavbarRedesignProps {
	className?: string
}

export const NavbarRedesign: FC<NavbarRedesignProps> = memo((props: NavbarRedesignProps) => {
	const { className } = props
	const isMobile = useDetectMobile()
	const authData = useUserAuthData()
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const { t } = useTranslation()

	const openModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	return (
		<header className={classNames(cls.NavbarRedesign, {}, [className])}>
			{authData ? (
				<HStack gap='16' align='center'>
					{isMobile ? <MobileNotificationDrawer /> : <NotificationPopup />}
					<AvatarDropdown />
				</HStack>
			) : (
				<HStack gap='16' align='center'>
					<AppButton
						className={classNames(cls.link, {}, [cls.login])}
						onClick={openModal}
						variant='outline'
					>
						{t('navbar.login')}
					</AppButton>
					<LoginModal isOpen={isAuthModal} onClose={closeModal} />
				</HStack>
			)}
		</header>
	)
})
