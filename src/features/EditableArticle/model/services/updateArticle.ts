import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { getEditableFormArticle } from '../selectors/editableArticleSelector'

export const updateArticle = createAsyncThunk<ArticleType, void, ThunkApiConfigType<string>>(
	'editableArticle/updateArticle',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		const updatedArticle = getEditableFormArticle(getState())
		const userData = getUserAuthData(getState())

		if (!updatedArticle.id || !userData) {
			throw rejectWithValue('Error')
		}

		try {
			const response = await extra.api.put<ArticleType>(
				getArticleDetailsRoute(updatedArticle.id),
				{
					...updatedArticle,
					profileId: userData.id,
				}
			)

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)
