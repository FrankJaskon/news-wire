import { render, screen } from '@testing-library/react'
import { AppButton } from './AppButton'

describe('AppButton', () => {
	test('Render', () => {
		render(<AppButton>+</AppButton>)
		expect(screen.getByTestId('btn')).toBeInTheDocument()
	})
	test('Test variant', () => {
		render(<AppButton variant='custom'>+</AppButton>)
		expect(screen.getByTestId('btn')).toHaveClass('custom')
		screen.debug()
	})
})