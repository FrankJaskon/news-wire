import { FC, ReactElement } from 'react'
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import '@/app/styles/index.scss'
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import useTheme from '../../theme/useTheme'

export const MockStyles = (component: ReactElement) => {
	const StyledWrapper: FC = () => {
		const { theme } = useTheme()

		return <ThemeProvider>
			{component}
		</ThemeProvider>
	}

	return <StyledWrapper />
}