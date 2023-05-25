import { screen } from '@testing-library/react'
import { MockTranslation } from '@/shared/config/tests/MockTranslation/MockTranslation'
import {
	MockFunction,
	RenderWithMocks,
} from '@/shared/config/tests/RenderWithMocks/RenderWithMocks'
import { LanguageToggler } from './LanguageToggler'

describe('LanguageToggler', () => {
	const mocks: MockFunction[] = [MockTranslation]
	test('Render', () => {
		RenderWithMocks(<LanguageToggler />, mocks)
		expect(screen.getByTestId('language-toggler')).toBeInTheDocument()
	})
})
