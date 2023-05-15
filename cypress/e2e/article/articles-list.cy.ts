import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { selectByTestId } from '../../helpers/selectByTestId'

describe('User transits to articles list', () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit(getArticlesRoute())
		})
	})
	afterEach(() => {
		cy.getByTestId('tabs').contains('All').click()
		cy.getByTestId('articles-filter-search').clear()
		cy.getByTestId('view-grid').click().focused().blur()
	})
	it('Articles should be rendered', () => {
		cy.getByTestId('articles-list').should('exist')
		cy.getByTestId('articles-list-item-grid').should('have.length.greaterThan', 3)
	})
	it('Filters should work', () => {
		const filters = {
			all: 'All',
			it: 'Information Technology',
			science: 'Science',
			economic: 'Economic',
		}
		cy.getByTestId('tabs').contains(filters.it).click()
		cy.getByTestId('articles-list-item-grid').each($el => {
			cy.wrap($el).find(selectByTestId('Text.content')).should('contain', 'IT')
		})
		cy.getByTestId('tabs').contains(filters.science).click()
		cy.getByTestId('articles-list-item-grid').each($el => {
			cy.wrap($el).find(selectByTestId('Text.content')).should('contain', 'SCIENCE')
		})
		cy.getByTestId('tabs').contains(filters.economic).click()
		cy.getByTestId('articles-list-item-grid').each($el => {
			cy.wrap($el).find(selectByTestId('Text.content')).should('contain', 'ECONOMIC')
		})
	})
	it('Search input should work', () => {
		const searchValue = 'Python'
		cy.getByTestId('articles-filter-search').clear().type(searchValue)
		cy.getByTestId('articles-list-item-grid')
			.should('have.length', 3)
			.each($el => {
				cy.wrap($el).find(selectByTestId('Text.title')).should('contain.text', searchValue)
			})
	})
	it('View toggler should work', () => {
		cy.getByTestId('view-list').click()
		cy.getByTestId('articles-list-item-grid').should('not.exist')
		cy.getByTestId('articles-list-item-list').should('have.length.greaterThan', 3)
		cy.getByTestId('view-grid').click()
		cy.getByTestId('articles-list-item-list').should('not.exist')
		cy.getByTestId('articles-list-item-grid').should('have.length.greaterThan', 3)
	})
	it('New articles should be download when scroll is down and view is grid', () => {
		cy.getByTestId('articles-page').wait(500).scrollTo('bottom')
		cy.getByTestId('articles-list-item-grid').should('have.length.greaterThan', 9)
	})
	before(() => {
		cy.login()
		cy.visit(getArticlesRoute())
	})
	it('New articles should be download when scroll is down and view is list', () => {
		cy.getByTestId('view-list').click()
		cy.getByTestId('articles-page').wait(500).scrollTo('bottom')
		cy.getByTestId('articles-list-item-list').should('have.length.greaterThan', 5)
	})
})

describe('User transits to articles list(with stub)', () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit(getArticlesRoute())
		})
	})
	it('Articles should be rendered', () => {
		cy.getByTestId('articles-list').should('exist')
		cy.intercept('GET', '**/articles?*', {
			fixture: 'articles.json',
		})
		cy.getByTestId('articles-list-item-grid').should('have.length.greaterThan', 3)
	})
})
