import { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

type MockBrowserRouterType = (path?: string) => (component: ReactElement) => ReactElement

export const MockBrowserRouter: MockBrowserRouterType =
	(path = '/') =>
	(component: ReactNode) => {
		return <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>
	}
