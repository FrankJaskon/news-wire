import { User } from '@/entities/User'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { getLoginRoute } from '@/shared/const/RoutPaths'
import { selectByTestId } from '../../helpers/selectByTestId'

export const login = (username = 'testUser', password = '123') => {
	return cy.request({
		method: 'POST',
		url: `http://localhost:8000${getLoginRoute()}`,
		body: {
			username,
			password
		},
	}).then(({ body }) => {
		window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(body))

		return body
	})
}

export const getByTestId = (testId: string, extraSelector = '') => {
	return cy.get(selectByTestId(testId) + extraSelector)
}

declare global {
	namespace Cypress {
		interface Chainable {
			login(username?: string, password?: string): Chainable<User>
			getByTestId<T = Element>(testId: string, extraSelector?: string): Chainable<T>
		}
	}
}