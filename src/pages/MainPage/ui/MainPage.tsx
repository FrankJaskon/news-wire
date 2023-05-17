import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LatestArticlesList } from '@/features/LatestArticlesList'
import { TextColor } from '@/shared/const/consts'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextWeight } from '@/shared/ui/Text'
import { PageWrapper } from '@/widgets/PageWrapper'

const MainPage: FC = memo(() => {
	const { t } = useTranslation('main')

	return (
		<PageWrapper data-testid='main-page'>
			<VStack gap='16'>
				<Text
					title={t('page-title')}
					titleHue={TextColor.SECONDARY}
					weight={TextWeight.BOLD}
				/>
				<LatestArticlesList />
			</VStack>
		</PageWrapper>
	)
})

export default MainPage
