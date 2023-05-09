import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { getLoginRoute } from '@/shared/const/RoutPaths'

export const login = (username = 'testUser', password = '123') => {
	cy.request({
		method: 'POST',
		url: `http://localhost:8000${getLoginRoute()}`,
		body: {
			username,
			password
		},
	}).then(({ body }) => {
		window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(body))

		cy.visit('/')
	})
}