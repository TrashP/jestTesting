function capitalize(str) {
	return str[0].toUpperCase() + str.substring(1);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

const Calculator = {
	add: function (a, b) {
		return a + b;
	},

	subtract: function (a, b) {
		return a - b;
	},

	multiply: function (a, b) {
		return a * b;
	},

	divide: function (a, b) {
		return a / b;
	},
};

function caesarCipher(str) {
	let result = '';
	let charCode = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] == ' ') {
			result += ' ';
		} else if (str[i] == 'z') {
			result += 'a';
		} else if (str[i] == 'Z') {
			result += 'A';
		} else {
			charCode = str[i].charCodeAt() + 1;
			result += String.fromCharCode(charCode);
		}
	}

	return result;
}

function analyzeArray(arr) {
	return {
		average: arr.reduce((a, b) => a + b) / arr.length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
