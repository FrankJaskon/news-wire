import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleCodeBlock as ArticleCodeBlockDeprecated } from './deprecated/ArticleCodeBlock'
import { ArticleCodeBlock as ArticleCodeBlockRedesigned } from './redesigned/ArticleCodeBlock'

export interface ArticleCodeBlockProps {
	className?: string
	code?: string
	readonly?: boolean
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleCodeBlockRedesigned {...props} />}
			off={<ArticleCodeBlockDeprecated {...props} />}
		/>
	)
})
