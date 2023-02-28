import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Returned, ThunkArg, ThunkApiConfig> =
	(arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
	actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>
	dispatch: jest.MockedFn<any>
	getState: () => StateSchema


	constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
	}

	async callThunk(arg: ThunkArg) {
		const action = this.actionCreator(arg)
		// @ts-ignore
		const result = await action(this.dispatch, this.getState, undefined)
		return result
	}
}