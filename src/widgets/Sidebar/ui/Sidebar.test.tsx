import { fireEvent, render, screen } from '@testing-library/react'
import {
	MockTranslation
} from 'shared/config/tests/MockTranslation/MockTranslation'
import {
	MockBrowserRouter
} from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
	test('Render', () => {
		render(MockBrowserRouter(MockTranslation(<Sidebar />)))
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		screen.debug()
	})
	test('Test toggler', () => {
		render(MockBrowserRouter(MockTranslation(<Sidebar />)))
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()

		const toggler = screen.getByTestId('sidebar-toggler')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
		screen.debug()
	})
})