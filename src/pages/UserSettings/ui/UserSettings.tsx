import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { UiDesignToggler } from '@/features/UiDesignToggler'
import { TextColor } from '@/shared/const/consts'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text, TextWeight } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { PageWrapper } from '@/widgets/PageWrapper'

export const UserSettings: FC = memo(() => {
	const { t } = useTranslation()
	return (
		<PageWrapper data-testid='user-settings-page'>
			<VStack gap='16'>
				<ToggleFeatures
					feature='isAppRedesigned'
					on={<AppText title={t('user-settings-title')} size='l' weight='bold' />}
					off={
						<Text
							title={t('user-settings-title')}
							titleHue={TextColor.SECONDARY}
							weight={TextWeight.BOLD}
						/>
					}
				/>
				<UiDesignToggler />
			</VStack>
		</PageWrapper>
	)
})
