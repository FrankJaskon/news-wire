import { CSSProperties, FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

export interface SkeletonProps {
	className?: string
	width?: number
	height?: number
	borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
	const {
		className,
		borderRadius,
		height,
		width
	} = props

	const style: CSSProperties = {
		borderRadius,
		height,
		width
	}

	return (
		<div
			style={style}
			className={classNames(cls.Skeleton, {}, [className])}
		/>
	)
})