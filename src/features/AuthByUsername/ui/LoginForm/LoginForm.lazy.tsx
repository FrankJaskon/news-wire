import React, { FC } from 'react'
import { LoginFormProps } from './LoginForm'

export const LazyLoginForm = React.lazy<FC<LoginFormProps>>(() => import('./LoginForm'))