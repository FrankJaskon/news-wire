import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import {
	ArticleDetailsScheme,
	ArticleType,
	ValidateArticleDetailsError
} from '../types/ArticleDetailsScheme'
import {
	articleDetailsActions,
	articleDetailsReducer
} from './articleDetailsSlice'

describe('article details reducer', () => {
	const initialState: ArticleDetailsScheme = {
		data: undefined,
		isLoading: true,
		readonly: true,
	}
	const data: DeepPartial<ArticleType> = {
		id: 1,
		title: 'title test',
		subtitle: 'subtitle test'
	}
	test('should handle initial state', () => {
		expect(articleDetailsReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
	test('should set up new data', () => {
		expect(articleDetailsReducer(
			initialState as ArticleDetailsScheme,
			articleDetailsActions.setArticleData(data as ArticleType)
		)).toEqual({
			isLoading: true,
			readonly: true,
			data,
		})
	})
	test('fetchArticleById service pending', () => {
		const initialState: ArticleDetailsScheme = {
			isLoading: false,
			readonly: false,
			error: ValidateArticleDetailsError.SERVER_ERROR,
		}
		// fetchArticleById
		expect(articleDetailsReducer(
			initialState as ArticleDetailsScheme,
			fetchArticleById.pending
		)).toEqual({
			isLoading: true,
			readonly: false,
			error: undefined
		})
	})
	test('fetchArticleById service fulfilled', () => {
		const initialState: ArticleDetailsScheme = {
			isLoading: true,
			readonly: true,
		}
		// fetchArticleById
		expect(articleDetailsReducer(
			initialState as ArticleDetailsScheme,
			fetchArticleById.fulfilled(data as ArticleType, '', 1)
		)).toEqual({
			isLoading: false,
			readonly: true,
			error: undefined,
			data,
		})
	})
	test('fetchArticleById service rejected', () => {
		const initialState: ArticleDetailsScheme = {
			isLoading: true,
			readonly: true,
			error: undefined
		}
		// fetchArticleById
		expect(articleDetailsReducer(
			initialState as ArticleDetailsScheme,
			fetchArticleById.rejected(new Error(), '', 1, ValidateArticleDetailsError.SERVER_ERROR)
		)).toEqual({
			isLoading: false,
			readonly: true,
			error: ValidateArticleDetailsError.SERVER_ERROR,
		})
	})
})