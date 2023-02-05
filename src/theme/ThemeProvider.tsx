import { FC, useMemo, useState } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContextProps } from './ThemeContext'

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps: ThemeContextProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider