import { render, screen } from '@testing-library/react'

import { Text } from './Text'

describe('Text', () => {
	test('Render', () => {
		render(<Text />)
		expect(screen.getByTestId('Text')).toBeInTheDocument()
	})
	test('Title and content should be render', () => {
		render(<Text title='Test' content='test test' />)
		expect(screen.getByTestId('Text.title')).toHaveTextContent('Test')
		expect(screen.getByTestId('Text.content')).toHaveTextContent('test test')
	})
	test('Only title should be render', () => {
		render(<Text title='Test' />)
		expect(screen.getByText('Test')).toBeInTheDocument()
		expect(screen.queryByTestId('Text.content')).not.toBeInTheDocument()
	})
	test('Only content should be render', () => {
		render(<Text content='Test' />)
		expect(screen.getByText('Test')).toBeInTheDocument()
		expect(screen.queryByTestId('Text.title')).not.toBeInTheDocument()
	})
})
