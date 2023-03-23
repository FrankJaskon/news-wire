import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { AppCard } from 'shared/ui/AppCard'
import { Skeleton } from 'shared/ui/Skeleton'
import { ViewVariant, ViewVariantType } from '../ArticleList/ArticleList'
import cls from './ArticleListItemSkeleton.module.scss'

export interface ArticleListItemSkeletonProps {
	className?: string
	view?: ViewVariantType
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
	const {
		className,
		view
	} = props

	if (view === ViewVariant.GRID) {
		return <AppCard className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
			<Skeleton
				height={200}
			/>
			<div className={cls.infoWrapper}>
				<Skeleton
					className={cls.info}
					height={20}
					width={100}
				/>
				<Skeleton
					className={cls.info}
					height={20}
					width={80}
				/>
			</div>
			<Skeleton
				height={30}
				width={150}
			/>
		</AppCard>
	}

	return (
		<AppCard className={classNames(cls.ArticleListItem, {}, [className, view && cls[view]])}>
			<div className={cls.header}>
				<div className={classNames(cls.userInfo, {}, [cls.link])}>
					<Skeleton
						height={40}
						width={40}
						borderRadius='50%'
						className={cls.avatar}
					/>
					<Skeleton height={20} width={150} />
				</div>
				<Skeleton height={20} width={120} />
			</div>
			<Skeleton
				className={cls.title}
				height={30}
				width={600}
			/>
			<div className={cls.typesWrapper}>
				<Skeleton
					className={cls.types}
					height={30}
					width={60}
				/>
				<Skeleton
					className={cls.types}
					height={30}
					width={80}
				/>
			</div>
			<Skeleton
				height={200}
				className={cls.img}
			/>
			<div className={cls.contentWrapper}>
				<Skeleton
					className={cls.textContent}
					height={90}
				/>
				<Skeleton
					className={cls.textContent}
					height={70}
				/>
			</div>
			<Skeleton
				height={40}
				width={80}
			/>
		</AppCard>
	)
}