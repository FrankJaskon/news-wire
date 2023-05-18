import { StoryFn } from '@storybook/react'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/config/theme/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<StoryComponent />
		</ThemeProvider>
	)
