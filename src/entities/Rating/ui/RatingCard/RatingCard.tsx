import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextColor } from '@/shared/const/consts'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import { AppButton, ButtonVariant } from '@/shared/ui/AppButton'
import { AppCard } from '@/shared/ui/AppCard'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { AppTextArea } from '@/shared/ui/Form/AppTextArea'
import { Modal } from '@/shared/ui/Modal'
import { GapType, HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Text, TextSizeType } from '@/shared/ui/Text'
import { RatingVariant, RatingVariantType } from '../../consts/consts'

export interface RatingCardProps {
	className?: string
	title?: string
	feedbackTitle?: string
	onAccept?: (rating: number, feedback?: string) => void
	onCancel?: (rating: number) => void
	rating?: number
	isLoading?: boolean
	variant?: RatingVariantType
}

const TitleSizeMapper: OptionalRecord<RatingVariantType, TextSizeType> = {
	small: 'size-s',
	medium: 'size-m',
	large: 'size-l'
}

const StarSizeMapper: Record<RatingVariantType, number> = {
	small: 20,
	medium: 30,
	large: 40
}

const GapSizeMapper: OptionalRecord<RatingVariantType, GapType> = {
	small: '4',
	medium: '8',
	large: '16'
}

export const RatingCard: FC<RatingCardProps> = memo((props: RatingCardProps) => {
	const {
		className,
		title,
		feedbackTitle,
		onCancel,
		onAccept,
		rating,
		isLoading,
		variant = RatingVariant.MEDIUM
	} = props

	const { t } = useTranslation()
	const hasFeedback = useMemo(() => Boolean(feedbackTitle), [feedbackTitle])
	const isMobile = useDetectMobile()
	const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false)
	const [starsCount, setStarsCount] = useState<number>(rating ?? 0)
	const [feedback, setFeedback] = useState<string>('')

	useEffect(() => {
		rating !== undefined && setStarsCount(rating)
	}, [rating])

	const onSelectStars = useCallback((rating: number) => {
		setStarsCount(rating)
		if (hasFeedback) {
			setIsOpenedModal(true)
		} else {
			onAccept?.(rating)
		}
	}, [hasFeedback, onAccept])

	const onFeedbackCancel = useCallback(() => {
		onCancel?.(starsCount)
		setIsOpenedModal(false)
	}, [onCancel, starsCount])

	const onFeedbackSubmit = useCallback(() => {
		onAccept?.(starsCount, feedback)
		setIsOpenedModal(false)
	}, [onAccept, starsCount, feedback])

	const modalContent = useMemo(() => <>
		{feedbackTitle && <Text title={feedbackTitle} />}
		<AppTextArea
			placeholder={t('leave-feedback')}
			value={feedback}
			onChange={setFeedback}
		/>
	</>, [feedback, feedbackTitle, t])

	return <AppCard
		data-testid='rating-card'
	>
		<VStack
			className={className}
			gap={GapSizeMapper[variant]}
			align='center'
		>
			{variant !== RatingVariant.SMALL && title && <Text
				title={title}
				titleHue={TextColor.SECONDARY}
				size={TitleSizeMapper[variant]}
			/>}
			<StarRating
				onSelect={onSelectStars}
				size={StarSizeMapper[variant]}
				selectedStar={starsCount}
				isLoading={isLoading}
			/>
			{
				isMobile
					? <Drawer
						isOpen={isOpenedModal}
						onClose={() => setIsOpenedModal(false)}
					>
						<VStack
							className={className}
							gap='12'
						>
							{modalContent}
							<HStack
								innerWidth='full'
							>
								<AppButton
									onClick={onFeedbackSubmit}
								>
									{t('btn.submit')}
								</AppButton>
							</HStack>
						</VStack>
					</Drawer>
					: <Modal
						isOpen={isOpenedModal}
						onClose={() => setIsOpenedModal(false)}
					>
						<VStack
							className={className}
							gap='16'
						>
							{modalContent}
							<HStack
								gap='8'
								justify='end'
							>
								<AppButton
									variant={ButtonVariant.OUTLINE}
									contentHue='red-color'
									onClick={onFeedbackCancel}
									data-testid={'rating-card-cancel'}
								>
									{t('btn.cancel')}
								</AppButton>
								<AppButton
									onClick={onFeedbackSubmit}
									data-testid={'rating-card-submit'}
								>
									{t('btn.submit')}
								</AppButton>
							</HStack>
						</VStack>
					</Modal>
			}
		</VStack>
	</AppCard>
})