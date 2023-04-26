import { FC, memo, useCallback, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon, AppIconSize } from '@/shared/ui/AppIcon'
import StarIcon from '@/shared/assets/icons/star_rate.svg'
import cls from './StarRating.module.scss'
import { HStack } from '@/shared/ui/Stack'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface StarRatingProps {
	className?: string
	onSelect?: (starCount: number) => void
	size?: number
	selectedStar?: number
	isLoading?: boolean
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {
	const {
		className,
		onSelect,
		size = 30,
		selectedStar,
		isLoading
	} = props

	const [currentStarsCount, setCurrentStartsCount] = useState<number>(selectedStar ?? 0)
	const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStar))

	const onHover = useCallback((starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStartsCount(starsCount)
		}
	}, [isSelected])

	const onLeave = useCallback(() => {
		if (!isSelected) {
			setCurrentStartsCount(0)
		}
	}, [isSelected])

	const onClick = useCallback((starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount)
			setCurrentStartsCount(starsCount)
			setIsSelected(true)
		}
	}, [onSelect, isSelected])

	if (isLoading) {
		return <HStack
			className={classNames(cls.StarRating, {}, [className])}
			justify='center'
			gap='4'
		>
			{
				stars.map(starNumber => {
					return <Skeleton
						key={starNumber}
						height={40}
						width={40}
					/>
				})
			}
		</HStack>
	}

	return <HStack
		className={classNames(cls.StarRating, {}, [className])}
		justify='center'
	>
		{
			stars.map(starNumber => {
				return <AppIcon
					key={starNumber}
					Svg={StarIcon}
					className={
						classNames(cls.starIcon, {
							[cls.hovered]: currentStarsCount >= starNumber,
							[cls.selected]: isSelected,
						},
						[])
					}
					width={size}
					height={size}
					size={AppIconSize.CUSTOM}
					onMouseEnter={onHover(starNumber)}
					onMouseLeave={onLeave}
					onClick={onClick(starNumber)}
				/>
			})
		}
	</HStack>
})