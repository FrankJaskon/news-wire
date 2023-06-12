import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { useJsonSettings } from '@/entities/User'
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
	const jsonSettings = useJsonSettings()

	const [theme, setTheme] = useState<Theme>(initialTheme ?? savedTheme ?? AppThemes.LIGHT)
	const [isThemeInitialized, setIsThemeInitialized] = useState<boolean>(false)

	document.body.className = theme ?? AppThemes.LIGHT

	useEffect(() => {
		if (__PROJECT__ === 'storybook' || isThemeInitialized || !jsonSettings?.theme) return

		setTheme(jsonSettings.theme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, jsonSettings.theme)
		setIsThemeInitialized(true)
	}, [isThemeInitialized, jsonSettings])

	const defaultProps: ThemeContextProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	)

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
