import { FC, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { LazyLoginForm as LoginForm } from '../LoginForm/LoginForm.lazy'

interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const {
		isOpen,
		onClose
	} = props

	return <Modal
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<Suspense fallback={<Loader />}>
			<LoginForm />
		</Suspense>
	</Modal>
}