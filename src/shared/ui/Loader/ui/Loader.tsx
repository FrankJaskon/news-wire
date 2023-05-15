import { FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './Loader.module.scss'

export const LoaderSize = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const

export type LoaderSizeType = ValueOf<typeof LoaderSize>

export interface LoaderProps {
	className?: string
	size?: LoaderSizeType
}

export const Loader: FC<LoaderProps> = memo((props: LoaderProps) => {
	const { className, size = LoaderSize.MEDIUM } = props

	return <div className={classNames(cls.Loader, {}, [className, cls[size]])} />
})
