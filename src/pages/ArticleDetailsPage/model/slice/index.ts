import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageScheme } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsPageRecommendationsReducer
})