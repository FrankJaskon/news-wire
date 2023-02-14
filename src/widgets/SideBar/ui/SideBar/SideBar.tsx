import { FC, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { LanguageToggler } from 'features/LanguageToggler'
import { ThemeToggler } from 'features/ThemeToggler'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

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
		className={classNames(cls.SideBar, { [cls.collapsed]: isCollapsed }, [className])}>
		<AppButton
			data-testid='sidebar-toggler'
			className={cls.toggler}
			onClick={toggleSidebar}>
			{t('toggler')}
		</AppButton>
		<div className={cls.buttonGroup}>
			<ThemeToggler />
			<LanguageToggler
				className={classNames(
					cls.LanguageToggler,
					{ [cls.collapsed]: isCollapsed },
					[cls.ms20])} />
		</div>
	</div>
}