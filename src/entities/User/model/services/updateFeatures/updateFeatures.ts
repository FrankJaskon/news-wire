import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { getAllFeatureFlags } from '@/shared/lib/features/setGetFeatures'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { updateFeaturesMutation } from '../../../api/featuresApi'

interface UpdateFeaturesArgs {
	id?: number
	newFeatures: Partial<FeatureFlags>
}

export const updateFeatures = createAsyncThunk<
	void,
	UpdateFeaturesArgs,
	ThunkApiConfigType<string>
>('user/updateFeatures', async ({ id, newFeatures }, thunkAPI) => {
	const { dispatch, rejectWithValue } = thunkAPI
	try {
		if (!id) {
			throw rejectWithValue('Error. User is not authorized')
		}
		await dispatch(
			updateFeaturesMutation({
				id,
				features: {
					...getAllFeatureFlags(),
					...newFeatures,
				},
			})
		).unwrap()
		window.location.reload()
	} catch (error: any) {
		return rejectWithValue('Error')
	}
})
