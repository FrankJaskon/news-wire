import { FloatingDelayGroup } from '@floating-ui/react'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserAuthData } from '@/entities/User'
import { LoginButton } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { MobileNotificationDrawer } from '@/features/MobileNotificationDrawer'
import { NotificationPopup } from '@/features/NotificationPopup'
import CreateIcon from '@/shared/assets/icons/create.svg'
import { TooltipDelay } from '@/shared/const/consts'
import { getNewArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'
import cls from './NavbarRedesign.module.scss'

interface NavbarRedesignProps {
	className?: string
}

export const NavbarRedesign: FC<NavbarRedesignProps> = memo((props: NavbarRedesignProps) => {
	const { className } = props
	const isMobile = useDetectMobile()
	const authData = useUserAuthData()
	const { t } = useTranslation()

	return (
		<header className={classNames(cls.NavbarRedesign, {}, [className])}>
			{authData ? (
				<FloatingDelayGroup delay={TooltipDelay}>
					<HStack gap='16' align='center'>
						<AppTooltip tooltip={t('tooltips.navbar.create')} as='div'>
							<AppLink className={cls.link} to={getNewArticleDetailsRoute()}>
								<AppIcon Svg={CreateIcon} height={20} width={20} />
							</AppLink>
						</AppTooltip>
						{isMobile ? <MobileNotificationDrawer /> : <NotificationPopup />}
						<AvatarDropdown />
					</HStack>
				</FloatingDelayGroup>
			) : (
				<AppTooltip tooltip={t('tooltips.navbar.login')} as='div'>
					<LoginButton />
				</AppTooltip>
			)}
		</header>
	)
})
