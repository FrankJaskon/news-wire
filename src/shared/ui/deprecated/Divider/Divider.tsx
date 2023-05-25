import { FC } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Divider.module.scss'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

interface DividerProps {
	className?: string
}

export const Divider: FC<DividerProps> = props => {
	const { className } = props

	return <div className={classNames(cls.Divider, {}, [className])} />
}
