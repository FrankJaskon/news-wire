import { screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { LanguageToggler } from './LanguageToggler'

describe('LanguageToggler', () => {
	test('Render', () => {
		renderWithTranslation(<LanguageToggler />)
		expect(screen.getByTestId('language-toggler')).toBeInTheDocument()
		screen.debug()
	})
})