import { FC, ReactNode, useMemo, useState } from 'react'
import ThemeContext, {
	LOCAL_STORAGE_THEME_KEY,
	appThemes,Theme,
	ThemeContextProps
} from 'shared/config/theme/ThemeContext'

const defaultTheme: Theme = localStorage
	.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || appThemes.LIGHT

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