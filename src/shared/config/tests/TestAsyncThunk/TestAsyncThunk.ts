import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Returned, ThunkArg, RejectedValue> =
	(arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
	actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>
	dispatch: jest.MockedFn<any>
	getState: () => StateSchema
	api: jest.Mocked<AxiosStatic>
	navigate: jest.MockedFn<any>


	constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
		this.api = mockedAxios
		this.navigate = jest.fn()
	}

	async callThunk(arg: ThunkArg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })
		return result
	}
}