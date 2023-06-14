import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleBlockType, ArticleType, BlockType } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import { buildSelector } from '@/shared/lib/store'
import { EditableArticleType } from '../types/editableArticleScheme'

export const [useEditableArticleForm, getEditableArticleForm] = buildSelector(
	(state: StateSchema) => state.editableArticle?.form ?? ({} as EditableArticleType)
)

export const [useEditableArticleIsReducerMounted, getEditableArticleIsReducerMounted] =
	buildSelector((state: StateSchema) => state.editableArticle?.isReducerMounted)

export const [useEditableArticleIsEdited, getEditableArticleIsEdited] = buildSelector(
	(state: StateSchema) => state.editableArticle?.isEdit
)

export const [useEditableArticleMode, getEditableArticleMode] = buildSelector(
	(state: StateSchema) => state.editableArticle?.mode
)

export const [useEditableArticleData, getEditableArticleData] = buildSelector(
	(state: StateSchema) => state.editableArticle?.data ?? ({} as ArticleType)
)

export const [useIsLoadingArticleData, getIsLoadingArticleData] = buildSelector(
	(state: StateSchema) => state.editableArticle?.isLoading ?? true
)

export const [useIsFinishedArticleData, getIsFinishedArticleData] = buildSelector(
	(state: StateSchema) => state.editableArticle?.isFinished ?? false
)

export const getEditableFormArticle = createSelector(
	(state: StateSchema) => state.editableArticle?.form,
	form => {
		if (!form || !form.id) return {}
		const newEditableFormArticle: ArticleType = {
			id: form!.id,
			img: form?.img,
			views: form?.views,
			createdAt: form?.createdAt,
			title: form?.title,
			subtitle: form?.subtitle,
			type: form?.type,
			blocks: form?.blocks?.map(block => {
				if (block.type === BlockType.TEXT) {
					return {
						id: block.id,
						type: block.type,
						title: block.title,
						paragraphs: block.paragraphs?.map(paragraph => paragraph.value),
					}
				}
				if (block.type === BlockType.IMAGE) {
					return {
						id: block.id,
						type: block.type,
						title: block.title,
						src: block.src,
					}
				}
				return block
			}) as ArticleBlockType[],
		}
		return newEditableFormArticle
	}
)

export const getIfCanEdit = createSelector(
	getEditableArticleIsEdited,
	getUserAuthData,
	(state: StateSchema) => state.editableArticle?.data,
	(isEdit, authData, articleData) =>
		Boolean(
			(isEdit !== undefined && !isEdit) ||
				(authData?.id &&
					articleData?.profile?.id &&
					authData?.id === articleData?.profile.id)
		)
)
