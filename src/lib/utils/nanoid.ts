export function nanoid(length = 7): string {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
	let result = ''

	for (let i = 0; i < length; i++) {
		const rand = random(0, chars.length)
		result += chars[rand]
	}

	return result
}

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min
}
