import { StateSchema } from '@/app/providers/StoreProvider'

export const getPageScroll = (state: StateSchema) => state?.pageScroll?.scroll ?? 0
export const getPageScrollByPath = (state: StateSchema, path: string) => (
	state?.pageScroll?.scroll[path] ?? 0
)