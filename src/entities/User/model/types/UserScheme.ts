export interface User {
	id: number
	username: string
	avatar?: string
}

export interface UserScheme {
	authData?: User

	_initialized: boolean
}