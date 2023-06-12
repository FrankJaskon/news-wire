import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { EditArticlePage as EditArticlePageDeprecated } from './deprecated/EditArticlePage'
import { EditArticlePage as EditArticlePageRedesigned } from './redesigned/EditArticlePage'

export interface EditArticlePageProps {
	className?: string
}

const EditArticlePage: FC<EditArticlePageProps> = (props: EditArticlePageProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<EditArticlePageRedesigned {...props} />}
			off={<EditArticlePageDeprecated {...props} />}
		/>
	)
}

export default memo(EditArticlePage)
