export { EditableArticle } from './ui/EditableArticle/EditableArticle'

export type { EditableArticleScheme } from './model/types/editableArticleScheme'

export { editableArticleActions, editableArticleReducer } from './model/slice/editableArticleSlice'

export {
	useEditableArticleData,
	getEditableArticleData,
	useEditableArticleForm,
	getEditableArticleForm,
	getEditableFormArticle,
	getIfCanEdit,
	useIsLoadingArticleData,
	getIsLoadingArticleData,
} from './model/selectors/editableArticleSelector'

export { initEditableArticle } from './model/services/initEditableArticle'
