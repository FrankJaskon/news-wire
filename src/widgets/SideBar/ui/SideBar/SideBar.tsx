import { FC, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { LanguageToggler } from 'features/LanguageToggler'
import { ThemeToggler } from 'features/ThemeToggler'
import cls from './SideBar.module.scss'
import { useTranslation } from 'react-i18next'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

	const toggleSidebar = () => {
		setIsCollapsed(prev => !prev)
	}

	return <div className={classNames(cls.SideBar, { [cls.collapsed]: isCollapsed }, [className])}>
		<AppButton
			className={cls.toggler}
			onClick={toggleSidebar}>
			{t('toggler')}
		</AppButton>
		<div className={cls.buttonGroup}>
			<ThemeToggler variant='clear' />
			<LanguageToggler
				variant='clear'
				className={classNames(
					cls.LanguageToggler,
					{ [cls.collapsed]: isCollapsed },
					[cls.ms20])} />
		</div>
	</div>
}