import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleCategory, ArticleCategoryType } from '@/entities/ArticleCategory'
import ArtIcon from '@/shared/assets/icons/art.svg'
import EconomicsIcon from '@/shared/assets/icons/economics.svg'
import HealthIcon from '@/shared/assets/icons/health.svg'
import ITIcon from '@/shared/assets/icons/it.svg'
import ScienceIcon from '@/shared/assets/icons/science.svg'
import SportIcon from '@/shared/assets/icons/sport.svg'
import TravelIcon from '@/shared/assets/icons/travel.svg'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './ArticleTypeCategories.module.scss'

export interface ArticleTypeCategoriesProps {
	className?: string
}

export const ArticleTypeCategories: FC<ArticleTypeCategoriesProps> = memo(
	(props: ArticleTypeCategoriesProps) => {
		const { className } = props
		const { t } = useTranslation('article')

		const categories: ArticleCategoryType[] = [
			{
				content: t('filter.short.IT'),
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
			{
				content: t('filter.HEALTH'),
				Icon: HealthIcon,
				href: getArticlesRoute() + '?type=HEALTH',
			},
			{
				content: t('filter.TRAVEL'),
				Icon: TravelIcon,
				href: getArticlesRoute() + '?type=TRAVEL',
			},
			{
				content: t('filter.SPORT'),
				Icon: SportIcon,
				href: getArticlesRoute() + '?type=SPORT',
			},
			{
				content: t('filter.ART'),
				Icon: ArtIcon,
				href: getArticlesRoute() + '?type=ART',
			},
		]

		return (
			<VStack gap='16'>
				<AppText title={t('article-categories-title')} size='xl' weight='bold' />
				<HStack
					gap='40'
					className={classNames(cls.container, {}, [className])}
					wrap='wrap'
					justify='start'
				>
					{categories.map(item => (
						<ArticleCategory category={item} key={item.content} />
					))}
				</HStack>
			</VStack>
		)
	}
)
