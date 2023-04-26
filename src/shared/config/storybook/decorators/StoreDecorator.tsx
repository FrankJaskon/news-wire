import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { addNewCommentReducer } from '@/entities/AddNewComment'
import { articleDetailsReducer } from '@/entities/Article'
import { articleDetailsCommentsReducer } from '@/features/ArticleComments'
import { loginReducer } from '@/features/AuthByUsername'
import { profileReducer } from '@/features/EditableProfileCard'
import type { ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { articlesInfiniteListReducer } from '@/widgets/ArticleInfiniteList'

const defaultAsyncReducers: ReducerList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addNewComment: addNewCommentReducer,
	articlesInfiniteList: articlesInfiniteListReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
	<StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
)