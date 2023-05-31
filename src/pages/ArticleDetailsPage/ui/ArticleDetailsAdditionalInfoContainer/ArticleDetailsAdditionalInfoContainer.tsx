import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useArticleDetailsData } from '@/features/ArticleDetails'
import classNames from '@/shared/lib/classNames/classNames'
import { ArticleDetailsAdditionalInfo } from '@/widgets/ArticleDetailsAdditionalInfo'
import { getIfCanEdit } from '../../model/selectors/article'
import cls from './ArticleDetailsAdditionalInfoContainer.module.scss'

export interface ArticleDetailsAdditionalInfoContainerProps {
	className?: string
}

export const ArticleDetailsAdditionalInfoContainer: FC<ArticleDetailsAdditionalInfoContainerProps> =
	memo((props: ArticleDetailsAdditionalInfoContainerProps) => {
		const { className } = props

		const article = useArticleDetailsData()
		const ifCanEdit = useSelector(getIfCanEdit)

		return (
			<div className={classNames(cls.ArticleDetailsAdditionalInfoContainer, {}, [className])}>
				<ArticleDetailsAdditionalInfo
					articleId={article?.id}
					views={article?.views}
					createdAd={article?.createdAt}
					avatar={article?.profile?.avatar}
					username={article?.profile?.username}
					ifCanEdit={ifCanEdit}
				/>
			</div>
		)
	})
