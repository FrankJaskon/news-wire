import { screen } from '@testing-library/react'
import { MockBrowserRouter } from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from 'shared/config/tests/MockStore/MockStore'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { MockFunction, RenderWithMocks } from 'shared/config/tests/RenderWithMocks/RenderWithMocks'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
	const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore()]
	it('should render correctly', () => {
		RenderWithMocks(
			<LoginForm />,
			mocks
		)

		const loginInput = screen.getByTestId('login-input')
		const passwordInput = screen.getByTestId('password-input')
		const submitButton = screen.getByTestId('submit-button')
		const singupLink = screen.getByTestId('singup-link')
		const loginForm = screen.getByTestId('login-form')

		expect(loginForm).toBeInTheDocument()
		expect(loginInput).toBeInTheDocument()
		expect(passwordInput).toBeInTheDocument()
		expect(submitButton).toBeInTheDocument()
		expect(singupLink).toBeInTheDocument()
	})
})
