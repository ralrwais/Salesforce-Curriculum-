let isPalindrome = (str) => {
	var reversed = str.split('').reverse().join('');
	return reversed === str;
}

//without using .reverse()

let isPalindrome = (str) => {
	let newStr = ''; 
	for(var i = str.length - 1; i >= 0; i--;){
  	newStr += str[i];
  }
  return newStr === str;
}