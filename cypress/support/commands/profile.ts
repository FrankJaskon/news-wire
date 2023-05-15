import { ProfileType } from '@/entities/Profile'
import { getProfileRoute } from '@/shared/const/RoutPaths'

export const updateProfile = (profile: ProfileType) => {
	cy.getByTestId('profile-card-edit-btn').click()
	profile.username && cy.getByTestId('profile-card-username-input').clear().type(profile.username)
	profile.firstname &&
		cy.getByTestId('profile-card-firstname-input').clear().type(profile.firstname)
	profile.lastname && cy.getByTestId('profile-card-lastname-input').clear().type(profile.lastname)
	profile.age && cy.getByTestId('profile-card-age-input').clear().type(`${profile.age}`)
	cy.getByTestId('profile-card-save-btn').click()
}

export const resetProfile = (profileId: number) => {
	cy.request({
		method: 'PUT',
		url: `http://localhost:8000${getProfileRoute(profileId)}`,
		headers: {
			Authorization: 'test',
		},
		body: {
			id: 9963726,
			firstname: 'Test',
			lastname: 'Test',
			age: '18',
			currency: 'USD',
			country: 'USA',
			city: 'New York',
			username: 'testUser',
			avatar: '',
		},
	})
}

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(profile: ProfileType): Chainable<void>
			resetProfile(profileId: number): Chainable<void>
		}
	}
}
