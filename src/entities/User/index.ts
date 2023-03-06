export {
	userActions,
	userReducer
} from './model/slice/userSlice'

export {
	getUserAuthData
} from './model/selectors/getUserAuthData/getUserAuthData'

export {
	getIsAuth
} from './model/selectors/getIsAuth/getIsAuth'

export type {
	User,
	UserScheme
} from './model/types/UserScheme'