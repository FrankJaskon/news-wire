import { FC, memo, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LanguageToggler } from '@/features/LanguageToggler'
import { ThemeToggler } from '@/features/ThemeToggler'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonShape, ButtonSize, ButtonVariant } from '@/shared/ui/deprecated/AppButton'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'
import { HStack } from '@/shared/ui/deprecated/HStack'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { getSidebarItem } from '../model/selectors/getSidebarItem'
import { SidebarLink } from '../SidebarLink/SidebarLink'
import cls from './SidebarRedesign.module.scss'

interface SidebarRedesignProps {
	className?: string
}

export const SidebarRedesign: FC<SidebarRedesignProps> = memo((props: SidebarRedesignProps) => {
	const { className } = props
	const isMobile = useDetectMobile()
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	const sidebarLinks = useSelector(getSidebarItem)

	const toggleSidebar = () => {
		setIsCollapsed(prev => !prev)
	}

	useEffect(() => {
		isMobile && setIsCollapsed(true)
	}, [isMobile])

	const renderLinks = useMemo(() => {
		return sidebarLinks.map(item => {
			return <SidebarLink key={item.path} item={item} collapsed={isCollapsed} />
		})
	}, [isCollapsed, sidebarLinks])

	return (
		<aside
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
		>
			<VStack
				align={isCollapsed ? 'center' : 'start'}
				className={cls.menu}
				innerWidth={isCollapsed ? undefined : 'full'}
			>
				<AppLogo className={cls.appLogo} />
				{renderLinks}
			</VStack>
			{isCollapsed ? (
				<VStack justify='center' align='center' className={cls.buttonGroup}>
					<ThemeToggler className={cls.themeToggler} />
					<LanguageToggler
						className={classNames(cls.languageToggler, {
							[cls.collapsed]: isCollapsed,
						})}
						short={isCollapsed}
					/>
				</VStack>
			) : (
				<HStack justify='center' align='center' className={cls.buttonGroup}>
					<ThemeToggler className={cls.themeToggler} />
					<LanguageToggler
						className={classNames(cls.languageToggler, {
							[cls.collapsed]: isCollapsed,
						})}
						short={isCollapsed}
					/>
				</HStack>
			)}
			<AppButton
				data-testid='sidebar-toggler'
				className={cls.toggler}
				variant={ButtonVariant.CUSTOM}
				size={ButtonSize.L}
				shape={ButtonShape.SQUARE}
				onClick={toggleSidebar}
			>
				{isCollapsed ? '>' : '<'}
			</AppButton>
		</aside>
	)
})
