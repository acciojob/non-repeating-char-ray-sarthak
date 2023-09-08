function firstNonRepeatedChar(str) {
 // Write your code here 
	let n=str.length;
	let i=1;
	if(str.charAt(0)!=str.charAt(i)){
		return str.charAt(0);
	}
	while(i<n-2){
		let char=str.charAt(i);
		let char2=str.charAt(i+1);
		if(char!=char2){
			if(str.charAt(i+1)===str.charAt(i+2)){
				i=i+1;
				continue;
			}
			else
			return str.charAt(i+1);
		}
		
		i++;
	}
	  return str.charAt(i+1);	
	
	if(n%2!=0){
		return str.charAt(n-1);
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));  
