import { FC } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ThemeToggler.module.scss'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { AppButton } from 'shared/ui/AppButton'

interface ThemeTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: any
}

export const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
    const { className, ...otherProps } = props
    const { theme, toggleTheme } = useTheme()

    return  <AppButton
        onClick={toggleTheme}
        className={classNames(cls.toggler, {}, [className])}
        {...otherProps}>
        {theme === appThemes.DARK ? <img src={DarkIcon}/> : <img src={LightIcon}/>}
    </AppButton>
}