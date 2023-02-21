import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { AppButton } from 'shared/ui/AppButton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppInput } from 'shared/ui/Form/AppInput'
import { AppLabel } from 'shared/ui/Form/Label'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const [login, setLogin] = useState<string>()
	const [password, setPassword] = useState<string>()

	return <form
		className={classNames(cls.LoginForm, {}, [className])}
		action='/login'
		method='POST'
		data-testid='login-form'>

		<h2 className={cls.loginHeading}>{t('login.header')}</h2>

		<div className={cls.formGroup}>
			<AppLabel
				variant='srOnly'
				htmlFor='email'>
				{t('login.login')}
			</AppLabel>
			<AppInput
				data-testid='login-input'
				className={cls.formControl}
				value={login}
				onChange={setLogin}
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
				value={password}
				onChange={setPassword}
				className={cls.formControl}
				type='password'
				id='password'
				name='password'
				placeholder={t('login.password')}
				required />
		</div>

		<AppButton
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