import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsUserAuthorized } from '@/entities/User'
import { LatestArticlesList } from '@/features/LatestArticlesList'
import { TextColor } from '@/shared/const/consts'
import { Text, TextWeight } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { PageWrapper } from '@/widgets/PageWrapper'

const MainPage: FC = memo(() => {
	const { t } = useTranslation('main')
	const isAuthorized = useIsUserAuthorized()

	return (
		<PageWrapper data-testid='main-page'>
			<VStack gap='16'>
				<Text
					title={t('page-title')}
					titleHue={TextColor.SECONDARY}
					weight={TextWeight.BOLD}
				/>
				{isAuthorized && <LatestArticlesList />}
			</VStack>
		</PageWrapper>
	)
})

export default MainPage
