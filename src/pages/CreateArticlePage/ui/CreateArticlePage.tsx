import { FC, memo } from 'react'
import { EditArticlePage } from '@/pages/EditArticlePage'
import { ToggleFeatures } from '@/shared/lib/features'
import { CreateArticlePage as CreateArticlePageDeprecated } from './deprecated/CreateArticlePage'

export interface CreateArticlePageProps {
	className?: string
}

const CreateArticlePage: FC<CreateArticlePageProps> = (props: CreateArticlePageProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<EditArticlePage {...props} />}
			off={<CreateArticlePageDeprecated {...props} />}
		/>
	)
}

export default memo(CreateArticlePage)
