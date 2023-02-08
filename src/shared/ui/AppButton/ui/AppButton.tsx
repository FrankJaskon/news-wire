import React, { FC } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonStyleInterfaceType
}

export const ButtonStyleInterface = {
	PRIMARY: 'primary',
	CLEAR: 'clear',
} as const

export type ButtonStyleInterfaceType = ValueOf<typeof ButtonStyleInterface>

export const AppButton: FC<AppButtonProps> = (props) => {
	const { className, children, variant = ButtonStyleInterface.PRIMARY, ...otherProps } = props

	return <button
		className={classNames(cls.AppButton, {}, [className, cls[variant]])}
		{...otherProps}>
		{children}
	</button>
}