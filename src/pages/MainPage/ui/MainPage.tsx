import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '@/widgets/PageWrapper'
import { Rating } from '@/entities/Rating'

const MainPage: FC = memo(() => {
	const { t } = useTranslation('main')

	return <PageWrapper>
		<h1>{t('page-title')}</h1>
		{t('page-subtitle')}
		<Rating
			title='Some title like Do you like our app?'
			feedbackTitle='Leave your feedback on our goods'
			onAccept={(rating: number, feedback?: string) => {
				console.log(rating, feedback)
			}}
			onCancel={(rating: number) => {
				console.log(rating)
			}}
		/>
	</PageWrapper>
})

export default MainPage