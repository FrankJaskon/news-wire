import { getUserAuthData } from '@/entities/User'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePaths } from '@/shared/const/RoutPaths'

export interface RequireAuthProps {
	children: JSX.Element
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
	const { children } = props
	const location = useLocation()
	const authData = useSelector(getUserAuthData)

	if (!authData) {
		return <Navigate
			to={RoutePaths.main}
			replace
			state={{ from: location }}
		/>
	}

	return children
}