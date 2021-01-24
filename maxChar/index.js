// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	let chars = {};
// 	let mostValue = {
// 		char: '',
// 		value: 0,
// 	};
// 	str.split('').map((char) => {
// 		if (!chars[char]) {
// 			chars[char] = 1;
// 		} else {
// 			chars[char]++;
// 		}
// 	});
// 	let keyChars = Object.keys(chars);
// 	for (let i = 0; i < keyChars.length; i++) {
// 		if (mostValue.value < chars[keyChars[i]]) {
// 			mostValue.value = chars[keyChars[i]];
// 			mostValue.char = keyChars[i];
// 		}
// 	}

// 	return mostValue.char;
// }

function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = '';
	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}
module.exports = maxChar;
