import { ValueOf } from '@/shared/types/types'

export const TabVariant = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
} as const

export type TabVariantType = ValueOf<typeof TabVariant>
