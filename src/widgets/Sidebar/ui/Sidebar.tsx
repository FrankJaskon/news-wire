import { FC, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { LanguageToggler } from 'features/LanguageToggler'
import { ThemeToggler } from 'features/ThemeToggler'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

	const toggleSidebar = () => {
		setIsCollapsed(prev => !prev)
	}

	return <div
		data-testid='sidebar'
		className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
		<div className={cls.menu}>
			<AppLink
				className={cls.item}
				to='/'>
				<HomeIcon className={cls.icon}/>
				<span>{t('sidebar.link.main')}</span>
			</AppLink>
			<AppLink
				className={cls.item}
				to='/about'>
				<AboutIcon className={cls.icon}/>
				<span>{t('sidebar.link.about')}</span>
			</AppLink>
		</div>
		<AppButton
			data-testid='sidebar-toggler'
			className={cls.toggler}
			variant='primary'
			size='xl'
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
}