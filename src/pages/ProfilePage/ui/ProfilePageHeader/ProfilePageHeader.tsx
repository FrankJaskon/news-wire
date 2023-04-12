import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { HStack } from 'shared/ui/Stack'

export const ProfilePageHeader: FC = memo(() => {
	const { t } = useTranslation('profile')

	return <HStack
		justify='between'
	>
		<Text title={t('card.header.title')} />
	</HStack>
})