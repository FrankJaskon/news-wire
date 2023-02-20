import { Story } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { FC, ReactNode, useEffect } from 'react'
import { appThemes, Theme } from 'shared/config/theme/ThemeContext'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'

interface AppProps {
	children: ReactNode
	manualTheme?: Theme
}

const App: FC<AppProps> = (props) => {
	const { children, manualTheme } = props
	const { theme, toggleTheme } = useTheme()

	useEffect(() => {
		if (manualTheme && manualTheme !== theme) {
			toggleTheme()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const body = document.querySelector('body')
		body.classList.remove(appThemes.LIGHT, appThemes.DARK)
		body.classList.add(theme)


	}, [theme])

	return <div className={classNames('App', {}, [])}>
		{children}
	</div>
}

export const ThemeDecorator = (theme: Theme | undefined = undefined) => (
	(StoryComponent: Story) => (
		<ThemeProvider>
			<App manualTheme={theme}>
				<StoryComponent />
			</App>
		</ThemeProvider>
	))