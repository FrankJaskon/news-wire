import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'

export const $api = axios.create({
	baseURL: __API_URL__,
})

$api.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

		if (accessToken && config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}

		return config
	},
	error => {
		return Promise.reject(error)
	}
)
