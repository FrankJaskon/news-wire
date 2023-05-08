import { FC, useMemo } from 'react'
import defaultUser from '@/shared/assets/icons/default-user.png'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import { AppImage } from '../../AppImage'
import { Skeleton } from '../../Skeleton'
import cls from './Avatar.module.scss'

export interface AvatarProps {
	className?: string
	variant?: AvatarVariantType
	src?: string
	alt?: string
	size?: number
}

export const AvatarVariant = {
	CIRCLE: 'circle',
	RECTANGLE: 'rectangle',
	SQUARE: 'square'
} as const

export type AvatarVariantType = ValueOf<typeof AvatarVariant>

export const Avatar: FC<AvatarProps> = (props) => {
	const {
		className,
		variant = AvatarVariant.SQUARE,
		src,
		alt = 'user',
		size = 100
	} = props

	const styles = useMemo(() => ({
		width: size,
		height: size
	}), [size])

	return <AppImage
		className={classNames(cls.Avatar, {}, [className, variant && cls[variant]])}
		style={styles}
		fallback={<Skeleton
			borderRadius={variant === AvatarVariant.CIRCLE ? '50%' : undefined}
			height={size}
			width={size}
		/>}
		errorFallback={<img
			src={defaultUser}
			alt='default-user'
			height={size}
			width={size}
		/>}
		src={src}
		alt={alt}
	/>
}