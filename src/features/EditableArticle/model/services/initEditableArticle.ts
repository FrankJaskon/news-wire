import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { mapArticleToEditableArticle } from '../helpers/mapArticleToEditableArticle'
import { EditableArticleType } from '../types/editableArticleScheme'

interface ReturnedType {
	data: ArticleType
	form: EditableArticleType
}

export const initEditableArticle = createAsyncThunk<
	ReturnedType,
	number,
	ThunkApiConfigType<string>
>('editableArticle/initEditableArticle', async (articleId, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI

	if (!articleId) {
		return rejectWithValue('error')
	}
	try {
		const response = await extra.api.get<ArticleType>(getArticleDetailsRoute(articleId), {
			params: {
				_expand: 'profile',
			},
		})

		const editableArticleData = mapArticleToEditableArticle(response.data)

		return {
			form: editableArticleData,
			data: response.data,
		}
	} catch (error: any) {
		return rejectWithValue('error')
	}
})
