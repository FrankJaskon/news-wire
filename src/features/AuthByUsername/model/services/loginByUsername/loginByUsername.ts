import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { LoginErrors } from 'shared/config/errorResponse/errorResponse'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'

interface LoginProps {
	username: string,
	password: string
}

const instance = axios.create({
	baseURL: 'http://localhost:8000',
})

class CustomError {
	#status: number
	#message: string

	constructor(status: number, message: string) {
		this.#status = status
		this.#message = message
	}

	get status() {
		return this.#status
	}
	get message() {
		return this.#message
	}
}

instance.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			console.error(
				`Request failed with status code ${error.response.status}:
				${error.response.statusText}`)
			throw new CustomError(error.response.status, error.response.data.message)
		} else if (error.request) {
			console.error('Gateway Timeout. No response from server')
			throw new CustomError(504, LoginErrors.GATEWAY)
		} else {
			console.error('Request failed', error.message)
			throw new CustomError(404, LoginErrors.BAD_REQUEST)
		}
	}
)

export const loginByUsername = createAsyncThunk<
	User,
	LoginProps,
	{ rejectValue: string }
>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await instance.post<User>('http://localhost:8000/login123', authData)

			if (!response) {
				throw new Error()
			}

			thunkAPI.dispatch(userActions.setAuthData(response.data))
			localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(response.data))

			return response.data
		} catch (error) {
			if (error.status === 403) {
				return thunkAPI.rejectWithValue(LoginErrors.INCORRECT_DATA)
			}
			return thunkAPI.rejectWithValue(LoginErrors.UNEXPECTED)
		}
	}
)