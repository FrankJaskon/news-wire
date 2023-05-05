import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import 'isomorphic-fetch'

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API_URL__,
		prepareHeaders: (headers) => {
			const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

			if (accessToken) {
				headers.set('Authorization', `Bearer ${accessToken}`)
			}

			return headers
		}
	}),
	endpoints: (builder) => ({}),
})
