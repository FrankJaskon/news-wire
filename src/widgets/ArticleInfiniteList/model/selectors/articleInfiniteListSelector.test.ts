import { StateSchema } from '@/app/providers/StoreProvider'
import { ViewVariant } from '@/entities/Article'
import { SortVariant } from '@/entities/SortSelector'
import { SortOrder } from '@/shared/types/types'
import {
	getArticleInfiniteListIsLoading,
	getArticleInfiniteListView,
	getArticleInfiniteListPage,
	getArticleInfiniteListLimit,
	getArticleInfiniteListHasMore,
	getArticleInfiniteListError,
	getArticleInfiniteListInitialized,
	getArticleInfiniteListSearch,
	getArticleInfiniteListOrder,
	getArticleInfiniteListSort,
} from './articleInfiniteListSelector'

describe('articleInfiniteListSelector', () => {
	test('getArticleInfiniteListIsLoading has to work with empty state', () => {
		expect(getArticleInfiniteListIsLoading({} as StateSchema)).toBe(true)
	})
	test('getArticleInfiniteListIsLoading should return data', () => {
		expect(
			getArticleInfiniteListIsLoading({
				articlesInfiniteList: {
					isLoading: false,
				},
			} as StateSchema)
		).toBe(false)
	})
	test('getArticleInfiniteListView has to work with empty state', () => {
		expect(getArticleInfiniteListView({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListView should return data', () => {
		expect(
			getArticleInfiniteListView({
				articlesInfiniteList: {
					view: ViewVariant.LIST,
				},
			} as StateSchema)
		).toBe(ViewVariant.LIST)
	})
	test('getArticleInfiniteListPage has to work with empty state', () => {
		expect(getArticleInfiniteListPage({} as StateSchema)).toBe(1)
	})
	test('getArticleInfiniteListPage should return data', () => {
		expect(
			getArticleInfiniteListPage({
				articlesInfiniteList: {
					page: 4,
				},
			} as StateSchema)
		).toBe(4)
	})
	test('getArticleInfiniteListLimit has to work with empty state', () => {
		expect(getArticleInfiniteListLimit({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListLimit should return data', () => {
		expect(
			getArticleInfiniteListLimit({
				articlesInfiniteList: {
					limit: 4,
				},
			} as StateSchema)
		).toBe(4)
	})
	test('getArticleInfiniteListHasMore has to work with empty state', () => {
		expect(getArticleInfiniteListHasMore({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListHasMore should return data', () => {
		expect(
			getArticleInfiniteListHasMore({
				articlesInfiniteList: {
					hasMore: true,
				},
			} as StateSchema)
		).toBe(true)
	})
	test('getArticleInfiniteListError has to work with empty state', () => {
		expect(getArticleInfiniteListError({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListError should return data', () => {
		expect(
			getArticleInfiniteListError({
				articlesInfiniteList: {
					error: 'error',
				},
			} as StateSchema)
		).toBe('error')
	})
	test('getArticleInfiniteListInitialized has to work with empty state', () => {
		expect(getArticleInfiniteListInitialized({} as StateSchema)).toBe(false)
	})
	test('getArticleInfiniteListInitialized should return data', () => {
		expect(
			getArticleInfiniteListInitialized({
				articlesInfiniteList: {
					_initialized: true,
				},
			} as StateSchema)
		).toBe(true)
	})
	test('getArticleInfiniteListSearch has to work with empty state', () => {
		expect(getArticleInfiniteListSearch({} as StateSchema)).toBe('')
	})
	test('getArticleInfiniteListSearch should return data', () => {
		expect(
			getArticleInfiniteListSearch({
				articlesInfiniteList: {
					search: 'some text',
				},
			} as StateSchema)
		).toBe('some text')
	})
	test('getArticleInfiniteListOrder has to work with empty state', () => {
		expect(getArticleInfiniteListOrder({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListOrder should return data', () => {
		expect(
			getArticleInfiniteListOrder({
				articlesInfiniteList: {
					order: SortOrder.DOWN_UP,
				},
			} as StateSchema)
		).toBe(SortOrder.DOWN_UP)
	})
	test('getArticleInfiniteListSort has to work with empty state', () => {
		expect(getArticleInfiniteListSort({} as StateSchema)).toBe(undefined)
	})
	test('getArticleInfiniteListSort should return data', () => {
		expect(
			getArticleInfiniteListSort({
				articlesInfiniteList: {
					sort: SortVariant.TITLE,
				},
			} as StateSchema)
		).toBe(SortVariant.TITLE)
	})
})
