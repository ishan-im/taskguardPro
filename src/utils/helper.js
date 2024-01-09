function checkString(char) {
	// the character with whitespace
	char = char.replace(/\s/g, ''); // remove whitespace
	return char.length;
}



export {checkString};