import { Story } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { FC, ReactNode } from 'react'
import { Theme } from '../../theme/ThemeContext'
import useTheme from '../../theme/useTheme'

interface WithUseThemeProps {
	children: ReactNode
}

const WithUseTheme: FC<WithUseThemeProps> = ({ children }) => {
	const { theme } = useTheme()

	return <>
		{children}
	</>
}

export const ThemeDecorator = (theme: Theme) => (
	(StoryComponent: Story) => (
		<ThemeProvider initialTheme={theme}>
			<WithUseTheme>
				<StoryComponent />
			</WithUseTheme>
		</ThemeProvider>
	))