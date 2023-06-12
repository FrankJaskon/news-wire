import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Article } from '@/entities/Article'
import {
	EditableArticle,
	editableArticleActions,
	getEditableFormArticle,
	getIfCanEdit,
	initEditableArticle,
	useIsLoadingArticleData,
	useIsFinishedArticleData,
	useEditableArticleIsEdited,
	useEditableArticleIsReducerMounted,
} from '@/features/EditableArticle'
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
}

export const ArticleEditing: FC<ArticleEditingProps> = memo((props: ArticleEditingProps) => {
	const { className } = props
	const { id: articleId } = useParams()
	const { t } = useTranslation('article')
	const articleData = useSelector(getEditableFormArticle)
	const ifCanEdit = useSelector(getIfCanEdit)
	const isLoading = useIsLoadingArticleData()
	const isFinished = useIsFinishedArticleData()
	const isEditMode = useEditableArticleIsEdited()
	const isReducerMounted = useEditableArticleIsReducerMounted()
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

	let content = isEditMode ? (
		<EditableArticle editMode={isEditMode} />
	) : (
		<Article article={articleData} />
	)

	if (!isLoading && !ifCanEdit && isEditMode) {
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
							isEditMode
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
			{content}
		</AppCard>
	)
})
