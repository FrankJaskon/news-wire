import { Story } from '@storybook/react'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { FC, ReactNode } from 'react'
import { Theme } from '@/shared/config/theme/ThemeContext'
import useTheme from '@/shared/config/theme/useTheme'

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