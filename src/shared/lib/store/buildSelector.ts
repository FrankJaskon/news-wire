import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'

type SelectorFc<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T
type Hook<T, Args extends any[]> = (...args: Args) => T
type Result<T, Args extends any[]> = [Hook<T, Args>, SelectorFc<T, Args>]

export const buildSelector = <T, Args extends any[]>(
	selector: SelectorFc<T, Args>
): Result<T, Args> => {
	const useSelectorHook: Hook<T, Args> = (...args: Args) => {
		return useSelector((state: StateSchema) => selector(state, ...args))
	}

	return [useSelectorHook, selector]
}
