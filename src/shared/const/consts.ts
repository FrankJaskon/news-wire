import { memo } from 'react'
import { ValueOf } from '@/shared/types/types'

export const TextColor = {
	PRIMARY: 'primary-color',
	SECONDARY: 'secondary-color',
	LIGHT: 'light-color',
	DARK: 'dark-color',
	RED: 'red-color',
	LIGHT_RED: 'light-red-color',
} as const

export type TextColorType = ValueOf<typeof TextColor>

export const typedMemo: <T>(c: T) => T = memo
