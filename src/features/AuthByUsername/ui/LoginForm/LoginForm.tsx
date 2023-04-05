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
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { AppInput } from 'shared/ui/Form/AppInput'
import { AppLabel, LabelVariant } from 'shared/ui/Form/Label'
import cls from './LoginForm.module.scss'
import { Text, TextVariant } from 'shared/ui/Text'
import { translateErrorOrFalse } from 'shared/config/errorResponse/errorResponse'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { VStack } from 'shared/ui/Stack'

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

	return <LazyReducerLoader reducers={reducers}>
		<form
			className={classNames(cls.LoginForm, {}, [className])}
			action='/login'
			method='POST'
			data-testid='login-form'>
			<VStack
				gap='gap16'
			>
				<Text
					className={cls.title}
					align='center'
					title={t('login.header')}
				/>

				<AppLabel
					variant={LabelVariant.SR_ONLY}
					htmlFor='login-email'>
					{t('login.login')}
				</AppLabel>
				<AppInput
					data-testid='login-input'
					className={cls.input}
					value={usernameValue}
					onChange={onChangeLogin}
					type='text'
					id='login-email'
					name='login-email'
					placeholder={t('login.login')}
					required />

				<AppLabel
					variant={LabelVariant.SR_ONLY}
					htmlFor='login-password'>
					{t('login.password')}
				</AppLabel>
				<AppInput
					data-testid='password-input'
					value={passwordValue}
					onChange={onChangePassword}
					className={cls.input}
					type='password'
					id='login-password'
					name='login-password'
					placeholder={t('login.password')}
					required />
				{loginError && <Text
					variant={TextVariant.ERROR}
					content={loginErrorWithTranslation ? t(`${loginErrorWithTranslation}`) : loginError} />}
				<AppButton
					className={cls.btn}
					disabled={loginIsLoading}
					data-testid='submit-button'
					onClick={onSubmitForm}
				>
					{t('login.log-in')}
				</AppButton>

				<div className={cls.loginLinks}>
					<AppLink
						data-testid='singup-link'
						to='#'
						variant={AppLinkVariant.PRIMARY}
					>
						{t('login.new-account')}
					</AppLink>
				</div>
			</VStack>
		</form>
	</LazyReducerLoader>
})

export default LoginForm