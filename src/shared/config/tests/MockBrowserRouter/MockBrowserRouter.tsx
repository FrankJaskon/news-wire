import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export const MockBrowserRouter = (component: ReactNode, path = '/') => {
	return <MemoryRouter initialEntries={[path]}>
		{ component }
	</MemoryRouter>
}