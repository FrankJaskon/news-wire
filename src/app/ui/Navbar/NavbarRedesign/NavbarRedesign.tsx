import { FC, memo } from 'react'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { MobileNotificationDrawer } from '@/features/MobileNotificationDrawer'
import { NotificationPopup } from '@/features/NotificationPopup'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/deprecated/HStack'
import cls from './NavbarRedesign.module.scss'

interface NavbarRedesignProps {
	className?: string
}

export const NavbarRedesign: FC<NavbarRedesignProps> = memo((props: NavbarRedesignProps) => {
	const { className } = props
	const isMobile = useDetectMobile()

	return (
		<header className={classNames(cls.NavbarRedesign, {}, [className])}>
			<HStack gap='16' align='center'>
				{isMobile ? <MobileNotificationDrawer /> : <NotificationPopup />}
				<AvatarDropdown />
			</HStack>
		</header>
	)
})
