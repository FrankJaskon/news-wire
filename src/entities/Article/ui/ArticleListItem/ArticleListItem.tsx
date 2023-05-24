import { FC, HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ViewsIcon from '@/shared/assets/icons/views.svg'
import { TextColor } from '@/shared/const/consts'
import { getArticleDetailsRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/deprecated/AppButton'
import { AppCard } from '@/shared/ui/deprecated/AppCard'
import { AppIcon, AppIconSize, AppIconVariant } from '@/shared/ui/deprecated/AppIcon'
import { AppImage } from '@/shared/ui/deprecated/AppImage'
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { HStack } from '@/shared/ui/deprecated/HStack'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text, TextSize, TextStyle, TextWeight } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { BlockType, ViewVariant } from '../../model/consts/articleDetailsConsts'
import { ArticleType, TextBlockType, ViewVariantType } from '../../model/types/Article'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import cls from './ArticleListItem.module.scss'

export interface ArticleListItemProps {
	className?: string
	article?: ArticleType
	view?: ViewVariantType
	target?: HTMLAttributeAnchorTarget
	'data-testid'?: string
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
	const {
		className,
		article,
		view,
		target,
		'data-testid': dataTestId = 'articles-list-item',
	} = props

	const navigate = useNavigate()
	const { t } = useTranslation('article')

	const ArticleTitle = useMemo(
		() => (
			<Text
				className={cls.title}
				title={article?.title}
				titleHue={TextColor.SECONDARY}
				weight={TextWeight.BOLD}
			/>
		),
		[article?.title]
	)

	const ArticleTypes = useMemo(
		() => <Text className={cls.types} content={article?.type?.join(', ')} size={TextSize.S} />,
		[article?.type]
	)

	const handleClick = useCallback(() => {
		navigate(String(article?.id))
	}, [navigate, article?.id])

	if (view === ViewVariant.GRID) {
		return (
			<AppCard
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
				data-testid={`${dataTestId}-grid`}
			>
				<VStack gap='4'>
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
							fallback={<Skeleton height={200} width={200} />}
						/>
						<Text
							className={cls.date}
							content={article?.createdAt}
							style={TextStyle.ITALIC}
							size={TextSize.S}
						/>
					</AppLink>
					<HStack justify='between'>
						{ArticleTypes}
						<HStack align='center' justify='center' max={false}>
							<Text
								className={cls.views}
								content={String(article?.views)}
								style={TextStyle.ITALIC}
								size={TextSize.S}
							/>
							<AppIcon
								Svg={ViewsIcon}
								variant={AppIconVariant.SECONDARY}
								size={AppIconSize.SMALL}
							/>
						</HStack>
					</HStack>
					<AppLink
						to={(article?.id && getArticleDetailsRoute(article?.id)) || undefined}
						target={target}
					>
						{ArticleTitle}
					</AppLink>
				</VStack>
			</AppCard>
		)
	}

	const textBlockProps = article?.blocks?.find(
		block => block.type === BlockType.TEXT
	) as TextBlockType

	return (
		<AppCard
			className={classNames(cls.ArticleListItem, {}, [className, view && cls[view]])}
			data-testid={`${dataTestId}-list`}
		>
			<VStack gap='8'>
				<HStack justify='between'>
					<AppLink
						className={classNames(cls.userInfo, {})}
						to={
							(article?.profile?.id && getProfileRoute(article?.profile.id)) ||
							undefined
						}
					>
						<HStack gap='8'>
							<Avatar
								size={40}
								src={article?.profile?.avatar}
								className={cls.avatar}
							/>
							<Text content={article?.profile?.username} weight={TextWeight.BOLD} />
						</HStack>
					</AppLink>
					<Text content={article?.createdAt} style={TextStyle.ITALIC} size={TextSize.S} />
				</HStack>
				<VStack gap='4'>
					<AppLink className={cls.link} to={String(article?.id)}>
						{ArticleTitle}
					</AppLink>
					{ArticleTypes}
				</VStack>
				<AppLink className={cls.link} to={String(article?.id)}>
					<AppImage
						className={cls.img}
						src={article?.img}
						fallback={<Skeleton height={200} />}
						alt={article?.title}
					/>
				</AppLink>
				<ArticleTextBlock className={cls.textContent} {...textBlockProps} />
				<HStack justify='between' align='end'>
					<AppButton onClick={handleClick}>{t('read-more-btn')}</AppButton>
					<HStack align='center' justify='center' max={false}>
						<Text
							className={cls.views}
							content={String(article?.views)}
							style={TextStyle.ITALIC}
							size={TextSize.S}
						/>
						<AppIcon Svg={ViewsIcon} variant={AppIconVariant.SECONDARY} />
					</HStack>
				</HStack>
			</VStack>
		</AppCard>
	)
})
