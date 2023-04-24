import { FC, ReactNode, useMemo, useState } from 'react'
import ThemeContext, {
	LOCAL_STORAGE_THEME_KEY,
	AppThemes,Theme,
	ThemeContextProps
} from '@/shared/config/theme/ThemeContext'

const defaultTheme: Theme = localStorage
	.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || AppThemes.LIGHT

interface ThemeProviderProps {
	children: ReactNode,
	initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	const defaultProps: ThemeContextProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])

	return <ThemeContext.Provider value={defaultProps}>
		{children}
	</ThemeContext.Provider>
}