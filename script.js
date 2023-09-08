function firstNonRepeatedChar(str) {
 // Write your code here 
	 const charCount = {};

  // Iterate through the string to count character occurrences
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null; 
}
  const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));  
