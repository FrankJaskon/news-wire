import { render, screen } from '@testing-library/react'

import { Text } from './Text'

describe('Text', () => {
	test('Render', () => {
		render(<Text />)
		expect(screen.getByTestId('text-block')).toBeInTheDocument()
	})
	test('Title and content should be render', () => {
		render(<Text title='Test' content='test test' />)
		expect(screen.getByTestId('text-title')).toHaveTextContent('Test')
		expect(screen.getByTestId('text-content')).toHaveTextContent('test test')
	})
	test('Only title should be render', () => {
		render(<Text title='Test' />)
		expect(screen.getByText('Test')).toBeInTheDocument()
		expect(screen.queryByTestId('text-content')).not.toBeInTheDocument()
	})
	test('Only content should be render', () => {
		render(<Text content='Test' />)
		expect(screen.getByText('Test')).toBeInTheDocument()
		expect(screen.queryByTestId('text-title')).not.toBeInTheDocument()
	})
})