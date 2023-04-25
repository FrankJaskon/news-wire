import { FC, memo, useCallback, useState } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon, AppIconSize } from '@/shared/ui/AppIcon'
import StarIcon from '@/shared/assets/icons/star_rate.svg'
import cls from './StarRating.module.scss'

export interface StarRatingProps {
	className?: string
	onSelect?: (starCount: number) => void
	size?: number
	selectedStar?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {
	const {
		className,
		onSelect,
		size = 30,
		selectedStar
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

	return <div className={classNames(cls.StarRating, {}, [className])}>
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
	</div>
})