// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunksArray = [];
	let chunk = [];
	for (let i = 0; i < array.length; i++) {
		chunk.push(array[i]);
		if (chunk.length === size || i === array.length - 1) {
			chunksArray.push(chunk);
			chunk = [];
		}
	}
	return chunksArray;
}

//alternative solution

function chunckTwo(array, size) {
	const chunked = [];
	for (element of array) {
		const last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}

//alternative solution 2 

module.exports = chunk;
