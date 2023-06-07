import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { useUserAuthData } from '@/entities/User'
import ThemeContext, {
	AppThemes,
	Theme,
	ThemeContextProps,
} from '@/shared/config/theme/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'

interface ThemeProviderProps {
	children: ReactNode
	initialTheme?: Theme
}

const savedTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const userData = useUserAuthData()
	const [theme, setTheme] = useState<Theme>(initialTheme ?? savedTheme ?? AppThemes.LIGHT)
	const [isThemeInitialized, setIsThemeInitialized] = useState<boolean>(false)

	document.body.className = theme ?? AppThemes.LIGHT

	useEffect(() => {
		if (__PROJECT__ === 'storybook') return
		if (isThemeInitialized) return
		if (!userData?.jsonSettings?.theme) return
		setTheme(userData.jsonSettings.theme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, userData.jsonSettings.theme)
		setIsThemeInitialized(true)
	}, [isThemeInitialized, userData])

	const defaultProps: ThemeContextProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	)

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
