import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { addNewCommentReducer } from 'entities/AddNewComment'
import { articleDetailsReducer } from 'entities/Article'
import { articleDetailsCommentsReducer } from 'features/ArticleComments'
import { loginReducer } from 'features/AuthByUsername'
import { articlesPageReducer } from 'pages/ArticlesPage'
import { profileReducer } from 'pages/ProfilePage'
import type { ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'

const defaultAsyncReducers: ReducerList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addNewComment: addNewCommentReducer,
	articlesPage: articlesPageReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
	<StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
)