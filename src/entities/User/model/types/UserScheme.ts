export interface User {
	id: number
	username: string
}

export interface UserScheme {
	authData?: User

	_initialized: boolean
}