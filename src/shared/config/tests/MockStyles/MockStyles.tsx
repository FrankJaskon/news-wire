import { FC, ReactElement } from 'react'
import '@/app/styles/index.scss'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import useTheme from '../../theme/useTheme'

export const MockStyles = (component: ReactElement) => {
	const StyledWrapper: FC = () => {
		const { theme } = useTheme()

		return <ThemeProvider>{component}</ThemeProvider>
	}

	return <StyledWrapper />
}
