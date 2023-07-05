import { FC, FormEvent, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { translateErrorOrFalse } from '@/shared/config/errorResponse/errorResponse'
import { getMainRoute } from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { AppPrompt } from '@/shared/ui/redesigned/Tooltip/AppPrompt'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useAuthByUsernameError } from '../../../model/selectors/getAuthByUsernameError/getAuthByUsernameError'
import { useAuthByUsernameIsLoading } from '../../../model/selectors/getAuthByUsernameIsLoading/getAuthByUsernameIsLoading'
import { useAuthByUsernamePassword } from '../../../model/selectors/getAuthByUsernamePassword/getAuthByUsernamePassword'
import { useAuthByUsernameUsername } from '../../../model/selectors/getAuthByUsernameUsername/getAuthByUsernameUsername'
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername'
import { registration } from '../../../model/services/registration/registration'
import { loginActions, loginReducer } from '../../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
	className?: string
	onSuccess: () => void
	isLogin?: boolean
	setIsLogin?: (callback: (value: boolean) => boolean) => void
}

const reducers: ReducerList = {
	login: loginReducer,
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
	const { className, onSuccess, isLogin = true, setIsLogin } = props
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const loginError = useAuthByUsernameError()
	const username = useAuthByUsernameUsername()
	const password = useAuthByUsernamePassword()
	const loginIsLoading = useAuthByUsernameIsLoading()
	const navigate = useNavigate()
	const isRegistration = useMemo(() => !isLogin, [isLogin])

	const loginErrorWithTranslation = translateErrorOrFalse(loginError)

	const onChangeLogin = useCallback(
		(value: string) => {
			dispatch(loginActions.setLogin(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onToggleLoginModal = useCallback(() => {
		setIsLogin?.((prev: boolean) => !prev)
		dispatch(loginActions.setLogin(''))
		dispatch(loginActions.setPassword(''))
	}, [dispatch, setIsLogin])

	const onSubmitForm = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const result = isLogin
				? await dispatch(
						loginByUsername({
							username: username,
							password: password,
						})
				  )
				: await dispatch(
						registration({
							username: username,
							password: password,
						})
				  )
			if (result.meta.requestStatus === 'fulfilled') {
				onSuccess()
				navigate(getMainRoute())
				setTimeout(() => {
					location.reload()
				}, 1000)
			}
		},
		[dispatch, username, password, onSuccess, navigate, isLogin]
	)

	return (
		<LazyReducerLoader reducers={reducers}>
			<form
				className={classNames(cls.LoginForm, {}, [className])}
				onSubmit={onSubmitForm}
				data-testid='login-form'
			>
				<VStack gap='16' align='center'>
					<AppText
						className={cls.title}
						title={isLogin ? t('login.titles.login') : t('login.titles.registration')}
						size='l'
						weight='bold'
					/>

					<AppLabel variant='srOnly' htmlFor='login-email'>
						{t('login.login')}
					</AppLabel>
					<AppInput
						data-testid='login-input'
						className={cls.input}
						value={username}
						onChange={onChangeLogin}
						type='text'
						id='login-email'
						name='login-email'
						placeholder={t('login.login')}
						required
						addonRight={
							<AppPrompt prompt={t('login.login-prompt')} className={cls.prompt} />
						}
					/>

					<AppLabel variant='srOnly' htmlFor='login-password'>
						{t('login.password')}
					</AppLabel>
					<AppInput
						data-testid='password-input'
						value={password}
						onChange={onChangePassword}
						className={cls.input}
						type='password'
						id='login-password'
						name='login-password'
						placeholder={t('login.password')}
						required
						addonRight={
							<AppPrompt prompt={t('login.password-prompt')} className={cls.prompt} />
						}
					/>

					{loginError && (
						<AppText
							variant='error'
							text={
								loginErrorWithTranslation
									? t(`${loginErrorWithTranslation}`)
									: loginError
							}
						/>
					)}
					<HStack justify='end'>
						<AppButton
							className={cls.btn}
							variant='outline'
							borderVariant='save'
							disabled={loginIsLoading}
							data-testid='submit-button'
							type='submit'
						>
							{isLogin && t('login.log-in')}
							{isRegistration && t('login.sing-up')}
						</AppButton>
					</HStack>
					<AppButton
						data-testid='singup-link'
						variant='custom'
						size='s'
						onClick={onToggleLoginModal}
						className={cls.toggleButton}
					>
						{isLogin && t('login.new-account')}
						{isRegistration && t('login.existed-account')}
					</AppButton>
				</VStack>
			</form>
		</LazyReducerLoader>
	)
})
