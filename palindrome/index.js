// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
// 	const reverseStr = str.split('').reverse().join('');
// 	if (str === reverseStr) return true;
// 	return false;
// }
// function palindrome(str) {
// 	let reversedStr = '';
// 	for (character of str) {
// 		reversedStr = character + reversedStr;
// 	}
// 	if (reversedStr === str) return true;
// 	return false;
// }

function palindrome(str) {
	let reversedStr = str
		.split('')
		.reduce((reversed, character) => character + reversed, '');
	if (str === reversedStr) return true;
	return false;
}

module.exports = palindrome;
