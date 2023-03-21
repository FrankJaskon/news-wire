import { FC, memo, useMemo, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { LanguageToggler } from 'features/LanguageToggler'
import { ThemeToggler } from 'features/ThemeToggler'
import cls from './Sidebar.module.scss'
import { SidebarLink } from './SidebarLink/SidebarLink'
import { useSelector } from 'react-redux'
import { getSidebarItem } from '../model/selectors/getSidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
	const { className } = props
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	const sidebarLinks = useSelector(getSidebarItem)

	const toggleSidebar = () => {
		setIsCollapsed(prev => !prev)
	}

	const renderLinks = useMemo(() => {
		return (
			sidebarLinks.map((item) => {
				return <SidebarLink
					key={item.path}
					item={item}
					collapsed={isCollapsed}
				/>
			})
		)
	}, [isCollapsed, sidebarLinks])

	return <div
		data-testid='sidebar'
		className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
		<div className={cls.menu}>
			{renderLinks}
		</div>
		<AppButton
			data-testid='sidebar-toggler'
			className={cls.toggler}
			variant='primary'
			size='l'
			shape='square'
			onClick={toggleSidebar}>
			{isCollapsed ? '>' : '<'}
		</AppButton>
		<div className={cls.buttonGroup}>
			<ThemeToggler className={cls.themeToggler} />
			<LanguageToggler
				className={classNames(
					cls.languageToggler,
					{ [cls.collapsed]: isCollapsed })}
				short={isCollapsed}
			/>
		</div>
	</div>
})