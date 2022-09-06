function capitalize(str) {
	return str[0].toUpperCase() + str.substring(1);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

export { capitalize, reverseString };
