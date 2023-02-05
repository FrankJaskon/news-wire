import { useContext } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext'

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme,
    }
}

export default useTheme