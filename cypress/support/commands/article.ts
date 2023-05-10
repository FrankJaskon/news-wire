import { ArticleType } from '@/entities/Article'
import { getArticlesRoute } from '@/shared/const/RoutPaths'

interface ExtendedArticleType extends Omit<ArticleType, 'id' | 'profile'> {
	profileId: number
}

const defaultArticle: ExtendedArticleType = {
	'profileId': Cypress.env('TEST_USER_ID'),
	'title': 'Javascript news',
	'subtitle': 'Що нового у JS у 2022 році?',
	'img': 'https://pbs.twimg.com/media/FMukdWraQAMAuxa.jpg',
	'views': 1022,
	'createdAt': '26.02.2022',
	'type': [
		'IT'
	],
	'blocks': []
}

export const createArticle = (article: ExtendedArticleType = defaultArticle) => {
	return cy.request({
		method: 'POST',
		headers: {
			Authorization: 'test'
		},
		url: `http://localhost:8000${getArticlesRoute()}`,
		body: article,
	}).then(
		({ body }) => body
	)
}

export const removeArticle = (articleId: number) => {
	cy.request({
		method: 'DELETE',
		headers: {
			Authorization: 'test'
		},
		url: `http://localhost:8000${getArticlesRoute()}/${articleId}`,
	})
}

declare global {
	namespace Cypress {
		interface Chainable {
			createArticle(article?: ExtendedArticleType): Chainable<ArticleType>
			removeArticle(articleId: number): Chainable<void>
		}
	}
}