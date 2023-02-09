import { FC, useMemo, useState } from 'react'
import ThemeContext, {
	LOCAL_STORAGE_THEME_KEY,
	appThemes,Theme,
	ThemeContextProps
} from 'shared/config/theme/ThemeContext'

const defaultTheme: Theme = localStorage
	.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || appThemes.LIGHT

export const ThemeProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps: ThemeContextProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])

	return <ThemeContext.Provider value={defaultProps}>
		{children}
	</ThemeContext.Provider>
}