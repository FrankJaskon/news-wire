import { CSSProperties, useMemo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import UserIcon from '../../../assets/icons/user-filled.svg'
import { AppImage } from '../../redesigned/AppImage'
import { AppIcon } from '../AppIcon'
import { Skeleton } from '../Skeleton'
import cls from './Avatar.module.scss'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
	const mods = {}

	const styles = useMemo<CSSProperties>(
		() => ({
			width: size,
			height: size,
		}),
		[size]
	)

	const fallback = <Skeleton width={size} height={size} border='50%' />
	const errorFallback = <AppIcon width={size} height={size} Svg={UserIcon} />

	return (
		<AppImage
			className={classNames(cls.Avatar, mods, [className])}
			fallback={fallback}
			errorFallback={errorFallback}
			src={src}
			alt={alt}
			style={styles}
		/>
	)
}
