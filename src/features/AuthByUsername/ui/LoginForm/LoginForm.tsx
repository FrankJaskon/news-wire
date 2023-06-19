import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { LoginForm as LoginFormDeprecated } from './deprecated/LoginForm'
import { LoginForm as LoginFormRedesigned } from './redesigned/LoginForm'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
	isLogin?: boolean
	setIsLogin?: (callback: (value: boolean) => boolean) => void
}

const LoginForm: FC<LoginFormProps> = props => {
	const { isLogin, setIsLogin, ...otherProps } = props
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<LoginFormRedesigned {...otherProps} isLogin={isLogin} setIsLogin={setIsLogin} />}
			off={<LoginFormDeprecated {...otherProps} />}
		/>
	)
}

export default memo(LoginForm)
