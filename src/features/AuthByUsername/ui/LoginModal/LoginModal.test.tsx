import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { MockBrowserRouter } from 'shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from 'shared/config/tests/MockStore/MockStore'
import { MockTranslation } from 'shared/config/tests/MockTranslation/MockTranslation'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
	it('renders the LoginForm when isOpen is true', () => {
		render(
			MockTranslation(
				MockBrowserRouter(
					MockStore(<LoginModal isOpen onClose={() => ({})} />, {}))))
		expect(screen.getByTestId('login-form')).toBeInTheDocument()
		screen.debug()
	})

	it('does not render the LoginForm when isOpen is false', () => {
		render(
			<Suspense fallback=''>
				{MockTranslation(
					MockBrowserRouter(
						MockStore(
							<LoginModal isOpen={false} onClose={() => ({})} />, {}
						)
					)
				)}
			</Suspense>
		)
		expect(screen.queryByTestId('login-form')).not.toBeInTheDocument()
		screen.debug()
	})
})