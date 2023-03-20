import { FC, useMemo } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import defaultUser from 'shared/assets/icons/default-user.png'

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
		variant,
		src,
		alt = 'user',
		size = 100
	} = props

	const styles = useMemo(() => ({
		width: size,
		height: size
	}), [size])

	return <img
		className={classNames(cls.Avatar, {}, [className, variant && cls[variant]])}
		style={styles}
		src={src || defaultUser}
		alt={alt}
	/>
}