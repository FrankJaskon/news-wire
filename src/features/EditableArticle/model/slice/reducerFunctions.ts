import { PayloadAction } from '@reduxjs/toolkit'
import { BlockType, EditableArticleBlockType } from '@/entities/Article'
import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { EditableArticleScheme, InsertDirectionType } from '../types/editableArticleScheme'

type AddNewBlockType = (
	state: EditableArticleScheme,
	action: PayloadAction<{ to: InsertDirectionType; id?: number }>,
	newBlock: EditableArticleBlockType
) => void

export const addNewBlock: AddNewBlockType = (state, action, newBlock) => {
	if (!action.payload.id) {
		if (action.payload.to === 'start') {
			state.form.blocks = [newBlock, ...state.form.blocks!]
			return
		}
		if (action.payload.to === 'end') {
			state.form.blocks = [...state.form.blocks!, newBlock]
			return
		}
	}
	if (action.payload.id) {
		const targetIndex = state.form.blocks!.findIndex(item => item.id === action.payload.id)
		if (targetIndex === -1) return
		const newArr = state.form.blocks ? [...state.form.blocks] : []
		if (action.payload.to === 'start') {
			newArr.splice(targetIndex, 0, newBlock)
			state.form.blocks = newArr
			return
		}
		if (action.payload.to === 'end') {
			newArr.splice(targetIndex + 1, 0, newBlock)
			state.form.blocks = newArr
		}
	}
}

export interface SetTextBlockParagraphProps {
	blockId: number
	paragraphId: number
	value?: string
}

type ParagraphType = (
	state: EditableArticleScheme,
	action: PayloadAction<SetTextBlockParagraphProps>
) => void

export const setParagraph: ParagraphType = (state, action) => {
	let isExisted = false
	const newFormBlocks = state.form.blocks!.map(block => {
		if (block.id === action.payload.blockId && block.type === BlockType.TEXT) {
			const newParagraphs = block.paragraphs!.map(paragraph => {
				if (paragraph.id === action.payload.paragraphId) {
					isExisted = true
					return {
						...paragraph,
						value: action.payload.value,
					}
				}
				return paragraph
			})
			return {
				...block,
				paragraphs: isExisted
					? newParagraphs
					: [
							...newParagraphs,
							{ id: action.payload.paragraphId, value: action.payload.value },
					  ],
			}
		}
		return block
	})
	state.form.blocks = newFormBlocks
}

export const removeParagraph: ParagraphType = (state, action) => {
	const newFormBlocks = state.form.blocks!.map(block => {
		if (block.id === action.payload.blockId && block.type === BlockType.TEXT) {
			const newParagraphs = block.paragraphs!.filter(
				paragraph => paragraph.id !== action.payload.paragraphId
			)
			return {
				...block,
				paragraphs: newParagraphs,
			}
		}
		return block
	})
	state.form.blocks = newFormBlocks
}

type SetTypeToArticleType = (
	state: EditableArticleScheme,
	action: PayloadAction<ArticleCategoriesType>
) => void

export const setTypeToArticle: SetTypeToArticleType = (state, action) => {
	if (!state.form.type) {
		state.form.type = []
	}
	const isAlreadyActive = state.form.type.includes(action.payload)
	if (isAlreadyActive) {
		state.form.type = state.form.type.filter(type => type !== action.payload)
	} else {
		state.form.type = [...state.form.type, action.payload]
	}
}

type MoveBlockType = (
	state: EditableArticleScheme,
	action: PayloadAction<{ to: InsertDirectionType; id?: number }>
) => void

export const moveBlock: MoveBlockType = (state, action) => {
	if (!action.payload.id) return

	const targetIndex = state.form.blocks!.findIndex(item => item.id === action.payload.id)

	if (targetIndex === -1) return

	const newArr = [...state.form.blocks!]
	const [currentBlock] = newArr.splice(targetIndex, 1)
	if (action.payload.to === 'start') {
		if (targetIndex === 0) return

		newArr.splice(targetIndex - 1, 0, currentBlock)
		state.form.blocks = newArr
		return
	}
	if (action.payload.to === 'end') {
		if (targetIndex + 1 === state.form.blocks?.length) return

		newArr.splice(targetIndex + 1, 0, currentBlock)
		state.form.blocks = newArr
	}
}
