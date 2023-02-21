import { CounterScheme } from 'entities/Counter'
import { UserScheme } from 'entities/User'

export interface StateSchema  {
	counter: CounterScheme
	user: UserScheme
}