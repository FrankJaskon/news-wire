import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleCategory, ArticleCategoryType } from '@/entities/ArticleCategory'
import EconomicsIcon from '@/shared/assets/icons/economics.svg'
import ITIcon from '@/shared/assets/icons/it.svg'
import ScienceIcon from '@/shared/assets/icons/science.svg'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface ArticleTypeCategoriesProps {
	className?: string
}

export const ArticleTypeCategories: FC<ArticleTypeCategoriesProps> = memo(
	(props: ArticleTypeCategoriesProps) => {
		const { className } = props
		const { t } = useTranslation('article')

		const categories: ArticleCategoryType[] = [
			{
				content: t('filter.IT'),
				Icon: ITIcon,
				href: getArticlesRoute() + '?type=IT',
			},
			{
				content: t('filter.SCIENCE'),
				Icon: EconomicsIcon,
				href: getArticlesRoute() + '?type=SCIENCE',
			},
			{
				content: t('filter.ECONOMIC'),
				Icon: ScienceIcon,
				href: getArticlesRoute() + '?type=ECONOMIC',
			},
		]

		return (
			<VStack gap='16'>
				<AppText title={t('article-categories-title')} size='xl' weight='bold' />
				<HStack gap='40' className={className} wrap='wrap' justify='start'>
					{categories.map(item => (
						<ArticleCategory category={item} key={item.content} />
					))}
				</HStack>
			</VStack>
		)
	}
)
