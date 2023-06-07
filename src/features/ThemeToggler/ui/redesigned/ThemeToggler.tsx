import { FC, memo, useCallback } from 'react'
import { saveJsonSettings, useUserAuthData } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import useTheme from '@/shared/config/theme/useTheme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import cls from './ThemeToggler.module.scss'

interface ThemeTogglerProps {
	className?: string
}

export const ThemeToggler: FC<ThemeTogglerProps> = memo((props: ThemeTogglerProps) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()
	const userData = useUserAuthData()
	const dispatch = useAppDispatch()

	const onToggleTheme = useCallback(() => {
		toggleTheme(theme => {
			if (userData) {
				dispatch(saveJsonSettings({ theme }))
			}
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
		})
	}, [dispatch, toggleTheme, userData])

	return (
		<AppIcon
			Svg={ThemeIcon}
			className={classNames(cls.svg, {}, [className])}
			clickable
			onClick={onToggleTheme}
		/>
	)
})
