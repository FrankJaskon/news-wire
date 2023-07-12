import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ViewsIcon from '@/shared/assets/icons/eye.svg'
import { getArticleDetailsRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import { convertDate } from '@/shared/helpers/convertDate'
import classNames from '@/shared/lib/classNames/classNames'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { BlockType, ViewVariant } from '../../../model/consts/articleDetailsConsts'
import { ArticleType, TextBlockType, ViewVariantType } from '../../../model/types/Article'
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

	const date = useCallback(() => convertDate(article?.createdAt), [article?.createdAt])

	const handleClick = useCallback(() => {
		navigate(String(article?.id))
	}, [navigate, article?.id])

	if (view === ViewVariant.GRID) {
		return (
			<AppCard
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
				data-testid={`${dataTestId}-grid`}
				padding='0'
			>
				<VStack gap='8'>
					<AppLink
						className={classNames(cls.imgWrapper, {})}
						hover={false}
						to={article?.id ? getArticleDetailsRoute(article?.id) : undefined}
						target={target}
					>
						<AppImage
							className={cls.img}
							height={170}
							width='100%'
							src={article?.img}
							alt={article?.title}
							fallback={<Skeleton height={140} />}
						/>
					</AppLink>
					<div className={cls.infoWrapper}>
						<AppLink
							to={(article?.id && getArticleDetailsRoute(article?.id)) || undefined}
							target={target}
						>
							<AppText className={cls.title} title={article?.title} />
						</AppLink>
						<HStack justify='between' align='center'>
							<AppText className={cls.date} text={date()} />
							<HStack align='center' justify='center' max={false}>
								<AppText text={String(article?.views)} />
								<AppIcon Svg={ViewsIcon} />
							</HStack>
						</HStack>
					</div>
					<AppLink
						className={cls.footer}
						to={
							(article?.profile?.id && getProfileRoute(article?.profile.id)) ||
							undefined
						}
					>
						<HStack gap='8' align='center'>
							<Avatar size={32} src={article?.profile?.avatar} />
							<AppText text={article?.profile?.username} weight='bold' />
						</HStack>
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
			padding='24'
		>
			<VStack gap='8'>
				<HStack gap='8' align='center'>
					<AppLink
						to={
							(article?.profile?.id && getProfileRoute(article?.profile.id)) ||
							undefined
						}
					>
						<HStack gap='8' align='center'>
							<Avatar size={32} src={article?.profile?.avatar} />
							<AppText text={article?.profile?.username} weight='bold' />
						</HStack>
					</AppLink>
					<AppText text={date()} />
				</HStack>
				<VStack gap='16'>
					<AppLink className={cls.link} to={String(article?.id)}>
						<VStack gap='12'>
							<AppText
								title={article?.title}
								size='xl'
								weight='bolder'
								className={cls.articleTitle}
							/>
							<AppText
								title={article?.subtitle}
								size='l'
								className={cls.articleSubtitle}
							/>
						</VStack>
					</AppLink>
					<AppLink className={cls.link} to={String(article?.id)}>
						<AppImage
							className={cls.img}
							src={article?.img}
							height={420}
							width={'100%'}
							fallback={<Skeleton height={420} />}
							alt={article?.title}
						/>
					</AppLink>
					{textBlockProps?.paragraphs && (
						<AppText
							className={cls.textContent}
							text={textBlockProps.paragraphs.slice(0, 2).join(' ')}
						/>
					)}
					<HStack justify='between' align='end'>
						<AppButton variant='outline' onClick={handleClick}>
							{t('read-more-btn')}
						</AppButton>
						<HStack gap='8' align='center' justify='center' max={false}>
							<AppText text={String(article?.views)} />
							<AppIcon Svg={ViewsIcon} />
						</HStack>
					</HStack>
				</VStack>
			</VStack>
		</AppCard>
	)
})
