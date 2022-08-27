function isPalindrome(word) {
	// Write your algorithm here
	if (word.length < 2) return true;

	let start = 0;
	let end = word.length - 1;

	while (start <= end) {
		if (word[start] != word[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}

/* 
  Add your pseudocode here
  -loop through the string
  -check if last element != element at beginning
  -if elements do not match return false
  -else return true
  -increment start
  -decrement end
*/

/*
  Add written explanation of your solution here
  A palindrome is a word or phrase that is the same forwards and backwards.
  This algorithm checks if the word is a palindrome by looping through the word and checking if the first and last element are the same.
  If they are not the same, the word is not a palindrome and the function returns false.
  If they are the same, the word is a palindrome and the function returns true.
  If the word is empty or has only one element, it is a palindrome and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
