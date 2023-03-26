import React, { FC } from 'react'
import { LoginFormProps } from './LoginForm'

export const LazyLoginForm = React.lazy<FC<LoginFormProps>>(() =>
	new Promise(resolve =>
		// @ts-ignore
		setTimeout(() => resolve(import('./LoginForm')), 300)
	)
)