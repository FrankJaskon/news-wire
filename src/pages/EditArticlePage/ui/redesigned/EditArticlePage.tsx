import { FC, memo } from 'react'
import { editableArticleReducer } from '@/features/EditableArticle'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { ArticleEditing } from '@/widgets/ArticleEditing'
import { PageWrapper } from '@/widgets/PageWrapper'

export interface EditArticlePageProps {
	className?: string
}

const reducers: ReducerList = {
	editableArticle: editableArticleReducer,
}

export const EditArticlePage: FC<EditArticlePageProps> = memo((props: EditArticlePageProps) => {
	const { className } = props

	return (
		<LazyReducerLoader reducers={reducers}>
			<PageWrapper data-testid='edit-article-page' className={className}>
				<StickyContentLayout content={<ArticleEditing />} right={<div>Rightbar</div>} />
			</PageWrapper>
		</LazyReducerLoader>
	)
})
