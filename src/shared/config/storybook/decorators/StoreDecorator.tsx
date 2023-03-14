import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from 'pages/ArticleDetailsPage'
import { profileReducer } from 'pages/ProfilePage'
import type { ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'

const defaultAsyncReducers: ReducerList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
	<StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
)