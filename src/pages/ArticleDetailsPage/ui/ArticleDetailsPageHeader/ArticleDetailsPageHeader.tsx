import { getIfCanEdit } from '../../model/selectors/article'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RoutePaths } from '@/shared/config/RoutePaths/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import cls from './ArticleDetailsPageHeader.module.scss'
import { HStack } from '@/shared/ui/Stack'

export interface ArticleDetailsPageHeaderProps {
	className?: string
	articleId: number
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((
	props: ArticleDetailsPageHeaderProps
) => {
	const {
		className,
		articleId
	} = props

	const { t } = useTranslation('article')
	const ifCanEdit = useSelector(getIfCanEdit)

	return (
		<HStack
			className={classNames('', {}, [className])}
		>
			<AppLink
				variant={AppLinkVariant.PRIMARY_BUTTON}
				className={cls.backBtn}
				to={RoutePaths.articles}
			>
				{'< ' + t('back-to-list-btn')}
			</AppLink>
			{ifCanEdit && <AppLink
				variant={AppLinkVariant.PRIMARY_BUTTON}
				className={cls.editBtn}
				to={`${RoutePaths.articles}/${articleId}/edit`}
			>
				{t('edit-article-btn')}
			</AppLink>}
		</HStack>
	)
})