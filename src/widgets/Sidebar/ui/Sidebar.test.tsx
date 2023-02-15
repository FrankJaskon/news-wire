import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
	test('Render', () => {
		render(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		screen.debug()
	})
	test('Test toggler', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()

		const toggler = screen.getByTestId('sidebar-toggler')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
		fireEvent.click(toggler)
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
		screen.debug()
	})
})