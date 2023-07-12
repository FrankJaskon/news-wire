import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	BlockType,
	CodeBlockType,
	EditableTextBlockType,
	EditableImageBlockType,
	VideoBlockType,
} from '@/entities/Article'
import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { ValidationErrorType } from '../consts/validationError'
import { mapArticleToEditableArticle } from '../helpers/mapArticleToEditableArticle'
import { createNewArticle } from '../services/createNewArticle'
import { initEditableArticle } from '../services/initEditableArticle'
import { removeArticle } from '../services/removeArticle'
import { updateArticle } from '../services/updateArticle'
import {
	EditableArticleScheme,
	EditableArticleType,
	InsertDirectionType,
	ViewMode,
} from '../types/editableArticleScheme'
import {
	addNewBlock,
	moveBlock,
	removeParagraph,
	setParagraph,
	setTypeToArticle,
} from './reducerFunctions'

import type { SetTextBlockParagraphProps } from './reducerFunctions'

const initialState: EditableArticleScheme = {
	error: undefined,
	isLoading: false,
	mode: 'edit',
	data: {},
	form: {
		id: undefined,
		title: undefined,
		subtitle: undefined,
		createdAt: undefined,
		img: undefined,
		type: undefined,
		views: undefined,
		blocks: [],
		isSubtitle: false,
		isImg: false,
	},
	isReducerMounted: true,
	isEdit: false,
}

const editableArticleSlice = createSlice({
	name: 'editableArticleSlice',
	initialState,
	reducers: {
		setMode: (state, action: PayloadAction<ViewMode>) => {
			state.mode = action.payload
		},
		setValidationErrors: (state, action: PayloadAction<ValidationErrorType[]>) => {
			state.validationErrors = action.payload
		},
		setArticleData: (state, action: PayloadAction<EditableArticleType>) => {
			state.form = {
				...state.form,
				...action.payload,
			}
		},
		resetChanges: state => {
			state.validationErrors = []
			if (state.data.id) {
				state.form = mapArticleToEditableArticle(state.data)
			}
			if (!state.data.id) {
				state.form = { ...initialState.form, id: state.form.id }
			}
		},
		setArticleType: (state, action: PayloadAction<ArticleCategoriesType>) => {
			setTypeToArticle(state, action)
		},
		removeBlock: (state, action: PayloadAction<number | undefined>) => {
			if (!action.payload) return
			state.form.blocks = state.form.blocks!.filter(block => block.id !== action.payload)
		},
		moveEditableBlock: (
			state,
			action: PayloadAction<{ to: InsertDirectionType; id?: number }>
		) => {
			if (!action.payload) return
			moveBlock(state, action)
		},
		addNewTextBlock: (
			state,
			action: PayloadAction<{ to: InsertDirectionType; id?: number }>
		) => {
			const newTextBlock = {
				id: randomInteger(),
				type: BlockType.TEXT,
				paragraphs: [
					{
						id: randomInteger(),
					},
				],
			}
			addNewBlock(state, action, newTextBlock)
		},
		setTextBlock: (state, action: PayloadAction<EditableTextBlockType>) => {
			state.form.blocks = state.form.blocks!.map(block => {
				if (block.id === action.payload.id && block.type === BlockType.TEXT) {
					return {
						...block,
						...action.payload,
					}
				}
				return block
			})
		},
		setTextBlockParagraph: (state, action: PayloadAction<SetTextBlockParagraphProps>) => {
			setParagraph(state, action)
		},
		removeTextBlockParagraph: (state, action: PayloadAction<SetTextBlockParagraphProps>) => {
			removeParagraph(state, action)
		},
		addNewVideoBlock: (
			state,
			action: PayloadAction<{ to: InsertDirectionType; id?: number }>
		) => {
			const newCodeBlock = {
				id: randomInteger(),
				type: BlockType.VIDEO,
				src: '',
			}
			addNewBlock(state, action, newCodeBlock)
		},
		addNewCodeBlock: (
			state,
			action: PayloadAction<{ to: InsertDirectionType; id?: number }>
		) => {
			const newCodeBlock = {
				id: randomInteger(),
				type: BlockType.CODE,
				code: '',
			}
			addNewBlock(state, action, newCodeBlock)
		},
		setCodeBlock: (state, action: PayloadAction<CodeBlockType>) => {
			state.form.blocks = state.form.blocks!.map(block => {
				if (block.id === action.payload.id && block.type === BlockType.CODE) {
					return {
						...block,
						...action.payload,
					}
				}
				return block
			})
		},
		setVideoBlock: (state, action: PayloadAction<VideoBlockType>) => {
			state.form.blocks = state.form.blocks!.map(block => {
				if (block.id === action.payload.id && block.type === BlockType.VIDEO) {
					return {
						...block,
						...action.payload,
					}
				}
				return block
			})
		},
		addNewImageBlock: (
			state,
			action: PayloadAction<{ to: InsertDirectionType; id?: number }>
		) => {
			const newImageBlock = {
				id: randomInteger(),
				type: BlockType.IMAGE,
				src: '',
				title: '',
			}
			addNewBlock(state, action, newImageBlock)
		},
		setImageBlock: (state, action: PayloadAction<EditableImageBlockType>) => {
			state.form.blocks = state.form.blocks!.map(block => {
				if (block.id === action.payload.id && block.type === BlockType.IMAGE) {
					return {
						...block,
						...action.payload,
					}
				}
				return block
			})
		},
	},
	extraReducers: builder => {
		// initEditableArticle
		builder.addCase(initEditableArticle.pending, state => {
			state.error = undefined
			state.isLoading = true
			state.isEdit = true
		})
		builder.addCase(initEditableArticle.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload.data
			state.form = payload.form
		})
		builder.addCase(initEditableArticle.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
		// createNewArticle
		builder.addCase(createNewArticle.pending, state => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(createNewArticle.fulfilled, state => {
			state.isLoading = false
			state.isFinished = true
		})
		builder.addCase(createNewArticle.rejected, (state, action) => {
			state.isLoading = false
			state.isFinished = true
			state.error = action.payload
		})
		// updateArticle
		builder.addCase(updateArticle.pending, state => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(updateArticle.fulfilled, state => {
			state.isLoading = false
			state.isFinished = true
		})
		builder.addCase(updateArticle.rejected, (state, action) => {
			state.isLoading = false
			state.isFinished = true
			state.error = action.payload
		})
		// removeArticle
		builder.addCase(removeArticle.pending, state => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(removeArticle.fulfilled, state => {
			state.isLoading = false
			state.isFinished = true
			state.form = {}
			state.data = {}
		})
		builder.addCase(removeArticle.rejected, (state, action) => {
			state.isLoading = false
			state.isFinished = true
			state.error = action.payload
		})
	},
})

export const { actions: editableArticleActions } = editableArticleSlice
export const { reducer: editableArticleReducer } = editableArticleSlice
