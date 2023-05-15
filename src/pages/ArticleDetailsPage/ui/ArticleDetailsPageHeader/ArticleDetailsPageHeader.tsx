import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticlesRoute, getEditArticleDetailsRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { getIfCanEdit } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

export interface ArticleDetailsPageHeaderProps {
	className?: string
	articleId: number
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
	(props: ArticleDetailsPageHeaderProps) => {
		const { className, articleId } = props

		const { t } = useTranslation('article')
		const ifCanEdit = useSelector(getIfCanEdit)

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
