import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

type MockBrowserRouterType = (path?: string) => (component: ReactNode) => ReactNode

export const MockBrowserRouter: MockBrowserRouterType = ( path = '/') => (component: ReactNode) => {
	return <MemoryRouter initialEntries={[path]}>
		{ component }
	</MemoryRouter>
}