import { render, screen } from '@testing-library/react'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { LanguageToggler } from './LanguageToggler'

describe('LanguageToggler', () => {
	test('Render', () => {
		render(MockTranslation(<LanguageToggler />))
		expect(screen.getByTestId('language-toggler')).toBeInTheDocument()
		screen.debug()
	})
})