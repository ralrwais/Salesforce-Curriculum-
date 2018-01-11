//String
let myReverse = (str) => {
	let newStr = ''; 
	for(var i = str.length - 1; i >= 0; i--;) {
  	newStr += str[i];
  }
  return newStr;
}
//Array
let myReverse = (arr) => {
	let newArr = []; 
	for(var i = str.length - 1; i >= 0; i--;) {
  	newArr.push(str[i]);
  }
  return newArr;
}



[A B C D E F]
 0 1 2 3 4 5

 if(!array[i].equals(array[array.length - i])){
  return false;
 }