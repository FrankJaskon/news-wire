import { render } from '@testing-library/react'
import { ReactNode } from 'react'

export type MockFunction = (mock: ReactNode) => ReactNode

export const RenderWithMocks = (component: ReactNode, mocks: MockFunction[]): ReactNode => {
	const reversedMocks = mocks.slice().reverse()

	const componentWithMocks = reversedMocks.reduce((previousMockResult, mockFunction) => {
		return mockFunction(previousMockResult)
	}, component)
	return render(
		<>
			{componentWithMocks}
		</>
	)
}