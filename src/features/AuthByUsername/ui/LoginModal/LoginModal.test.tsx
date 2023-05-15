import { screen, waitFor } from '@testing-library/react'
import { MockBrowserRouter } from '@/shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from '@/shared/config/tests/MockStore/MockStore'
import { MockTranslation } from '@/shared/config/tests/MockTranslation/MockTranslation'
import { MockFunction, RenderWithMocks } from '@/shared/config/tests/RenderWithMocks/RenderWithMocks'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
	const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore()]
	it('renders the LoginForm when isOpen is true', async () => {
		RenderWithMocks(
			<LoginModal isOpen={true} onClose={() => ({})} />,
			mocks
		)

		await waitFor(() => {
			expect(screen.getByTestId('login-form')).toBeInTheDocument()
		})
	})

	it('does not render the LoginForm when isOpen is false', async () => {
		RenderWithMocks(
			<LoginModal isOpen={false} onClose={() => ({})} />,
			mocks
		)

		await waitFor(() => {
			expect(screen.queryByTestId('login-form')).not.toBeInTheDocument()
		})
	})
})