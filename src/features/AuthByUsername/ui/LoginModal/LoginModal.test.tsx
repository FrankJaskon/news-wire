import { screen } from '@testing-library/react'
import { MockBrowserRouter } from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from 'shared/config/tests/MockStore/MockStore'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { MockFunction, RenderWithMocks } from 'shared/config/tests/RenderWithMocks/RenderWithMocks'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
	const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore()]
	it('renders the LoginForm when isOpen is true', () => {
		RenderWithMocks(
			<LoginModal isOpen={true} onClose={() => ({})} />,
			mocks
		)

		setTimeout(() => {
			expect(screen.getByTestId('login-form')).toBeInTheDocument()
		}, 100)
	})

	it('does not render the LoginForm when isOpen is false', () => {
		RenderWithMocks(
			<LoginModal isOpen={false} onClose={() => ({})} />,
			mocks
		)
		expect(screen.queryByTestId('login-form')).not.toBeInTheDocument()
	})
})