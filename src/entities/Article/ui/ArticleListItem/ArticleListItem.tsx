import { ArticleType, BlockType, TextBlockType } from '../../model/types/ArticleDetailsScheme'
import { FC, useCallback, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ViewVariant, ViewVariantType } from '../ArticleList/ArticleList'
import { Text } from 'shared/ui/Text'
import ViewsIcon from 'shared/assets/icons/views.svg'
import { AppIcon } from 'shared/ui/AppIcon'
import { useNavigate } from 'react-router-dom'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppCard } from 'shared/ui/AppCard'
import { Avatar, AvatarVariant } from 'shared/ui/Avatar'
import { AppButton } from 'shared/ui/AppButton'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'

export interface ArticleListItemProps {
	className?: string
	article?: ArticleType
	view?: ViewVariantType
	isLoading?: boolean
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
	const {
		className,
		article,
		view,
		isLoading
	} = props

	const navigate = useNavigate()
	const { t } = useTranslation('article')

	const ArticleTitle = useMemo(() => <Text
		className={cls.title}
		title={article?.title}
	/>, [article?.title])

	const ArticleTypes = useMemo(() => <Text
		className={cls.types}
		content={article?.type.join(', ')}
	/>, [article?.type])

	const Views = useMemo(() => <div className={cls.viewWrapper}>
		<Text
			className={cls.views}
			content={String(article?.views)}
		/>
		<AppIcon Svg={ViewsIcon} />
	</div>, [article?.views])

	const handleClick = useCallback(() => {
		navigate(String(article?.id))
	}, [navigate, article?.id])

	if (isLoading) {
		return <div className={classNames(cls.ArticleListItem, {}, [className, view && cls[view]])}>
			<ArticleListItemSkeleton view={view} />
		</div>
	}

	if (view === ViewVariant.GRID) {
		return (
			<AppCard
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			>
				<AppLink
					className={classNames(cls.imgWrapper, {}, [cls.link])}
					to={String(article?.id)}
				>
					<img
						className={cls.img}
						src={article?.img}
						alt={article?.title}
					/>
					<Text
						className={cls.date}
						content={article?.createdAt}
					/>
				</AppLink>
				<div>
					<div className={cls.infoWrapper}>
						{ArticleTypes}
						{Views}
					</div>
					<AppLink to={String(article?.id)}>
						{ArticleTitle}
					</AppLink>
				</div>
			</AppCard>
		)
	}

	const textBlockProps = article?.blocks.find(block => block.type === BlockType.TEXT) as TextBlockType

	return (
		<AppCard className={classNames(cls.ArticleListItem, {}, [className, view && cls[view]])}>
			<div className={cls.header}>
				<AppLink
					className={classNames(cls.userInfo, {}, [cls.link])}
					to={RoutePaths.profile + article?.user.id}
				>
					<Avatar
						variant={AvatarVariant.CIRCLE}
						size={40}
						src={article?.user?.avatar}
						className={cls.avatar}
					/>
					<Text title={article?.user?.username} />
				</AppLink>
				<Text content={article?.createdAt} />
			</div>
			<AppLink
				className={cls.link}
				to={String(article?.id)}
			>
				{ArticleTitle}
			</AppLink>
			{ArticleTypes}
			<AppLink
				className={cls.link}
				to={String(article?.id)}
			>
				<img
					className={cls.img}
					src={article?.img}
					alt={article?.title}
				/>
			</AppLink>
			<ArticleTextBlock
				className={cls.textContent}
				{...textBlockProps}
			/>
			<div className={cls.footer}>
				<AppButton onClick={handleClick}>
					{t('read-more-btn')}
				</AppButton>
				{Views}
			</div>
		</AppCard>
	)
}