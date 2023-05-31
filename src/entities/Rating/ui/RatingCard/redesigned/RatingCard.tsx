import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import { AppTextArea } from '@/shared/ui/deprecated/AppTextArea'
import { Drawer } from '@/shared/ui/deprecated/Drawer/Drawer'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { StarRating } from '@/shared/ui/redesigned/StarRating/StarRating'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './RatingCard.module.scss'

export interface RatingCardProps {
	className?: string
	title?: string
	feedbackTitle?: string
	onAccept?: (rating: number, feedback?: string) => void
	onCancel?: (rating: number) => void
	rating?: number
	isLoading?: boolean
}

/**
 *This component uses deprecated components. It should be fixed
 */

export const RatingCard: FC<RatingCardProps> = memo((props: RatingCardProps) => {
	const { className, title, feedbackTitle, onCancel, onAccept, rating, isLoading } = props

	const { t } = useTranslation()
	const hasFeedback = useMemo(() => Boolean(feedbackTitle), [feedbackTitle])
	const isMobile = useDetectMobile()
	const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false)
	const [starsCount, setStarsCount] = useState<number>(rating ?? 0)
	const [feedback, setFeedback] = useState<string>('')

	useEffect(() => {
		rating !== undefined && setStarsCount(rating)
	}, [rating])

	const onSelectStars = useCallback(
		(rating: number) => {
			setStarsCount(rating)
			if (hasFeedback) {
				setIsOpenedModal(true)
			} else {
				onAccept?.(rating)
			}
		},
		[hasFeedback, onAccept]
	)

	const onFeedbackCancel = useCallback(() => {
		onCancel?.(starsCount)
		setIsOpenedModal(false)
	}, [onCancel, starsCount])

	const onFeedbackSubmit = useCallback(() => {
		onAccept?.(starsCount, feedback)
		setIsOpenedModal(false)
	}, [onAccept, starsCount, feedback])

	const modalContent = useMemo(
		() => (
			<>
				{feedbackTitle && <AppText title={feedbackTitle} />}
				<AppCard padding='0'>
					<AppTextArea
						placeholder={t('leave-feedback')}
						value={feedback}
						onChange={setFeedback}
					/>
				</AppCard>
			</>
		),
		[feedback, feedbackTitle, t]
	)

	return (
		<AppCard className={cls.wrapper} data-testid='rating-card'>
			<VStack className={className} gap='8' align='center'>
				{title && <AppText title={title} size='l' />}
				<StarRating
					onSelect={onSelectStars}
					size={32}
					selectedStar={starsCount}
					isLoading={isLoading}
				/>
				{isMobile ? (
					<Drawer isOpen={isOpenedModal} onClose={() => setIsOpenedModal(false)}>
						<VStack className={className} gap='12'>
							{modalContent}
							<HStack innerWidth='full'>
								<AppButton onClick={onFeedbackSubmit}>{t('btn.submit')}</AppButton>
							</HStack>
						</VStack>
					</Drawer>
				) : (
					<Modal isOpen={isOpenedModal} onClose={() => setIsOpenedModal(false)}>
						<VStack className={className} gap='16'>
							{modalContent}
							<HStack gap='8' justify='end'>
								<AppButton
									variant='outline'
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
				)}
			</VStack>
		</AppCard>
	)
})
