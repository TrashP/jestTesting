import {
	capitalize,
	reverseString,
	Calculator,
	caesarCipher,
	analyzeArray,
} from './app.js';

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

//calculator
test('add 2 + 3 to give 5', () => {
	expect(Calculator.add(2, 3)).toBe(5);
});

test('subtract 9 - 7 to give 2', () => {
	expect(Calculator.subtract(9, 7)).toBe(2);
});

test('multiply 4 * 5 to give 20', () => {
	expect(Calculator.multiply(4, 5)).toBe(20);
});

test('divide 30 / 6 to give 5', () => {
	expect(Calculator.divide(30, 6)).toBe(5);
});

//caesarCipher
test('encrypt "Attack the Enemy; in the haze" to "Buubdl uif Fofnz< jo uif ibaf"', () => {
	expect(caesarCipher('Attack the Enemy; in the haze')).toBe(
		'Buubdl uif Fofnz< jo uif ibaf'
	);
});

//analyzeArray
test('analyze [1, 8, 3, 4, 2, 6] as { average: 4, min: 1, max: 8, length: 6 }', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
