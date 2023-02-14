import { FC } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import { appThemes } from 'shared/config/theme/ThemeContext'
import { AppButton } from 'shared/ui/AppButton'
import cls from './ThemeToggler.module.scss'

interface ThemeTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
}

export const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
	const { className, ...otherProps } = props
	const { theme, toggleTheme } = useTheme()

	return  <AppButton
		variant='clear'
		onClick={toggleTheme}
		className={classNames(cls.ThemeToggler, {}, [className])}
		{...otherProps}>
		{theme === appThemes.DARK ? <DarkIcon /> : <LightIcon />}
	</AppButton>
}