const reverse = require('./index');

test('Reverse function exists', () => {
	expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
	expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
	expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string', () => {
	expect(reverse('Marie-Pierre')).toEqual('erreiP-eiraM');
});

test('Reverse reverses a string', () => {
	expect(reverse('Alexandre')).toEqual('erdnaxelA');
});
