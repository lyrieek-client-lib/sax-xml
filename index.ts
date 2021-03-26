export default function (data: string) {
	let index = data.indexOf('<')
	const result = Object.create(null)
	do {
		const searchPoint = index + 1
		index = data.indexOf('<', searchPoint)
		if (data.substr(searchPoint, 1) === '/') {
			continue
		}
		const rest = data.substring(searchPoint)
		const endPoint = rest.indexOf('>')
		result[rest.substring(0, endPoint)] = rest.substring(endPoint + 1, rest.indexOf('</', endPoint))
	} while (index !== -1)
	return result
}