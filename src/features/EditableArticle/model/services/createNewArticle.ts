import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { generateDate } from '../helpers/generateDate'
import { getEditableFormArticle } from '../selectors/editableArticleSelector'

export const createNewArticle = createAsyncThunk<ArticleType, void, ThunkApiConfigType<string>>(
	'editableArticle/createNewArticle',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		const newArticle = getEditableFormArticle(getState())
		const userData = getUserAuthData(getState())

		if (!userData) {
			throw rejectWithValue('Error')
		}

		try {
			const response = await extra.api.post<ArticleType>(getArticlesRoute(), {
				id: newArticle.id,
				profileId: userData.id,
				title: newArticle.title,
				subtitle: newArticle.subtitle,
				img: newArticle.img,
				views: 0,
				createdAt: generateDate(),
				type: newArticle.type,
				blocks: newArticle.blocks,
			})

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)
