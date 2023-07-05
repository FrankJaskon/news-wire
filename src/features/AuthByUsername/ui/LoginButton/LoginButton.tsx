import { FC, ReactNode, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	AppButton,
	ButtonComponentProps,
	ButtonElementType,
} from '@/shared/ui/redesigned/AppButton'
import { LoginModal } from '../LoginModal/LoginModal'

export interface LoginButtonProps extends Omit<ButtonComponentProps, 'type' | 'onClick'> {
	className?: string
	type?: 'registration' | 'login'
	content?: ReactNode
	as?: ButtonElementType
}

export const LoginButton: FC<LoginButtonProps> = memo((props: LoginButtonProps) => {
	const { className, type = 'login', content, as = 'button', ...otherProps } = props
	const { t } = useTranslation()
	const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false)
	const [isLogin, setIsLogin] = useState(type === 'login')

	const openModal = useCallback(() => {
		setIsAuthModalOpened(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsAuthModalOpened(false)
	}, [])

	return (
		<>
			<AppButton
				className={className}
				onClick={openModal}
				variant='outline'
				as={as}
				withFocus={false}
				{...otherProps}
			>
				{content ?? t('navbar.login')}
			</AppButton>
			<LoginModal
				isOpen={isAuthModalOpened}
				onClose={closeModal}
				isLogin={isLogin}
				setIsLogin={setIsLogin}
			/>
		</>
	)
})
