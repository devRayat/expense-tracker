/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	},
	cache: true,
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	preset: 'ts-jest',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^\\$lib\\/(.*)': '<rootDir>/src/lib/$1'
	}
}
