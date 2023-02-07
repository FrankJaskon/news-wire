import { FC, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { LanguageToggler } from 'features/LanguageToggler'
import { ThemeToggler } from 'features/ThemeToggler'
import cls from './SideBar.module.scss'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    return <div className={classNames(cls.SideBar, {[cls.collapsed]: isCollapsed}, [className])}>
        <AppButton onClick={() => setIsCollapsed(prev => !prev)}>Toggle sidebar</AppButton>
        <div className={cls.buttonGroup}>
            <ThemeToggler variant='clear' />
            <LanguageToggler variant='clear' className={cls.ms20} />
        </div>
    </div>
}