import { screen, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { $api } from '@/shared/api/api'
import { MockBrowserRouter } from '@/shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from '@/shared/config/tests/MockStore/MockStore'
import { MockTranslation } from '@/shared/config/tests/MockTranslation/MockTranslation'
import {
	MockFunction,
	RenderWithMocks,
} from '@/shared/config/tests/RenderWithMocks/RenderWithMocks'
import { ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { profileReducer } from '../model/slice/profileSlice'
import { ValidateProfileError } from '../model/types/ProfileScheme'
import { EditableProfileCard } from './EditableProfileCard'

const mockPut = jest.spyOn($api, 'put')

const profile: ProfileType = {
	age: '20',
	avatar: 'http://avatar',
	city: 'Test',
	country: Country.UKRAINE,
	currency: Currency.UAH,
	firstname: 'Test',
	lastname: 'TestTest',
	id: 1,
	username: 'Test user',
}

const mockOptions = {
	profile: {
		data: profile,
		form: profile,
		isLoading: false,
	},
	user: {
		authData: {
			id: 1,
		},
	},
}

const mockReducers: DeepPartial<ReducerList> = {
	profile: profileReducer,
}

describe('EditableProfileCard', () => {
	test('Should display an error', async () => {
		const mocks: MockFunction[] = [
			MockTranslation,
			MockBrowserRouter(),
			MockStore(
				{
					profile: {
						...mockOptions.profile,
						validateError: [ValidateProfileError.SERVER_ERROR],
					},
				},
				mockReducers
			),
		]

		await act(async () => {
			RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		})

		const error = screen.getByTestId('Text.content')
		expect(error).toBeInTheDocument()
	})
	test('Should return initial state if cancel is pressed', async () => {
		const mocks: MockFunction[] = [
			MockTranslation,
			MockBrowserRouter(),
			MockStore(
				{
					profile: {
						...mockOptions.profile,
					},
					user: {
						...mockOptions.user,
					},
				},
				mockReducers
			),
		]
		await act(async () => {
			RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		})

		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await act(async () => {
			await userEvent.click(editBtn)
		})
		const usernameInput = screen.getByTestId('profile-card-username-input')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		const ageInput = screen.getByTestId('profile-card-age-input')
		const avatarInput = screen.getByTestId('profile-card-avatar-input')
		await act(async () => {
			await userEvent.clear(usernameInput)
			await userEvent.type(usernameInput, 'Some test value')

			await userEvent.clear(firstnameInput)
			await userEvent.type(firstnameInput, 'Some test value')

			await userEvent.clear(lastnameInput)
			await userEvent.type(lastnameInput, 'Some test value')

			await userEvent.clear(ageInput)
			await userEvent.type(ageInput, '21')

			await userEvent.clear(avatarInput)
			await userEvent.type(avatarInput, 'Some test value')
		})
		const closeBtn = screen.getByTestId('profile-card-close-btn')
		expect(closeBtn).toBeInTheDocument()
		expect(usernameInput).toHaveValue('Some test value')
		expect(firstnameInput).toHaveValue('Some test value')
		expect(lastnameInput).toHaveValue('Some test value')
		expect(ageInput).toHaveValue(21)
		expect(avatarInput).toHaveValue('Some test value')
		await act(async () => {
			await userEvent.click(closeBtn)
		})
		expect(avatarInput).not.toBeInTheDocument()
		expect(usernameInput).toHaveValue(mockOptions.profile.form.username)
		expect(firstnameInput).toHaveValue(mockOptions.profile.form.firstname)
		expect(lastnameInput).toHaveValue(mockOptions.profile.form.lastname)
		expect(ageInput).toHaveValue(Number(mockOptions.profile.form.age))
	})

	test('Should display validation errors', async () => {
		const mocks: MockFunction[] = [
			MockTranslation,
			MockBrowserRouter(),
			MockStore(
				{
					profile: {
						...mockOptions.profile,
					},
					user: {
						...mockOptions.user,
					},
				},
				mockReducers
			),
		]
		await act(async () => {
			RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		})

		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await act(async () => {
			await userEvent.click(editBtn)
		})
		const usernameInput = screen.getByTestId('profile-card-username-input')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		const ageInput = screen.getByTestId('profile-card-age-input')
		const avatarInput = screen.getByTestId('profile-card-avatar-input')
		await act(async () => {
			await userEvent.clear(usernameInput)
			await userEvent.type(usernameInput, '123')
			await userEvent.clear(firstnameInput)
			await userEvent.type(
				firstnameInput,
				'Some test value some test value some test value some test value'
			)
			await userEvent.clear(lastnameInput)
			await userEvent.type(lastnameInput, '24')
			await userEvent.clear(ageInput)
			await userEvent.type(ageInput, '200')
			await userEvent.clear(avatarInput)
			await userEvent.type(avatarInput, 'Some test value')
		})
		const saveBtn = screen.getByTestId('profile-card-save-btn')
		await act(async () => {
			fireEvent.click(saveBtn)
		})
		const errors = screen.getAllByTestId('Text.content')
		expect(errors.length).toBe(4)
	})

	test('Should send the PUT request if all is ok', async () => {
		const mocks: MockFunction[] = [
			MockTranslation,
			MockBrowserRouter(),
			MockStore(
				{
					profile: {
						...mockOptions.profile,
					},
					user: {
						...mockOptions.user,
					},
				},
				mockReducers
			),
		]

		act(() => {
			RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		})
		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await act(async () => {
			await userEvent.click(editBtn)
		})
		const usernameInput = screen.getByTestId('profile-card-username-input')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		const ageInput = screen.getByTestId('profile-card-age-input')
		const avatarInput = screen.getByTestId('profile-card-avatar-input')

		await act(async () => {
			await userEvent.clear(usernameInput)
			await userEvent.type(usernameInput, 'test')
			await userEvent.clear(firstnameInput)
			await userEvent.type(firstnameInput, 'Some test value')
			await userEvent.clear(lastnameInput)
			await userEvent.type(lastnameInput, 'test test')
			await userEvent.clear(ageInput)
			await userEvent.type(ageInput, '24')
			await userEvent.clear(avatarInput)
			await userEvent.type(avatarInput, 'http://test-url')
		})
		const saveBtn = screen.getByTestId('profile-card-save-btn')
		expect(saveBtn).toBeInTheDocument()
		fireEvent.click(saveBtn)
		expect(mockPut).toHaveBeenCalled()
	})
})
