import { ArticleType } from '@/entities/Article'
import { User } from '@/entities/User'

export interface RatingType {
	id: number
	rating: number
	feedback: string
	article?: ArticleType
	user?: User
}
