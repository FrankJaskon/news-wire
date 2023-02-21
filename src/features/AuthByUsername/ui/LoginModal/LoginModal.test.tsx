import { render, screen } from '@testing-library/react'
import { MockBrowserRouter } from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
	it('renders the LoginForm when isOpen is true', () => {
		render(MockBrowserRouter(MockTranslation(<LoginModal isOpen onClose={() => ({})} />)))
		expect(screen.getByTestId('login-form')).toBeInTheDocument()
		screen.debug()
	})

	it('does not render the LoginForm when isOpen is false', () => {
		render(MockBrowserRouter(MockTranslation(
			<LoginModal isOpen={false} onClose={() => ({})} />
		)))
		expect(screen.queryByTestId('login-form')).not.toBeInTheDocument()
		screen.debug()
	})
})