import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Article } from '@/entities/Article'
import {
	EditableArticle,
	editableArticleActions,
	getEditableFormArticle,
	initEditableArticle,
	useIsLoadingArticleData,
	useIsFinishedArticleData,
	useEditableArticleMode,
	useEditableArticleIsReducerMounted,
	useEditableArticleIsEdited,
} from '@/features/EditableArticle'
import { errorMapper } from '@/features/EditableArticle/model/helpers/validateArticle'
import { useEditableArticleValidationErrors } from '@/features/EditableArticle/model/selectors/editableArticleSelector'
import { getArticleDetailsRoute, getArticlesRoute } from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './ArticleEditing.module.scss'

export interface ArticleEditingProps {
	className?: string
	ifCanEdit?: boolean
}

export const ArticleEditing: FC<ArticleEditingProps> = memo((props: ArticleEditingProps) => {
	const { className, ifCanEdit } = props
	const { id: articleId } = useParams()
	const { t } = useTranslation('article')
	const articleData = useSelector(getEditableFormArticle)
	const isLoading = useIsLoadingArticleData()
	const isFinished = useIsFinishedArticleData()
	const isPreview = useEditableArticleMode() === 'preview'
	const isReducerMounted = useEditableArticleIsReducerMounted()
	const isEdit = useEditableArticleIsEdited()
	const validationErrors = useEditableArticleValidationErrors()
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		if (isReducerMounted) {
			if (articleId) {
				dispatch(initEditableArticle(Number(articleId)))
			}
			if (!articleId) {
				dispatch(
					editableArticleActions.setArticleData({
						id: randomInteger(),
					})
				)
			}
		}
	}, isReducerMounted)

	let content = useMemo(
		() => (isPreview ? <Article article={articleData} /> : <EditableArticle />),
		[articleData, isPreview]
	)

	if (!isLoading && !ifCanEdit && isEdit) {
		content = (
			<AppText variant='error' title='Access is forbidden. You can edit only your articles' />
		)
	}

	if (isFinished) {
		if (articleData.id) {
			content = (
				<VStack gap='24'>
					<AppText
						title={
							isEdit
								? t('editable-article.edit.on-save-success')
								: t('editable-article.create.on-save-success')
						}
					/>
					<HStack max={false}>
						<AppLink
							className={cls.backBtn}
							to={getArticleDetailsRoute(articleData.id!)}
						>
							{'< ' + t('editable-article.on-save-link-to-article')}
						</AppLink>
					</HStack>
				</VStack>
			)
		} else {
			content = (
				<VStack gap='24'>
					<AppText title={t('editable-article.edit.on-remove-success')} />
					<HStack max={false}>
						<AppLink className={cls.backBtn} to={getArticlesRoute()}>
							{'< ' + t('editable-article.on-remove-link-to-articles')}
						</AppLink>
					</HStack>
				</VStack>
			)
		}
	}

	return (
		<AppCard padding='24' radius='big' className={className}>
			<VStack gap='24'>
				{validationErrors?.length !== 0 &&
					validationErrors?.map(item => (
						<AppText key={item} variant='error' text={errorMapper(item, t)} />
					))}
				{content}
			</VStack>
		</AppCard>
	)
})
