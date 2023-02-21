import { render, screen } from '@testing-library/react'
import { MockBrowserRouter } from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
	it('should render correctly', () => {
		render(MockBrowserRouter(MockTranslation(<LoginForm />)))

		const loginForm = screen.getByTestId('login-form')
		const loginInput = screen.getByTestId('login-input')
		const passwordInput = screen.getByTestId('password-input')
		const submitButton = screen.getByTestId('submit-button')
		const singupLink = screen.getByTestId('singup-link')

		expect(loginForm).toBeInTheDocument()
		expect(loginInput).toBeInTheDocument()
		expect(passwordInput).toBeInTheDocument()
		expect(submitButton).toBeInTheDocument()
		expect(singupLink).toBeInTheDocument()
	})
})
