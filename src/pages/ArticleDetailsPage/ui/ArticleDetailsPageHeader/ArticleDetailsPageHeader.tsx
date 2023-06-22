import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticlesRoute, getEditArticleDetailsRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from '@/shared/ui/deprecated/AppLink/AppLink'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { getIfCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

export interface ArticleDetailsPageHeaderProps {
	className?: string
	articleId: number
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
	(props: ArticleDetailsPageHeaderProps) => {
		const { className, articleId } = props

		const { t } = useTranslation('article')
		const ifCanEdit = useSelector(getIfCanEditArticle)

		return (
			<HStack className={classNames('', {}, [className])}>
				<AppLink
					variant={AppLinkVariant.PRIMARY_BUTTON}
					className={cls.backBtn}
					to={getArticlesRoute()}
				>
					{'< ' + t('back-to-list-btn')}
				</AppLink>
				{ifCanEdit && (
					<AppLink
						variant={AppLinkVariant.PRIMARY_BUTTON}
						className={cls.editBtn}
						to={getEditArticleDetailsRoute(articleId)}
					>
						{t('edit-article-btn')}
					</AppLink>
				)}
			</HStack>
		)
	}
)
