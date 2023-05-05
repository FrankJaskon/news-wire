import { FC, HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ViewsIcon from '@/shared/assets/icons/views.svg'
import { TextColor } from '@/shared/const/consts'
import { getArticleDetailsRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/AppButton'
import { AppCard } from '@/shared/ui/AppCard'
import { AppIcon } from '@/shared/ui/AppIcon'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { BlockType, ViewVariant } from '../../model/consts/articleDetailsConsts'
import { ArticleType, TextBlockType, ViewVariantType } from '../../model/types/ArticleDetailsScheme'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import cls from './ArticleListItem.module.scss'

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
		titleHue={TextColor.SECONDARY}
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
						to={(article?.id && getArticleDetailsRoute(article?.id)) || undefined}
						target={target}
					>
						<AppImage
							className={cls.img}
							src={article?.img}
							alt={article?.title}
							fallback={<Skeleton
								height={200}
								width={200}
							/>}
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
						to={(article?.profile.id && getProfileRoute(article?.profile.id)) || undefined}
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
								content={article?.profile?.username}
								contentHue={TextColor.PRIMARY}
								transform='uppercase'
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
					<AppImage
						className={cls.img}
						src={article?.img}
						fallback={<Skeleton
							height={200}
						/>}
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