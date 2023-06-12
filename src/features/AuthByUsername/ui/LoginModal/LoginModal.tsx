import { FC, memo, Suspense } from 'react'
import { useUserAuthData } from '@/entities/User'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader'
import { Loader as LoaderRedesigned } from '@/shared/ui/redesigned/Loader'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { LazyLoginForm as LoginForm } from '../LoginForm/LoginForm.lazy'
import cls from './LoginModal.module.scss'

export interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = memo((props: LoginModalProps) => {
	const { isOpen, onClose } = props

	const authData = useUserAuthData()

	if (authData) {
		return null
	}

	return (
		<Modal className={classNames(cls.LoginModal)} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense
				fallback={
					<ToggleFeatures
						feature='isAppRedesigned'
						on={<LoaderRedesigned />}
						off={<LoaderDeprecated />}
					/>
				}
			>
				<LoginForm onSuccess={onClose} />
			</Suspense>
		</Modal>
	)
})
