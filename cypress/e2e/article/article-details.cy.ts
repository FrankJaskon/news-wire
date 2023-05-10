import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { selectByTestId } from '../../helpers/selectByTestId'

let currentArticleId: number

describe('User transits into article details page', () => {
	beforeEach(() => {
		cy.login()
		cy.createArticle().then(article => {
			console.log(article)
			currentArticleId = article.id
			cy.visit(`${getArticlesRoute()}/${currentArticleId}`)
		})
	})
	afterEach(() => {
		cy.removeArticle(currentArticleId)
	})
	it('Article should be rendered', () => {
		cy.getByTestId('article-details-page').should('exist')
	})
	it('Recommendations list should be rendered', () => {
		cy.getByTestId('article-recommendations-list').should('exist')
	})
	it('User has left some comment', () => {
		const commentText = 'test'
		cy.getByTestId('article-details-page').should('exist')
		cy.getByTestId('article-details-comments').scrollIntoView()
		cy.getByTestId('article-details-comments', ' textArea').type(commentText)
		cy.getByTestId('article-details-comments', ` ${selectByTestId('btn')}`).contains('Submit').click()
		cy.getByTestId('article-details-comments-list-item').should('contain.text', commentText)
	})
	it('User has left the rating', () => {
		cy.getByTestId('article-details-page').should('exist')
		cy.getByTestId('rating-card').scrollIntoView()
		cy.getByTestId('rating-star4').click()
		cy.getByTestId('rating-card-submit').click()
		cy.reload()
		cy.getByTestId('rating-star4', '[data-selected="true"]').should('exist')
	})
})