// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowelsCounter = 0;
	const vowelChars = ['a', 'e', 'i', 'o', 'u'];
	const arr = str.toLowerCase().split('');
	console.log(str.toLowerCase().split(''));
	for (let char in arr) {
		console.log();
		vowelChars.forEach((vowel) => {
			if (arr[char] === vowel) vowelsCounter++;
		});
	}
	return vowelsCounter;
}

function findVowel(str) {
	let counter = 0;
	const regex = /^[aeiou]$/i;
	for (let char in str.split('')) {
		if (regex.test(str[char])) {
			counter++;
		}
	}
	return counter;
}

function vowelsTwo(str) {
	let counter = 0;
	const checker = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checker.includes(char)) {
			counter++;
		}
	}
	return counter;
}

//condensed version
function vowelsFinder() {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

console.log(vowels('AEOU'));

module.exports = vowels;
