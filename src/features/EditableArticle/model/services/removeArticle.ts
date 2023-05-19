import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { getEditableArticleData } from '../selectors/editableArticleSelector'

export const removeArticle = createAsyncThunk<void, void, ThunkApiConfigType<string>>(
	'editableArticle/removeArticle',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		const article = getEditableArticleData(getState())

		if (!article.id) {
			throw rejectWithValue('Error')
		}

		try {
			await extra.api.delete<ArticleType>(getArticleDetailsRoute(article.id))
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)
