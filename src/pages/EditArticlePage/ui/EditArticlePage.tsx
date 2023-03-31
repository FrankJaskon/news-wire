import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text'
import { PageWrapper } from 'widgets/PageWrapper'

const EditArticlePage: FC = memo(() => {
	const { t } = useTranslation('article')
	const { id } = useParams()
	const isEdit = Boolean(id)

	return <PageWrapper>
		{
			isEdit
				? <Text
					title={t('edit-title')}
				/>
				: <Text
					title={t('create-title')}
				/>
		}
	</PageWrapper>
})

export default EditArticlePage