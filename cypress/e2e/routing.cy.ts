import { getArticlesRoute, getMainRoute, getProfileRoute } from '@/shared/const/RoutPaths'

describe('Routing', () => {
	describe('User is not authorized', () => {
		it('Transition to main page', () => {
			cy.visit(getMainRoute())
			cy.getByTestId('main-page').should('exist')
		})
		it('Transition should not open the profile page', () => {
			cy.visit('/profiles/1')
			cy.getByTestId('profile-page').should('not.exist')
			cy.getByTestId('main-page').should('exist')
		})
		it('Transition to some nonexistent route', () => {
			cy.visit('/test')
			cy.getByTestId('not-found-page').should('exist')
		})
	})
	describe('User is authorized', () => {
		beforeEach(() => {
			cy.login()
		})
		it('Should transit to profile page', () => {
			cy.visit(getProfileRoute(1))
			cy.getByTestId('profile-page').should('exist')
		})
		it('Should transit to articles page', () => {
			cy.visit(getArticlesRoute())
			cy.getByTestId('articles-page').should('exist')
		})
	})
})