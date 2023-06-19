export const convertDate = (date?: string) => {
	if (!date) {
		return date
	}
	return date.split('-').reverse().join('.')
}
