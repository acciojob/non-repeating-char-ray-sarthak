function firstNonRepeatedChar(str) {
 // Write your code here
	let n=str.length;
	for(let i=0;i<n-2;i+=2){
		let char=str.charAt(i);
		let char2=str.charAt(i+1);
		if(char!=char2){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));  
