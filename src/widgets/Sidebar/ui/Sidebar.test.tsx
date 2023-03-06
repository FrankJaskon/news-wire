import { fireEvent, screen } from '@testing-library/react'
import {
	MockTranslation
} from 'shared/config/tests/MockTranslation/MockTranslation'
import {
	MockBrowserRouter
} from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { Sidebar } from './Sidebar'
import { MockFunction, RenderWithMocks } from 'shared/config/tests/RenderWithMocks/RenderWithMocks'
import { MockStore } from 'shared/config/tests/MockStore/MockStore'

describe('Sidebar', () => {
	const mocks: MockFunction[] = [MockBrowserRouter(), MockStore(), MockTranslation]
	test('Render', () => {
		RenderWithMocks(
			<Sidebar />,
			mocks
		)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('Test toggler', () => {
		RenderWithMocks(
			<Sidebar />,
			mocks
		)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()

		const toggler = screen.getByTestId('sidebar-toggler')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
	})
})