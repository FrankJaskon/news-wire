export {
	LazyProfilePage as ProfilePage
} from './ui/ProfilePage.lazy'

export type {
	Profile,
	ProfileScheme
} from './model/types/ProfileScheme'

export {
	profileReducer,
	profileActions
} from './model/slice/profileSlice'