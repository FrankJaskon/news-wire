import { UserRoleType, getUserRoles } from '@/entities/User'
import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePaths } from '@/shared/const/RoutPaths'

export interface RequireRolesProps {
	children: JSX.Element
	roles: UserRoleType[]
}

export const RequireRoles: FC<RequireRolesProps> = (props) => {
	const {
		children,
		roles
	} = props
	const location = useLocation()
	const userRoles = useSelector(getUserRoles)

	const isRouteAvailable = useMemo((): boolean => {
		if (!roles) return true
		if (!userRoles) return false

		return roles.some(requiredRole => userRoles.includes(requiredRole))
	}, [roles, userRoles])

	if (!isRouteAvailable) {
		return <Navigate
			to={RoutePaths.forbidden}
			replace
			state={{ from: location }}
		/>
	}

	return children
}