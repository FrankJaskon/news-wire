import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { ProfileType } from '@/entities/Profile'
import { ValueOf } from '@/shared/types/types'
import { BlockType, ValidateArticleDetailsError, ViewVariant } from '../consts/articleDetailsConsts'

export type BlockTypeType = ValueOf<typeof BlockType>
export type ValidateArticleDetailsErrorType = ValueOf<typeof ValidateArticleDetailsError>

export interface Block {
	id: number
}

export interface TextBlockType extends Block {
	type?: typeof BlockType.TEXT
	title: string
	paragraphs: string[]
}

export interface CodeBlockType extends Block {
	type?: typeof BlockType.CODE
	code: string
}

export interface ImageBlockType extends Block {
	type?: typeof BlockType.IMAGE
	src?: string
	title?: string
}

export interface EditableParagraph {
	id: number
	value?: string
}

export interface EditableTextBlockType extends Block {
	type?: typeof BlockType.TEXT
	title?: string
	hasTitle?: boolean
	paragraphs?: EditableParagraph[]
}

export interface EditableImageBlockType extends Block {
	type?: typeof BlockType.IMAGE
	src?: string
	title?: string
	hasTitle?: boolean
}

export type ViewVariantType = ValueOf<typeof ViewVariant>

export type ArticleBlockType = TextBlockType | CodeBlockType | ImageBlockType
export type EditableArticleBlockType =
	| EditableTextBlockType
	| CodeBlockType
	| EditableImageBlockType

export interface ArticleType {
	id?: number
	profile?: ProfileType
	title?: string
	subtitle?: string
	img?: string
	views?: number
	createdAt?: string
	type?: ArticleCategoriesType[]
	blocks?: ArticleBlockType[]
}
