import { ProfileType } from '@/entities/Profile'
import { getProfileRoute } from '@/shared/const/RoutPaths'

describe('User logs in and transit to profile page', () => {
	let profileId: number
	beforeEach(() => {
		cy.login().then(user => {
			cy.visit(getProfileRoute(user.id))
			profileId = user.id
		})
	})
	afterEach(() => {
		cy.resetProfile(profileId)
	})
	it('Profile card is rendered properly', () => {
		cy.getByTestId('profile-card').should('exist')
		cy.getByTestId('profile-card-username-input').should('have.value', 'testUser')
	})
	it('And begin editing profile', () => {
		const newProfile: ProfileType = {
			username: 'Test',
			age: '40',
			firstname: 'Test test',
			lastname: 'Test test test',
		}
		cy.updateProfile(newProfile)
		cy.getByTestId('profile-card-username-input').should('have.value', newProfile.username)
		cy.getByTestId('profile-card-firstname-input').should('have.value', newProfile.firstname)
		cy.getByTestId('profile-card-lastname-input').should('have.value', newProfile.lastname)
		cy.getByTestId('profile-card-age-input').should('have.value', newProfile.age)
	})
})
