import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { editableArticleReducer, getIfCanEdit } from '@/features/EditableArticle'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { ArticleEditing } from '@/widgets/ArticleEditing'
import { PageWrapper } from '@/widgets/PageWrapper'
import { EditArticleToolsContainer } from './EditArticleToolsContainer/EditArticleToolsContainer'
import { EditArticleViewTogglerContainer } from './EditArticleViewTogglerContainer/EditArticleViewTogglerContainer'

export interface EditArticlePageProps {
	className?: string
}

const reducers: ReducerList = {
	editableArticle: editableArticleReducer,
}

export const EditArticlePage: FC<EditArticlePageProps> = memo((props: EditArticlePageProps) => {
	const { className } = props
	const ifCanEdit = useSelector(getIfCanEdit)

	return (
		<LazyReducerLoader reducers={reducers}>
			<PageWrapper data-testid='edit-article-page' className={className}>
				<StickyContentLayout
					content={<ArticleEditing ifCanEdit={ifCanEdit} />}
					left={<EditArticleViewTogglerContainer ifCanEdit={ifCanEdit} />}
					right={<EditArticleToolsContainer ifCanEdit={ifCanEdit} />}
				/>
			</PageWrapper>
		</LazyReducerLoader>
	)
})
