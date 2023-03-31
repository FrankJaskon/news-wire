import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageScheme } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsPageRecommendationsReducer
})