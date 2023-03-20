import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article'
import { addNewCommentReducer } from 'features/AddNewComment'
import { loginReducer } from 'features/AuthByUsername'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage'
import { profileReducer } from 'pages/ProfilePage'
import type { ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'

const defaultAsyncReducers: ReducerList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addNewComment: addNewCommentReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
	<StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
)