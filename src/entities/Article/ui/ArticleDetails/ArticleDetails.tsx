import type { ArticleBlockType, ArticleType } from 'pages/ArticleDetailsPage'
import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import ViewsIcon from 'shared/assets/icons/views.svg'
import DateIcon from 'shared/assets/icons/date.svg'
import cls from './ArticleDetails.module.scss'
import { AppIcon } from 'shared/ui/AppIcon'

export interface ArticleDetailsProps {
	className?: string
	article?: ArticleType
	isLoading?: boolean
	error?: string
	readonly?: boolean
}

const renderBlockContent = (block: ArticleBlockType) => {
	switch (block.type) {
	case 'IMAGE':
		return <ArticleImageBlock
			key={block.id}
			src={block.src}
			title={block.title}
		/>
	case 'CODE':
		return <ArticleCodeBlock
			key={block.id}
			code={block.code}
		/>
	case 'TEXT':
		return <ArticleTextBlock
			key={block.id}
			paragraphs={block.paragraphs}
			title={block.title}
		/>
	default:
		return null
	}
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
	const {
		className,
		article,
		isLoading,
		error,
		readonly,
	} = props

	if (isLoading) {
		return <div className={classNames(cls.ArticleDetails, {}, [className, cls.loading])}>
			<Skeleton width={500} height={200} className={cls.avatar} />
			<Skeleton width={700} height={30} className={cls.title} />
			<Skeleton width={400} height={30} className={cls.subtitle} />
			<Skeleton height={250} className={cls.contentBlock} />
			<Skeleton height={250} className={cls.contentBlock} />
		</div>
	}

	if (error) {
		return <div className={classNames(cls.ArticleDetails, {}, [className, cls.error])}>
			<Text variant='error' content={error} size='size-l' />
		</div>
	}

	return <div className={classNames(cls.ArticleDetails, {}, [className])}>
		<img
			src={article?.img}
			className={cls.avatar}
		/>
		<Text
			variant='primary'
			title={article?.title}
			content={article?.subtitle}
			size='size-l'
		/>
		<div className={cls.featureWrapper}>
			<AppIcon
				Svg={ViewsIcon}
				className={cls.icon}
			/>
			<Text
				content={String(article?.views)}
				size='size-s'
			/>
		</div>
		<div className={classNames(cls.featureWrapper, {}, [cls.featureWrapperLast])}>
			<AppIcon
				Svg={DateIcon}
				className={cls.icon}
			/>
			<Text
				content={article?.createdAt}
				size='size-s'
			/>
		</div>
		{article?.blocks?.map(renderBlockContent)}
	</div>
}