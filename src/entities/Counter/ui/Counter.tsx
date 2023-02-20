import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppButton } from 'shared/ui/AppButton'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/CounterSlice'

export const Counter: FC = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const handleIncrement = () => {
		dispatch(counterActions.increment())
	}

	const handleDecrement = () => {
		dispatch(counterActions.decrement())
	}

	const handleIncrementByAmount = () => {
		dispatch(counterActions.incrementByAmount(5))
	}
	return <div>
		<h1 data-testid={'counter-title'}>+: {counterValue}</h1>
		<AppButton
			data-testid='increment-btn'
			onClick={handleIncrement}>+</AppButton>
		<AppButton
			data-testid='decrement-btn'
			onClick={handleDecrement}>-</AppButton>
		<AppButton
			data-testid='increment-by-btn'
			onClick={handleIncrementByAmount}>+5</AppButton>
	</div>
}