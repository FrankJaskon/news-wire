import { RenderResult, render } from '@testing-library/react'
import { ReactElement } from 'react'

export type MockFunction = (mock: ReactElement) => ReactElement;

export const RenderWithMocks = (
	component: ReactElement,
	mocks: MockFunction[] = [],
	isRender = true
): RenderResult | ReactElement => {
	const reversedMocks = [...mocks].reverse()

	const componentWithMocks = reversedMocks.reduce(
		(previousMockResult, mockFunction) => {
			return mockFunction(previousMockResult)
		},
		component
	)

	if (isRender) {
		return render(componentWithMocks)
	}
	return componentWithMocks
}