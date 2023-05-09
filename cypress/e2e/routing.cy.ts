import { getArticlesRoute, getMainRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import { selectByTestId } from '../helpers/selectByTestId'

describe('Routing', () => {
	describe('User is not authorized', () => {
		it('Transition to main page', () => {
			cy.visit(getMainRoute())
			cy.get(selectByTestId('main-page')).should('exist')
		})
		it('Transition should not open the profile page', () => {
			cy.visit('/profiles/1')
			cy.get(selectByTestId('profile-page')).should('not.exist')
			cy.get(selectByTestId('main-page')).should('exist')
		})
		it('Transition to some nonexistent route', () => {
			cy.visit('/test')
			cy.get(selectByTestId('not-found-page')).should('exist')
		})
	})
	describe('User is authorized', () => {
		beforeEach(() => {
			cy.login()
		})
		it('Should transit to profile page', () => {
			cy.visit(getProfileRoute(1))
			cy.get(selectByTestId('profile-page')).should('exist')
		})
		it('Should transit to articles page', () => {
			cy.visit(getArticlesRoute())
			cy.get(selectByTestId('articles-page')).should('exist')
		})
	})
})