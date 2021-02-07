// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	const words = str.split(' ');
	for (let word in words) {
		if (words[word].length < 2) {
			words[word] = words[word].toUpperCase();
		} else {
			let firstletter = words[word][0];
			let restWord = words[word].slice(1);
			words[word] = firstletter.toUpperCase().concat(restWord);
		}
	}
	return words.join(' ');
}

function sentenceCapitalize(str) {
	const words = [];

	for (let word in str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}

	return words.join(' ');
}

function sentenceCapitalizeAlternative(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}

	return result;
}
module.exports = capitalize;
