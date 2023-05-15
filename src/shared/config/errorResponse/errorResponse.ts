import { ValueOf } from '@/shared/types/types'

export const LoginErrors = {
	GATEWAY: 'gateway',
	INCORRECT_DATA: 'incorrect-data',
	BAD_REQUEST: 'bad-request',
	UNEXPECTED: 'unexpected',
	EXIST: 'exist',
} as const

type LoginErrorsType = ValueOf<typeof LoginErrors>

export const LoginErrorsKey: Record<LoginErrorsType | string, string> = {
	[LoginErrors.GATEWAY]: 'error.login.gateway',
	[LoginErrors.INCORRECT_DATA]: 'error.login.incorrect-data',
	[LoginErrors.BAD_REQUEST]: 'error.login.bad-request',
	[LoginErrors.UNEXPECTED]: 'error.login.unexpected-error',
	[LoginErrors.EXIST]: 'error.login.existed-user',
} as const

export const translateErrorOrFalse = (error: LoginErrorsType | string) => {
	if (LoginErrorsKey[error]) {
		return LoginErrorsKey[error]
	}
	return false
}
