import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { $api } from '@/shared/api/api'
import { MockBrowserRouter } from '@/shared/config/tests/MockBrowserRouter/MockBrowserRouter'
import { MockStore } from '@/shared/config/tests/MockStore/MockStore'
import { MockTranslation } from '@/shared/config/tests/MockTranslation/MockTranslation'
import { MockFunction, RenderWithMocks } from '@/shared/config/tests/RenderWithMocks/RenderWithMocks'
import { ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { profileReducer } from '../model/slice/profileSlice'
import { ValidateProfileError } from '../model/types/ProfileScheme'
import { EditableProfileCard } from './EditableProfileCard'

describe('EditableProfileCard', () => {
	const profile: ProfileType = {
		age: 20,
		avatar: 'http://avatar',
		city: 'Test',
		country: Country.UKRAINE,
		currency: Currency.UAH,
		firstname: 'Test',
		lastname: 'Test1',
		id: 1,
		username: 'Test user'
	}

	const mockOptions = {
		profile: {
			data: profile,
			form: profile,
			isLoading: false,
		},
		user: {
			authData: {
				id: 1
			}
		}
	}

	const mockReducers: DeepPartial<ReducerList> = {
		profile: profileReducer
	}

	test('Should display an error', () => {
		const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore({
			profile: {
				...mockOptions.profile,
				validateError: [ValidateProfileError.SERVER_ERROR]
			}
		}, mockReducers)]

		RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		const error = screen.getByTestId('Text.content')
		expect(error).toBeInTheDocument()
	})
	test('Should return initial state if cancel is pressed', async () => {
		const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore({
			profile: {
				...mockOptions.profile
			},
			user: {
				...mockOptions.user
			}
		}, mockReducers)]

		RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await userEvent.click(editBtn)
		const closeBtn = screen.getByTestId('profile-card-close-btn')
		expect(closeBtn).toBeInTheDocument()
		const usernameInput = screen.getByTestId('profile-card-username-input')
		await userEvent.clear(usernameInput)
		await userEvent.type(usernameInput, 'Some test value')
		expect(usernameInput).toHaveValue('Some test value')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		await userEvent.clear(firstnameInput)
		await userEvent.type(firstnameInput, 'Some test value')
		expect(firstnameInput).toHaveValue('Some test value')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		await userEvent.clear(lastnameInput)
		await userEvent.type(lastnameInput, 'Some test value')
		expect(lastnameInput).toHaveValue('Some test value')
		const ageInput = screen.getByTestId('profile-card-age-input')
		await userEvent.clear(ageInput)
		await userEvent.type(ageInput, '21')
		expect(ageInput).toHaveValue(21)
		const avatarInput = screen.getByTestId('profile-card-avatar-input')
		await userEvent.clear(avatarInput)
		await userEvent.type(avatarInput, 'Some test value')
		expect(avatarInput).toHaveValue('Some test value')

		await userEvent.click(closeBtn)
		expect(closeBtn).not.toBeInTheDocument()
		expect(avatarInput).not.toBeInTheDocument()

		expect(usernameInput).toHaveValue(mockOptions.profile.form.username)
		expect(firstnameInput).toHaveValue(mockOptions.profile.form.firstname)
		expect(lastnameInput).toHaveValue(mockOptions.profile.form.lastname)
		expect(ageInput).toHaveValue(mockOptions.profile.form.age)
	})
	test('Should display validation errors', async () => {
		const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore({
			profile: {
				...mockOptions.profile
			},
			user: {
				...mockOptions.user
			}
		}, mockReducers)]

		RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await userEvent.click(editBtn)
		const saveBtn = screen.getByTestId('profile-card-save-btn')
		const usernameInput = screen.getByTestId('profile-card-username-input')
		await userEvent.clear(usernameInput)
		await userEvent.type(usernameInput, '123')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		await userEvent.clear(firstnameInput)
		await userEvent.type(firstnameInput, 'Some test value some test value some test value some test value')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		await userEvent.clear(lastnameInput)
		await userEvent.type(lastnameInput, '24')
		const ageInput = screen.getByTestId('profile-card-age-input')
		await userEvent.clear(ageInput)
		await userEvent.type(ageInput, '200')
		const avatarInput = screen.getByTestId('profile-card-avatar-input')
		await userEvent.clear(avatarInput)
		await userEvent.type(avatarInput, 'Some test value')

		await userEvent.click(saveBtn)

		const errors = screen.getAllByTestId('Text.content')
		expect(errors.length).toBe(4)
	})
	test('Should send the PUT request if all is ok', async () => {
		const mocks: MockFunction[] = [MockTranslation, MockBrowserRouter(), MockStore({
			profile: {
				...mockOptions.profile
			},
			user: {
				...mockOptions.user
			}
		}, mockReducers)]

		const mockPut = jest.spyOn($api, 'put')

		RenderWithMocks(<EditableProfileCard id={1} />, mocks)
		const editBtn = screen.getByTestId('profile-card-edit-btn')
		await userEvent.click(editBtn)
		const saveBtn = screen.getByTestId('profile-card-save-btn')
		const usernameInput = screen.getByTestId('profile-card-username-input')
		await userEvent.clear(usernameInput)
		await userEvent.type(usernameInput, 'test')
		const firstnameInput = screen.getByTestId('profile-card-firstname-input')
		await userEvent.clear(firstnameInput)
		await userEvent.type(firstnameInput, 'Some test value')
		const lastnameInput = screen.getByTestId('profile-card-lastname-input')
		await userEvent.clear(lastnameInput)
		await userEvent.type(lastnameInput, 'test test')
		const ageInput = screen.getByTestId('profile-card-age-input')
		await userEvent.clear(ageInput)
		await userEvent.type(ageInput, '24')
		const avatarInput = screen.getByTestId('profile-card-avatar-input')
		await userEvent.clear(avatarInput)
		await userEvent.type(avatarInput, 'http://test-url')

		await userEvent.click(saveBtn)

		expect(mockPut).toHaveBeenCalled()
	})
})