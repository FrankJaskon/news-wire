import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { LoginForm as LoginFormDeprecated } from './deprecated/LoginForm'
import { LoginForm as LoginFormRedesigned } from './redesigned/LoginForm'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
}

const LoginForm: FC<LoginFormProps> = props => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<LoginFormRedesigned {...props} />}
			off={<LoginFormDeprecated {...props} />}
		/>
	)
}

export default memo(LoginForm)
