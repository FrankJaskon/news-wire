import { FC } from 'react'
import DateIcon from '@/shared/assets/icons/date.svg'
import ViewsIcon from '@/shared/assets/icons/views.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/deprecated/AppIcon'
import { AppImage } from '@/shared/ui/deprecated/AppImage'
import { HStack } from '@/shared/ui/deprecated/HStack'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { ArticleBlockType, ArticleType } from '../../model/types/Article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import cls from './Article.module.scss'

export interface ArticleDetailsProps {
	className?: string
	article: ArticleType
	isLoading?: boolean
	error?: string
}

export const renderBlockContent = (block: ArticleBlockType) => {
	switch (block.type) {
		case 'IMAGE':
			return (
				<ArticleImageBlock
					key={`article-block-${block.id}`}
					src={block.src}
					title={block.title}
				/>
			)
		case 'CODE':
			return <ArticleCodeBlock key={`article-block-${block.id}`} code={block.code} />
		case 'TEXT':
			return (
				<ArticleTextBlock
					key={`article-block-${block.id}`}
					paragraphs={block.paragraphs}
					title={block.title}
				/>
			)
		default:
			return null
	}
}

export const Article: FC<ArticleDetailsProps> = props => {
	const { className, article, isLoading, error } = props

	if (isLoading) {
		return (
			<div className={classNames('', {}, [className])}>
				<HStack justify='center'>
					<Skeleton width='70%' height={200} className={cls.img} />
				</HStack>
				<Skeleton width='70%' height={34} className={cls.title} />
				<Skeleton width='60%' height={24} className={cls.subtitle} />
				<Skeleton width={100} height={22} className={cls.feature} />
				<Skeleton
					width={100}
					height={22}
					className={classNames(cls.feature, {}, [cls.featureLast])}
				/>
				<Skeleton height={250} className={cls.contentBlock} />
				<Skeleton height={250} className={classNames(cls.contentBlock)} />
			</div>
		)
	}
	if (error) {
		return (
			<div className={classNames('', {}, [className, cls.error])}>
				<Text variant='error' content={error} size='size-l' />
			</div>
		)
	}
	return (
		<VStack className={classNames('', {}, [className])} gap='24'>
			{article?.img && (
				<HStack className={cls.imgWrapper} justify='center'>
					<AppImage
						src={article?.img}
						className={cls.img}
						fallback={<Skeleton width='70%' height={200} />}
						errorFallback={<></>}
					/>
				</HStack>
			)}
			<VStack gap='8'>
				<Text
					variant='primary'
					title={article?.title}
					content={article?.subtitle}
					size='size-l'
				/>
				{article?.views !== undefined && (
					<HStack>
						<AppIcon Svg={ViewsIcon} className={cls.icon} />
						<Text content={String(article?.views)} size='size-s' />
					</HStack>
				)}
				{article?.createdAt && (
					<HStack>
						<AppIcon Svg={DateIcon} className={cls.icon} />
						<Text content={article?.createdAt} size='size-s' />
					</HStack>
				)}
			</VStack>
			{article?.blocks?.map(item => renderBlockContent(item))}
		</VStack>
	)
}
