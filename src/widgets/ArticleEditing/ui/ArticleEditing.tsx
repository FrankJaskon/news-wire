import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Article } from '@/entities/Article'
import {
	EditableArticle,
	editableArticleActions,
	editableArticleReducer,
	getEditableFormArticle,
	getIfCanEdit,
	initEditableArticle,
	useIsLoadingArticleData,
} from '@/features/EditableArticle'
import { useIsFinishedArticleData } from '@/features/EditableArticle/model/selectors/editableArticleSelector'
import { getArticleDetailsRoute, getArticlesRoute } from '@/shared/const/RoutPaths'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import classNames from '@/shared/lib/classNames/classNames'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { AppLink, AppLinkVariant } from '@/shared/ui/deprecated/AppLink/AppLink'
import { Text, TextVariant } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './ArticleEditing.module.scss'

export interface ArticleEditingProps {
	className?: string
	articleId?: number
}

const reducers: ReducerList = {
	editableArticle: editableArticleReducer,
}

export const ArticleEditing: FC<ArticleEditingProps> = memo((props: ArticleEditingProps) => {
	const { className, articleId } = props
	const { t } = useTranslation('article')
	const articleData = useSelector(getEditableFormArticle)
	const ifCanEdit = useSelector(getIfCanEdit)
	const isLoading = useIsLoadingArticleData()
	const isFinished = useIsFinishedArticleData()
	const dispatch = useAppDispatch()
	const editMode = useMemo(() => Boolean(articleId), [articleId])

	useInitialEffect(() => {
		if (articleId) {
			dispatch(initEditableArticle(articleId))
		}
		if (!articleId) {
			dispatch(
				editableArticleActions.setArticleData({
					id: randomInteger(),
				})
			)
		}
	})

	let content = (
		<HStack className={classNames(cls.EditableArticle, {}, [className])} gap='32'>
			<VStack gap='8' align='start' className={cls.editor} max={false}>
				<Text title={t('editable-article.places.workplace')} />
				<EditableArticle editMode={editMode} />
			</VStack>
			<VStack gap='8' align='start' className={cls.preview} max={false}>
				<Text title={t('editable-article.places.preview')} />
				<Article article={articleData} />
			</VStack>
		</HStack>
	)

	if (!isLoading && !ifCanEdit && editMode) {
		content = (
			<Text
				variant={TextVariant.ERROR}
				title='Access is forbidden. You can edit only your articles'
			/>
		)
	}

	if (isFinished) {
		if (articleData.id) {
			content = (
				<VStack gap='8'>
					<Text
						title={
							editMode
								? t('editable-article.edit.on-save-success')
								: t('editable-article.create.on-save-success')
						}
					/>
					<HStack max={false}>
						<AppLink
							variant={AppLinkVariant.PRIMARY_BUTTON}
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
				<VStack gap='8'>
					<Text title={t('editable-article.edit.on-remove-success')} />
					<HStack max={false}>
						<AppLink
							variant={AppLinkVariant.PRIMARY_BUTTON}
							className={cls.backBtn}
							to={getArticlesRoute()}
						>
							{'< ' + t('editable-article.on-remove-link-to-articles')}
						</AppLink>
					</HStack>
				</VStack>
			)
		}
	}

	return <LazyReducerLoader reducers={reducers}>{content}</LazyReducerLoader>
})
