import { CSSProperties, FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

export interface SkeletonProps {
	className?: string
	width?: number | string
	height?: number | string
	borderRadius?: string
}

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
	const { className, borderRadius, height, width } = props

	const style: CSSProperties = {
		borderRadius,
		height,
		width,
	}

	return <div style={style} className={classNames(cls.Skeleton, {}, [className])} />
})
