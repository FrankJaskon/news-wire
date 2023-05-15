import classNames from './classNames'

describe('custom classNames', () => {
	test('only main class', () => {
		expect(classNames('Test')).toBe('Test')
	})
	test('main class and extra array', () => {
		expect(classNames('Test', {}, ['test', 'test1'])).toBe('Test test test1')
	})
	test('all arguments', () => {
		expect(classNames('Test', { test1: true }, ['test'])).toBe('Test test test1')
	})
	test('testing mods', () => {
		expect(
			classNames(
				'',
				{
					Test: false,
					test: true,
					test1: true,
				},
				[]
			)
		).toBe('test test1')
	})
	test('with no arguments', () => {
		expect(classNames('')).toBe(undefined)
	})
})
