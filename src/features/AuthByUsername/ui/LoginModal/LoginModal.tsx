import { FC, memo, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { LazyLoginForm as LoginForm } from '../LoginForm/LoginForm.lazy'

export interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = memo((props: LoginModalProps) => {
	const {
		isOpen,
		onClose
	} = props

	if (!isOpen) {
		return null
	}

	return <Modal
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<Suspense fallback={<Loader />}>
			<LoginForm onSuccess={onClose} />
		</Suspense>
	</Modal>
})