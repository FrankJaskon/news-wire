import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { useUserAuthData } from '@/entities/User'
import ThemeContext, {
	AppThemes,
	Theme,
	ThemeContextProps,
} from '@/shared/config/theme/ThemeContext'

interface ThemeProviderProps {
	children: ReactNode
	initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const userData = useUserAuthData()
	const [theme, setTheme] = useState<Theme>(initialTheme ?? AppThemes.LIGHT)
	const [isThemeInitialized, setIsThemeInitialized] = useState<boolean>(false)

	document.body.className = theme ?? AppThemes.LIGHT

	useEffect(() => {
		if (__PROJECT__ === 'storybook') return
		if (isThemeInitialized) return
		if (!userData?.jsonSettings?.theme) return
		setTheme(userData.jsonSettings.theme)
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
