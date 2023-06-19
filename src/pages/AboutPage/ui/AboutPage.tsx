import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import MyAvatar from '@/shared/assets/me.png'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { PageWrapper } from '@/widgets/PageWrapper'
import cls from './AboutPage.module.scss'

const AboutPage: FC = memo(() => {
	const { t } = useTranslation('about')
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={
				<PageWrapper data-testid='about-page'>
					<AppCard padding='24'>
						<AppText
							title={t('main-title')}
							size='xl'
							weight='bold'
							className={cls.mb24}
						/>
						<Avatar src={MyAvatar} size={150} className={cls.avatar} />
						<AppText text={t('paragraphs.first')} className={cls.mb24} />
						<AppText text={t('paragraphs.second')} className={cls.mb24} />
						<AppText text={t('paragraphs.third')} />
					</AppCard>
				</PageWrapper>
			}
			off={
				<PageWrapper data-testid='about-page'>
					<h1>{t('page-title')}</h1>
					{t('page-subtitle')}
				</PageWrapper>
			}
		/>
	)
})

export default AboutPage
