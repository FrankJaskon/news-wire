import { UserScheme } from '../types/UserScheme'
import { userReducer } from './userSlice'

describe('counter reducer', () => {
	const initialState: UserScheme = {
		authData: {
			id: 0,
			username: ''
		}
	}
	it('should handle initialState', () => {
		expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
})