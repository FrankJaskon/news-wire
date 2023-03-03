import axios from 'axios'
import { LoginErrors } from 'shared/config/errorResponse/errorResponse'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'

export const $api = axios.create({
	baseURL: __API_URL__,
})

// export class CustomError {
// 	#status: number
// 	#message: string

// 	constructor(status: number, message: string) {
// 		this.#status = status
// 		this.#message = message
// 	}

// 	get status() {
// 		return this.#status
// 	}
// 	get message() {
// 		return this.#message
// 	}
// }

// $api.interceptors.request.use(
// 	(config) => {
// 		const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

// 		if (accessToken && config.headers) {
// 			config.headers.Authorization = `Bearer ${accessToken}`
// 		}

// 		return config
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )

// $api.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		if (error.response) {
// 			console.error(
// 				`Request failed with status code ${error.response.status}:
// 				${error.response.statusText}`)
// 			throw new CustomError(error.response.status, error.response.data.message)
// 		} else if (error.request) {
// 			console.error('Gateway Timeout. No response from server')
// 			throw new CustomError(504, LoginErrors.GATEWAY)
// 		} else {
// 			console.error('Request failed', error.message)
// 			throw new CustomError(404, LoginErrors.BAD_REQUEST)
// 		}
// 	}
// )