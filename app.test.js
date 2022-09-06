import { capitalize, reverseString } from './app.js';

// capitalize strings
test('capitalize "hello" to "Hello"', () => {
	expect(capitalize('hello')).toBe('Hello');
});

test('capitalize "it is sunny outside" to "It is sunny outside"', () => {
	expect(capitalize('it is sunny outside')).toBe('It is sunny outside');
});

// reverse strings
test('reverse "archipelago" to "ogalepihcra"', () => {
	expect(reverseString('archipelago')).toBe('ogalepihcra');
});

test('reverse "to be or not to be" to "eb ot ton ro eb ot"', () => {
	expect(reverseString('to be or not to be')).toBe('eb ot ton ro eb ot');
});
