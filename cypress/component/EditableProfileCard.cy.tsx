import { DeepPartial } from '@reduxjs/toolkit'
import { ReactElement } from 'react'
import { StateSchema } from '@/app/providers/StoreProvider'
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard'
import { MockStore } from '@/shared/config/tests/MockStore/MockStore'
import { MockStyles } from '@/shared/config/tests/MockStyles/MockStyles'
import { RenderWithMocks } from '@/shared/config/tests/RenderWithMocks/RenderWithMocks'
import { LazyReducerLoader , ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'

const initialState: DeepPartial<StateSchema> = {
	user: {
		authData: {
			id: Cypress.env('TEST_USER_ID'),
			roles: [],
			username: 'Test',
			avatar: ''
		}
	}
}

const reducers: ReducerList = {
	profile: profileReducer
}

const testProfileData = {
	id: 9963726,
	firstname: 'Test',
	lastname: 'Test',
	currency: 'USD',
	country: 'USA',
	city: 'New York',
	username: 'testUser',
	avatar: '',
	age: '18'
}

describe('EditableProfileCard.cy.tsx', () => {
	it('playground', () => {
		cy.mount(RenderWithMocks(
			<EditableProfileCard id={Cypress.env('TEST_USER_ID')} />,
			[
				MockStore(initialState),
				MockStyles,
				(component: ReactElement): ReactElement => <LazyReducerLoader reducers={reducers}>
					{component}
				</LazyReducerLoader>
			],
			false
		) as ReactElement)
		const checkInitialData = () => {
			cy.getByTestId('profile-card-username-input').should('have.value', testProfileData.username)
			cy.getByTestId('profile-card-firstname-input').should('have.value', testProfileData.firstname)
			cy.getByTestId('profile-card-lastname-input').should('have.value', testProfileData.lastname)
			cy.getByTestId('profile-card-age-input').should('have.value', testProfileData.age)
		}
		cy.intercept('GET', '**/profiles/*', { fixture: 'profile.json' })
		checkInitialData()
		const username = 'Test username'
		const firstname = 'Test firstname'
		const lastname = 'Test lastname'
		const age = '100'
		cy.getByTestId('profile-card-edit-btn').click()
		cy.getByTestId('profile-card-username-input').clear().type(username)
		cy.getByTestId('profile-card-firstname-input').clear().type(firstname)
		cy.getByTestId('profile-card-lastname-input').clear().type(lastname)
		cy.getByTestId('profile-card-age-input').clear().type(age)
		cy.getByTestId('profile-card-username-input').should('have.value', username)
		cy.getByTestId('profile-card-firstname-input').should('have.value', firstname)
		cy.getByTestId('profile-card-lastname-input').should('have.value', lastname)
		cy.getByTestId('profile-card-age-input').should('have.value', age)
		cy.getByTestId('profile-card-close-btn').click()
		checkInitialData()
	})
})