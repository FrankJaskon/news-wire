import { ArticleType } from '@/entities/Article'
import { User } from '@/entities/User'

export interface CommentType {
	id: number
	text: string
	profile?: User
	article?: ArticleType
}
