import { ArticleType, BlockType, TextBlockType } from '../../model/types/ArticleDetailsScheme'
import { FC, HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { Text } from 'shared/ui/Text'
import ViewsIcon from 'shared/assets/icons/views.svg'
import { AppIcon } from 'shared/ui/AppIcon'
import { useNavigate } from 'react-router-dom'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppCard } from 'shared/ui/AppCard'
import { Avatar } from 'shared/ui/Avatar'
import { AppButton } from 'shared/ui/AppButton'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { ViewVariant, ViewVariantType } from '../ArticleList/ArticleList'
import { HStack, VStack } from 'shared/ui/Stack'

export interface ArticleListItemProps {
	className?: string
	article?: ArticleType
	view?: ViewVariantType
	target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
	const {
		className,
		article,
		view,
		target
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

	if (view === ViewVariant.GRID) {
		return (
			<AppCard
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			>
				<VStack
					gap='4'
				>
					<AppLink
						className={classNames(cls.imgWrapper, {})}
						hover={false}
						to={RoutePaths.articles_details + article?.id}
						target={target}
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
					<HStack
						justify='between'
					>
						{ArticleTypes}
						{Views}
					</HStack>
					<AppLink to={String(article?.id)}>
						{ArticleTitle}
					</AppLink>
				</VStack>
			</AppCard>
		)
	}

	const textBlockProps = article?.blocks.find(block => block.type === BlockType.TEXT) as TextBlockType

	return (
		<AppCard className={classNames(cls.ArticleListItem, {}, [className, view && cls[view]])}>
			<VStack
				gap='8'
			>
				<HStack
					justify='between'
				>
					<AppLink
						className={classNames(cls.userInfo, {})}
						to={RoutePaths.profiles + article?.profile.id}
					>
						<HStack
							gap='8'
						>
							<Avatar
								size={40}
								src={article?.profile?.avatar}
								className={cls.avatar}
							/>
							<Text
								title={article?.profile?.username}
								titleElement='div'
							/>
						</HStack>
					</AppLink>
					<Text content={article?.createdAt} />
				</HStack>
				<VStack
					gap='4'
				>
					<AppLink
						className={cls.link}
						to={String(article?.id)}
					>
						{ArticleTitle}
					</AppLink>
					{ArticleTypes}
				</VStack>
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
				<HStack
					justify='between'
				>
					<AppButton onClick={handleClick}>
						{t('read-more-btn')}
					</AppButton>
					{Views}
				</HStack>
			</VStack>
		</AppCard>
	)
})