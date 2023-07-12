import { ValueOf } from '@/shared/types/types'

export const ValidationError = {
	title: 'title',
} as const

export type ValidationErrorType = ValueOf<typeof ValidationError>
