import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider/testing'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { addNewCommentReducer } from '@/entities/AddNewComment/testing'
import { articleDetailsCommentsReducer } from '@/features/ArticleComments/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'
import type { ReducerList } from '@/shared/lib/components/LazyReducerLoader/testing'
import { articlesInfiniteListReducer } from '@/widgets/ArticleInfiniteList/testing'

const defaultAsyncReducers: ReducerList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addNewComment: addNewCommentReducer,
	articlesInfiniteList: articlesInfiniteListReducer,
}

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: Story) =>
		(
			<StoreProvider
				initialState={state as StateSchema}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		)
