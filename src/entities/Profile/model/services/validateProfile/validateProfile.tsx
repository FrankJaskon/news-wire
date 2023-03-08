import { Profile, ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'

export const validateProfile = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.NO_DATA]
	}

	const {
		age,
		avatar,
		city,
		firstname,
		lastname,
		username
	} = profile

	const error: ValidateProfileErrorType[] = []

	if (age && (age < 0 || age > 120 || age === 0)) {
		error.push(ValidateProfileError.INCORRECT_AGE)
	}
	{
		if (firstname && firstname.length > 25) {
			error.push(ValidateProfileError.INCORRECT_FIRSTNAME)
		}
		const nameRegex = /^[a-zA-Z\s]+$/
		if (firstname && !nameRegex.test(firstname)) {
			error.push(ValidateProfileError.INCORRECT_FIRSTNAME)
		}
	}
	{
		if (lastname && lastname.length > 25) {
			error.push(ValidateProfileError.INCORRECT_LASTNAME)
		}
		const nameRegex = /^[a-zA-Z\s]+$/
		if (lastname && !nameRegex.test(lastname)) {
			error.push(ValidateProfileError.INCORRECT_LASTNAME)
		}
	}
	if (username && username.length > 25) {
		error.push(ValidateProfileError.INCORRECT_USERNAME)
	}
	{
		const nameRegex = /^http/i
		if (avatar && !nameRegex.test(avatar)) {
			error.push(ValidateProfileError.INCORRECT_AVATAR)
		}
	}
	{
		const nameRegex = /^[a-zA-Z\s]+$/
		if (city && !nameRegex.test(city)) {
			error.push(ValidateProfileError.INCORRECT_CITY)
		}
	}
	return error
}