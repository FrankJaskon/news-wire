import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ArticleType } from '../../../model/types/Article'
import { renderBlockContent } from '../renderComponentBlock'
import cls from './Article.module.scss'

export interface ArticleDetailsProps {
	className?: string
	article: ArticleType
	isLoading?: boolean
	error?: string
}

const checkIfArticleNotEmpty = (article: ArticleType) => {
	const { id, ...articleWithNoId } = article

	return Object.values(articleWithNoId).some(value => {
		if (Array.isArray(value)) {
			return value.length ? true : false
		}
		return value ? true : false
	})
}

export const Article: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
	const { className, article, isLoading, error } = props
	const { t } = useTranslation('article')

	if (!isLoading && !checkIfArticleNotEmpty(article)) {
		return <AppText text={t('empty-article')} />
	}

	if (isLoading) {
		return (
			<VStack gap='16'>
				<Skeleton width='80%' height={32} />
				<Skeleton width='70%' height={24} />
				<Skeleton height={420} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
				<Skeleton height={16} />
			</VStack>
		)
	}

	if (error) {
		return <AppText variant='error' text={error} />
	}

	return (
		<VStack gap='16' className={className}>
			<AppText title={article?.title} size='xl' weight='bolder' />
			<AppText title={article?.subtitle} size='l' />
			{article?.img && (
				<HStack justify='center'>
					<AppImage
						src={article?.img}
						className={cls.img}
						height={420}
						width={'100%'}
						fallback={<Skeleton height={420} />}
					/>
				</HStack>
			)}
			{article?.blocks?.map(item => renderBlockContent(item))}
		</VStack>
	)
})
