// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//method to remove special character and space and turn to lowercase character
//tips one => word.replace(/[^\w]/g, "").toLowerCase()
//tips 2
// generate character maps
// example
// 'hello' :{
// 	h: 1,
// 	e:1,
// 	l:2,
// 	o:1
// }
function anagrams(stringA, stringB) {
	const charMapA = {};
	const charMapB = {};
	const purifyStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
	const purifyStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

	for (let char of purifyStringA) {
		charMapA[char] ? charMapA[char]++ : (charMapA[char] = 1);
	}
	for (let char of purifyStringB) {
		charMapB[char] ? charMapB[char]++ : (charMapB[char] = 1);
	}
	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
		return false;
	}
	for (let char in charMapA) {
		if (char !== charMapB[char] && charMapA[char] !== charMapB[char]) {
			return false;
		}
	}
	return true;
}

// solution with helper function
function anagramsTwo(stringA, stringB) {
	const charMapA = buildCharMap(stringA);
	const charMapB = buildCharMap(stringB);

	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
		return false;
	}

	for (let char in charMapA) {
		if (charMapA[char] !== charMapB[char]) {
			return false;
		}
	}

	return true;
}
//helper function
function buildCharMap(str) {
	const charMap = {};
	for (let char of str.replace(/[^\w]/g, '').toLowercase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

//solution 3
function anagramsThree(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagramsThree('rail safetyt', 'fairy talest'));

module.exports = anagrams;
