import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useUserAuthData } from '@/entities/User'
import { getMainRoute } from '@/shared/const/RoutPaths'

export interface RequireAuthProps {
	children: JSX.Element
}

export const RequireAuth: FC<RequireAuthProps> = props => {
	const { children } = props
	const location = useLocation()
	const authData = useUserAuthData()

	if (!authData) {
		return <Navigate to={getMainRoute()} replace state={{ from: location }} />
	}

	return children
}
