import { useContext } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, appThemes, Theme } from './ThemeContext'

interface UseThemeResult {
	theme: Theme,
	toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? appThemes.DARK : appThemes.LIGHT
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}
	return {
		theme,
		toggleTheme,
	}
}

export default useTheme