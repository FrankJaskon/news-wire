import cls from './Popups.module.scss'

export type AlignType = 'start' | 'end' | 'center'
export type DirectionType = 'top right' | 'top left' | 'bottom left' | 'bottom right'

export const DirectionVariant: Record<DirectionType, string> = {
	'top right': cls.topRight,
	'top left': cls.topLeft,
	'bottom left': cls.bottomLeft,
	'bottom right': cls.bottomRight,
} as const

export const InnerPositionVariant: Record<AlignType, string> = {
	start: cls.start,
	end: cls.end,
	center: cls.center,
} as const
