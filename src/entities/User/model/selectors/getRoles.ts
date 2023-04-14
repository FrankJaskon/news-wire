import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { UserRole } from '../types/UserScheme'

export const getUserRoles = (state: StateSchema) => state?.user?.authData?.roles

export const getIsUserAdmin = createSelector(getUserRoles, roles => Boolean(roles?.includes('ADMIN')))
export const getIsUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.MANAGER)))