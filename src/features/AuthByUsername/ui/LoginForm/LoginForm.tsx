import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { getLoginLogin } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/selectors/getError/getError'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppInput } from 'shared/ui/Form/AppInput'
import { AppLabel } from 'shared/ui/Form/Label'
import cls from './LoginForm.module.scss'
import { Text } from 'shared/ui/Text'
import { translateErrorOrFalse } from 'shared/config/errorResponse/errorResponse'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
}

const reducers: ReducerList = {
	login: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
	const {
		className,
		onSuccess
	} = props
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const loginError = useSelector(getError)
	const usernameValue = useSelector(getLoginLogin)
	const passwordValue = useSelector(getPassword)
	const loginIsLoading = useSelector(getIsLoading)

	const loginErrorWithTranslation = translateErrorOrFalse(loginError)

	const onChangeLogin = useCallback((value: string) => {
		dispatch(loginActions.setLogin(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onSubmitForm = useCallback(async () => {
		const result = await dispatch(loginByUsername({
			username: usernameValue,
			password: passwordValue
		}))
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [dispatch, usernameValue, passwordValue, onSuccess])

	return <LazyReducerLoader
		reducers={reducers}
		removeAfterUnmount>
		<form
			className={classNames(cls.LoginForm, {}, [className])}
			action='/login'
			method='POST'
			data-testid='login-form'>

			<Text
				align='center'
				title={t('login.header')}
			/>

			<div className={cls.formGroup}>
				<AppLabel
					variant='srOnly'
					htmlFor='email'>
					{t('login.login')}
				</AppLabel>
				<AppInput
					data-testid='login-input'
					className={cls.formControl}
					value={usernameValue}
					onChange={onChangeLogin}
					type='text'
					id='email'
					name='email'
					placeholder={t('login.login')}
					required />
			</div>

			<div className={cls.formGroup}>
				<AppLabel
					variant='srOnly'
					htmlFor='password'>
					{t('login.password')}
				</AppLabel>
				<AppInput
					data-testid='password-input'
					value={passwordValue}
					onChange={onChangePassword}
					className={cls.formControl}
					type='password'
					id='password'
					name='password'
					placeholder={t('login.password')}
					required />
				{loginError && <Text
					variant='error'
					content={loginErrorWithTranslation ? t(`${loginErrorWithTranslation}`) : loginError} />}
			</div>

			<AppButton
				disabled={loginIsLoading}
				data-testid='submit-button'
				onClick={onSubmitForm}>
				{t('login.log-in')}
			</AppButton>

			<div className={cls.loginLinks}>
				<AppLink
					data-testid='singup-link'
					to='#'
					variant='primary'>
					{t('login.new-account')}
				</AppLink>
			</div>
		</form>
	</LazyReducerLoader>
})

export default LoginForm