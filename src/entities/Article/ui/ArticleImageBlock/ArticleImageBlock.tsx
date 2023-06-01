import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleImageBlock as ArticleImageBlockDeprecated } from './deprecated/ArticleImageBlock'
import { ArticleImageBlock as ArticleImageBlockRedesigned } from './redesigned/ArticleImageBlock'

export interface ArticleImageBlockProps {
	className?: string
	src?: string
	title?: string
	readonly?: boolean
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(
	(props: ArticleImageBlockProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<ArticleImageBlockRedesigned {...props} />}
				off={<ArticleImageBlockDeprecated {...props} />}
			/>
		)
	}
)
