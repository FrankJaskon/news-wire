import { createContext } from 'react'
import { ValueOf } from 'shared/config/types/types'

export const appThemes = {
	LIGHT: 'light',
	DARK : 'dark',
} as const

export type Theme = ValueOf<typeof appThemes>

export interface ThemeContextProps {
	theme: Theme,
	setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export default ThemeContext