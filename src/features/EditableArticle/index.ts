export { EditableArticle } from './ui/EditableArticle/EditableArticle'

export { OptionIcon } from './ui/EditableArticleOptions/OptionIcon/OptionIcon'

export type {
	EditableArticleScheme,
	ViewMode,
	InsertDirectionType,
} from './model/types/editableArticleScheme'

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
	useIsFinishedArticleData,
	useEditableArticleIsEdited,
	useEditableArticleMode,
	useEditableArticleIsReducerMounted,
} from './model/selectors/editableArticleSelector'

export { initEditableArticle } from './model/services/initEditableArticle'

export { updateArticle } from './model/services/updateArticle'
export { createNewArticle } from './model/services/createNewArticle'
export { removeArticle } from './model/services/removeArticle'
