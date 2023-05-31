import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticlesPage as ArticlesPageDeprecated } from './deprecated/ArticlesPage'
import { ArticlesPage as ArticlesPageRedesigned } from './redesigned/ArticlesPage'

const ArticlesPage: FC = memo(() => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticlesPageRedesigned />}
			off={<ArticlesPageDeprecated />}
		/>
	)
})

export default memo(ArticlesPage)
