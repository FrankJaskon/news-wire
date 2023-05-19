export const randomInteger = () => {
	const timestamp = new Date().getTime().toString().slice(-4)

	const randomNum = Math.floor(Math.random() * 10000)

	const uniqueId = parseInt(`${timestamp}${randomNum}`)

	return uniqueId
}
