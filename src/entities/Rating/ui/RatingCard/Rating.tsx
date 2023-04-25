import { TextColor } from '@/shared/const/consts'
import { useDetectMobile } from '@/shared/hooks/useDetectMobile/useDetectMobile'
import { AppButton, ButtonVariant } from '@/shared/ui/AppButton'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { AppTextArea } from '@/shared/ui/Form/AppTextArea'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Text } from '@/shared/ui/Text'
import { FC, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface RatingProps {
	className?: string
	title?: string
	feedbackTitle?: string
	onAccept?: (rating: number, feedback?: string) => void
	onCancel?: (rating: number) => void
}

export const Rating: FC<RatingProps> = (props) => {
	const {
		className,
		title,
		feedbackTitle,
		onCancel,
		onAccept
	} = props

	const { t } = useTranslation()
	const hasFeedback = useMemo(() => Boolean(feedbackTitle), [feedbackTitle])
	const isMobile = useDetectMobile()
	const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false)
	const [rating, setRating] = useState<number>(0)
	const [feedback, setFeedback] = useState<string>('')

	const onSelectStars = useCallback((rating: number) => {
		setRating(rating)
		if (hasFeedback) {
			setIsOpenedModal(true)
		} else {
			onAccept?.(rating)
		}
	}, [hasFeedback, onAccept])

	const onFeedbackCancel = useCallback(() => {
		onCancel?.(rating)
		setIsOpenedModal(false)
	}, [onCancel, rating])

	const onFeedbackSubmit = useCallback(() => {
		onAccept?.(rating, feedback)
		setIsOpenedModal(false)
	}, [onAccept, rating, feedback])

	const modalContent = useMemo(() => <>
		{feedbackTitle && <Text title={feedbackTitle} />}
		<AppTextArea
			placeholder={t('leave-feedback')}
			value={feedback}
			onChange={setFeedback}
		/>
	</>, [feedback, feedbackTitle, t])

	return <VStack
		className={className}
		gap='16'
	>
		{title && <Text
			title={title}
			titleHue={TextColor.SECONDARY}
		/>}
		<StarRating
			onSelect={onSelectStars}
			size={40}
			selectedStar={rating}
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
							>
								{t('btn.cancel')}
							</AppButton>
							<AppButton
								onClick={onFeedbackSubmit}
							>
								{t('btn.submit')}
							</AppButton>
						</HStack>
					</VStack>
				</Modal>
		}
	</VStack>
}