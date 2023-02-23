import { UserScheme } from 'entities/User'
import { LoginScheme } from 'features/AuthByUsername'

export interface StateSchema {
	user: UserScheme
	login?: LoginScheme
}