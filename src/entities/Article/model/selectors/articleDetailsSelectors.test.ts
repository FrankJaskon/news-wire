import { StateSchema } from '@/app/providers/StoreProvider'
import { ValidateArticleDetailsError } from '../consts/articleDetailsConsts'
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
	getArticleDetailsReadonly,
} from './articleDetailsSelectors'

describe('articleDetailsSelectors', () => {
	test('getArticleDetailsData has to work with empty state', () => {
		expect(getArticleDetailsData({} as StateSchema)).toBe(undefined)
	})
	test('getArticleDetailsData should return data', () => {
		expect(
			getArticleDetailsData({
				articleDetails: {
					data: {
						id: 1,
						title: 'title',
					},
				},
			} as StateSchema)
		).toEqual({
			id: 1,
			title: 'title',
		})
	})

	test('getArticleDetailsError has to work with empty state', () => {
		expect(getArticleDetailsError({} as StateSchema)).toBe(undefined)
	})
	test('getArticleDetailsError should return error', () => {
		expect(
			getArticleDetailsError({
				articleDetails: {
					error: ValidateArticleDetailsError.NO_DATA,
				},
			} as StateSchema)
		).toBe(ValidateArticleDetailsError.NO_DATA)
	})

	test('getArticleDetailsIsLoading has to work with empty state', () => {
		expect(getArticleDetailsIsLoading({} as StateSchema)).toBe(true)
	})
	test('getArticleDetailsIsLoading should return isLoading', () => {
		expect(
			getArticleDetailsIsLoading({
				articleDetails: {
					isLoading: false,
				},
			} as StateSchema)
		).toBe(false)
	})

	test('getArticleDetailsReadonly has to work with empty state', () => {
		expect(getArticleDetailsReadonly({} as StateSchema)).toBe(true)
	})
	test('getArticleDetailsReadonly should return readonly', () => {
		expect(
			getArticleDetailsReadonly({
				articleDetails: {
					readonly: false,
				},
			} as StateSchema)
		).toBe(false)
	})
})
