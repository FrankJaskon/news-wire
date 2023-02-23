import { ValueOf } from 'shared/config/types/types'

export const LoginErrors = {
	GATEWAY: 'Gateway Timeout. No response from server',
	INCORRECT_DATA: 'Login or password is wrong',
	BAD_REQUEST: 'Bad request',
	UNEXPECTED: 'An error occurred while logging in'
} as const

type LoginErrorsType = ValueOf<typeof LoginErrors>

export const LoginErrorsKey: Record<LoginErrorsType | string, string> = {
	[LoginErrors.GATEWAY]: 'error.login.gateway',
	[LoginErrors.INCORRECT_DATA]: 'error.login.incorrect-data',
	[LoginErrors.BAD_REQUEST]: 'error.login.bad-request',
	[LoginErrors.UNEXPECTED]: 'error.login.unexpected-error',
} as const

export const translateErrorOrFalse = (error: LoginErrorsType | string) => {
	if (LoginErrorsKey[error]) {
		return LoginErrorsKey[error]
	}
	return false
}