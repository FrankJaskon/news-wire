import { useContext } from 'react'
import ThemeContext, { AppThemes, Theme } from './ThemeContext'

interface UseThemeResult {
	theme: Theme
	toggleTheme: (extraFunction?: ExtraFunction) => void
}

type ExtraFunction = (theme: Theme) => void

const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = (extraFunction?: ExtraFunction) => {
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
		extraFunction?.(newTheme)
	}
	return {
		theme,
		toggleTheme,
	}
}

export default useTheme
