import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
	className?: string
	readonly?: boolean
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
	const {
		className,
		readonly,
	} = props

	const { t } = useTranslation('profile')

	return <HStack
		justify='between'
	>
		<Text title={t('card.header.title')} />
	</HStack>
}