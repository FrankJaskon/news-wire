import { QueryParamsKeysType } from '@/shared/const/queryParams'

export const setQueryParams = (
	setSearchParams: (callback: (prev: URLSearchParams) => URLSearchParams) => void,
	param: QueryParamsKeysType,
	value: string
) => {
	setSearchParams((prev: URLSearchParams) => {
		if (prev.has(param)) {
			prev.delete(param)
		}
		prev.append(param, value)
		return prev
	})
}
