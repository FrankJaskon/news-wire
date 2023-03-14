import { ValueOf } from 'shared/config/types/types'

export interface ArticleDetailsScheme {
	data?: ArticleType
	error?: ValidateArticleDetailsErrorType
	isLoading?: boolean
	readonly: boolean
}

export const ValidateArticleDetailsError = {
	SERVER_ERROR: 'SERVER_ERROR',
	NO_DATA: 'NO_DATA'
} as const

export const ArticleTopic = {
	IT: 'IT',
	SCIENCE: 'SCIENCE',
	ECONOMIC: 'ECONOMIC'
} as const

export const BlockType = {
	TEXT: 'TEXT',
	CODE: 'CODE',
	IMAGE: 'IMAGE'
} as const

export type ArticleTopicType = ValueOf<typeof ArticleTopic>
export type BlockTypeType = ValueOf<typeof BlockType>
export type ValidateArticleDetailsErrorType = ValueOf<typeof ValidateArticleDetailsError>

export interface Block {
	id: number
	type: BlockTypeType
}

export interface TextBlockType extends Block {
	type: typeof BlockType.TEXT
	title: string
	paragraphs: string[]
}

export interface CodeBlockType extends Block {
	type: typeof BlockType.CODE
	code: string
}

export interface ImageBlockType extends Block {
	type: typeof BlockType.IMAGE
	src: string
	title: string
}

export type ArticleBlockType = TextBlockType | CodeBlockType | ImageBlockType

export interface ArticleType {
	id: number
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleTopicType[]
	blocks: ArticleBlockType[]
}