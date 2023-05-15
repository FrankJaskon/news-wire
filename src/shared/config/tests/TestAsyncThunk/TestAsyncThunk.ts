import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'
import { StateSchema } from '@/app/providers/StoreProvider/testing'

type ActionCreatorType<Returned, Arg, RejectedValue> = (
	arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>

	getState: () => DeepPartial<StateSchema> | undefined

	actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>

	api: jest.MockedFunctionDeep<AxiosStatic>

	constructor(
		actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>,
		state?: DeepPartial<StateSchema> | undefined
	) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn(() => state || {})
		this.api = mockedAxios
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, {
			api: this.api,
		})
		return result
	}
}
