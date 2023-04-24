import { CommentType } from '@/entities/Comment'
import { ProfileType } from '@/entities/Profile'
import { ValueOf } from '@/shared/types/types'
import {
	ArticleTopic,
	BlockType,
	ValidateArticleDetailsError,
	ViewVariant
} from '../consts/articleDetailsConsts'

export interface ArticleDetailsScheme {
	data?: ArticleType
	error?: ValidateArticleDetailsErrorType
	isLoading?: boolean
	readonly: boolean
	comments?: CommentType[]
}

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

export type ViewVariantType = ValueOf<typeof ViewVariant>

export type ArticleBlockType = TextBlockType | CodeBlockType | ImageBlockType

export interface ArticleType {
	id: number
	profile: ProfileType
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleTopicType[]
	blocks: ArticleBlockType[]
}