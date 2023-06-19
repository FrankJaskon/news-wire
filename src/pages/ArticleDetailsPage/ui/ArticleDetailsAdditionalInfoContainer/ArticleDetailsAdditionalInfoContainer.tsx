import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useArticleDetailsIsLoading, useArticleDetailsData } from '@/features/ArticleDetails'
import { convertDate } from '@/shared/helpers/convertDate'
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
		const isLoading = useArticleDetailsIsLoading()

		return (
			<div className={classNames(cls.ArticleDetailsAdditionalInfoContainer, {}, [className])}>
				<ArticleDetailsAdditionalInfo
					articleId={article?.id}
					views={article?.views}
					createdAt={convertDate(article?.createdAt)}
					avatar={article?.profile?.avatar}
					username={article?.profile?.username}
					ifCanEdit={ifCanEdit}
					isLoading={isLoading}
				/>
			</div>
		)
	})
