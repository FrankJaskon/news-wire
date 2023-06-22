import { FC, ReactNode, memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentsList } from '@/entities/Comment'
import { toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { useAuthorArticleList } from '../api/authorCommentsListApi'

export interface AuthorCommentsListProps {
	id?: number
}

export const AuthorCommentsList: FC<AuthorCommentsListProps> = memo(
	(props: AuthorCommentsListProps) => {
		const { id } = props
		const { t } = useTranslation()
		const {
			isLoading,
			isError,
			data: comments,
			refetch,
		} = useAuthorArticleList({
			authorId: id,
		})

		useEffect(() => {
			refetch()
		}, [refetch])

		let content: ReactNode = useMemo(() => {
			return <CommentsList comments={comments} isLoading={isLoading} variant='article' />
		}, [comments, isLoading])

		if (isError) {
			content = toggleFeatures({
				name: 'isAppRedesigned',
				on: () => <AppText text={t('error.common.some-error')} variant='error' />,
				off: () => (
					<Text
						content={t('error.common.some-error')}
						size={TextSize.L}
						variant={TextVariant.ERROR}
					/>
				),
			})
		}

		return <>{content}</>
	}
)
