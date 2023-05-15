export type ValueOf<T> = T[keyof T]

export const SortOrder = {
	DOWN_UP: 'asc',
	UP_DOWN: 'desc',
} as const

export type SortOrderType = ValueOf<typeof SortOrder>
