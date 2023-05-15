import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localStorage'
import ThemeContext, { AppThemes, Theme } from './ThemeContext'

interface UseThemeResult {
	theme: Theme
	toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	document.body.className = theme ?? AppThemes.LIGHT

	const toggleTheme = () => {
		let newTheme: Theme
		switch (theme) {
			case AppThemes.LIGHT:
				newTheme = AppThemes.DARK
				break
			case AppThemes.DARK:
				newTheme = AppThemes.PURPLE
				break
			case AppThemes.PURPLE:
				newTheme = AppThemes.LIGHT
				break
			default:
				newTheme = AppThemes.LIGHT
		}
		setTheme(newTheme)
		document.body.className = theme
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}
	return {
		theme,
		toggleTheme,
	}
}

export default useTheme
