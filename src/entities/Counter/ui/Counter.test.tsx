import { render, fireEvent, RenderResult } from '@testing-library/react'
import { StateSchema } from 'app/providers/StoreProvider'
import { Counter } from './Counter'
import { DeepPartial } from '@reduxjs/toolkit'
import { MockStore } from 'shared/config/tests/MockStore/MockStore'

describe('Counter component', () => {
	let component: RenderResult
	beforeEach(() => {
		const initialState: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		component = render(MockStore(<Counter/>, initialState))
	})

	it('should render the counter value', () => {
		expect(component.getByTestId('counter-title')).toBeInTheDocument()
	})

	it('should increment the counter value when the increment button is clicked', () => {
		fireEvent.click(component.getByTestId('increment-btn'))
		expect(component.getByText('+: 11')).toBeInTheDocument()
	})

	it('should decrement the counter value when the decrement button is clicked', () => {
		fireEvent.click(component.getByTestId('decrement-btn'))
		expect(component.getByText('+: 9')).toBeInTheDocument()
	})

	it('should increment the counter value by 5 when the increment by 5 button is clicked', () => {
		fireEvent.click(component.getByTestId('increment-by-btn'))
		expect(component.getByText('+: 15')).toBeInTheDocument()
	})
})