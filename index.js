// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	a = {};
	max = 0;
	maxChar = '';
	for (let item of str) {
		!a[item] ? a[item] = 1 : a[item]++;
	}
	for (let key in a) {
		if (max < a[key]) {
			max = a[key];
			maxChar =key ;
		}  
	}
	return maxChar;
}

module.exports = maxChar;
