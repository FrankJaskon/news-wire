import { StateSchema } from 'app/providers/StoreProvider'
import { ViewVariant } from 'entities/Article'
import { ArticlesSortVariant } from 'features/ArticlesSortSelector'
import { SortOrder } from 'shared/types/types'
import {
	getIsLoading,
	getView,
	getPage,
	getLimit,
	getHasMore,
	getError,
	geInitialized,
	getSearch,
	getOrder,
	getSort,
} from './articlesPageSelector'

describe('articlesPageSelector', () => {
	test('getIsLoading has to work with empty state', () => {
		expect(getIsLoading({} as StateSchema)).toBe(true)
	})
	test('getIsLoading should return data', () => {
		expect(getIsLoading({
			articlesPage: {
				isLoading: false
			}
		} as StateSchema)).toBe(false)
	})
	test('getView has to work with empty state', () => {
		expect(getView({} as StateSchema)).toBe(undefined)
	})
	test('getView should return data', () => {
		expect(getView({
			articlesPage: {
				view: ViewVariant.LIST
			}
		} as StateSchema)).toBe(ViewVariant.LIST)
	})
	test('getPage has to work with empty state', () => {
		expect(getPage({} as StateSchema)).toBe(1)
	})
	test('getPage should return data', () => {
		expect(getPage({
			articlesPage: {
				page: 4
			}
		} as StateSchema)).toBe(4)
	})
	test('getLimit has to work with empty state', () => {
		expect(getLimit({} as StateSchema)).toBe(undefined)
	})
	test('getLimit should return data', () => {
		expect(getLimit({
			articlesPage: {
				limit: 4
			}
		} as StateSchema)).toBe(4)
	})
	test('getHasMore has to work with empty state', () => {
		expect(getHasMore({} as StateSchema)).toBe(undefined)
	})
	test('getHasMore should return data', () => {
		expect(getHasMore({
			articlesPage: {
				hasMore: true
			}
		} as StateSchema)).toBe(true)
	})
	test('getError has to work with empty state', () => {
		expect(getError({} as StateSchema)).toBe(undefined)
	})
	test('getError should return data', () => {
		expect(getError({
			articlesPage: {
				error: 'error'
			}
		} as StateSchema)).toBe('error')
	})
	test('geInitialized has to work with empty state', () => {
		expect(geInitialized({} as StateSchema)).toBe(false)
	})
	test('geInitialized should return data', () => {
		expect(geInitialized({
			articlesPage: {
				_initialized: true
			}
		} as StateSchema)).toBe(true)
	})
	test('getSearch has to work with empty state', () => {
		expect(getSearch({} as StateSchema)).toBe('')
	})
	test('getSearch should return data', () => {
		expect(getSearch({
			articlesPage: {
				search: 'some text'
			}
		} as StateSchema)).toBe('some text')
	})
	test('getOrder has to work with empty state', () => {
		expect(getOrder({} as StateSchema)).toBe(undefined)
	})
	test('getOrder should return data', () => {
		expect(getOrder({
			articlesPage: {
				order: SortOrder.DOWN_UP
			}
		} as StateSchema)).toBe(SortOrder.DOWN_UP)
	})
	test('getSort has to work with empty state', () => {
		expect(getSort({} as StateSchema)).toBe(undefined)
	})
	test('getSort should return data', () => {
		expect(getSort({
			articlesPage: {
				sort: ArticlesSortVariant.TITLE
			}
		} as StateSchema)).toBe(ArticlesSortVariant.TITLE)
	})
})