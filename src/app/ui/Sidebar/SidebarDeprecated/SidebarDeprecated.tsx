import { FC, memo, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LanguageToggler } from '@/features/LanguageToggler'
import { ThemeToggler } from '@/features/ThemeToggler'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton, ButtonShape, ButtonSize, ButtonVariant } from '@/shared/ui/deprecated/AppButton'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { getSidebarItem } from '../model/selectors/getSidebarItem'
import { SidebarLink } from '../SidebarLink/SidebarLink'
import cls from './SidebarDeprecated.module.scss'

interface SidebarDeprecatedProps {
	className?: string
}

export const SidebarDeprecated: FC<SidebarDeprecatedProps> = memo(
	(props: SidebarDeprecatedProps) => {
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
	}
)
