import classNames from 'shared/lib/classNames/classNames'

describe('Custom classNames', () => {
	test('Only main class', () => {
		expect(classNames('Test')).toBe('Test')
	})
	test('Main class and extra array', () => {
		expect(classNames('Test', {}, ['test', 'test1'])).toBe('Test test test1')
	})
	test('All arguments', () => {
		expect(classNames('Test', { 'test1': true }, ['test'])).toBe('Test test test1')
	})
	test('Testing mods', () => {
		expect(classNames('', {
			'Test': false,
			'test': true,
			'test1': true }, [])).toBe('test test1')
	})
	test('With no arguments', () => {
		expect(classNames('')).toBe('')
	})
})