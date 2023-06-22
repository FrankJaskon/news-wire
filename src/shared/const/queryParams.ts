import { ValueOf } from '@/shared/types/types'

export const QueryParamsKeys = {
	PAGE: '_page',
	LIMIT: '_limit',
	SORT: '_sort',
	ORDER: '_order',
	SEARCH: '_q',
	TYPE: 'type',
	COMMENT: 'commentId',
} as const

export type QueryParamsKeysType = ValueOf<typeof QueryParamsKeys>
