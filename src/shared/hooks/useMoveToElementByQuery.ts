import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { QueryParamsKeysType } from '../const/queryParams'

export const useMoveToElementByQuery = (queryParam: QueryParamsKeysType, isLoading?: boolean) => {
	const [searchParams] = useSearchParams()
	const elementId = searchParams.get(queryParam)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isLoading && elementId) {
			document.getElementById(elementId)?.scrollIntoView()
			searchParams.delete(queryParam)
			navigate({ search: searchParams.toString() })
		}
	}, [elementId, isLoading, navigate, queryParam, searchParams])
}
