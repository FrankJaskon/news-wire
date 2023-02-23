import { FC, FormEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginLogin } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { loginActions } from '../../model/slice/loginSlice'
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

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
	const { className } = props
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const loginError = useSelector(getError)
	const loginValue = useSelector(getLoginLogin)
	const passwordValue = useSelector(getPassword)
	const loginIsLoading = useSelector(getIsLoading)

	const loginErrorWithTranslation = translateErrorOrFalse(loginError)

	const onChangeLogin = useCallback((value: string) => {
		dispatch(loginActions.setLogin(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const usernameValue = formData.get('email') as string
		const passwordValue = formData.get('password') as string
		dispatch(loginByUsername({
			username: usernameValue,
			password: passwordValue
		}))
	}, [dispatch])

	return <form
		className={classNames(cls.LoginForm, {}, [className])}
		action='/login'
		method='POST'
		onSubmit={onSubmitForm}
		data-testid='login-form'>

		<Text title={t('login.header')} />

		<div className={cls.formGroup}>
			<AppLabel
				variant='srOnly'
				htmlFor='email'>
				{t('login.login')}
			</AppLabel>
			<AppInput
				data-testid='login-input'
				className={cls.formControl}
				value={loginValue}
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
			type='submit'>
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
}