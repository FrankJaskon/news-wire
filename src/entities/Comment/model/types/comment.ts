import { User } from 'entities/User'

export interface CommentType {
	id: number
	text: string
	profile: User
}